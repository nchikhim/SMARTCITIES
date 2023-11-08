import * as React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const HomeNanny = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.homenanny}>
      <View style={styles.homenannyChild} />
      <View style={styles.homenannyItem} />
      <Pressable
        style={[styles.homenannyInner, styles.homenannyLayout]}
        onPress={() => navigation.navigate("Care2")}
      />
      <Text style={[styles.liveInNanny, styles.liveInNannyTypo]}>
        Live-in nanny
      </Text>
      <View style={[styles.rectangleView, styles.homenannyLayout]} />
      <View style={[styles.homenannyChild1, styles.homenannyLayout]} />
      <Text style={[styles.hourlyWorker, styles.liveInNannyTypo]}>
        Hourly worker
      </Text>
      <Text style={styles.takeCareOf}>Take care of the elderly</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homenannyLayout: {
    height: 58,
    width: 265,
    borderWidth: 0.5,
    backgroundColor: Color.colorGray_1200,
    borderRadius: Border.br_lg,
    left: 47,
    borderColor: Color.labelsLightPrimary,
    borderStyle: "solid",
    position: "absolute",
  },
  liveInNannyTypo: {
    width: 173,
    textAlign: "left",
    color: Color.colorSandybrown,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    left: 67,
    position: "absolute",
  },
  homenannyChild: {
    top: 0,
    left: 0,
    borderTopLeftRadius: Border.br_31xl,
    borderTopRightRadius: Border.br_31xl,
    borderBottomRightRadius: Border.br_9xs,
    backgroundColor: Color.colorGainsboro_400,
    borderWidth: 2,
    borderColor: Color.labelsLightPrimary,
    borderStyle: "solid",
    position: "absolute",
    height: 404,
    width: 360,
  },
  homenannyItem: {
    top: 23,
    left: 133,
    borderRadius: Border.br_mid,
    backgroundColor: Color.colorGray_1100,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 93,
    height: 7,
    position: "absolute",
  },
  homenannyInner: {
    top: 88,
  },
  liveInNanny: {
    top: 105,
  },
  rectangleView: {
    top: 193,
  },
  homenannyChild1: {
    top: 297,
  },
  hourlyWorker: {
    top: 210,
  },
  takeCareOf: {
    top: 314,
    width: 228,
    textAlign: "left",
    color: Color.colorSandybrown,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    left: 67,
    position: "absolute",
  },
  homenanny: {
    maxWidth: "100%",
    maxHeight: "100%",
    height: 404,
    width: 360,
  },
});

export default HomeNanny;
