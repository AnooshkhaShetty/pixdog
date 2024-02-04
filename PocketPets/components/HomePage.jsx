import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/pets_logo.png")}
        style={styles.topImage}
      />

      <View style={styles.centerRectangle}>
        <View style={styles.innerRectangle}>
          <Image
            source={require("../assets/images/MostRecentCatch.png")}
            style={styles.additionalImage}
          />

          <Image
            source={require("../assets/images/background-image.png")}
            style={styles.smallerRectangleImage}
          />
        </View>
      </View>

      <View style={styles.bottomButtonsContainer}>
        <TouchableOpacity style={styles.circleButton}>
          <Image
            source={require("../assets/images/camera.png")}
            style={styles.circleImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.circleButton}>
          <Image
            source={require("../assets/images/viewphotos.png")}
            style={styles.circleImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D9C6C7",
  },
  topImage: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
    marginTop: 50,
  },
  centerRectangle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerRectangle: {
    width: 320,
    height: 450,
    backgroundColor: "#44AA99",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  additionalImage: {
    width: 200,
    height: 85,
    resizeMode: "contain",
    position: "absolute",
    top: 30,

  },
  smallerRectangleImage: {
    width: 230,
    height: 260,
    resizeMode: "cover",
    borderRadius: 10,
    marginTop: 80,
  },
  bottomButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    //padding: -10,
  },
  circleButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#44AA99",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40, 
  },
  circleImage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    borderRadius: 0.01,
  },
});
