import React, { useLayoutEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
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
    <ScrollView>
      <View style={styles.back}></View>
      <View style={styles.conatiner}>
        <View style={styles.cover}>
          <Text h3 style={styles.title}>
            Crop-Name : Rice
          </Text>
          <Text style={styles.details}>
            City : Ahmedabad {"\n"} Price-Range : 265-285
          </Text>
        </View>
        <View style={styles.cover}>
          <Text h3 style={styles.title}>
            Crop-Name : Rice
          </Text>
          <Text style={styles.details}>
            City : Gandhinagar{"\n"} Price-Range : 270-285
          </Text>
        </View>
        <View style={styles.cover}>
          <Text h3 style={styles.title}>
            Crop-Name : Rice
          </Text>
          <Text style={styles.details}>
            City : Rajkot{"\n"} Price-Range : 285-310
          </Text>
        </View>
        <View style={styles.cover}>
          <Text h3 style={styles.title}>
            Crop-Name : Rice
          </Text>
          <Text style={styles.details}>
            City : Surat{"\n"}Price-Range : 260-280
          </Text>
        </View>
        <View style={styles.cover1}>
          <Text h3 style={styles.title}>
            Crop-Name : Rice
          </Text>
          <Text style={styles.details}>
            City : Mehsana {"\n"}Price-Range : 270-300
          </Text>
        </View>
        <View style={styles.cover1}>
          <Text h3 style={styles.title}>
            Crop-Name : Rice
          </Text>
          <Text style={styles.details}>
            City : Bhavanagar{"\n"}Price-Range : 275-3290
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Rice;

const styles = StyleSheet.create({
  back: {
    position: "absolute",
    height: "150%",
    width: "100%",
    opacity: 0.9,
    backgroundColor: "#D0D0D0",
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
    borderColor: "white",
    margin: 5,
    padding: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "gray",
  },
  cover1: {
    position: "relative",
    borderWidth: 2,
    borderColor: "white",
    margin: 5,
    padding: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "gray",
  },
  title: {
    fontSize: 22,
    color: "lightgreen",
    letterSpacing: 1,
    textAlign: "center",
    padding: 5,
  },
  details: {
    fontSize: 20,
    color: "white",
    letterSpacing: 1,
    padding: 5,
    textAlign: "center",
    margin: 5,
  },
});
