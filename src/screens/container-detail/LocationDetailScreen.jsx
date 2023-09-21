import React, { useContext } from "react";
import { View, ScrollView, Image, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { styles } from "./LocationDetailScreen.styles";
import { Link } from "@react-navigation/native";
import { UserContext } from "../../contexts/UserContext";

export const LocationDetailScreen = ({ route }) => {
  const { item } = route.params;
  const { currentUser } = useContext(UserContext);


  return (
    <ScrollView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemOrganization}>{item.organization}</Text>
        <Text style={styles.itemOrganization}>
          {item.id_container_type.Container_type.title}
        </Text>

        {currentUser && (
          <>
            <Link
              style={styles.webButton}
              to={{ screen: "LocationDetailWeb", params: { url: item.url } }}
            >
              Ir a la web
            </Link>
            <Link
              style={styles.webButton}
              to={{ screen: "WhatsApp", params: { url: item.url } }}
            >
              Enviar un mensaje
            </Link>
          </>
        )}

        <Text style={styles.description}>{item.description}</Text>
      </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: item.locationCoordinates.latitude,
          longitude: item.locationCoordinates.longitude,
          latitudeDelta: 0.002,
          longitudeDelta: 0.002,
        }}
      >
        <Marker
          coordinate={{
            latitude: item.locationCoordinates.latitude,
            longitude: item.locationCoordinates.longitude,
          }}
          title={item.title}
        />
      </MapView>
    </ScrollView>
  );
};
