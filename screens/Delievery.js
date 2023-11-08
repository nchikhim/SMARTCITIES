import React, { useState, useCallback } from "react";
import { Image, StyleSheet, View, Pressable, Text, Modal } from "react-native";
import PickUp from "../components/PickUp";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Delievery = () => {
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
      <View style={styles.delievery}>
        <Image
          style={styles.delieveryChild}
          resizeMode="cover"
          source={require("../assets/group-1027.png")}
        />
        <View style={styles.rectangleParent}>
          <Pressable
            style={[styles.groupChild, styles.groupLayout]}
            onPress={openRectangle}
          />
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={[styles.delievery1, styles.pickUpTypo]}>Delievery</Text>
          <Text style={[styles.pickUp, styles.pickUpTypo]}>Pick Up</Text>
        </View>
        <Pressable
          style={[styles.arrowLeftCircle, styles.vector1Layout]}
          onPress={() => navigation.navigate("Shopping")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/arrowleftcircle3.png")}
          />
        </Pressable>
        <View style={styles.delieveryItem} />
        <View style={[styles.plus, styles.plusLayout]}>
          <View style={[styles.plusChild, styles.childLayout]} />
          <Text style={[styles.plus125lRmContainer, styles.containerPosition]}>
            <Text style={styles.plus125l}>
              <Text style={styles.plus1}>{`100 Plus
`}</Text>
              <Text style={styles.l}>{`1.25L
`}</Text>
            </Text>
            <Text style={styles.rm580}>{`RM 5.80
`}</Text>
          </Text>
          <Text style={[styles.x4, styles.x4Typo]}>x4</Text>
          <Image
            style={[styles.plusItem, styles.itemLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-131.png")}
          />
        </View>
        <View style={[styles.nasiLemak, styles.plusLayout]}>
          <View style={[styles.nasiLemakChild, styles.childLayout]} />
          <Text
            style={[styles.nasiLemakAyamContainer, styles.containerPosition]}
          >
            <Text style={styles.plus125l}>
              <Text style={styles.plus1}>{`Nasi Lemak
`}</Text>
              <Text style={styles.l}>{`Ayam rendang
`}</Text>
            </Text>
            <Text style={styles.rm580}>RM 13.50</Text>
          </Text>
          <Text style={[styles.x1, styles.x4Typo]}>x1</Text>
          <Image
            style={[styles.nasiLemakItem, styles.itemLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-112.png")}
          />
        </View>
        <View style={[styles.saladBowl, styles.plusLayout]}>
          <View style={[styles.plusChild, styles.childLayout]} />
          <Image
            style={[styles.saladBowlItem, styles.itemLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-81.png")}
          />
          <Text style={styles.saladBowlNoContainer}>
            <Text style={styles.plus125l}>
              <Text style={styles.plus1}>{`Salad Bowl
`}</Text>
              <Text style={styles.l}>{`No sauces
`}</Text>
            </Text>
            <Text style={styles.rm580}>RM 13.00</Text>
          </Text>
          <Text style={[styles.x11, styles.x4Typo]}>x1</Text>
        </View>
        <Text style={styles.estimateArriveTime}>
          Estimate Arrive Time: 9 minits...
        </Text>
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
          <Text style={styles.message}>Message</Text>
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
          <PickUp onClose={closeRectangle} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    width: 135,
    top: 0,
    height: 49,
    position: "absolute",
  },
  pickUpTypo: {
    height: 28,
    width: 103,
    fontSize: FontSize.size_xl,
    top: 11,
    textAlign: "center",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 28,
    position: "absolute",
  },
  vector1Layout: {
    height: 24,
    position: "absolute",
  },
  plusLayout: {
    height: 92,
    width: 334,
    left: 16,
    position: "absolute",
  },
  childLayout: {
    borderRadius: Border.br_mini,
    height: 92,
    width: 334,
    top: 0,
    left: 0,
    position: "absolute",
  },
  containerPosition: {
    height: 62,
    left: 123,
    textAlign: "left",
    position: "absolute",
  },
  x4Typo: {
    height: 27,
    width: 35,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  itemLayout: {
    height: 77,
    width: 84,
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
    width: 37,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  delieveryChild: {
    top: 422,
    width: 360,
    height: 378,
    left: 0,
    position: "absolute",
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
  groupChild: {
    left: 135,
    borderTopRightRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro_400,
  },
  groupItem: {
    borderTopLeftRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.colorSpringgreen_100,
    left: 0,
  },
  delievery1: {
    left: 16,
    width: 103,
    fontSize: FontSize.size_xl,
    top: 11,
  },
  pickUp: {
    left: 146,
    width: 103,
    fontSize: FontSize.size_xl,
    top: 11,
  },
  rectangleParent: {
    top: 75,
    left: 45,
    width: 270,
    height: 49,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrowLeftCircle: {
    left: 10,
    top: 32,
    width: 24,
  },
  delieveryItem: {
    height: 276,
    width: 334,
    top: 141,
    left: 16,
    position: "absolute",
    backgroundColor: Color.white,
  },
  plusChild: {
    backgroundColor: Color.colorWhitesmoke_300,
  },
  plus1: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
  },
  l: {
    fontFamily: FontFamily.preahvihearRegular,
    fontSize: FontSize.size_xs,
  },
  plus125l: {
    color: Color.labelsLightPrimary,
  },
  rm580: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.pragatiNarrowRegular,
    color: Color.colorCrimson,
  },
  plus125lRmContainer: {
    top: 20,
    width: 193,
  },
  x4: {
    left: 290,
    top: 64,
    height: 27,
    width: 35,
  },
  plusItem: {
    top: 6,
    left: 12,
  },
  plus: {
    top: 325,
  },
  nasiLemakChild: {
    backgroundColor: "rgba(244, 244, 242, 0.94)",
  },
  nasiLemakAyamContainer: {
    top: 10,
    width: 188,
  },
  x1: {
    top: 65,
    left: 285,
  },
  nasiLemakItem: {
    top: 8,
    left: 5,
  },
  nasiLemak: {
    top: 233,
  },
  saladBowlItem: {
    top: 9,
    left: 14,
  },
  saladBowlNoContainer: {
    top: 14,
    left: 124,
    height: 61,
    width: 193,
    textAlign: "left",
    position: "absolute",
  },
  x11: {
    left: 295,
    top: 64,
    height: 27,
    width: 35,
  },
  saladBowl: {
    top: 141,
    height: 92,
  },
  estimateArriveTime: {
    top: 693,
    left: 7,
    fontSize: FontSize.size_lg,
    color: Color.white,
    width: 295,
    height: 34,
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 28,
    position: "absolute",
  },
  mainbarChild: {
    borderStyle: "solid",
    borderColor: Color.colorDimgray_100,
    borderTopWidth: 2,
    backgroundColor: Color.white,
  },
  icon1: {
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
  },
  vector: {
    left: 62,
    right: 274,
    bottom: 25,
    height: 25,
    position: "absolute",
  },
  message: {
    left: 46,
    width: 55,
    fontFamily: FontFamily.interRegular,
    bottom: 8,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  menu: {
    bottom: 7,
    left: 164,
  },
  icon2: {
    height: "100%",
    width: "100%",
  },
  vector1: {
    left: 169,
    top: 18,
    width: 22,
  },
  profile: {
    right: 54,
    bottom: 8,
    width: 37,
  },
  user: {
    right: 57,
    bottom: 23,
    width: 30,
    height: 30,
    position: "absolute",
  },
  delievery: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Delievery;
