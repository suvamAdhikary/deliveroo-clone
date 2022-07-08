import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import sanityClient, { urlFor } from "../sanity";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "category"]
    `
      )
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => {
        console.log("Err from category:", err);
      });
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Category Card */}

      {categories?.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={urlFor(category.image).width(200).url()}
          title={category.name}
        />
      ))}

      {/* <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing1" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing2" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing3" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing4" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing5" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing6" /> */}

      <Text></Text>
    </ScrollView>
  );
};

export default Categories;
