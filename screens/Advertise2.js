import React, { useState, useCallback } from "react";
import { Text, StyleSheet, Image, Pressable, View, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HistoryFrame from "../components/HistoryFrame";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const Advertise2 = () => {
  const [vectorIcon1Visible, setVectorIcon1Visible] = useState(false);
  const navigation = useNavigation();

  const openVectorIcon1 = useCallback(() => {
    setVectorIcon1Visible(true);
  }, []);

  const closeVectorIcon1 = useCallback(() => {
    setVectorIcon1Visible(false);
  }, []);

  return (
    <>
      <View style={styles.advertise2}>
        <Text style={styles.history}>History</Text>
        <Pressable
          style={[styles.arrowLeftCircle, styles.vector2Layout]}
          onPress={() => navigation.navigate("AdvertiseS1")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/arrowleftcircle3.png")}
          />
        </Pressable>
        <View style={[styles.advertise2Child, styles.advertise2Layout]} />
        <Text style={[styles.titleAbcStart, styles.titleTypo1]}>{`Title:  ABC
Start: 12/02/2022
End:   12/02/2023`}</Text>
        <View style={[styles.advertise2Item, styles.advertise2Layout]} />
        <Text style={[styles.titleDefStart, styles.titleTypo]}>{`Title:  DEF
Start: -
End:   -`}</Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector5.png")}
        />
        <Pressable
          style={[styles.wrapper, styles.vectorIconLayout]}
          onPress={() => navigation.navigate("AdvertiseS2")}
        >
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/vector4.png")}
          />
        </Pressable>
        <View style={[styles.advertise2Inner, styles.advertise2Layout]} />
        <Text style={[styles.titleGhiStart, styles.titleTypo]}>{`Title:  GHI
Start: -
End:   -`}</Text>
        <View style={[styles.rectangleView, styles.advertise2Layout]} />
        <Text style={[styles.titleJklStart, styles.titleTypo1]}>{`Title:  JKL
Start: 01/01/2022
End:   01/12/2023`}</Text>
        <Pressable style={styles.vector} onPress={openVectorIcon1}>
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/vector28.png")}
          />
        </Pressable>
        <Pressable
          style={styles.container}
          onPress={() => navigation.navigate("AdvertiseS2")}
        >
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/polygon-1.png")}
          />
        </Pressable>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector8.png")}
        />
        <View style={styles.mainbarPosition}>
          <View style={[styles.mainbarChild, styles.mainbarPosition]} />
          <Pressable
            style={styles.vector1}
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
            style={[styles.vector2, styles.vector2Layout]}
            onPress={() => navigation.navigate("Menu")}
          >
            <Image
              style={styles.icon5}
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

      <Modal animationType="fade" transparent visible={vectorIcon1Visible}>
        <View style={styles.vectorIcon1Overlay}>
          <Pressable style={styles.vectorIcon1Bg} onPress={closeVectorIcon1} />
          <HistoryFrame onClose={closeVectorIcon1} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  vector2Layout: {
    height: 24,
    position: "absolute",
  },
  advertise2Layout: {
    height: 69,
    width: 310,
    borderRadius: Border.br_mid,
    position: "absolute",
  },
  titleTypo1: {
    fontSize: FontSize.size_sm,
    left: 38,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  titleTypo: {
    left: 39,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  vectorIconLayout: {
    height: 22,
    width: 22,
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
  history: {
    left: 124,
    fontSize: FontSize.size_13xl,
    width: 111,
    height: 39,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    top: 35,
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
    top: 35,
    height: 24,
  },
  advertise2Child: {
    top: 110,
    backgroundColor: "rgba(54, 142, 0, 0.5)",
    left: 24,
    width: 310,
    borderRadius: Border.br_mid,
  },
  titleAbcStart: {
    top: 119,
  },
  advertise2Item: {
    top: 189,
    backgroundColor: "rgba(255, 0, 0, 0.5)",
    left: 24,
    width: 310,
    borderRadius: Border.br_mid,
  },
  titleDefStart: {
    top: 198,
  },
  vectorIcon: {
    top: 224,
    left: 298,
    width: 22,
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 298,
    width: 22,
    top: 198,
  },
  advertise2Inner: {
    top: 268,
    left: 25,
    backgroundColor: "rgba(0, 99, 216, 0.5)",
  },
  titleGhiStart: {
    top: 277,
  },
  rectangleView: {
    top: 347,
    backgroundColor: "rgba(255, 214, 0, 0.5)",
    left: 24,
    width: 310,
    borderRadius: Border.br_mid,
  },
  titleJklStart: {
    top: 356,
  },
  vectorIcon1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  vectorIcon1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  vector: {
    left: 302,
    top: 33,
    width: 34,
    height: 34,
    position: "absolute",
  },
  container: {
    left: 305,
    top: 375,
    width: 13,
    height: 14,
    position: "absolute",
  },
  vectorIcon1: {
    top: 134,
    left: 299,
  },
  mainbarChild: {
    borderStyle: "solid",
    borderColor: Color.colorDimgray_100,
    borderTopWidth: 2,
    backgroundColor: Color.white,
  },
  vector1: {
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
  icon5: {
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
  },
  vector2: {
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
  advertise2: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Advertise2;
