import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const page3 = ({ navigation }) => {
  return (
    <View>
      <View style={styles.back}></View>
      <View style={styles.conatiner}>
        <View style={styles.header}>--Select Crop--</View>
        <View style={styles.cover}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Wheat")}
            activeOpacity={0.5}
          >
            <Text h3 style={styles.title}>
              Wheat
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ justifyContent: "center", marginRight: 50 }}
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Wheat")}
          >
            <Ionicons
              name="arrow-redo"
              size={24}
              color="black"
              style={{ justifyContent: "center", marginLeft: 100 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.cover}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Corn")}
            activeOpacity={0.5}
          >
            <Text h3 style={styles.title}>
              Corn
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ justifyContent: "center", marginRight: 50 }}
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Corn")}
          >
            <MaterialCommunityIcons
              name="corn"
              size={24}
              color="black"
              style={{ justifyContent: "center", marginLeft: 25 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.cover}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Rice")}
            activeOpacity={0.5}
          >
            <Text h3 style={styles.title}>
              Rice
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ justifyContent: "center", marginRight: 50 }}
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Rice")}
          >
            <MaterialCommunityIcons
              name="rice"
              size={24}
              color="black"
              style={{ justifyContent: "center", marginLeft: 110 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.cover}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Cotton")}
            activeOpacity={0.5}
          >
            <Text h3 style={styles.title}>
              Cotton
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ justifyContent: "center", marginRight: 50 }}
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Cotton")}
          >
            <FontAwesome5
              name="cotton-bureau"
              size={24}
              color="black"
              style={{ justifyContent: "center", marginLeft: 107 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.cover1}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Bajra")}
            activeOpacity={0.5}
          >
            <Text h3 style={styles.title}>
              Bajra
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ justifyContent: "center", marginRight: 50 }}
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Bajra")}
          >
            <Ionicons
              name="arrow-redo"
              size={24}
              color="black"
              style={{ justifyContent: "center", marginLeft: 150 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default page3;

const styles = StyleSheet.create({
  back: {
    position: "absolute",
    height: "150%",
    width: "100%",
    backgroundRepeat: "no-repeat",
    opacity: 0.9,
    backgroundPositionX: "center",
    backgroundColor: "#D0D0D0",
    alignItems: "center",
  },
  container: {
    position: "absolute",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cover: {
    position: "relative",
    border: " 2px solid darkgreen",
    margin: "20px",
    padding: "10px",
    paddingLeft: "-1px",
    paddingRight: "1px",
    color: "white",
    boxShadow: "0 0 5px orange, 0 0 20px green, 0 0 30px brown",
    letterSpacing: "2px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cover1: {
    position: "relative",
    border: " 2px solid darkgreen",
    margin: "20px",
    padding: "10px",
    paddingLeft: "-1px",
    paddingRight: "1px",
    color: "white",
    boxShadow: "0 0 5px orange, 0 0 20px green, 0 0 30px brown",
    letterSpacing: "2px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "-130px",
  },
  title: {
    fontSize: "26px",
    color: "#b8860b",
    fontWeight: "200px",
    letterSpacing: "1px",
    textAlign: " center",
    padding: "5px",
  },
  header: {
    fontSize: "50px",
    letterSpacing: "2px",
    fontWeight: 600,
    marginTop: "7px",
    textAlign: "center",
    color: "green",
  },
});
