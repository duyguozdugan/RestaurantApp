import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
export default function SearchBar({ term, onTermChange, onTermSubmit }) {
  return (
    <View>
      <View style={styles.backgroundStyle}>
        <AntDesign
          style={styles.iconStyle}
          name="search1"
          size={24}
          color="black"
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Search"
          autoCorrect={false}
          autoCapitalize="none"
          value={term}
          onChangeText={onTermChange}
          onEndEditing={onTermSubmit}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "lightgray",
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    height: 50,
    borderRadius: 5,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
  inputStyle: {
    flex: 1, //kalan alanı tamamen kaplamak için
    fontSize: 18,
  },
});
