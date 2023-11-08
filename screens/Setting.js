import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Setting = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.setting}>
      <Text style={styles.setting1}>Setting</Text>
      <Pressable
        style={[styles.arrowLeftCircle, styles.vector1Layout]}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/arrowleftcircle3.png")}
        />
      </Pressable>
      <View style={[styles.settingChild, styles.settingChildLayout]} />
      <Text style={[styles.myAccount, styles.modeTypo]}>My Account</Text>
      <View style={[styles.settingItem, styles.groupItemLayout]} />
      <View style={[styles.settingInner, styles.groupItemLayout]} />
      <View style={[styles.rectangleView, styles.settingChildLayout]} />
      <Text style={[styles.address, styles.accountTypo]}>Address</Text>
      <Text style={[styles.bankAccount, styles.accountTypo]}>
        Bank Account / Cards
      </Text>
      <Text style={[styles.settings, styles.modeTypo]}>Settings</Text>
      <View style={[styles.settingChild1, styles.groupItemLayout]} />
      <View style={[styles.settingChild2, styles.groupItemLayout]} />
      <View style={[styles.settingChild3, styles.settingChildLayout]} />
      <Text style={[styles.messageNotifications, styles.accountTypo]}>
        Message Notifications
      </Text>
      <Text style={[styles.blockUser, styles.accountTypo]}>Block user</Text>
      <View style={[styles.settingChild4, styles.groupItemLayout]} />
      <Text style={[styles.guardianMode, styles.accountTypo]}>
        Guardian Mode
      </Text>
      <Text style={[styles.mode, styles.modeTypo]}>Mode</Text>
      <Pressable
        style={[styles.rectangleParent, styles.groupItemLayout]}
        onPress={() => navigation.navigate("SettingAS")}
      >
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text
          style={[styles.accountSecurity, styles.accountTypo]}
        >{`Account & Security`}</Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector37.png")}
        />
      </Pressable>
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
      <Pressable
        style={[styles.rectangleGroup, styles.groupItemLayout]}
        onPress={() => navigation.navigate("SettingGeneral")}
      >
        <View style={[styles.groupItem, styles.groupChildPosition]} />
        <Text style={[styles.accountSecurity, styles.accountTypo]}>
          General
        </Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector37.png")}
        />
      </Pressable>
      <Image
        style={[styles.vectorIcon6, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector37.png")}
      />
      <Pressable
        style={[styles.rectangleContainer, styles.groupItemLayout]}
        onPress={() => navigation.navigate("SettingEM")}
      >
        <View style={[styles.groupItem, styles.groupChildPosition]} />
        <Text style={[styles.accountSecurity, styles.accountTypo]}>
          Easy Mode
        </Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector37.png")}
        />
      </Pressable>
      <View style={[styles.settingChild5, styles.settingChildLayout]} />
      <Text style={[styles.support, styles.modeTypo]}>Support</Text>
      <Pressable
        style={[styles.groupPressable, styles.groupItemLayout]}
        onPress={() => navigation.navigate("HelpCentre")}
      >
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={[styles.accountSecurity, styles.accountTypo]}>
          Help Centre
        </Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector37.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.rectangleParent1, styles.groupItemLayout]}
        onPress={() => navigation.navigate("SettingAbout")}
      >
        <View style={[styles.groupItem, styles.groupChildPosition]} />
        <Text style={[styles.accountSecurity, styles.accountTypo]}>About</Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector37.png")}
        />
      </Pressable>
      <View style={styles.settingChild6} />
      <Pressable
        style={[styles.rectangleParent2, styles.groupChild3Layout]}
        onPress={() => navigation.navigate("Logout")}
      >
        <View style={[styles.groupChild3, styles.groupChild3Layout]} />
        <Text style={[styles.logOut, styles.modeTypo]}>Log out</Text>
      </Pressable>
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
  vector1Layout: {
    height: 24,
    position: "absolute",
  },
  settingChildLayout: {
    height: 34,
    width: 360,
    backgroundColor: Color.colorGainsboro_400,
    left: 0,
    position: "absolute",
  },
  modeTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  groupItemLayout: {
    height: 37,
    width: 360,
    position: "absolute",
  },
  accountTypo: {
    fontSize: FontSize.size_sm,
    left: 12,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  groupChildPosition: {
    top: 0,
    left: 0,
    backgroundColor: Color.white,
  },
  vectorIconLayout: {
    height: 14,
    width: 8,
    left: 330,
    position: "absolute",
  },
  groupChild3Layout: {
    height: 32,
    width: 102,
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
  setting1: {
    top: 34,
    left: 123,
    fontSize: FontSize.size_13xl,
    width: 113,
    height: 36,
    textAlign: "left",
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
    top: 32,
    width: 24,
  },
  settingChild: {
    top: 89,
  },
  myAccount: {
    top: 98,
    left: 12,
    fontSize: FontSize.size_xs,
  },
  settingItem: {
    top: 160,
    borderBottomWidth: 0.3,
    height: 37,
    borderColor: Color.labelsLightPrimary,
    borderStyle: "solid",
    left: 0,
    backgroundColor: Color.white,
  },
  settingInner: {
    top: 197,
    left: 0,
    backgroundColor: Color.white,
  },
  rectangleView: {
    top: 234,
  },
  address: {
    top: 170,
  },
  bankAccount: {
    top: 206,
  },
  settings: {
    top: 243,
    left: 12,
    fontSize: FontSize.size_xs,
  },
  settingChild1: {
    top: 268,
    borderBottomWidth: 0.3,
    height: 37,
    borderColor: Color.labelsLightPrimary,
    borderStyle: "solid",
    left: 0,
    backgroundColor: Color.white,
  },
  settingChild2: {
    top: 305,
    borderBottomWidth: 0.3,
    height: 37,
    borderColor: Color.labelsLightPrimary,
    borderStyle: "solid",
    left: 0,
    backgroundColor: Color.white,
  },
  settingChild3: {
    top: 379,
  },
  messageNotifications: {
    top: 279,
  },
  blockUser: {
    top: 315,
  },
  settingChild4: {
    top: 413,
    borderBottomWidth: 0.3,
    height: 37,
    borderColor: Color.labelsLightPrimary,
    borderStyle: "solid",
    left: 0,
    backgroundColor: Color.white,
  },
  guardianMode: {
    top: 423,
  },
  mode: {
    top: 388,
    left: 12,
    fontSize: FontSize.size_xs,
  },
  groupChild: {
    height: 37,
    width: 360,
    position: "absolute",
    borderBottomWidth: 0.3,
    borderColor: Color.labelsLightPrimary,
    borderStyle: "solid",
  },
  accountSecurity: {
    top: 10,
  },
  vectorIcon: {
    top: 12,
  },
  rectangleParent: {
    top: 123,
    left: 0,
  },
  vectorIcon1: {
    top: 172,
  },
  vectorIcon2: {
    top: 209,
  },
  vectorIcon3: {
    top: 281,
  },
  vectorIcon4: {
    top: 317,
  },
  groupItem: {
    height: 37,
    width: 360,
    position: "absolute",
  },
  rectangleGroup: {
    top: 342,
    left: 0,
  },
  vectorIcon6: {
    top: 425,
  },
  rectangleContainer: {
    top: 450,
    left: 0,
  },
  settingChild5: {
    top: 488,
  },
  support: {
    top: 497,
    left: 12,
    fontSize: FontSize.size_xs,
  },
  groupPressable: {
    top: 522,
    left: 0,
  },
  rectangleParent1: {
    top: 559,
    left: 0,
  },
  settingChild6: {
    top: 597,
    height: 135,
    width: 360,
    backgroundColor: Color.colorGainsboro_400,
    left: 0,
    position: "absolute",
  },
  groupChild3: {
    borderWidth: 1.5,
    top: 0,
    left: 0,
    backgroundColor: Color.white,
    borderColor: Color.labelsLightPrimary,
    width: 102,
    borderStyle: "solid",
  },
  logOut: {
    top: 8,
    left: 29,
  },
  rectangleParent2: {
    top: 648,
    left: 129,
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
  setting: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Setting;
