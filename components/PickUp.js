import * as React from "react";
import { View, StyleSheet, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PickUp = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.pickup, styles.pickupLayout]}>
      <Pressable
        style={styles.rectangleParent}
        onPress={() => navigation.navigate("Delievery")}
      >
        <View style={styles.groupChild} />
        <View style={styles.groupItem} />
        <Text style={[styles.delievery, styles.pickUpTypo]}>Delievery</Text>
        <Text style={[styles.pickUp, styles.pickUpTypo]}>Pick Up</Text>
      </Pressable>
      <Pressable
        style={[styles.arrowLeftCircle, styles.vector1Layout]}
        onPress={() => navigation.navigate("Shopping")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/arrowleftcircle3.png")}
        />
      </Pressable>
      <View style={styles.emptystateParent}>
        <Image
          style={[styles.emptystateIcon, styles.pickupLayout]}
          resizeMode="cover"
          source={require("../assets/emptystate.png")}
        />
        <Text style={styles.oppsYouHavent}>{`Opps....
You haven’t make any order yet!`}</Text>
      </View>
      <View style={styles.mainbarPosition}>
        <View style={[styles.mainbarChild, styles.mainbarPosition]} />
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("Message")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
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
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/user1.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pickupLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  pickUpTypo: {
    height: 28,
    width: 103,
    textAlign: "center",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 28,
    fontSize: FontSize.size_xl,
    top: 11,
    position: "absolute",
  },
  vector1Layout: {
    height: 24,
    position: "absolute",
  },
  iconLayout: {
    width: "100%",
    height: "100%",
  },
  mainbarPosition: {
    height: 68,
    bottom: 0,
    right: 0,
    left: 0,
    position: "absolute",
  },
  menuTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    bottom: 8,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  groupChild: {
    left: 135,
    borderTopRightRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_3xs,
    backgroundColor: Color.colorSpringgreen_100,
    width: 135,
    top: 0,
    height: 49,
    position: "absolute",
  },
  groupItem: {
    borderTopLeftRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: "rgba(217, 217, 217, 0.87)",
    left: 0,
    width: 135,
    top: 0,
    height: 49,
    position: "absolute",
  },
  delievery: {
    left: 16,
  },
  pickUp: {
    left: 146,
  },
  rectangleParent: {
    top: 75,
    left: 45,
    width: 270,
    height: 49,
    position: "absolute",
  },
  icon: {
    overflow: "hidden",
    height: "100%",
  },
  arrowLeftCircle: {
    left: 10,
    top: 32,
    width: 24,
  },
  emptystateIcon: {
    height: "52.91%",
    width: "69.64%",
    top: "14.02%",
    right: "17.55%",
    bottom: "33.07%",
    left: "12.81%",
    overflow: "hidden",
    position: "absolute",
  },
  oppsYouHavent: {
    top: 238,
    left: 23,
    fontSize: FontSize.size_11xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: "rgba(0, 6, 147, 0.8)",
    width: 331,
    height: 113,
    textAlign: "left",
    position: "absolute",
  },
  emptystateParent: {
    top: 211,
    left: 1,
    width: 359,
    height: 378,
    overflow: "hidden",
    position: "absolute",
  },
  mainbarChild: {
    borderStyle: "solid",
    borderColor: Color.colorDimgray_100,
    borderTopWidth: 2,
    backgroundColor: Color.white,
  },
  icon1: {
    height: "100%",
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
    overflow: "hidden",
    height: "100%",
    maxWidth: "100%",
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
  pickup: {
    width: 360,
    height: 800,
    backgroundColor: Color.white,
  },
});

export default PickUp;
