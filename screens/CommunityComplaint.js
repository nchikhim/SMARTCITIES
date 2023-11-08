import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const CommunityComplaint = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.communityComplaint}
      locations={[0, 1, 1]}
      colors={[
        "#c2e9e4",
        "rgba(194, 233, 228, 0.07)",
        "rgba(218, 239, 237, 0)",
      ]}
      useAngle={true}
      angle={180}
    >
      <Pressable
        style={[styles.arrowLeftCircle, styles.vectorLayout]}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/arrowleftcircle8.png")}
        />
      </Pressable>
      <View style={styles.titleFrame}>
        <Image
          style={[styles.emptyStreetrafikiIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/emptystreetrafiki.png")}
        />
        <Text style={styles.communityComplaint1}>{`COMMUNITY
COMPLAINT`}</Text>
        <Image
          style={[styles.iconTimeHistory, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-time-history1.png")}
        />
      </View>
      <View style={styles.options}>
        <View style={[styles.optionsChild, styles.optionsChildShadowBox]} />
        <View style={[styles.optionsItem, styles.optionsChildShadowBox]} />
        <View style={[styles.optionsInner, styles.optionsChildShadowBox]} />
        <View style={[styles.rectangleView, styles.optionsChildShadowBox]} />
        <View style={[styles.optionsChild1, styles.optionsChildShadowBox]} />
        <Pressable
          style={[styles.rectanglePressable, styles.optionsChildShadowBox]}
          onPress={() => navigation.navigate("Complaint3")}
        />
        <Text style={[styles.publicFacilities, styles.pollutionTypo]}>
          Public facilities
        </Text>
        <Text
          style={[styles.streetLamp, styles.pollutionTypo]}
        >{`Street lamp `}</Text>
        <Text style={[styles.noisePollution, styles.pollutionTypo]}>
          Noise pollution
        </Text>
        <Text
          style={[styles.environmentPollution, styles.pollutionTypo]}
        >{`Environment pollution  `}</Text>
        <Text style={[styles.brokenRoad, styles.brokenRoadPosition]}>
          Broken road
        </Text>
        <Text style={[styles.communitySafety, styles.pollutionTypo]}>
          Community safety
        </Text>
      </View>
      <View style={styles.mainbarPosition}>
        <View style={[styles.mainbarChild, styles.mainbarPosition]} />
        <Image
          style={[styles.vectorIcon, styles.brokenRoadPosition]}
          resizeMode="cover"
          source={require("../assets/vector2.png")}
        />
        <Text style={[styles.message, styles.menuTypo]}>Message</Text>
        <Text style={[styles.menu, styles.menuTypo]}>Menu</Text>
        <Pressable
          style={[styles.vector, styles.vectorLayout]}
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
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/user.png")}
          />
        </Pressable>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  vectorLayout: {
    height: 24,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  optionsChildShadowBox: {
    height: 63,
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_400,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorMintcream_200,
    borderRadius: Border.br_xl,
    borderStyle: "solid",
    width: 242,
    left: 0,
    position: "absolute",
  },
  pollutionTypo: {
    color: Color.colorTeal,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    height: 24,
  },
  brokenRoadPosition: {
    left: 62,
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
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrowLeftCircle: {
    left: 11,
    top: 24,
    width: 24,
  },
  emptyStreetrafikiIcon: {
    height: "98.59%",
    width: "58.78%",
    top: "8.33%",
    right: "39%",
    bottom: "-6.93%",
    left: "2.22%",
  },
  communityComplaint1: {
    top: 111,
    left: 208,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  iconTimeHistory: {
    height: "13.54%",
    width: "7.22%",
    top: "4.69%",
    right: "5.28%",
    bottom: "81.77%",
    left: "87.5%",
  },
  titleFrame: {
    top: 44,
    width: 360,
    height: 192,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  optionsChild: {
    top: 394,
  },
  optionsItem: {
    top: 315,
  },
  optionsInner: {
    top: 236,
  },
  rectangleView: {
    top: 157,
  },
  optionsChild1: {
    top: 79,
  },
  rectanglePressable: {
    top: 0,
  },
  publicFacilities: {
    top: 333,
    left: 53,
    width: 141,
    position: "absolute",
  },
  streetLamp: {
    top: 20,
    left: 67,
    width: 114,
    position: "absolute",
  },
  noisePollution: {
    top: 98,
    left: 52,
    width: 150,
    position: "absolute",
  },
  environmentPollution: {
    left: 18,
    width: 211,
    top: 256,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  brokenRoad: {
    top: 179,
    width: 123,
    color: Color.colorTeal,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    height: 24,
  },
  communitySafety: {
    top: 413,
    left: 41,
    width: 188,
    position: "absolute",
  },
  options: {
    left: 65,
    height: 457,
    width: 242,
    top: 256,
    position: "absolute",
  },
  mainbarChild: {
    backgroundColor: Color.white,
    borderColor: Color.colorDimgray_100,
    borderTopWidth: 2,
    borderStyle: "solid",
    height: 68,
    bottom: 0,
    right: 0,
  },
  vectorIcon: {
    bottom: 25,
    height: 25,
    width: 24,
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
  vector: {
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
  communityComplaint: {
    flex: 1,
    height: 800,
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
  },
});

export default CommunityComplaint;
