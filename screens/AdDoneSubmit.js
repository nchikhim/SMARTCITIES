import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const AdDoneSubmit = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.adDonesubmit}>
      <Text style={styles.successfully}>Successfully!</Text>
      <Image
        style={styles.image31Icon}
        resizeMode="cover"
        source={require("../assets/image-31.png")}
      />
      <Text
        style={[styles.advertisingSubmittedSuccessf, styles.backToMainTypo]}
      >{`Advertising submitted successfully, please wait 5 working days to check the results `}</Text>
      <View style={styles.rectangleParent}>
        <Pressable
          style={[styles.groupChild, styles.childBorder]}
          onPress={() => navigation.navigate("AdvertiseS1")}
        />
        <Text style={[styles.backToMain, styles.backToMainTypo]}>
          Back To Main Menu
        </Text>
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
            style={styles.icon1}
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
            style={styles.icon2}
            resizeMode="cover"
            source={require("../assets/user.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backToMainTypo: {
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  childBorder: {
    borderStyle: "solid",
    backgroundColor: Color.white,
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
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  successfully: {
    top: 331,
    left: 121,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.libreBodoniRegular,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  image31Icon: {
    top: 200,
    left: 116,
    width: 116,
    height: 111,
    position: "absolute",
  },
  advertisingSubmittedSuccessf: {
    top: 361,
    left: 47,
    textAlign: "center",
    width: 254,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    color: Color.labelsLightPrimary,
  },
  groupChild: {
    top: 0,
    borderRadius: Border.br_3xs,
    borderColor: Color.colorRoyalblue_100,
    borderWidth: 1,
    left: 0,
    borderStyle: "solid",
    height: 37,
    width: 114,
    position: "absolute",
  },
  backToMain: {
    top: 12,
    left: 6,
    fontSize: FontSize.size_2xs,
    color: Color.colorRoyalblue_100,
    textAlign: "left",
  },
  rectangleParent: {
    top: 496,
    left: 123,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 37,
    width: 114,
    position: "absolute",
  },
  mainbarChild: {
    borderColor: Color.colorDimgray_100,
    borderTopWidth: 2,
    borderStyle: "solid",
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
  icon2: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  user: {
    right: 57,
    bottom: 23,
    width: 30,
    height: 30,
    position: "absolute",
  },
  adDonesubmit: {
    flex: 1,
    height: 796,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default AdDoneSubmit;
