import React, { useState, useCallback } from "react";
import { Image, StyleSheet, Text, View, Pressable, Modal } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Home42 from "../components/Home42";
import Home4 from "../components/Home4";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Home3 = () => {
  const [rectangle2Visible, setRectangle2Visible] = useState(false);
  const [rectangle4Visible, setRectangle4Visible] = useState(false);
  const navigation = useNavigation();

  const openRectangle2 = useCallback(() => {
    setRectangle2Visible(true);
  }, []);

  const closeRectangle2 = useCallback(() => {
    setRectangle2Visible(false);
  }, []);

  const openRectangle4 = useCallback(() => {
    setRectangle4Visible(true);
  }, []);

  const closeRectangle4 = useCallback(() => {
    setRectangle4Visible(false);
  }, []);

  return (
    <>
      <View style={[styles.home3, styles.iconLayout]}>
        <Image
          style={styles.image35Icon}
          resizeMode="cover"
          source={require("../assets/image-35.png")}
        />
        <Image
          style={styles.image9Icon}
          resizeMode="cover"
          source={require("../assets/image-9.png")}
        />
        <Text style={[styles.time, styles.timeTypo]}>TIME</Text>
        <Text style={[styles.text, styles.timeTypo]}>10 : 50</Text>
        <Text style={[styles.amPm, styles.amPmPosition]}>AM PM</Text>
        <Image
          style={styles.home3Child}
          resizeMode="cover"
          source={require("../assets/rectangle-30.png")}
        />
        <View style={[styles.home3Item, styles.vectorLayout]} />
        <View style={[styles.home3Inner, styles.home3Layout]} />
        <View style={styles.rectangleParent}>
          <Pressable style={styles.groupChild} onPress={openRectangle2} />
          <Text style={styles.book}>BOOK</Text>
        </View>
        <View style={styles.rectangleView} />
        <Text style={styles.mondaySaturday}>{`MONDAY - SATURDAY
SUNDAY rest
10.30am - 5.00pm`}</Text>
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require("../assets/rectangle-93.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector47.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector48.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector49.png")}
        />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector50.png")}
        />
        <Image
          style={[styles.vectorIcon4, styles.vectorIconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector51.png")}
        />
        <Text style={[styles.telWhatsapp, styles.mrLeeKaiTypo]}>
          TEL / WHATSAPP : 011-14156780
        </Text>
        <Text style={[styles.kamparPerak, styles.mrLeeKaiTypo]}>
          kampar , Perak
        </Text>
        <Text style={[styles.mrLeeKai, styles.mrLeeKaiTypo]}>
          MR. LEE KAI JUN
        </Text>
        <Text style={[styles.coolFamily, styles.mrLeeKaiTypo]}>
          COOL FAMILY
        </Text>
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-29.png")}
        />
        <LinearGradient
          style={styles.wrapper}
          locations={[1, 1]}
          colors={["rgba(217, 217, 217, 0.79)", "rgba(217, 217, 217, 0)"]}
          useAngle={true}
          angle={180}
        >
          <Pressable
            style={[styles.pressable, styles.icon1Layout]}
            onPress={openRectangle4}
          />
        </LinearGradient>
        <Pressable
          style={[styles.arrowLeftCircle, styles.vector1Layout]}
          onPress={() => navigation.navigate("Menu")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/arrowleftcircle7.png")}
          />
        </Pressable>
        <View style={styles.mainbarPosition}>
          <View style={[styles.mainbarChild, styles.mainbarPosition]} />
          <Pressable
            style={[styles.vector, styles.vectorLayout]}
            onPress={() => navigation.navigate("Message")}
          >
            <Image
              style={[styles.icon1, styles.icon1Layout]}
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
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/user.png")}
            />
          </Pressable>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={rectangle2Visible}>
        <View style={styles.rectangle2Overlay}>
          <Pressable style={styles.rectangle2Bg} onPress={closeRectangle2} />
          <Home42 onClose={closeRectangle2} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={rectangle4Visible}>
        <View style={styles.rectangle4Overlay}>
          <Pressable style={styles.rectangle4Bg} onPress={closeRectangle4} />
          <Home4 onClose={closeRectangle4} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  timeTypo: {
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
  },
  amPmPosition: {
    left: 107,
    position: "absolute",
  },
  vectorLayout: {
    height: 25,
    position: "absolute",
  },
  home3Layout: {
    borderRadius: Border.br_21xl,
    opacity: 0.4,
  },
  vectorIconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout: {
    height: "2.01%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  mrLeeKaiTypo: {
    textAlign: "center",
    fontFamily: FontFamily.alatsiRegular,
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  icon1Layout: {
    width: "100%",
    height: "100%",
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
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  image35Icon: {
    top: 289,
    left: 33,
    borderRadius: Border.br_3xs,
    width: 284,
    height: 223,
    position: "absolute",
  },
  image9Icon: {
    top: 543,
    left: 189,
    width: 129,
    height: 133,
    position: "absolute",
  },
  time: {
    top: 559,
    width: 35,
    height: 19,
    left: 40,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  text: {
    top: 582,
    width: 140,
    height: 28,
    left: 40,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  amPm: {
    top: 581,
    width: 53,
    height: 29,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
  },
  home3Child: {
    left: 32,
    width: 62,
    height: 27,
    opacity: 0.4,
    borderRadius: Border.br_11xl,
    top: 578,
    position: "absolute",
  },
  home3Item: {
    left: 97,
    backgroundColor: Color.colorGainsboro_400,
    width: 67,
    borderRadius: Border.br_21xl,
    opacity: 0.4,
    top: 578,
    height: 25,
  },
  home3Inner: {
    top: 580,
    backgroundColor: Color.colorGray_1800,
    width: 26,
    height: 22,
    left: 107,
    position: "absolute",
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
  groupChild: {
    top: 0,
    backgroundColor: Color.colorLemonchiffon,
    left: 0,
    height: 46,
    width: 157,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  book: {
    top: 15,
    left: 61,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  rectangleParent: {
    top: 694,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 46,
    width: 157,
    left: 107,
    position: "absolute",
  },
  rectangleView: {
    top: 75,
    left: 20,
    backgroundColor: Color.colorLinen,
    width: 320,
    height: 190,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  mondaySaturday: {
    top: 173,
    fontFamily: FontFamily.alatsiRegular,
    left: 187,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  rectangleIcon: {
    top: 100,
    left: 41,
    width: 107,
    height: 105,
    position: "absolute",
  },
  vectorIcon: {
    top: "12.64%",
    bottom: "85.48%",
    left: "45.69%",
    right: "50.14%",
    width: "4.17%",
    height: "1.88%",
    maxHeight: "100%",
  },
  vectorIcon1: {
    top: "15.65%",
    bottom: "82.47%",
    left: "45.69%",
    right: "50.14%",
    width: "4.17%",
    height: "1.88%",
    maxHeight: "100%",
  },
  vectorIcon2: {
    width: "3.61%",
    top: "18.67%",
    right: "50.69%",
    bottom: "79.32%",
    left: "45.69%",
  },
  vectorIcon3: {
    width: "4.44%",
    top: "21.81%",
    right: "50.42%",
    bottom: "76.18%",
    left: "45.14%",
  },
  vectorIcon4: {
    height: "2.85%",
    width: "5.25%",
    top: "10.11%",
    right: "14.14%",
    bottom: "87.04%",
    left: "80.61%",
  },
  telWhatsapp: {
    top: 244,
    left: 76,
    fontSize: FontSize.size_mini,
  },
  kamparPerak: {
    top: 149,
    left: 187,
    textAlign: "center",
    fontSize: FontSize.size_smi,
  },
  mrLeeKai: {
    top: 99,
    left: 187,
    textAlign: "center",
    fontSize: FontSize.size_smi,
  },
  coolFamily: {
    top: 122,
    left: 187,
    textAlign: "center",
    fontSize: FontSize.size_smi,
  },
  ellipseIcon: {
    top: 420,
    left: 120,
    width: 33,
    height: 32,
    position: "absolute",
  },
  rectangle4Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  rectangle4Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  pressable: {
    backgroundColor: "transparent",
    height: "100%",
  },
  wrapper: {
    left: 280,
    top: 344,
    height: 129,
    width: 24,
    position: "absolute",
  },
  icon: {
    height: "100%",
  },
  arrowLeftCircle: {
    left: 11,
    top: 24,
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
  },
  vector: {
    left: 62,
    bottom: 25,
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
  home3: {
    flex: 1,
    height: 825,
    backgroundColor: Color.white,
  },
});

export default Home3;
