import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
export default function ResultsShowScreen({ route }) {
  const [result, setResult] = useState(null);
  const id = route.params.id;
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }
  return (
    <View>
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.phone}>{result.phone}</Text>
      <View style={styles.icon}>
        {result.is_closed ? (
          <AntDesign name="closecircleo" size={30} color="black" />
        ) : (
          <MaterialIcons name="delivery-dining" size={30} color="black" />
        )}
      </View>

      <Image
        style={styles.image}
        source={result.image_url ? { uri: result.image_url } : null}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
  },
  phone: {
    margin: 10,
  },
  image: {
    height: 180,
    margin: 10,
    borderRadius: 4,
  },
  icon: {
    alignSelf: "center",
  },
});
