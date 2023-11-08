import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const HomeRepairServices2 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.homeRepairServices, styles.icon2Layout]}>
      <Image
        style={[styles.electriciancuateIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/electriciancuate2.png")}
      />
      <Text style={styles.bookingSuccessful}>{`Booking
Successful`}</Text>
      <Text style={styles.companyCoolFamily}>{`COMPANY: COOL FAMILY
TECHNICIAN NAME: MR. LEE KAI JUN
DATE: 15/11/2023
TIME: 10:50 AM


NAME : coolgirls
PHONE NUMBER: 011-18795467
ADDRESS: No.1087, Jln Seksyen 1/1, Bandar Barat, 31900 Kampar, Perak`}</Text>
      <View style={[styles.homeRepairServicesChild, styles.backChildLayout]} />
      <Text style={[styles.book, styles.bookTypo]}>BOOK</Text>
      <Image
        style={[styles.homeRepairServicesItem, styles.backToMenuChildPosition]}
        resizeMode="cover"
        source={require("../assets/line-10.png")}
      />
      <View style={[styles.backToMenu, styles.backChildLayout]}>
        <Pressable
          style={[styles.backToMenuChild, styles.backToMenuChildPosition]}
          onPress={() => navigation.navigate("HomeRepairServices3")}
        />
        <Text style={[styles.backToMenu1, styles.bookTypo]}>BACK TO MENU</Text>
      </View>
      <View style={styles.mainbarPosition}>
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
  backChildLayout: {
    height: 46,
    width: 157,
  },
  bookTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  backToMenuChildPosition: {
    left: 0,
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
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.labelsLightPrimary,
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
  bookingSuccessful: {
    top: 79,
    fontSize: FontSize.size_21xl,
    letterSpacing: 1.2,
    fontFamily: FontFamily.pollerOneRegular,
    color: Color.colorMediumseagreen_100,
    textAlign: "center",
    width: 323,
    height: 126,
    left: 19,
    position: "absolute",
  },
  companyCoolFamily: {
    top: 225,
    fontSize: FontSize.size_mini,
    letterSpacing: 0.5,
    fontFamily: FontFamily.aleoRegular,
    width: 335,
    height: 231,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    left: 19,
    position: "absolute",
  },
  homeRepairServicesChild: {
    top: 744,
    left: -221,
    backgroundColor: Color.colorPaleturquoise,
    borderRadius: Border.br_11xl,
    width: 157,
    position: "absolute",
  },
  book: {
    top: 759,
    left: -160,
  },
  homeRepairServicesItem: {
    top: 303,
    width: 360,
    height: 2,
  },
  backToMenuChild: {
    top: 0,
    backgroundColor: Color.colorLemonchiffon,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 46,
    width: 157,
    borderRadius: Border.br_11xl,
  },
  backToMenu1: {
    top: 15,
    left: 33,
  },
  backToMenu: {
    top: 674,
    left: 108,
    position: "absolute",
  },
  mainbarChild: {
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
  homeRepairServices: {
    flex: 1,
    height: 825,
    backgroundColor: Color.white,
  },
});

export default HomeRepairServices2;
