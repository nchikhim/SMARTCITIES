import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const FirstAid = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.firstAid}>
      <Pressable
        style={[styles.arrowLeftCircle, styles.vector1Layout]}
        onPress={() => navigation.navigate("HealthcareMainPage")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/arrowleftcircle3.png")}
        />
      </Pressable>
      <Text style={[styles.firstAidAt, styles.more1Typo]}>
        First Aid At Home
      </Text>
      <View style={[styles.firstAidChild, styles.firstChildLayout]} />
      <View style={[styles.firstAidItem, styles.firstChildLayout]} />
      <View style={[styles.firstAidInner, styles.firstChildLayout]} />
      <View style={[styles.lineView, styles.firstChildLayout]} />
      <View style={[styles.firstAidChild1, styles.firstChildLayout]} />
      <View style={[styles.firstAidChild2, styles.image42IconPosition]} />
      <Image
        style={[styles.image38Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/image-381.png")}
      />
      <Pressable
        style={styles.burnsScaldContainer}
        onPress={() => navigation.navigate("BurnsScald")}
      >
        <Text style={styles.burnsScald}>{`Burns & Scald`}</Text>
      </Pressable>
      <Text style={[styles.heatstroke, styles.heatstrokeTypo]}>Heatstroke</Text>
      <Text style={[styles.heartAttack, styles.fractureTypo]}>
        Heart Attack
      </Text>
      <Text style={[styles.airwayObstruction, styles.heatstrokeTypo]}>
        Airway Obstruction
      </Text>
      <Text style={[styles.fracture, styles.fractureTypo]}>Fracture</Text>
      <Image
        style={[styles.image39Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/image-39.png")}
      />
      <Image
        style={[styles.image41Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/image-41.png")}
      />
      <Image
        style={[styles.image42Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/image-42.png")}
      />
      <View style={styles.more}>
        <Text style={[styles.more1, styles.more1Typo]}>More...</Text>
      </View>
      <Image
        style={styles.image43Icon}
        resizeMode="cover"
        source={require("../assets/image-43.png")}
      />
      <Text style={styles.firstAidEssentials}>{`First Aid Essentials: `}</Text>
      <Pressable
        style={styles.image47}
        onPress={() => navigation.navigate("EmergencyCall")}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/image-47.png")}
        />
      </Pressable>
      <Image
        style={styles.image40Icon}
        resizeMode="cover"
        source={require("../assets/image-40.png")}
      />
      <View style={[styles.mainbar, styles.mainbarLayout]}>
        <View style={[styles.mainbarChild, styles.mainbarLayout]} />
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
            style={styles.icon3}
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
  more1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  firstChildLayout: {
    height: 1,
    width: 361,
    borderTopWidth: 1,
    borderColor: Color.colorDarkgray_200,
    borderStyle: "solid",
  },
  image42IconPosition: {
    top: 636,
    position: "absolute",
  },
  iconLayout: {
    height: 54,
    position: "absolute",
  },
  heatstrokeTypo: {
    left: 144,
    textAlign: "center",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.lusitana,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  fractureTypo: {
    left: 146,
    textAlign: "center",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.lusitana,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  iconPosition: {
    left: 23,
    width: 56,
  },
  mainbarLayout: {
    height: 68,
    position: "absolute",
  },
  menuTypo: {
    fontSize: FontSize.size_xs,
    bottom: 8,
    color: Color.labelsLightPrimary,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrowLeftCircle: {
    left: 22,
    top: 41,
    width: 24,
  },
  firstAidAt: {
    top: 99,
    fontSize: FontSize.size_12xl_5,
    color: Color.colorGray_900,
    width: 308,
    height: 59,
    left: 27,
  },
  firstAidChild: {
    top: 373,
    left: 0,
    width: 361,
    borderTopWidth: 1,
    borderColor: Color.colorDarkgray_200,
    position: "absolute",
  },
  firstAidItem: {
    top: 505,
    left: 1,
    position: "absolute",
  },
  firstAidInner: {
    top: 438,
    left: 1,
    position: "absolute",
  },
  lineView: {
    top: 572,
    left: 1,
    position: "absolute",
  },
  firstAidChild1: {
    top: 701,
    left: -1,
    position: "absolute",
  },
  firstAidChild2: {
    height: 1,
    width: 361,
    borderTopWidth: 1,
    borderColor: Color.colorDarkgray_200,
    borderStyle: "solid",
    left: 0,
  },
  image38Icon: {
    top: 381,
    width: 56,
    left: 23,
  },
  burnsScald: {
    textAlign: "center",
    fontFamily: FontFamily.lusitana,
    color: Color.labelsLightPrimary,
    fontSize: FontSize.size_base,
  },
  burnsScaldContainer: {
    left: 143,
    top: 395,
    position: "absolute",
  },
  heatstroke: {
    top: 457,
  },
  heartAttack: {
    top: 524,
  },
  airwayObstruction: {
    top: 593,
  },
  fracture: {
    top: 657,
  },
  image39Icon: {
    top: 446,
    height: 51,
    width: 56,
    position: "absolute",
  },
  image41Icon: {
    top: 579,
    left: 30,
    width: 42,
  },
  image42Icon: {
    height: 60,
    width: 56,
    top: 636,
    position: "absolute",
  },
  more1: {
    top: "0%",
    left: "0%",
    fontSize: FontSize.size_mini,
    color: Color.colorSteelblue,
    width: "100%",
  },
  more: {
    top: 708,
    left: 151,
    height: 18,
    width: 56,
    position: "absolute",
  },
  image43Icon: {
    top: 177,
    width: 315,
    height: 177,
    left: 27,
    position: "absolute",
  },
  firstAidEssentials: {
    top: 150,
    left: 26,
    fontFamily: FontFamily.libreBodoniRegular,
    color: Color.labelsLightPrimary,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  image47: {
    left: 299,
    top: 28,
    width: 49,
    height: 50,
    position: "absolute",
  },
  image40Icon: {
    top: 508,
    left: 28,
    width: 44,
    height: 61,
    position: "absolute",
  },
  mainbarChild: {
    right: 0,
    bottom: 0,
    borderColor: Color.colorDimgray_100,
    borderTopWidth: 2,
    borderStyle: "solid",
    height: 68,
    left: 0,
    backgroundColor: Color.white,
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
  icon3: {
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
  mainbar: {
    right: -1,
    bottom: -1,
    left: 1,
  },
  firstAid: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default FirstAid;
