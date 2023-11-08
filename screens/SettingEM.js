import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const SettingEM = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.settingEm}>
      <Text style={styles.easyMode}>Easy Mode</Text>
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
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector38.png")}
      />
      <Text style={[styles.largeFontSize, styles.enableTypo]}>
        Large font size, sharper colors and bigger buttons. “Listen to Text
        Messages” is also available.
      </Text>
      <View style={styles.settingEmChild} />
      <Text style={[styles.enable, styles.enableTypo]}>Enable</Text>
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
  enableTypo: {
    textAlign: "center",
    fontSize: FontSize.size_sm,
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  mainbarPosition: {
    height: 68,
    left: 0,
    bottom: 0,
    right: 0,
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
  easyMode: {
    left: 96,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    top: 32,
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
  vectorIcon: {
    top: 166,
    left: 153,
    height: 49,
    width: 55,
    position: "absolute",
  },
  largeFontSize: {
    top: 243,
    left: 34,
    width: 292,
  },
  settingEmChild: {
    top: 418,
    left: 128,
    borderRadius: 32,
    backgroundColor: "rgba(111, 211, 218, 0.75)",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 104,
    height: 44,
    position: "absolute",
  },
  enable: {
    top: 431,
    left: 157,
  },
  mainbarChild: {
    borderStyle: "solid",
    borderColor: Color.colorDimgray_100,
    borderTopWidth: 2,
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
  settingEm: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default SettingEM;
