import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

const page2 = () => {
  return (
    <ScrollView>
      <View style={styles.back}></View>
      <View style={styles.conatiner}>
        <View style={styles.cover}>
          <Text h3 style={styles.title}>
            ShopKeeper : Mohandas Desai
          </Text>
          <Text style={styles.details}>
            Shop Name : Cultured Crops{"\n"} Contact : 9909937921{"\n"} Location
            : Vasana, Ahmedabad
          </Text>
        </View>
        <View style={styles.cover}>
          <Text h3 style={styles.title}>
            ShopKeeper : Keshavlal Pandya
          </Text>
          <Text style={styles.details}>
            Shop Name : Whitecreek Farms{"\n"} Contact : 982839571{"\n"}{" "}
            Location : Sector 13, Gandhinagr
          </Text>
        </View>
        <View style={styles.cover}>
          <Text h3 style={styles.title}>
            ShopKeeper : Ramakant Patel
          </Text>
          <Text style={styles.details}>
            Shop Name : Succulent Seeds{"\n"} Contact : 9123759011{"\n"}{" "}
            Location : Kadi, Mehsana
          </Text>
        </View>
        <View style={styles.cover}>
          <Text h3 style={styles.title}>
            ShopKeeper : Bharatbhai Patel
          </Text>
          <Text style={styles.details}>
            Shop Name : Richer Lands{"\n"} Contact : 945863014{"\n"}Location :
            Songadh, Surat
          </Text>
        </View>
        <View style={styles.cover1}>
          <Text h3 style={styles.title}>
            Suryabhai Shukla
          </Text>
          <Text style={styles.details}>
            Healthy Harvest{"\n"}Contact : 9489654789{"\n"}Location : Morbi,
            Rajkot
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default page2;

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
