import * as React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const EnableLocation = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.enablelocation}>
      <Image
        style={styles.iconLocation}
        resizeMode="cover"
        source={require("../assets/iconlocation.png")}
      />
      <View style={styles.titleParent}>
        <Text style={styles.title}>Where are you?</Text>
        <Text style={[styles.placeholder, styles.allowOnceTypo]}>
          You’ll need to enable your location in order to use this app.
        </Text>
      </View>
      <Pressable
        style={styles.optionWrapper}
        onPress={() => navigation.navigate("Menu")}
      >
        <View style={styles.option}>
          <Text style={[styles.allowOnce, styles.allowOnceTypo]}>
            Allow Once
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  allowOnceTypo: {
    fontFamily: FontFamily.interRegular,
    letterSpacing: 0,
    textAlign: "center",
  },
  iconLocation: {
    width: 96,
    height: 96,
  },
  title: {
    fontSize: FontSize.size_5xl,
    letterSpacing: 1,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.labelsLightPrimary,
    textAlign: "center",
    alignSelf: "stretch",
  },
  placeholder: {
    fontSize: FontSize.size_mini,
    lineHeight: 20,
    color: Color.labelsLightSecondary,
    marginTop: 16,
    alignSelf: "stretch",
  },
  titleParent: {
    width: 280,
    marginTop: 32,
  },
  allowOnce: {
    fontSize: FontSize.size_mid,
    lineHeight: 22,
    color: Color.white,
  },
  option: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
    alignSelf: "stretch",
    alignItems: "center",
  },
  optionWrapper: {
    borderBottomRightRadius: Border.br_base,
    borderBottomLeftRadius: Border.br_base,
    backgroundColor: Color.tintsBlueLight,
    alignSelf: "stretch",
    marginTop: 32,
  },
  enablelocation: {
    borderRadius: Border.br_base,
    backgroundColor: Color.white,
    maxWidth: "100%",
    maxHeight: "100%",
    alignItems: "center",
  },
});

export default EnableLocation;
