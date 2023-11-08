import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const HomeRepairServices = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.homeRepairServices, styles.icon2Layout]}>
      <LinearGradient
        style={styles.homeRepairServicesChild}
        locations={[0, 1]}
        colors={["#c2e9e4", "rgba(194, 233, 228, 0)"]}
        useAngle={true}
        angle={180}
      />
      <Image
        style={[styles.electriciancuateIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/electriciancuate1.png")}
      />
      <View style={[styles.homeRepairServicesItem, styles.backToMenuLayout]} />
      <Text style={[styles.book, styles.bookTypo]}>BOOK</Text>
      <View style={[styles.backToMenu, styles.backToMenuLayout]}>
        <Pressable
          style={styles.backToMenuChild}
          onPress={() => navigation.navigate("JOB1")}
        />
        <Text style={[styles.backToMenu1, styles.bookTypo]}>BACK TO MENU</Text>
      </View>
      <Text style={[styles.theResultWill, styles.theResultWillLayout]}>
        The result will be send through your email after 4 - 6 working days.
        Kindly check your Gmail.
      </Text>
      <Text
        style={[styles.applyingInProgress, styles.theResultWillLayout]}
      >{`APPLYING IN PROGRESS
....`}</Text>
      <View style={[styles.mainbar, styles.mainbarPosition]}>
        <View style={[styles.mainbarChild, styles.mainbarPosition]} />
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("Message")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
        </Pressable>
        <Text style={[styles.message, styles.menuTypo]}>Message</Text>
        <Text style={[styles.menu, styles.menuTypo]}>Menu</Text>
        <Pressable
          style={styles.vector1}
          onPress={() => navigation.navigate("Menu")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
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
            style={[styles.icon2, styles.icon2Layout]}
            resizeMode="cover"
            source={require("../assets/user3.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon2Layout: {
    overflow: "hidden",
    width: "100%",
  },
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  backToMenuLayout: {
    height: 46,
    width: 157,
    position: "absolute",
  },
  bookTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi,
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  theResultWillLayout: {
    width: 323,
    textAlign: "center",
    position: "absolute",
  },
  mainbarPosition: {
    height: 68,
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
  homeRepairServicesChild: {
    left: -3,
    width: 363,
    height: 821,
    backgroundColor: "transparent",
    top: 0,
    position: "absolute",
  },
  electriciancuateIcon: {
    height: "68.07%",
    width: "150.83%",
    top: "14.25%",
    right: "-313.89%",
    bottom: "17.67%",
    left: "263.06%",
    maxHeight: "100%",
    position: "absolute",
  },
  homeRepairServicesItem: {
    top: 744,
    left: -221,
    backgroundColor: Color.colorPaleturquoise,
    borderRadius: Border.br_11xl,
    width: 157,
  },
  book: {
    top: 759,
    left: -160,
  },
  backToMenuChild: {
    left: 0,
    height: 46,
    width: 157,
    backgroundColor: Color.colorPaleturquoise,
    borderRadius: Border.br_11xl,
    top: 0,
    position: "absolute",
  },
  backToMenu1: {
    top: 15,
    left: 31,
  },
  backToMenu: {
    top: 674,
    left: 96,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  theResultWill: {
    top: 398,
    left: 23,
    fontSize: FontSize.size_mini,
    letterSpacing: 0.5,
    fontFamily: FontFamily.playRegular,
    height: 49,
    color: Color.labelsLightPrimary,
    width: 323,
    textAlign: "center",
  },
  applyingInProgress: {
    top: 205,
    left: 13,
    fontSize: FontSize.size_21xl,
    letterSpacing: 1.2,
    fontFamily: FontFamily.pollerOneRegular,
    color: Color.colorMediumseagreen_100,
    height: 178,
  },
  mainbarChild: {
    bottom: 0,
    borderStyle: "solid",
    borderColor: Color.colorDimgray_100,
    borderTopWidth: 2,
    backgroundColor: Color.white,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: 62,
    bottom: 25,
    width: 24,
    height: 25,
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
  icon1: {
    height: "100%",
  },
  vector1: {
    left: 169,
    right: 169,
    bottom: 26,
    height: 24,
    position: "absolute",
  },
  profile: {
    right: 54,
    width: 37,
  },
  icon2: {
    height: "100%",
  },
  user: {
    right: 57,
    bottom: 23,
    width: 30,
    height: 30,
    position: "absolute",
  },
  mainbar: {
    bottom: -2,
  },
  homeRepairServices: {
    flex: 1,
    height: 825,
    backgroundColor: Color.white,
  },
});

export default HomeRepairServices;
