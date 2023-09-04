import React from "react";
import { FlatList, Image, Pressable, SafeAreaView, Text, View } from "react-native";



export const LocationListScreen =({navigation}) => {
  
  const LocationList = ({item}) => {
   <Pressable onPress={() => navigation.navigate('Detail', {item})}>
    <View style = {style.itemContainer}>
      <Image source={item.images[0]} style={StyleSheet.itemImage}/>
      <Text style={StyleSheet.iemTtile}>{item.title}</Text>
      <Text style={StyleSheet.iemType}>{item.type}</Text>
    </View>
   </Pressable>
  }

  return(
    <SafeAreaView style={styles.container}>
      <FlatList
      data={data}
      renderItem={location}
      keyExtractor={item => item.id}
      style = {styles.itemList}
      />

    </SafeAreaView>
  )
}