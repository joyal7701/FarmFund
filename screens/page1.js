import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const page1 = ({ navigation }) => {
  return (
    <View>
      <View style={styles.back}></View>
      <View style={styles.conatiner}>
        <View style={styles.header}></View>
        <View style={styles.cover}>
          <Text h3 style={styles.title}>
            PMKSY Per Drop More Crop
          </Text>
          <Text style={styles.details}>
            Pradhan Mantri Krishi Sinchai Yojana PER DROP MORE CROP <br />
            Micro irrigation is an integral component of the scheme to maximise
            water use efficiency at farm level. It is also called as 'TAPAK
            SINCHAI' .
          </Text>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.apply}
            onPress={() => navigation.navigate("Subsidy Registered")}
          >
            Apply
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
            Apply
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
            Apply
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
            Apply
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default page1;

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
    border: "2px solid white",
    margin: "5px",
    padding: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "gray",
  },
  cover1: {
    position: "relative",
    border: "2px solid white",
    margin: "5px",
    padding: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "gray",
    marginBottom: "-225px",
  },
  title: {
    fontSize: "26px",
    color: "lightgreen",
    textDecoration: "underline",
    letterSpacing: "1px",
    textAlign: " center",
    padding: "5px",
    borderBottomColor: "#8000ff",
    borderStyle: "dashed",
    borderBottomWidth: 2,
  },
  details: {
    fontSize: "18px",
    color: "white",
    letterSpacing: "0.5px",
    padding: "5px",
    textAlign: "center",
    margin: "5px",
  },
  header: {
    fontSize: "50px",
    letterSpacing: "2px",
    fontWeight: 600,
    margin: "2.5px",
  },
  apply: {
    fontSize: "17px",
    padding: "4px",
    border: "1px solid black",
    backgroundColor: "lightblue",
  },
});
