import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const AdvertiseS2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.advertiseS2}>
      <Text style={[styles.contribute, styles.submitTypo]}>Contribute</Text>
      <Pressable
        style={styles.arrowLeftCircle}
        onPress={() => navigation.navigate("AdvertiseS1")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/arrowleftcircle3.png")}
        />
      </Pressable>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector32.png")}
      />
      <View style={[styles.advertiseS2Child, styles.advertiseLayout]} />
      <Text style={[styles.title, styles.titleTypo]}>Title:</Text>
      <Text style={[styles.duration, styles.titleTypo]}>Duration:</Text>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector32.png")}
      />
      <View style={[styles.advertiseS2Item, styles.advertiseLayout]} />
      <Text style={[styles.contactNumber, styles.titleTypo]}>
        Contact number:
      </Text>
      <Image
        style={styles.plusIcon}
        resizeMode="cover"
        source={require("../assets/plus.png")}
      />
      <Image
        style={[styles.minusIcon, styles.minusIconPosition]}
        resizeMode="cover"
        source={require("../assets/minus.png")}
      />
      <View style={styles.advertiseS2Inner} />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector32.png")}
      />
      <View style={[styles.rectangleView, styles.advertiseLayout]} />
      <Text style={[styles.explained, styles.minusIconPosition]}>
        Explained:
      </Text>
      <Image
        style={styles.vectorIcon3}
        resizeMode="cover"
        source={require("../assets/vector33.png")}
      />
      <Text style={[styles.addingFile, styles.minusIconPosition]}>
        Adding file:
      </Text>
      <View style={styles.advertiseS2Child1} />
      <Text style={[styles.submit, styles.submitTypo]}>Submit</Text>
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
          style={styles.vector1}
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
          style={[styles.user, styles.vectorIconLayout]}
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
  submitTypo: {
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  vectorIconLayout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  advertiseLayout: {
    height: 34,
    width: 299,
    backgroundColor: Color.colorGainsboro_400,
    borderRadius: Border.br_mid,
    position: "absolute",
  },
  titleTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
  },
  minusIconPosition: {
    left: 20,
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
  contribute: {
    left: 99,
    fontSize: FontSize.size_13xl,
    width: 162,
    height: 36,
    top: 35,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrowLeftCircle: {
    height: 24,
    width: 24,
    left: 10,
    top: 35,
    position: "absolute",
  },
  vectorIcon: {
    top: 130,
    left: 319,
    width: 30,
  },
  advertiseS2Child: {
    top: 124,
    left: 12,
    width: 299,
  },
  title: {
    top: 103,
    left: 22,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  duration: {
    top: 190,
    left: 22,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  vectorIcon1: {
    top: 304,
    left: 319,
    width: 30,
  },
  advertiseS2Item: {
    top: 298,
    left: 12,
    width: 299,
  },
  contactNumber: {
    top: 277,
    left: 22,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  plusIcon: {
    top: 223,
    left: 116,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  minusIcon: {
    top: 221,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  advertiseS2Inner: {
    top: 219,
    left: 57,
    width: 46,
    height: 31,
    backgroundColor: Color.colorGainsboro_400,
    borderRadius: Border.br_mid,
    position: "absolute",
  },
  vectorIcon2: {
    top: 391,
    left: 317,
  },
  rectangleView: {
    top: 385,
    left: 10,
  },
  explained: {
    top: 364,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
  },
  vectorIcon3: {
    top: 479,
    left: 15,
    width: 60,
    height: 60,
    position: "absolute",
  },
  addingFile: {
    top: 451,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
  },
  advertiseS2Child1: {
    top: 601,
    left: 109,
    backgroundColor: "#fff06c",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 142,
    height: 41,
    borderRadius: Border.br_mid,
    position: "absolute",
  },
  submit: {
    top: 610,
    left: 146,
    fontSize: FontSize.size_xl,
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
    height: 24,
    position: "absolute",
  },
  profile: {
    right: 54,
    width: 37,
  },
  user: {
    right: 57,
    bottom: 23,
  },
  advertiseS2: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default AdvertiseS2;
