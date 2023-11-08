import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const SettingGeneral = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.settingGeneral}>
      <View style={[styles.settingGeneralChild, styles.settingChildLayout]} />
      <View style={[styles.settingGeneralItem, styles.settingChildLayout]} />
      <View style={[styles.settingGeneralInner, styles.settingChildLayout]} />
      <Text style={[styles.autoUpdate, styles.generalTypo]}>Auto-Update</Text>
      <Text style={[styles.darkMode, styles.generalTypo]}>Dark Mode</Text>
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
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector37.png")}
      />
      <Text style={[styles.general, styles.generalTypo]}>General</Text>
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
      <View style={[styles.rectangleView, styles.settingChildLayout]} />
      <View style={[styles.settingGeneralChild1, styles.settingChildLayout]} />
      <View style={[styles.settingGeneralChild2, styles.settingChildLayout]} />
      <Text style={[styles.storage, styles.generalTypo]}>Storage</Text>
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector37.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector37.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector37.png")}
      />
      <Text style={[styles.textSize, styles.generalTypo]}>Text Size</Text>
      <Text
        style={[styles.photosVideosFiles, styles.generalTypo]}
      >{`Photos, Videos, Files & Calls`}</Text>
      <Text style={[styles.language, styles.generalTypo]}>Language</Text>
      <Text style={[styles.english, styles.autoTypo]}>English</Text>
      <Text style={[styles.wiFiOnly, styles.autoTypo]}>Wi-Fi Only</Text>
      <Text style={[styles.auto, styles.autoTypo]}>Auto</Text>
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
            source={require("../assets/user1.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  settingChildLayout: {
    height: 37,
    width: 360,
    borderTopWidth: 0.3,
    borderColor: Color.labelsLightPrimary,
    left: 0,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.white,
  },
  generalTypo: {
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
  vector1Layout: {
    height: 24,
    position: "absolute",
  },
  autoTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
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
    bottom: 8,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  settingGeneralChild: {
    top: 101,
  },
  settingGeneralItem: {
    top: 138,
  },
  settingGeneralInner: {
    top: 175,
  },
  autoUpdate: {
    top: 148,
    fontSize: FontSize.size_sm,
    left: 11,
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
  },
  darkMode: {
    top: 111,
    fontSize: FontSize.size_sm,
    left: 11,
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
  },
  vectorIcon: {
    top: 113,
  },
  vectorIcon1: {
    top: 150,
  },
  vectorIcon2: {
    top: 187,
  },
  general: {
    left: 119,
    fontSize: FontSize.size_13xl,
    width: 122,
    height: 36,
    top: 32,
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
  },
  rectangleView: {
    top: 212,
  },
  settingGeneralChild1: {
    top: 249,
  },
  settingGeneralChild2: {
    top: 286,
  },
  storage: {
    top: 295,
    fontSize: FontSize.size_sm,
    left: 11,
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
  },
  vectorIcon3: {
    top: 224,
  },
  vectorIcon4: {
    top: 261,
  },
  vectorIcon5: {
    top: 298,
  },
  textSize: {
    top: 222,
    fontSize: FontSize.size_sm,
    left: 11,
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
  },
  photosVideosFiles: {
    top: 259,
    fontSize: FontSize.size_sm,
    left: 11,
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
  },
  language: {
    top: 185,
    fontSize: FontSize.size_sm,
    left: 11,
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
  },
  english: {
    top: 186,
    left: 279,
  },
  wiFiOnly: {
    top: 149,
    left: 261,
  },
  auto: {
    top: 112,
    left: 293,
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
  settingGeneral: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default SettingGeneral;
