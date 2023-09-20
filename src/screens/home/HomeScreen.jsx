import React, { useState, useEffect } from "react";
import { Text, View, SafeAreaView, FlatList, Pressable } from "react-native";
import { styles } from "./HomeScreen.styles";
import { SearchBar } from "../../components/search-bar/SearchBar";
import { getContainerList } from "../../api/container.service";

export const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [containerList, setContainerList] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  const filteredContainer = containerList.filter((container) =>
    container.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    getContainerList()
      .then((data) => {
        setContainerList(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const container = ({ item }) => (
    <Pressable onPress={() => navigation.navigate("LocationDetail", { item })}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemOrganization}>{item.organization}</Text>
        <Text style={styles.itemOrganization}>
          {item.id_container_type.Container_type.title}
        </Text>
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
      <FlatList
        data={filteredContainer}
        renderItem={container}
        keyExtractor={(item) => item.id}
        style={styles.itemList}
      />
    </SafeAreaView>
  );
};
