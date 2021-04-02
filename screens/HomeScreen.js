import React, { useLayoutEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { auth } from "../firebase";
import {
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { Avatar } from "react-native-elements";

const HomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              fontSize: 22,
              color: "white",
              fontWeight: 500,
              marginRight: 20,
            }}
          >
            FarmFund
          </Text>
          <TouchableOpacity activeOpacity={0.5} style={{ marginRight: 20 }}>
            <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  const signOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace("Login");
    });
  };

  return (
    <View>
      <View style={styles.back}></View>
      <View style={styles.conatiner}>
        <View style={styles.header}></View>
        <View style={styles.cover}>
          <TouchableOpacity
            onPress={() => navigation.navigate("All Subsidies")}
            activeOpacity={0.5}
          >
            <Text h3 style={styles.title}>
              All Subsidies
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ justifyContent: "center", marginRight: 50 }}
            activeOpacity={0.5}
            onPress={() => navigation.navigate("All Subsidies")}
          >
            <FontAwesome5
              name="list-ul"
              size={24}
              color="black"
              style={{ justifyContent: "center", marginLeft: 100 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.cover}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Agro Shops")}
            activeOpacity={0.5}
          >
            <Text h3 style={styles.title}>
              Agro Shops
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ justifyContent: "center", marginRight: 50 }}
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Agro Shops")}
          >
            <Entypo
              name="shop"
              size={24}
              color="black"
              style={{ justifyContent: "center", marginLeft: 110 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.cover}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Market Yard")}
            activeOpacity={0.5}
          >
            <Text h3 style={styles.title}>
              Market Yard
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ justifyContent: "center", marginRight: 50 }}
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Market Yard")}
          >
            <Entypo
              name="location"
              size={24}
              color="black"
              style={{ justifyContent: "center", marginLeft: 107 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.cover}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Messaging Groups")}
            activeOpacity={0.5}
          >
            <Text h3 style={styles.title}>
              Messaging Groups
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ justifyContent: "center", marginRight: 50 }}
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Messaging Groups")}
          >
            <MaterialIcons
              name="message"
              size={24}
              color="black"
              style={{ justifyContent: "center", marginLeft: 25 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.cover1}>
          <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
            <Text h3 style={styles.signout}>
              Sign Out
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ justifyContent: "center", marginRight: 50 }}
            activeOpacity={0.5}
            onPress={signOutUser}
          >
            <MaterialCommunityIcons
              name="logout"
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

export default HomeScreen;

const styles = StyleSheet.create({
  back: {
    position: "absolute",
    height: "150%",
    width: "100%",
    backgroundSize: "cover",
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
    boxShadow: "0 0 5px red, 0 0 20px green, 0 0 30px blue",
    letterSpacing: "2px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cover1: {
    position: "relative",
    border: " 2px solid brown",
    margin: "20px",
    padding: "10px",
    paddingLeft: "1px",
    paddingRight: "1px",
    color: "white",
    boxShadow: "0 0 5px red, 0 0 20px blue, 0 0 30px green",
    letterSpacing: "2px",
    marginBottom: "-130px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: "26px",
    color: "blue",
    fontWeight: "200px",
    letterSpacing: "1px",
    textAlign: " center",
    padding: "5px",
  },
  signout: {
    fontSize: "26px",
    color: "red",
    marginLeft: 7,
    letterSpacing: "1px",
    textAlign: " center",
    padding: "5px",
  },
  header: {
    fontSize: "50px",
    letterSpacing: "2px",
    fontWeight: 600,
    marginTop: "7px",
  },
});
