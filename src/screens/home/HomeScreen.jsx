import React from "react";
import { Text, View } from "react-native";

export const HomeScreen = ({navigation}) => {

  const [searchQuery, setSearchQuery] = useState('')
  const [containerList, setContainerList] = useState([])

  const handleSearch = (query) => {
    setSearchQuery(query)
  }
  const filteredContainer = containerList.filter(container => (
    container.title.toLowerCase().includes(searchQuery.toLowerCase())
  ))

  useEffect(() => {
    getContainerList()
      .then(data => {
        setContainerList(data)
      })
      .catch(err => console.log(err))
  }, [])

  const container = ({ item }) => (
    <Pressable onPress={() => navigation.navigate('LocationDetail', { item })}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
        <Text style={styles.itemPrice}>{item.organization}</Text>
        <Text style={styles.itemPrice}>{item.id_container_type.Container_type.title}</Text>
      </View>
    </Pressable>
  )

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
      <FlatList
        data={filteredContainer}
        renderItem={container}
        keyExtractor={item => item.id}
        style={styles.itemList}
      />
    </SafeAreaView>
  )

}