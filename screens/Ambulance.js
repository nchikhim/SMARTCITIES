import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Ambulance = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.ambulance}>
      <Image
        style={styles.image49Icon}
        resizeMode="cover"
        source={require("../assets/image-49.png")}
      />
      <Text style={styles.anAmbulanceIs}>An ambulance is on the way</Text>
      <View style={styles.ambulanceChild} />
      <Pressable
        style={styles.backToMainContainer}
        onPress={() => navigation.navigate("Menu")}
      >
        <Text style={styles.backToMainMenu}>Back To Main Menu</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  image49Icon: {
    top: 400,
    left: 0,
    width: 398,
    height: 251,
    position: "absolute",
  },
  anAmbulanceIs: {
    top: 218,
    left: 19,
    fontSize: FontSize.size_21xl,
    letterSpacing: 1.2,
    fontFamily: FontFamily.pollerOneRegular,
    color: Color.colorCrimson,
    textAlign: "center",
    width: 323,
    height: 126,
    position: "absolute",
  },
  ambulanceChild: {
    top: 651,
    left: 123,
    borderRadius: Border.br_3xs,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.colorRoyalblue_100,
    borderWidth: 1,
    width: 114,
    height: 37,
    position: "absolute",
    backgroundColor: Color.white,
  },
  backToMainMenu: {
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interRegular,
    color: Color.colorRoyalblue_100,
    textAlign: "left",
  },
  backToMainContainer: {
    left: 130,
    top: 663,
    position: "absolute",
  },
  ambulance: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Ambulance;
