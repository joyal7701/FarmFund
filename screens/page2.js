import React from "react";
import { Text, View, StyleSheet } from "react-native";

const page2 = () => {
  return (
    <View>
      <View style={styles.back}></View>
      <View style={styles.container}>
        <View style={styles.header}></View>
        <View style={styles.cover}>
          <Text h3 style={styles.headname}>
            <Text>ShopKeeper : Mohandas Desai</Text>
          </Text>
          <Text h3 style={styles.shponame}>
            <Text>Shop Name : Cultured Crops</Text>
          </Text>
          <Text h3 style={styles.mobilenumber}>
            <Text>Contact : 9909937921</Text>
          </Text>
        </View>
        <View style={styles.cover}>
          <Text h3 style={styles.headname}>
            <Text>ShopKeeper : Keshavlal Pandya</Text>
          </Text>
          <Text h3 style={styles.shponame}>
            <Text>Shop Name : Whitecreek Farms</Text>
          </Text>
          <Text h3 style={styles.mobilenumber}>
            <Text>Contact : 982839571</Text>
          </Text>
        </View>
        <View style={styles.cover}>
          <Text h3 style={styles.headname}>
            <Text>ShopKeeper : Ramakant Patel</Text>
          </Text>
          <Text h3 style={styles.shponame}>
            <Text>Shop Name : Succulent Seeds</Text>
          </Text>
          <Text h3 style={styles.mobilenumber}>
            <Text>Contact : 9123759011</Text>
          </Text>
        </View>
        <View style={styles.cover}>
          <Text h3 style={styles.headname}>
            <Text>ShopKeeper : Suryabhai Shukla</Text>
          </Text>
          <Text h3 style={styles.shponame}>
            <Text>Shop Name : Healthy Harvest</Text>
          </Text>
          <Text h3 style={styles.mobilenumber}>
            <Text>Contact : 9489654789</Text>
          </Text>
        </View>
        <View style={styles.cover}>
          <Text h3 style={styles.shopkeepername}>
            <Text> ShopKeeper : Bharatbhai Patel</Text>
          </Text>
          <Text h3 style={styles.shopname}>
            <Text>Shop Name : Richer Lands</Text>
          </Text>
          <Text h3 style={styles.mobilenumber}>
            <Text>Contact : 945863014</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default page2;

const styles = StyleSheet.create({
  back: {
    position: "absolute",
    height: "150%",
    width: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
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
  header: {
    fontSize: "50px",
    letterSpacing: "2px",
    fontWeight: 600,
    margin: "10px",
  },
  cover: {
    position: "relative",
    border: "2px solid black",
    margin: "15px",
    padding: "10px",
    color: " black",
    backgroundColor: "lightgray",
    width: "350px",
    boxShadow: " 0 0 5px black, 0 0 20px black, 0 0 30px black",
  },
  h3: {
    padding: "3px",
  },
});
