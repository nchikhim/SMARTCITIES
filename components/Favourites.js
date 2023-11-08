import * as React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Favourites = ({ onClose }) => {
  return (
    <View style={styles.favourites}>
      <View style={[styles.rectangle, styles.buttonShadowBox]} />
      <View style={[styles.button, styles.buttonBg]}>
        <View style={[styles.rectangle1, styles.buttonBg]} />
        <Text style={[styles.uploadNow, styles.uploadNowFlexBox]}>OK</Text>
      </View>
      <Image
        style={styles.starIcon}
        resizeMode="cover"
        source={require("../assets/star1.png")}
      />
      <Text style={[styles.noResultsFoundContainer, styles.uploadNowFlexBox]}>
        <Text style={styles.uploadNowTypo}>{`Favorites
`}</Text>
        <Text style={styles.noFavoritesSaved}>No favorites saved yet</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 11,
    },
  },
  buttonBg: {
    backgroundColor: Color.colorRoyalblue_200,
    borderRadius: Border.br_8xl_5,
    position: "absolute",
  },
  uploadNowFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  rectangle: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_9xl,
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.18)",
    shadowRadius: 23,
    elevation: 23,
    position: "absolute",
  },
  rectangle1: {
    top: 0,
    left: 0,
    width: 290,
    height: 55,
  },
  uploadNow: {
    top: 15,
    left: 133,
    fontSize: FontSize.size_lg,
    color: Color.white,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  button: {
    height: "11.6%",
    width: "72.5%",
    top: "76.79%",
    right: "13.75%",
    bottom: "11.6%",
    left: "13.75%",
    shadowColor: "rgba(27, 105, 253, 0.39)",
    shadowRadius: 12,
    elevation: 12,
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 11,
    },
  },
  starIcon: {
    top: 50,
    left: 75,
    width: 250,
    height: 200,
    position: "absolute",
  },
  uploadNowTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  noFavoritesSaved: {
    fontFamily: FontFamily.interRegular,
  },
  noResultsFoundContainer: {
    width: "85%",
    top: 250,
    left: "7.5%",
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslategray_100,
  },
  favourites: {
    width: 400,
    height: 474,
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default Favourites;
