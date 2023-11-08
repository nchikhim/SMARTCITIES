import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const SettingAS = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.settingAs}>
      <View style={[styles.settingAsChild, styles.settingChildLayout]} />
      <View style={[styles.settingAsItem, styles.settingChildLayout]} />
      <View style={[styles.settingAsInner, styles.settingChildLayout]} />
      <Text style={[styles.phone, styles.idTypo]}>Phone</Text>
      <Text style={[styles.id, styles.idTypo]}>ID</Text>
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
      <Text
        style={[styles.accountSecurity, styles.idTypo]}
      >{`Account & Security`}</Text>
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
      <View style={[styles.settingAsChild1, styles.settingChildLayout]} />
      <View style={[styles.settingAsChild2, styles.settingChildLayout]} />
      <Text style={[styles.fingerprintAuthentication, styles.idTypo]}>
        Fingerprint Authentication
      </Text>
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
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-43.png")}
      />
      <Image
        style={styles.cameraIcon}
        resizeMode="cover"
        source={require("../assets/camera.png")}
      />
      <Text style={[styles.socialMediaAccounts, styles.idTypo]}>
        Social Media Accounts
      </Text>
      <Text style={[styles.password, styles.idTypo]}>Password</Text>
      <Text style={[styles.email, styles.idTypo]}>Email</Text>
      <Text style={[styles.coolgirls, styles.textTypo]}>CoolGirls</Text>
      <Text style={[styles.text, styles.textTypo]}>***-*****89</Text>
      <Text style={[styles.csgmailcom, styles.textTypo]}>
        C*******s@gmail.com
      </Text>
      <Image
        style={styles.vectorIcon5}
        resizeMode="cover"
        source={require("../assets/vector39.png")}
      />
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
  idTypo: {
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
  textTypo: {
    fontSize: FontSize.size_2xs,
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
    fontSize: FontSize.size_xs,
    bottom: 8,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  settingAsChild: {
    top: 178,
  },
  settingAsItem: {
    top: 215,
  },
  settingAsInner: {
    top: 252,
  },
  phone: {
    top: 225,
    fontSize: FontSize.size_sm,
    left: 11,
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
  },
  id: {
    top: 188,
    fontSize: FontSize.size_sm,
    left: 11,
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
  },
  vectorIcon: {
    top: 190,
  },
  vectorIcon1: {
    top: 227,
  },
  vectorIcon2: {
    top: 264,
  },
  accountSecurity: {
    left: 50,
    fontSize: FontSize.size_13xl,
    width: 289,
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
    top: 289,
  },
  settingAsChild1: {
    top: 326,
  },
  settingAsChild2: {
    top: 363,
  },
  fingerprintAuthentication: {
    top: 372,
    fontSize: FontSize.size_sm,
    left: 11,
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
  },
  vectorIcon3: {
    top: 301,
  },
  vectorIcon4: {
    top: 338,
  },
  groupIcon: {
    top: 83,
    left: 140,
    width: 80,
    height: 80,
    position: "absolute",
  },
  cameraIcon: {
    top: 143,
    left: 213,
    width: 20,
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },
  socialMediaAccounts: {
    top: 299,
    fontSize: FontSize.size_sm,
    left: 11,
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
  },
  password: {
    top: 336,
    fontSize: FontSize.size_sm,
    left: 11,
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
  },
  email: {
    top: 262,
    fontSize: FontSize.size_sm,
    left: 11,
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
  },
  coolgirls: {
    left: 271,
    top: 190,
  },
  text: {
    top: 226,
    left: 255,
    width: 69,
    height: 15,
  },
  csgmailcom: {
    left: 203,
    top: 264,
  },
  vectorIcon5: {
    top: 373,
    left: 316,
    height: 16,
    width: 24,
    position: "absolute",
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
  settingAs: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default SettingAS;
