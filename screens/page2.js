import React from "react";
import { Text, View, StyleSheet } from "react-native";

const page2 = () => {
  return (
    <View>
      <View style={styles.back}></View>
      <View style={styles.container}>
        <View style={styles.header}></View>
        <View style={styles.cover}>
          <Text h3>
            <Text>ShopKeeper : Mohandas Desai</Text>
          </Text>
          <Text h3>
            <Text>Shop Name : Cultured Crops</Text>
          </Text>
          <Text h3>
            <Text>Contact : 9909937921</Text>
          </Text>
          <Text h3>
            <Text>Location : Vasana, Ahmedabad</Text>
          </Text>
        </View>
        <View style={styles.cover}>
          <Text h3>
            <Text>ShopKeeper : Keshavlal Pandya</Text>
          </Text>
          <Text h3>
            <Text>Shop Name : Whitecreek Farms</Text>
          </Text>
          <Text h3>
            <Text>Contact : 982839571</Text>
          </Text>
          <Text h3>
            <Text>Location : Sector 13, Gandhinagr</Text>
          </Text>
        </View>
        <View style={styles.cover}>
          <Text h3>
            <Text>ShopKeeper : Ramakant Patel</Text>
          </Text>
          <Text h3>
            <Text>Shop Name : Succulent Seeds</Text>
          </Text>
          <Text h3>
            <Text>Contact : 9123759011</Text>
          </Text>
          <Text h3>
            <Text>Location : Kadi, Mehsana</Text>
          </Text>
        </View>
        <View style={styles.cover}>
          <Text h3>
            <Text>ShopKeeper : Suryabhai Shukla</Text>
          </Text>
          <Text h3>
            <Text>Shop Name : Healthy Harvest</Text>
          </Text>
          <Text h3>
            <Text>Contact : 9489654789</Text>
          </Text>
          <Text h3>
            <Text>Location : Morbi, Rajkot</Text>
          </Text>
        </View>
        <View style={styles.cover}>
          <Text h3>
            <Text>ShopKeeper : Bharatbhai Patel</Text>
          </Text>
          <Text h3>
            <Text>Shop Name : Richer Lands</Text>
          </Text>
          <Text h3>
            <Text>Contact : 945863014</Text>
          </Text>
          <Text h3>
            <Text>Location : Songadh, Surat</Text>
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
    fontSize: 50,
    letterSpacing: 2,
    margin: "10px",
  },
  cover: {
    position: "relative",
    borderColor: "black",
    borderWidth: 2,
    margin: "15px",
    padding: 10,
    color: "black",
    backgroundColor: "#dcd0ff",
    width: "350px",
    shadowRadius: 5,
    shadowColor: "#00bfff",
  },
  h3: {
    padding: 3,
  },
});
