import React, { useState, useCallback } from "react";
import { StyleSheet, View, Image, Text, Pressable, Modal } from "react-native";
import Keyboard1 from "../components/Keyboard1";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const HelpCentre = () => {
  const [groupImage1Visible, setGroupImage1Visible] = useState(false);
  const navigation = useNavigation();

  const openGroupImage1 = useCallback(() => {
    setGroupImage1Visible(true);
  }, []);

  const closeGroupImage1 = useCallback(() => {
    setGroupImage1Visible(false);
  }, []);

  return (
    <>
      <View style={styles.helpCentre}>
        <View style={[styles.helpCentreChild, styles.groupItemLayout]} />
        <Image
          style={styles.helpCentreItem}
          resizeMode="cover"
          source={require("../assets/group-978.png")}
        />
        <View style={styles.rectangleParent}>
          <View style={styles.groupChild} />
          <Text style={[styles.doingGoodHow, styles.image18IconLayout]}>
            Hi, I have an enquiry about .....
          </Text>
          <Text style={styles.minutesAgo}>5 minutes ago</Text>
        </View>
        <View style={[styles.vectorParent, styles.vectorPosition]}>
          <Image
            style={[styles.groupItem, styles.groupItemLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-34.png")}
          />
          <Text
            style={[styles.hiAndreaHow, styles.andreaPosition]}
          >{`Hi coolgirls! Our Support Specialist is aware of your issue and will join you shortly. `}</Text>
          <Text style={[styles.minutesAgo1, styles.minutesPosition]}>
            5 minutes ago
          </Text>
          <Text style={styles.closeAnticon}></Text>
        </View>
        <View style={[styles.vectorGroup, styles.vectorPosition]}>
          <Image
            style={[styles.groupItem, styles.groupItemLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-34.png")}
          />
          <Text
            style={[styles.hiAndreaHow1, styles.andreaPosition]}
          >{`Hi, I’m Aemi here.
Greeting from .....
Are you still available to chat? `}</Text>
          <Text style={[styles.minutesAgo2, styles.minutesPosition]}>
            5 minutes ago
          </Text>
          <Text style={styles.closeAnticon}></Text>
        </View>
        <Text style={[styles.michaelAmy, styles.michaelAmyFlexBox]}>
          Help Centre
        </Text>
        <Text
          style={[
            styles.ionArrowLeftBIonicons,
            styles.ionArrowLeftBIoniconsTypo,
          ]}
        >
          
        </Text>
        <Text
          style={[
            styles.optionsVerticalSimpleLine,
            styles.ionArrowLeftBIoniconsTypo,
          ]}
        >
          
        </Text>
        <Text style={[styles.todayAt1045, styles.michaelAmyFlexBox]}>
          TODAY AT 10:45 AM
        </Text>
        <Pressable style={styles.wrapper} onPress={openGroupImage1}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/group-986.png")}
          />
        </Pressable>
        <Image
          style={[styles.image18Icon, styles.image18IconLayout]}
          resizeMode="cover"
          source={require("../assets/image-18.png")}
        />
        <Pressable
          style={[styles.arrowLeftCircle, styles.vector1Layout]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={styles.icon1}
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
              style={styles.icon}
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
              style={styles.icon1}
              resizeMode="cover"
              source={require("../assets/user.png")}
            />
          </Pressable>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={groupImage1Visible}>
        <View style={styles.groupImage1Overlay}>
          <Pressable style={styles.groupImage1Bg} onPress={closeGroupImage1} />
          <Keyboard1 onClose={closeGroupImage1} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  groupItemLayout: {
    borderRadius: Border.br_base,
    position: "absolute",
  },
  image18IconLayout: {
    height: 34,
    position: "absolute",
  },
  vectorPosition: {
    height: 102,
    left: 23,
    position: "absolute",
  },
  andreaPosition: {
    color: Color.colorDarkslategray_300,
    marginTop: -43,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
    top: "50%",
    position: "absolute",
  },
  minutesPosition: {
    height: 29,
    color: Color.colorMediumseagreen_100,
    marginTop: 22,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    top: "50%",
    position: "absolute",
  },
  michaelAmyFlexBox: {
    textAlign: "left",
    top: "50%",
  },
  ionArrowLeftBIoniconsTypo: {
    width: "2.92%",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    top: "50%",
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
    bottom: 8,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  helpCentreChild: {
    top: 112,
    left: 11,
    width: 338,
    height: 589,
    backgroundColor: Color.white,
    overflow: "hidden",
  },
  helpCentreItem: {
    top: 506,
    left: 21,
    width: 134,
    height: 79,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    backgroundColor: Color.colorMediumseagreen_100,
    shadowColor: "rgba(0, 0, 0, 0.12)",
    shadowOffset: {
      width: -8,
      height: 8,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    left: 0,
    height: 90,
    width: 226,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  doingGoodHow: {
    marginTop: -34.4,
    width: "88.37%",
    textAlign: "left",
    top: "50%",
    color: Color.white,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
    left: "8.4%",
    height: 34,
  },
  minutesAgo: {
    marginTop: 13.9,
    width: "47.57%",
    color: "#00ff7c",
    height: 15,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    left: "8.4%",
    top: "50%",
    position: "absolute",
  },
  rectangleParent: {
    top: 371,
    left: 113,
    height: 90,
    width: 226,
    position: "absolute",
  },
  groupItem: {
    top: -12,
    left: -11,
    width: 273,
    height: 142,
  },
  hiAndreaHow: {
    width: "90.17%",
    left: "9.83%",
    height: 79,
  },
  minutesAgo1: {
    width: "37.88%",
    left: "10.71%",
  },
  closeAnticon: {
    top: 11,
    width: 10,
    height: 37,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.white,
    left: 0,
    position: "absolute",
  },
  vectorParent: {
    top: 137,
    width: 240,
  },
  hiAndreaHow1: {
    width: "90.78%",
    left: "9.22%",
    height: 78,
  },
  minutesAgo2: {
    width: "35.23%",
    left: "10.04%",
  },
  vectorGroup: {
    top: 250,
    width: 258,
  },
  michaelAmy: {
    marginTop: -345,
    width: "31.08%",
    left: "37.08%",
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorDarkslategray_200,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  ionArrowLeftBIonicons: {
    marginTop: -286,
    left: "3.39%",
    color: "#494e56",
  },
  optionsVerticalSimpleLine: {
    marginTop: -285,
    left: "90.22%",
    color: Color.colorDarkslategray_200,
  },
  todayAt1045: {
    marginTop: -314,
    width: "29.33%",
    left: "36.19%",
    fontSize: FontSize.size_3xs,
    fontWeight: "900",
    fontFamily: FontFamily.poppinsBlack,
    color: "#494e57",
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  groupImage1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupImage1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 6,
    top: 679,
    width: 348,
    height: 45,
    position: "absolute",
  },
  image18Icon: {
    top: 51,
    left: 89,
    borderRadius: Border.br_191xl,
    width: 35,
  },
  icon1: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrowLeftCircle: {
    top: 39,
    width: 24,
    left: 23,
    height: 24,
  },
  mainbarChild: {
    borderStyle: "solid",
    borderColor: Color.colorDimgray_100,
    borderTopWidth: 2,
    backgroundColor: Color.white,
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
  helpCentre: {
    backgroundColor: "rgba(176, 213, 248, 0.17)",
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default HelpCentre;
