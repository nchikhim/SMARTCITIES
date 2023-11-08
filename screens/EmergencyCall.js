import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const EmergencyCall = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.emergencyCall, styles.iconLayout]}>
      <Image
        style={styles.image47Icon}
        resizeMode="cover"
        source={require("../assets/image-47.png")}
      />
      <Text style={[styles.emergencyCall1, styles.textTypo]}>
        Emergency Call
      </Text>
      <Pressable
        style={styles.arrowLeftCircle}
        onPress={() => navigation.navigate("FirstAid")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/arrowleftcircle3.png")}
        />
      </Pressable>
      <Text style={[styles.text, styles.textTypo]}>999</Text>
      <Pressable
        style={styles.emergencyCallChild}
        onPress={() => navigation.navigate("Ambulance")}
      />
      <Image
        style={styles.image48Icon}
        resizeMode="cover"
        source={require("../assets/image-48.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_12xl_5,
    position: "absolute",
  },
  image47Icon: {
    top: 81,
    left: 38,
    width: 49,
    height: 50,
    position: "absolute",
  },
  emergencyCall1: {
    top: 88,
    left: 95,
    color: Color.colorGray_900,
    width: 308,
    height: 59,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  arrowLeftCircle: {
    left: 22,
    top: 41,
    width: 24,
    height: 24,
    position: "absolute",
  },
  text: {
    top: 178,
    left: 153,
    color: Color.labelsLightPrimary,
  },
  emergencyCallChild: {
    top: 226,
    left: 0,
    width: 360,
    height: 574,
    position: "absolute",
    overflow: "hidden",
  },
  image48Icon: {
    top: 240,
    left: 6,
    borderRadius: 87,
    width: 348,
    height: 496,
    position: "absolute",
  },
  emergencyCall: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
  },
});

export default EmergencyCall;
