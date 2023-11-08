import React, { useState, useCallback } from "react";
import { Text, StyleSheet, Image, View, Pressable, Modal } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Unavailable from "../components/Unavailable";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const UtilityBill = () => {
  const [rectangle1Visible, setRectangle1Visible] = useState(false);
  const [rectangle2Visible, setRectangle2Visible] = useState(false);
  const navigation = useNavigation();

  const openRectangle1 = useCallback(() => {
    setRectangle1Visible(true);
  }, []);

  const closeRectangle1 = useCallback(() => {
    setRectangle1Visible(false);
  }, []);

  const openRectangle2 = useCallback(() => {
    setRectangle2Visible(true);
  }, []);

  const closeRectangle2 = useCallback(() => {
    setRectangle2Visible(false);
  }, []);

  return (
    <>
      <View style={styles.utilitybill}>
        <Text style={styles.utilityBills}>
          <Text style={styles.utilityBills1}>Utility Bills</Text>
          <Text style={styles.text}>{` `}</Text>
        </Text>
        <Image
          style={[styles.utilitybillChild, styles.utilitybillPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-19.png")}
        />
        <Image
          style={[styles.utilitybillItem, styles.utilitybillPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-20.png")}
        />
        <Image
          style={styles.utilitybillInner}
          resizeMode="cover"
          source={require("../assets/ellipse-21.png")}
        />
        <LinearGradient
          style={[styles.wrapper, styles.frameLayout]}
          locations={[0, 1]}
          colors={["rgba(55, 71, 221, 0.7)", "rgba(55, 71, 221, 0)"]}
          useAngle={true}
          angle={180}
        >
          <Pressable
            style={styles.pressableShadowBox}
            onPress={() => navigation.navigate("Payments")}
          />
        </LinearGradient>
        <LinearGradient
          style={[styles.container, styles.frameLayout]}
          locations={[0, 1]}
          colors={["rgba(55, 71, 221, 0.7)", "rgba(55, 71, 221, 0)"]}
          useAngle={true}
          angle={180}
        >
          <Pressable
            style={styles.pressableShadowBox}
            onPress={openRectangle1}
          />
        </LinearGradient>
        <LinearGradient
          style={[styles.frame, styles.frameLayout]}
          locations={[0, 1]}
          colors={["rgba(55, 71, 221, 0.7)", "rgba(55, 71, 221, 0)"]}
          useAngle={true}
          angle={180}
        >
          <Pressable
            style={styles.pressableShadowBox}
            onPress={openRectangle2}
          />
        </LinearGradient>
        <Image
          style={[styles.rectangleIcon, styles.utilitybillChildLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-71.png")}
        />
        <Image
          style={[styles.utilitybillChild1, styles.utilitybillChildLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-72.png")}
        />
        <Image
          style={[styles.utilitybillChild2, styles.utilitybillChildLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-73.png")}
        />
        <Text style={[styles.electricity, styles.waterTypo]}>Electricity</Text>
        <Text style={[styles.water, styles.waterTypo]}>Water</Text>
        <Text style={[styles.internet, styles.waterTypo]}>Internet</Text>
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

      <Modal animationType="fade" transparent visible={rectangle1Visible}>
        <View style={styles.rectangle1Overlay}>
          <Pressable style={styles.rectangle1Bg} onPress={closeRectangle1} />
          <Unavailable onClose={closeRectangle1} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={rectangle2Visible}>
        <View style={styles.rectangle2Overlay}>
          <Pressable style={styles.rectangle2Bg} onPress={closeRectangle2} />
          <Unavailable onClose={closeRectangle2} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  utilitybillPosition: {
    left: 0,
    position: "absolute",
  },
  frameLayout: {
    height: 140,
    width: 312,
    position: "absolute",
  },
  utilitybillChildLayout: {
    height: 122,
    width: 122,
    position: "absolute",
  },
  waterTypo: {
    height: 55,
    width: 150,
    color: Color.white,
    fontFamily: FontFamily.scheherazade,
    fontSize: FontSize.size_12xl_5,
    fontWeight: "700",
    textAlign: "left",
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
    color: Color.labelsLightPrimary,
    fontSize: FontSize.size_xs,
    bottom: 8,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  utilityBills1: {
    fontFamily: FontFamily.interRegular,
  },
  text: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  utilityBills: {
    top: 54,
    left: 97,
    fontSize: FontSize.size_13xl,
    color: Color.colorGray_900,
    width: 248,
    height: 59,
    textAlign: "left",
    position: "absolute",
  },
  utilitybillChild: {
    top: 99,
    width: 360,
    height: 392,
  },
  utilitybillItem: {
    top: 318,
    width: 285,
    height: 482,
  },
  utilitybillInner: {
    top: 327,
    width: 191,
    height: 473,
    left: 169,
    position: "absolute",
  },
  pressableShadowBox: {
    backgroundColor: "transparent",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xl,
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: 168,
    left: 26,
  },
  rectangle1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  rectangle1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  container: {
    left: 20,
    top: 351,
  },
  rectangle2Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  rectangle2Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  frame: {
    left: 18,
    top: 551,
  },
  rectangleIcon: {
    top: 361,
    left: 26,
  },
  utilitybillChild1: {
    top: 174,
    left: 33,
  },
  utilitybillChild2: {
    top: 564,
    left: 36,
  },
  electricity: {
    top: 223,
    left: 185,
    width: 150,
    color: Color.white,
    fontFamily: FontFamily.scheherazade,
    fontSize: FontSize.size_12xl_5,
  },
  water: {
    top: 399,
    left: 180,
  },
  internet: {
    top: 600,
    left: 185,
    width: 150,
    color: Color.white,
    fontFamily: FontFamily.scheherazade,
    fontSize: FontSize.size_12xl_5,
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
    right: 169,
    bottom: 26,
    left: 169,
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
  utilitybill: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default UtilityBill;
