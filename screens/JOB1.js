import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const JOB1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.job1}>
      <LinearGradient
        style={styles.job1Position}
        locations={[0, 1]}
        colors={["#c2e9e4", "rgba(194, 233, 228, 0)"]}
        useAngle={true}
        angle={180}
      />
      <LinearGradient
        style={styles.job1Position}
        locations={[0, 1]}
        colors={["#c2e9e4", "rgba(194, 233, 228, 0)"]}
        useAngle={true}
        angle={180}
      />
      <View style={styles.job1Inner} />
      <Text style={styles.findYourDream}>{`Find Your 
Dream Job`}</Text>
      <Image
        style={[styles.basilsearchOutlineIcon, styles.vector1Layout]}
        resizeMode="cover"
        source={require("../assets/basilsearchoutline.png")}
      />
      <View style={[styles.partTime, styles.timeShadowBox]}>
        <View style={styles.timeChildLayout} />
        <Text style={[styles.partTime1, styles.timeTypo]}>{`Part
time`}</Text>
      </View>
      <View style={[styles.fullTime, styles.timeShadowBox]}>
        <Pressable
          style={styles.timeChildLayout}
          onPress={() => navigation.navigate("JOB2")}
        />
        <Text style={[styles.fullTime1, styles.timeTypo]}>{`Full
time`}</Text>
      </View>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector27.png")}
      />
      <Image
        style={[styles.pavan1069Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/pavan-1069.png")}
      />
      <Pressable
        style={[styles.arrowLeftCircle, styles.vector1Layout]}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/arrowleftcircle2.png")}
        />
      </Pressable>
      <View style={[styles.mainbar, styles.mainbarPosition]}>
        <View style={[styles.mainbarChild, styles.mainbarPosition]} />
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("Message")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout1]}
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
            style={[styles.icon, styles.iconLayout1]}
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
  timeShadowBox: {
    height: 184,
    width: 173,
    left: 103,
    position: "absolute",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  timeTypo: {
    fontFamily: FontFamily.alatsiRegular,
    fontSize: FontSize.size_31xl,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    transform: [
      {
        rotate: "0.46deg",
      },
    ],
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  mainbarPosition: {
    height: 68,
    bottom: 0,
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
  job1Position: {
    backgroundColor: "transparent",
    width: 367,
    top: -3,
    transform: [
      {
        rotate: "0.46deg",
      },
    ],
    left: 0,
    position: "absolute",
    height: 824,
  },
  job1Inner: {
    top: 96,
    left: 179,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorLightblue_100,
    width: 170,
    height: 77,
    transform: [
      {
        rotate: "0.46deg",
      },
    ],
    position: "absolute",
  },
  findYourDream: {
    top: 184,
    left: 190,
    fontSize: FontSize.size_11xl,
    width: 159,
    height: 81,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    transform: [
      {
        rotate: "0.46deg",
      },
    ],
    position: "absolute",
  },
  basilsearchOutlineIcon: {
    top: 123,
    left: 192,
    width: 24,
    overflow: "hidden",
  },
  timeChildLayout: {
    height: 183,
    width: 171,
    backgroundColor: Color.colorLemonchiffon,
    borderRadius: Border.br_xl,
    left: 2,
    top: 0,
    transform: [
      {
        rotate: "0.46deg",
      },
    ],
    position: "absolute",
  },
  partTime1: {
    top: 28,
    left: 31,
  },
  partTime: {
    top: 321,
  },
  fullTime1: {
    marginLeft: -39.95,
    top: 27,
    left: "50%",
  },
  fullTime: {
    top: 526,
  },
  vectorIcon: {
    height: "3.64%",
    width: "9.17%",
    top: "5.58%",
    right: "5.67%",
    bottom: "90.78%",
    left: "85.17%",
  },
  pavan1069Icon: {
    height: "17.65%",
    width: "40.89%",
    top: "14.54%",
    right: "54.72%",
    bottom: "67.81%",
    left: "4.39%",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  arrowLeftCircle: {
    left: 11,
    top: 23,
    width: 24,
  },
  mainbarChild: {
    right: 0,
    borderStyle: "solid",
    borderColor: Color.colorDimgray_100,
    borderTopWidth: 2,
    left: 0,
    height: 68,
    bottom: 0,
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
    height: "100%",
    maxWidth: "100%",
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
    left: 1,
  },
  job1: {
    flex: 1,
    overflow: "hidden",
    height: 824,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.white,
    width: "100%",
  },
});

export default JOB1;
