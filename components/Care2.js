import React, { useState, useCallback } from "react";
import { View, StyleSheet, Pressable, Text, Image, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Filter from "./Filter";
import Save from "./Save";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Care2 = ({ onClose }) => {
  const [groupContainerVisible, setGroupContainerVisible] = useState(false);
  const [vectorIcon1Visible, setVectorIcon1Visible] = useState(false);
  const navigation = useNavigation();

  const openGroupContainer = useCallback(() => {
    setGroupContainerVisible(true);
  }, []);

  const closeGroupContainer = useCallback(() => {
    setGroupContainerVisible(false);
  }, []);

  const openVectorIcon1 = useCallback(() => {
    setVectorIcon1Visible(true);
  }, []);

  const closeVectorIcon1 = useCallback(() => {
    setVectorIcon1Visible(false);
  }, []);

  return (
    <>
      <View style={[styles.care2, styles.iconLayout1]}>
        <Pressable
          style={[styles.care2Child, styles.care2ChildLayout]}
          onPress={() => navigation.navigate("Care3")}
        />
        <Text style={[styles.liveInNanny, styles.filterTypo]}>
          Live-in Nanny
        </Text>
        <Pressable
          style={[styles.arrowLeftCircle, styles.vector2Layout]}
          onPress={() => navigation.navigate("Care1")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/arrowleftcircle3.png")}
          />
        </Pressable>
        <Pressable style={styles.vectorParent} onPress={openGroupContainer}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector68.png")}
          />
          <Text style={[styles.filter, styles.filterTypo]}>Filter</Text>
        </Pressable>
        <View style={styles.care2Item} />
        <Pressable style={styles.vector} onPress={openVectorIcon1}>
          <Image
            style={[styles.icon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector69.png")}
          />
        </Pressable>
        <Image
          style={[styles.vectorIcon1, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector70.png")}
        />
        <Text style={styles.save}>SAVE</Text>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout4]}
          resizeMode="cover"
          source={require("../assets/vector71.png")}
        />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconLayout3]}
          resizeMode="cover"
          source={require("../assets/vector72.png")}
        />
        <Image
          style={[styles.vectorIcon4, styles.vectorIconLayout2]}
          resizeMode="cover"
          source={require("../assets/vector69.png")}
        />
        <Text style={[styles.kamparPerak, styles.textTypo]}>
          kampar , Perak
        </Text>
        <Text style={[styles.rachealLimYi, styles.yearsPosition1]}>
          Racheal Lim Yi
        </Text>
        <Image
          style={[styles.care2Inner, styles.care2InnerLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-271.png")}
        />
        <Text style={[styles.years, styles.yearsPosition]}>4 years</Text>
        <Text
          style={[styles.approximateSalaryPer, styles.yearsPosition1]}
        >{`Approximate salary:
                          per day`}</Text>
        <Text style={[styles.rm8000, styles.rm8000Typo]}>RM 80.00</Text>
        <Image
          style={[styles.vectorIcon5, styles.vectorIconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector65.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>011-98765432</Text>
        <Image
          style={[styles.starIcon, styles.starIconPosition4]}
          resizeMode="cover"
          source={require("../assets/star3.png")}
        />
        <Image
          style={[styles.starIcon1, styles.starIconPosition3]}
          resizeMode="cover"
          source={require("../assets/star3.png")}
        />
        <Image
          style={[styles.starIcon2, styles.starIconLayout]}
          resizeMode="cover"
          source={require("../assets/star4.png")}
        />
        <Image
          style={[styles.starIcon3, styles.starIconPosition2]}
          resizeMode="cover"
          source={require("../assets/star3.png")}
        />
        <Image
          style={[styles.starIcon4, styles.starIconPosition1]}
          resizeMode="cover"
          source={require("../assets/star4.png")}
        />
        <Image
          style={[styles.vectorIcon6, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector66.png")}
        />
        <Image
          style={[styles.vectorIcon7, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector67.png")}
        />
        <Text style={[styles.yearsOld, styles.yearsPosition1]}>
          35 years old
        </Text>
        <View style={[styles.rectangleView, styles.care2ChildLayout]} />
        <Image
          style={[styles.vectorIcon8, styles.vectorIconLayout4]}
          resizeMode="cover"
          source={require("../assets/vector71.png")}
        />
        <Image
          style={[styles.vectorIcon9, styles.vectorIconLayout3]}
          resizeMode="cover"
          source={require("../assets/vector72.png")}
        />
        <Image
          style={[styles.vectorIcon10, styles.vectorIconLayout2]}
          resizeMode="cover"
          source={require("../assets/vector69.png")}
        />
        <Text style={[styles.kamparPerak1, styles.textTypo]}>
          kampar , Perak
        </Text>
        <Text style={[styles.hoWenJuni, styles.textTypo]}>Ho Wen Juni</Text>
        <Image
          style={[styles.ellipseIcon, styles.care2InnerLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-272.png")}
        />
        <Text style={[styles.years1, styles.years1Position]}>2 years</Text>
        <Text
          style={[styles.approximateSalaryPer1, styles.yearsPosition1]}
        >{`Approximate salary:
                          per day`}</Text>
        <Text style={[styles.rm7400, styles.rm8000Typo]}>RM 74.00</Text>
        <Image
          style={[styles.vectorIcon11, styles.vectorIconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector65.png")}
        />
        <Text style={[styles.text1, styles.textTypo]}>018-13467985</Text>
        <Image
          style={[styles.starIcon5, styles.starIconPosition]}
          resizeMode="cover"
          source={require("../assets/star3.png")}
        />
        <Image
          style={[styles.starIcon6, styles.starIconPosition]}
          resizeMode="cover"
          source={require("../assets/star4.png")}
        />
        <Image
          style={[styles.starIcon7, styles.starIconPosition]}
          resizeMode="cover"
          source={require("../assets/star3.png")}
        />
        <Image
          style={[styles.starIcon8, styles.starIconPosition]}
          resizeMode="cover"
          source={require("../assets/star4.png")}
        />
        <Image
          style={[styles.vectorIcon12, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector66.png")}
        />
        <Image
          style={[styles.vectorIcon13, styles.years1Position]}
          resizeMode="cover"
          source={require("../assets/vector67.png")}
        />
        <Text style={[styles.yearsOld1, styles.textTypo]}>26 years old</Text>
        <Image
          style={[styles.rectangleIcon, styles.care2Child1Layout]}
          resizeMode="cover"
          source={require("../assets/rectangle-204.png")}
        />
        <Image
          style={[styles.care2Child1, styles.care2Child1Layout]}
          resizeMode="cover"
          source={require("../assets/rectangle-2051.png")}
        />
        <View style={styles.mainbarPosition}>
          <View style={[styles.mainbarChild, styles.mainbarPosition]} />
          <Pressable
            style={styles.vector1}
            onPress={() => navigation.navigate("Message")}
          >
            <Image
              style={[styles.icon2, styles.iconLayout]}
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
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/user1.png")}
            />
          </Pressable>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={groupContainerVisible}>
        <View style={styles.groupContainerOverlay}>
          <Pressable
            style={styles.groupContainerBg}
            onPress={closeGroupContainer}
          />
          <Filter onClose={closeGroupContainer} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={vectorIcon1Visible}>
        <View style={styles.vectorIcon1Overlay}>
          <Pressable style={styles.vectorIcon1Bg} onPress={closeVectorIcon1} />
          <Save onClose={closeVectorIcon1} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  care2ChildLayout: {
    height: 215,
    backgroundColor: Color.colorHoneydew_100,
    borderRadius: Border.br_11xl,
    width: 320,
    left: 20,
    position: "absolute",
  },
  filterTypo: {
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  vector2Layout: {
    height: 24,
    position: "absolute",
  },
  iconLayout: {
    width: "100%",
    height: "100%",
  },
  vectorIconLayout4: {
    left: "45.83%",
    right: "50%",
    width: "4.17%",
    height: "1.88%",
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vectorIconLayout3: {
    right: "50.56%",
    width: "3.61%",
    height: "2%",
    left: "45.83%",
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vectorIconLayout2: {
    left: "80.83%",
    right: "13.89%",
    height: "2.84%",
    width: "5.28%",
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  textTypo: {
    fontSize: FontSize.size_smi,
    textAlign: "center",
  },
  yearsPosition1: {
    left: 187,
    fontFamily: FontFamily.alatsiRegular,
    color: Color.labelsLightPrimary,
  },
  care2InnerLayout: {
    height: 94,
    width: 94,
    left: 45,
    position: "absolute",
  },
  yearsPosition: {
    top: 278,
    position: "absolute",
  },
  rm8000Typo: {
    color: Color.colorRed_100,
    left: 187,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.alatsiRegular,
    textAlign: "left",
    position: "absolute",
  },
  vectorIconLayout1: {
    height: 17,
    width: 17,
    left: 163,
    position: "absolute",
  },
  starIconPosition4: {
    height: 15,
    top: 329,
    position: "absolute",
    overflow: "hidden",
  },
  starIconPosition3: {
    left: 44,
    width: 15,
  },
  starIconLayout: {
    width: 16,
    left: 62,
  },
  starIconPosition2: {
    left: 81,
    width: 15,
  },
  starIconPosition1: {
    left: 99,
    width: 16,
  },
  vectorIconLayout: {
    height: 14,
    width: 14,
    left: 165,
  },
  years1Position: {
    top: 529,
    position: "absolute",
  },
  starIconPosition: {
    top: 580,
    height: 15,
    position: "absolute",
    overflow: "hidden",
  },
  care2Child1Layout: {
    width: 18,
    left: 121,
    height: 18,
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
    bottom: 8,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  care2Child: {
    top: 199,
  },
  liveInNanny: {
    left: 74,
    fontSize: FontSize.size_13xl,
    width: 211,
    height: 36,
    top: 32,
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrowLeftCircle: {
    left: 10,
    width: 24,
    height: 24,
    top: 32,
  },
  groupContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  vectorIcon: {
    top: -1,
    left: -1,
    width: 22,
    height: 20,
    position: "absolute",
  },
  filter: {
    top: 0,
    left: 29,
    fontSize: FontSize.size_mini,
  },
  vectorParent: {
    top: 94,
    left: 285,
    width: 65,
    height: 18,
    position: "absolute",
  },
  care2Item: {
    top: 130,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorLightblue_100,
    height: 49,
    width: 320,
    left: 20,
    position: "absolute",
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
  icon1: {
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "86.11%",
    top: "3.63%",
    right: "8.61%",
    bottom: "93.54%",
    height: "2.84%",
    width: "5.28%",
    position: "absolute",
  },
  vectorIcon1: {
    height: "2.25%",
    width: "4.83%",
    top: "18.13%",
    right: "83.5%",
    bottom: "79.63%",
    left: "11.67%",
    position: "absolute",
  },
  save: {
    top: 55,
    left: 307,
    textAlign: "center",
    fontFamily: FontFamily.alatsiRegular,
    fontSize: FontSize.size_xs,
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  vectorIcon2: {
    top: "28%",
    bottom: "70.13%",
  },
  vectorIcon3: {
    top: "44.38%",
    bottom: "53.63%",
  },
  vectorIcon4: {
    top: "24.88%",
    bottom: "72.29%",
  },
  kamparPerak: {
    top: 354,
    left: 186,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.alatsiRegular,
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  rachealLimYi: {
    top: 226,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    position: "absolute",
  },
  care2Inner: {
    top: 224,
  },
  years: {
    left: 187,
    fontFamily: FontFamily.alatsiRegular,
    color: Color.labelsLightPrimary,
    fontSize: FontSize.size_smi,
    textAlign: "center",
  },
  approximateSalaryPer: {
    top: 311,
    fontSize: FontSize.size_xs,
    left: 187,
    textAlign: "left",
    position: "absolute",
  },
  rm8000: {
    top: 325,
  },
  vectorIcon5: {
    top: 387,
  },
  text: {
    top: 386,
    left: 186,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.alatsiRegular,
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  starIcon: {
    left: 118,
    width: 15,
    height: 15,
    top: 329,
  },
  starIcon1: {
    height: 15,
    top: 329,
    position: "absolute",
    overflow: "hidden",
  },
  starIcon2: {
    height: 15,
    top: 329,
    position: "absolute",
    overflow: "hidden",
  },
  starIcon3: {
    height: 15,
    top: 329,
    position: "absolute",
    overflow: "hidden",
  },
  starIcon4: {
    height: 15,
    top: 329,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon6: {
    top: 312,
    position: "absolute",
  },
  vectorIcon7: {
    top: 278,
    position: "absolute",
  },
  yearsOld: {
    top: 251,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    position: "absolute",
  },
  rectangleView: {
    top: 450,
  },
  vectorIcon8: {
    top: "59.38%",
    bottom: "38.75%",
  },
  vectorIcon9: {
    top: "75.75%",
    bottom: "22.25%",
  },
  vectorIcon10: {
    top: "56.25%",
    bottom: "40.91%",
  },
  kamparPerak1: {
    top: 605,
    left: 186,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.alatsiRegular,
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  hoWenJuni: {
    top: 477,
    left: 186,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.alatsiRegular,
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  ellipseIcon: {
    top: 475,
  },
  years1: {
    left: 187,
    fontFamily: FontFamily.alatsiRegular,
    color: Color.labelsLightPrimary,
    fontSize: FontSize.size_smi,
    textAlign: "center",
  },
  approximateSalaryPer1: {
    top: 562,
    fontSize: FontSize.size_xs,
    left: 187,
    textAlign: "left",
    position: "absolute",
  },
  rm7400: {
    top: 576,
  },
  vectorIcon11: {
    top: 638,
  },
  text1: {
    top: 637,
    left: 186,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.alatsiRegular,
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  starIcon5: {
    left: 44,
    width: 15,
  },
  starIcon6: {
    width: 16,
    left: 62,
  },
  starIcon7: {
    left: 81,
    width: 15,
  },
  starIcon8: {
    left: 99,
    width: 16,
  },
  vectorIcon12: {
    top: 563,
    position: "absolute",
  },
  vectorIcon13: {
    height: 14,
    width: 14,
    left: 165,
  },
  yearsOld1: {
    top: 502,
    left: 186,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.alatsiRegular,
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  rectangleIcon: {
    top: 551,
  },
  care2Child1: {
    top: 300,
  },
  mainbarChild: {
    borderStyle: "solid",
    borderColor: Color.colorDimgray_100,
    borderTopWidth: 2,
    backgroundColor: Color.white,
  },
  icon2: {
    height: "100%",
  },
  vector1: {
    bottom: 25,
    height: 25,
    left: 62,
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
    height: "100%",
    maxWidth: "100%",
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
  care2: {
    width: 360,
    height: 800,
    backgroundColor: Color.white,
  },
});

export default Care2;
