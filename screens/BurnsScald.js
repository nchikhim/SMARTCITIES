import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const BurnsScald = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.burnsScald}>
      <View style={styles.image38Parent}>
        <Image
          style={styles.image38Icon}
          resizeMode="cover"
          source={require("../assets/image-38.png")}
        />
        <Text style={styles.burnsScald1}>{`Burns & Scald`}</Text>
      </View>
      <Image
        style={styles.image44Icon}
        resizeMode="cover"
        source={require("../assets/image-44.png")}
      />
      <Image
        style={[styles.image45Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/image-45.png")}
      />
      <Image
        style={[styles.image46Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/image-46.png")}
      />
      <View style={styles.more}>
        <Text style={styles.more1}>More...</Text>
      </View>
      <Pressable
        style={[styles.arrowLeftCircle, styles.vector1Layout]}
        onPress={() => navigation.navigate("FirstAid")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/arrowleftcircle3.png")}
        />
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
  iconPosition: {
    left: 1,
    position: "absolute",
  },
  vector1Layout: {
    height: 24,
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
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  image38Icon: {
    top: 8,
    left: 104,
    width: 39,
    height: 40,
    position: "absolute",
  },
  burnsScald1: {
    top: 18,
    left: 143,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.lusitana,
    textAlign: "center",
    width: 156,
    height: 20,
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  image38Parent: {
    top: 21,
    left: -5,
    backgroundColor: "#e6e6e6",
    height: 56,
    width: 360,
    position: "absolute",
    overflow: "hidden",
  },
  image44Icon: {
    top: 89,
    width: 365,
    height: 213,
    left: 0,
    position: "absolute",
  },
  image45Icon: {
    top: 314,
    height: 232,
    width: 360,
  },
  image46Icon: {
    top: 558,
    width: 359,
    height: 227,
  },
  more1: {
    top: "0%",
    left: "0%",
    fontSize: FontSize.size_mini,
    color: Color.colorSteelblue,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    width: "100%",
  },
  more: {
    top: 797,
    left: 166,
    width: 56,
    height: 18,
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
  burnsScald: {
    flex: 1,
    height: 888,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default BurnsScald;
