import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Advertise = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.advertise}>
      <Text style={styles.advertises}>Advertises</Text>
      <Pressable
        style={[styles.arrowLeftCircle, styles.vector1Layout]}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/arrowleftcircle3.png")}
        />
      </Pressable>
      <Image
        style={[styles.advertiseChild, styles.wrapperLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-12.png")}
      />
      <Text style={[styles.homeBaked, styles.homeBakedTypo]}>Home Baked</Text>
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("Ad1")}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/rectangle-131.png")}
        />
      </Pressable>
      <Text style={[styles.beautysJeans, styles.homeBakedTypo]}>
        Beauty’s Jeans
      </Text>
      <Text style={[styles.clickOnThe, styles.homeBakedTypo]}>
        Click on the ad to see more details
      </Text>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector77.png")}
      />
      <View style={styles.mainbarPosition}>
        <View style={[styles.mainbarChild, styles.mainbarPosition]} />
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("Message")}
        >
          <Image
            style={styles.icon2}
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
  wrapperLayout: {
    height: 190,
    width: 330,
    left: 15,
    position: "absolute",
  },
  homeBakedTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
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
  advertises: {
    left: 99,
    fontSize: FontSize.size_13xl,
    width: 162,
    height: 36,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    top: 32,
    position: "absolute",
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
    height: 24,
  },
  advertiseChild: {
    top: 407,
    borderRadius: Border.br_smi,
  },
  homeBaked: {
    top: 387,
    left: 22,
    fontSize: FontSize.size_base,
  },
  icon1: {
    borderRadius: Border.br_smi,
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: 165,
  },
  beautysJeans: {
    top: 145,
    left: 22,
    fontSize: FontSize.size_base,
  },
  clickOnThe: {
    top: 96,
    left: 44,
  },
  vectorIcon: {
    top: 94,
    left: 11,
    width: 22,
    height: 22,
    position: "absolute",
  },
  mainbarChild: {
    borderStyle: "solid",
    borderColor: Color.colorDimgray_100,
    borderTopWidth: 2,
    backgroundColor: Color.white,
  },
  icon2: {
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
  advertise: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Advertise;
