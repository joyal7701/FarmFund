import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const page1 = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.back}></View>
      <View style={styles.conatiner}>
        <View style={styles.header}></View>
        <View style={styles.cover}>
          <Text h3 style={styles.title}>
            PMKSY Per Drop More Crop
          </Text>
          <Text style={styles.details}>
            Pradhan Mantri Krishi Sinchai Yojana PER DROP MORE CROP Micro
            irrigation is an integral component of the scheme to maximise water
            use efficiency at farm level. It is also called as 'TAPAK SINCHAI' .
          </Text>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.apply}
            onPress={() => navigation.navigate("Subsidy Registered")}
          >
            <Text>Apply</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cover}>
          <Text h3 style={styles.title}>
            Pradhan Mantri Fasal Bima Yojana
          </Text>
          <Text style={styles.details}>
            Crop Insurance. aims at covering the losses suffered by farmers due
            to reduction in crop yield as estimated by the local appropriate
            government authorities. The scheme also covers pre sowing losses,
            post-harvest losses due to cyclonic rains and losses due to
            unseasonal rainfall in India.
          </Text>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.apply}
            onPress={() => navigation.navigate("Subsidy Registered")}
          >
            <Text>Apply</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cover}>
          <Text h3 style={styles.title}>
            Rashtriya Krishi Vikas Yojana (RKYY)
          </Text>
          <Text style={styles.details}>
            Under this scheme the state government provides 100% grants to the
            farmers depending upon their prospective projects.Seed Stage Funding
            of R-ABI Incubatees Funding up to Rs.25 lakhs (85% is a grant and
            15% is the contribution from the incubatee)
          </Text>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.apply}
            onPress={() => navigation.navigate("Subsidy Registered")}
          >
            <Text>Apply</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cover1}>
          <Text h3 style={styles.title}>
            National Food Security Mission (NFSM)
          </Text>
          <Text style={styles.details}>
            Under this scheme the subsidies are being provided to the farmers
            for the development of the machineries to improve the productivity
            of the farms.The targets to achieve are 13 million tonnes of
            additional foodgrains production comprising of Rice – 5 million
            tonnes, Wheat- 3 million tonnes, Pulses- 3 million tonnes and Coarse
            Cereals- 2 million tonnes.
          </Text>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.apply}
            onPress={() => navigation.navigate("Subsidy Registered")}
          >
            <Text>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default page1;

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
    fontSize: 26,
    color: "lightgreen",
    letterSpacing: 1,
    textAlign: "center",
    padding: 5,
    borderBottomColor: "#8000ff",
    borderStyle: "dashed",
    borderBottomWidth: 2,
  },
  details: {
    fontSize: 18,
    color: "white",
    letterSpacing: 0.5,
    padding: 5,
    textAlign: "center",
    margin: 5,
  },
  header: {
    fontSize: 50,
    letterSpacing: 2,
    margin: 2.5,
  },
  apply: {
    fontSize: 17,
    padding: 4,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "lightblue",
  },
});
