import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, Pressable, Image, Modal } from "react-native";
import Home41 from "./Home41";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Home42 = ({ onClose }) => {
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
      <View style={styles.home4}>
        <Text style={[styles.personalInformation, styles.continueTypo]}>
          PERSONAL INFORMATION
        </Text>
        <View style={styles.home4Child} />
        <Text style={[styles.nameCoolgirls, styles.nameCoolgirlsTypo]}>{`
NAME : coolgirls

PHONE NUMBER: 011-18795467

ADDRESS: No.3347, Jln Seksyen 3/3, Bandar Barat, 31900 Kampar, Perak`}</Text>
        <Pressable style={styles.home4Item} onPress={openRectangle} />
        <Text style={[styles.continue, styles.continueTypo]}>CONTINUE</Text>
        <Pressable
          style={styles.arrowLeftCircle}
          onPress={() => navigation.navigate("Home3")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/arrowleftcircle6.png")}
          />
        </Pressable>
        <Text
          style={[styles.date15112023Time, styles.nameCoolgirlsTypo]}
        >{`DATE: 15/11/2023
TIME: 10:50 AM`}</Text>
      </View>

      <Modal animationType="fade" transparent visible={rectangleVisible}>
        <View style={styles.rectangleOverlay}>
          <Pressable style={styles.rectangleBg} onPress={closeRectangle} />
          <Home41 onClose={closeRectangle} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  continueTypo: {
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  nameCoolgirlsTypo: {
    fontFamily: FontFamily.aleoRegular,
    letterSpacing: 0.5,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  personalInformation: {
    top: 13,
    left: 72,
    fontSize: FontSize.size_sm,
  },
  home4Child: {
    left: -47,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_200,
    borderTopWidth: 1,
    width: 361,
    height: 1,
    top: 44,
    position: "absolute",
  },
  nameCoolgirls: {
    top: 94,
    left: 16,
    width: 273,
    height: 130,
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
  home4Item: {
    top: 245,
    left: 81,
    backgroundColor: Color.colorLemonchiffon,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 157,
    height: 46,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  continue: {
    top: 260,
    left: 125,
    fontSize: FontSize.size_smi,
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  arrowLeftCircle: {
    left: 14,
    top: 11,
    width: 24,
    height: 24,
    position: "absolute",
  },
  date15112023Time: {
    left: 96,
    top: 44,
  },
  home4: {
    backgroundColor: Color.white,
    width: 298,
    height: 305,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    borderRadius: Border.br_11xl,
  },
});

export default Home42;
