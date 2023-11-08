import React, { useState, useCallback } from "react";
import { Text, StyleSheet, Image, Pressable, View, Modal } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import HomeNanny from "../components/HomeNanny";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Care1 = () => {
  const [rectangleVisible, setRectangleVisible] = useState(false);
  const navigation = useNavigation();

  const openRectangle = useCallback(() => {
    setRectangleVisible(true);
  }, []);

  const closeRectangle = useCallback(() => {
    setRectangleVisible(false);
  }, []);

  return (
    <>
      <View style={styles.care1}>
        <Text style={styles.carer}>Carer</Text>
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
        <LinearGradient
          style={[styles.wrapper, styles.care1Layout]}
          locations={[0, 1]}
          colors={["rgba(255, 165, 81, 0)", "#ffa551"]}
          useAngle={true}
          angle={-83.81}
        >
          <Pressable
            style={[styles.pressable, styles.care1Border]}
            onPress={openRectangle}
          />
        </LinearGradient>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector73.png")}
        />
        <Text style={[styles.homeNanny, styles.cleaningTypo]}>Home Nanny</Text>
        <LinearGradient
          style={[styles.care1Child, styles.care1Border]}
          locations={[0, 1]}
          colors={["rgba(255, 92, 81, 0)", "#ff5c51"]}
          useAngle={true}
          angle={-83.81}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector73.png")}
        />
        <Text style={[styles.childCare, styles.cleaningTypo]}>Child Care</Text>
        <LinearGradient
          style={[styles.care1Item, styles.care1Border]}
          locations={[0, 1]}
          colors={["rgba(0, 207, 182, 0)", "#00cfb6"]}
          useAngle={true}
          angle={-83.81}
        />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector73.png")}
        />
        <Text style={[styles.cleaning, styles.cleaningTypo]}>Cleaning</Text>
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

      <Modal animationType="fade" transparent visible={rectangleVisible}>
        <View style={styles.rectangleOverlay}>
          <Pressable style={styles.rectangleBg} onPress={closeRectangle} />
          <HomeNanny onClose={closeRectangle} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  vector1Layout: {
    height: 24,
    position: "absolute",
  },
  care1Layout: {
    height: 85,
    width: 316,
    left: 22,
    position: "absolute",
  },
  care1Border: {
    backgroundColor: "transparent",
    borderWidth: 1.5,
    borderColor: Color.labelsLightPrimary,
    borderRadius: Border.br_3xl,
    borderStyle: "solid",
  },
  vectorIconLayout: {
    height: 37,
    left: 41,
    width: 37,
    position: "absolute",
  },
  cleaningTypo: {
    width: 124,
    fontSize: FontSize.size_xl,
    left: 97,
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
  carer: {
    left: 137,
    fontSize: FontSize.size_13xl,
    width: 85,
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
  rectangleOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  rectangleBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  pressable: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: 119,
  },
  vectorIcon: {
    top: 143,
  },
  homeNanny: {
    top: 150,
  },
  care1Child: {
    top: 281,
    height: 85,
    width: 316,
    left: 22,
    position: "absolute",
  },
  vectorIcon1: {
    top: 305,
  },
  childCare: {
    top: 312,
  },
  care1Item: {
    top: 443,
    height: 85,
    width: 316,
    left: 22,
    position: "absolute",
  },
  vectorIcon2: {
    top: 467,
  },
  cleaning: {
    top: 474,
  },
  mainbarChild: {
    borderColor: Color.colorDimgray_100,
    borderTopWidth: 2,
    borderStyle: "solid",
    height: 68,
    left: 0,
    bottom: 0,
    right: 0,
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
    bottom: 8,
  },
  user: {
    right: 57,
    bottom: 23,
    width: 30,
    height: 30,
    position: "absolute",
  },
  care1: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Care1;
