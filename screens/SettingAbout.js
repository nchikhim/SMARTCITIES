import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const SettingAbout = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.settingAbout}>
      <View style={styles.ellipseParent}>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/ellipse-30.png")}
        />
        <Text style={styles.gardenCoolgirls}>{`Garden
CoolGirls`}</Text>
      </View>
      <Text style={styles.about}>About</Text>
      <Pressable
        style={[styles.arrowLeftCircle, styles.vector1Layout]}
        onPress={() => navigation.navigate("Setting")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/arrowleftcircle3.png")}
        />
      </Pressable>
      <Text style={styles.version100}>Version 1.0.0</Text>
      <View style={[styles.settingAboutChild, styles.settingLayout]} />
      <View style={[styles.settingAboutItem, styles.settingLayout]} />
      <Text style={[styles.checkForUpdates, styles.whatsFreshTypo]}>
        Check for updates
      </Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector37.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector37.png")}
      />
      <Text style={[styles.whatsFresh, styles.whatsFreshTypo]}>
        What’s Fresh
      </Text>
      <View style={styles.mainbarPosition}>
        <View style={[styles.mainbarChild, styles.mainbarPosition]} />
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("Message")}
        >
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
        </Pressable>
        <Text style={[styles.message, styles.menuTypo]}>Message</Text>
        <Text style={[styles.menu, styles.menuTypo]}>Menu</Text>
        <Pressable
          style={[styles.vector1, styles.vector1Layout]}
          onPress={() => navigation.navigate("Menu")}
        >
          <Image
            style={styles.icon2}
            resizeMode="cover"
            source={require("../assets/vector3.png")}
          />
        </Pressable>
        <Text style={[styles.profile, styles.menuTypo]}>Profile</Text>
        <Pressable
          style={styles.user}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/user.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vector1Layout: {
    height: 24,
    position: "absolute",
  },
  settingLayout: {
    height: 37,
    width: 360,
    borderTopWidth: 0.3,
    borderColor: Color.labelsLightPrimary,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  whatsFreshTypo: {
    left: 11,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  vectorIconLayout: {
    height: 14,
    width: 8,
    left: 329,
    position: "absolute",
  },
  mainbarPosition: {
    height: 68,
    bottom: 0,
    right: 0,
    left: 0,
    position: "absolute",
  },
  menuTypo: {
    fontSize: FontSize.size_xs,
    bottom: 8,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    height: 100,
    width: 100,
    position: "absolute",
  },
  gardenCoolgirls: {
    top: 26,
    left: 6,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  ellipseParent: {
    top: 100,
    left: 130,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 100,
    width: 100,
    position: "absolute",
  },
  about: {
    left: 134,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    top: 32,
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrowLeftCircle: {
    left: 10,
    width: 24,
    top: 32,
    height: 24,
  },
  version100: {
    top: 209,
    left: 138,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  settingAboutChild: {
    top: 242,
  },
  settingAboutItem: {
    top: 279,
  },
  checkForUpdates: {
    top: 288,
  },
  vectorIcon: {
    top: 254,
  },
  vectorIcon1: {
    top: 291,
  },
  whatsFresh: {
    top: 252,
  },
  mainbarChild: {
    borderColor: Color.colorDimgray_100,
    borderTopWidth: 2,
    borderStyle: "solid",
    height: 68,
    bottom: 0,
    right: 0,
    backgroundColor: Color.white,
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: 62,
    bottom: 25,
    height: 25,
    width: 24,
    position: "absolute",
  },
  message: {
    left: 46,
    width: 55,
  },
  menu: {
    left: 164,
    width: 32,
  },
  icon2: {
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
  },
  vector1: {
    left: 169,
    right: 169,
    bottom: 26,
  },
  profile: {
    right: 54,
    width: 37,
  },
  user: {
    right: 57,
    bottom: 23,
    width: 30,
    height: 30,
    position: "absolute",
  },
  settingAbout: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default SettingAbout;
