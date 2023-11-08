import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const LockSmithContact3 = ({ onClose }) => {
  return (
    <View style={styles.locksmithcontact3}>
      <Text style={[styles.online, styles.onlinePosition]}>Online</Text>
      <Text style={[styles.sengHuatExpertise, styles.onlinePosition]}>
        Seng Huat expertise Unlock Services
      </Text>
      <View style={styles.contactNow}>
        <View style={[styles.contactNowChild, styles.childLayout]} />
        <Text style={[styles.contactNow1, styles.locationLayout]}>
          Contact Now
        </Text>
        <Image
          style={styles.contactNowItem}
          resizeMode="cover"
          source={require("../assets/group-234.png")}
        />
      </View>
      <View style={[styles.locksmithcontact3Child, styles.childLayout]} />
      <Image
        style={[styles.locksmithcontact3Item, styles.locationLayout]}
        resizeMode="cover"
        source={require("../assets/group-246.png")}
      />
      <Text style={[styles.location, styles.locationLayout]}>Location</Text>
      <Image
        style={styles.locksmithcontact3Inner}
        resizeMode="cover"
        source={require("../assets/ellipse-142.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  onlinePosition: {
    textAlign: "left",
    color: Color.labelsLightPrimary,
    left: 10,
    position: "absolute",
  },
  childLayout: {
    borderRadius: Border.br_mini,
    height: 42,
    width: 164,
    position: "absolute",
  },
  locationLayout: {
    height: 28,
    position: "absolute",
  },
  online: {
    top: 62,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    width: 84,
    height: 18,
  },
  sengHuatExpertise: {
    top: 8,
    fontSize: FontSize.size_3xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    height: 46,
    width: 360,
  },
  contactNowChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorMediumseagreen_200,
  },
  contactNow1: {
    top: 12,
    left: 53,
    color: Color.colorMediumseagreen_100,
    width: 101,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    height: 28,
    textAlign: "left",
  },
  contactNowItem: {
    top: 4,
    left: 8,
    width: 35,
    height: 35,
    position: "absolute",
  },
  contactNow: {
    top: 81,
    left: 187,
    height: 42,
    width: 164,
    position: "absolute",
  },
  locksmithcontact3Child: {
    top: 82,
    backgroundColor: Color.colorLightblue_200,
    left: 10,
    borderRadius: Border.br_mini,
  },
  locksmithcontact3Item: {
    top: 89,
    left: 25,
    width: 22,
  },
  location: {
    top: 95,
    left: 63,
    color: Color.colorCornflowerblue,
    width: 101,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    height: 28,
    textAlign: "left",
  },
  locksmithcontact3Inner: {
    top: 64,
    left: 51,
    width: 12,
    height: 12,
    position: "absolute",
  },
  locksmithcontact3: {
    backgroundColor: Color.white,
    height: 214,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
    width: 360,
  },
});

export default LockSmithContact3;
