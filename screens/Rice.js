import React, { useLayoutEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Rice = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Selected Crop",
      headerRight: () => (
        <View
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity activeOpacity={0.5} style={{ marginRight: 20 }}>
            <MaterialCommunityIcons
              name="rice"
              size={24}
              color="yellow"
              style={{ justifyContent: "center", marginLeft: 110 }}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <View style={styles.back}></View>
      <View style={styles.container}>
        <View style={styles.cover}>
          <Text h3 style={styles.headname}>
            Crop-Name : Rice
          </Text>
          <Text h3> City : Ahmedabad </Text>
          <Text h3> Price-Range : 365-375 </Text>
        </View>
        <View style={styles.cover}>
          <Text h3 style={styles.headname}>
            Crop-Name : Rice
          </Text>
          <Text h3> City : Gandhinagar </Text>
          <Text h3> Price-Range : 385-395 </Text>
        </View>
        <View style={styles.cover}>
          <Text h3 style={styles.headname}>
            Crop-Name : Rice
          </Text>
          <Text h3> City : Rajkot </Text>
          <Text h3> Price-Range : 295-315 </Text>
        </View>
        <View style={styles.cover}>
          <Text h3 style={styles.headname}>
            Crop-Name : Rice
          </Text>
          <Text h3> City : Surat </Text>
          <Text h3> Price-Range : 300-345 </Text>
        </View>
        <View style={styles.cover}>
          <Text h3 style={styles.headname}>
            Crop-Name : Rice
          </Text>
          <Text h3> City : Mehsana </Text>
          <Text h3> Price-Range : 290-300 </Text>
        </View>
      </View>
    </View>
  );
};

export default Rice;

const styles = StyleSheet.create({
  back: {
    position: "absolute",
    height: "150%",
    width: "100%",
    opacity: 0.6,
  },
  container: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  cover: {
    position: "relative",
    borderWidth: 2,
    borderColor: "black",
    margin: "15px",
    padding: 10,
    color: "black",
    backgroundColor: "lightgray",
    width: "350px",
    shadowRadius: 5,
    shadowColor: "#3486eb",
  },
  h3: {
    padding: 3,
  },
  headname: {
    fontSize: 20,
    color: "#b8860b",
  },
});
