import React, { useState, useEffect } from "react";
import { Text, View, SafeAreaView, FlatList, Pressable } from "react-native";
import { styles } from "./HomeScreen.styles";
import { SearchBar } from "../../components/search-bar/SearchBar";
import { getContainerList } from "../../api/container.service";
import { getLocationLis } from "./../../api/location.service";
import { Checkbox } from "../../components/check-box/CheckBox";

export const HomeScreen = ({ navigation }, { option }) => {
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

  const [option, setOption] = useState([]);

  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    fetch(getLocationLis)
      .then((response) => response.json())
      .then((data) => {
        setOptions(data);
      })
      .catch((error) => {
        console.error("Error al obtener las opciones:", error);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
      </View>

      <View>
        <FlatList
          data={filteredContainer}
          renderItem={container}
          keyExtractor={(item) => item.id}
          style={styles.itemList}
        />
      </View>

      <View>
        {option.map((option, index) => (
          <Checkbox
            key={index}
            option={option}
            selectedOption={selectedOption}
            onSelect={handleSelectOption}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};
