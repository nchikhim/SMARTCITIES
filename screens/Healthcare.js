import React, { useState, useCallback } from "react";
import { Text, StyleSheet, Image, Pressable, View, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Keyboard1 from "../components/Keyboard1";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Healthcare = () => {
  const [rectangleImageVisible, setRectangleImageVisible] = useState(false);
  const navigation = useNavigation();

  const openRectangleImage = useCallback(() => {
    setRectangleImageVisible(true);
  }, []);

  const closeRectangleImage = useCallback(() => {
    setRectangleImageVisible(false);
  }, []);

  return (
    <>
      <View style={styles.healthcare}>
        <Text
          style={[styles.letsFindYour, styles.yourTypo]}
        >{`Let’s Find Your Doctor ! `}</Text>
        <Text
          style={[styles.chooseYourAppointment, styles.wrapperPosition]}
        >{`Choose your appointment date: `}</Text>
        <Image
          style={[styles.healthcareChild, styles.healthcareChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Image
          style={[styles.healthcareItem, styles.healthcareChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Image
          style={[styles.healthcareInner, styles.image6IconPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.healthcareChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Image
          style={[styles.healthcareChild1, styles.image3IconPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Pressable
          style={[styles.image2, styles.image2Layout]}
          onPress={() => navigation.navigate("DoctorList")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/image-2.png")}
          />
        </Pressable>
        <Image
          style={[styles.image4Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/image-4.png")}
        />
        <Image
          style={[styles.image5Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/image-5.png")}
        />
        <Image
          style={[styles.image6Icon, styles.image2Layout]}
          resizeMode="cover"
          source={require("../assets/image-6.png")}
        />
        <Text style={[styles.searchDoctor, styles.amPmTypo]}>
          Search Doctor
        </Text>
        <Pressable
          style={[styles.wrapper, styles.wrapperPosition]}
          onPress={openRectangleImage}
        >
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/rectangle-28.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.arrowLeftCircle, styles.vector1Layout]}
          onPress={() => navigation.navigate("HealthcareMainPage")}
        >
          <Image
            style={styles.icon2}
            resizeMode="cover"
            source={require("../assets/arrowleftcircle3.png")}
          />
        </Pressable>
        <Image
          style={[styles.image3Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/image-3.png")}
        />
        <Image
          style={styles.image7Icon}
          resizeMode="cover"
          source={require("../assets/image-7.png")}
        />
        <Image
          style={styles.image9Icon}
          resizeMode="cover"
          source={require("../assets/image-9.png")}
        />
        <Text style={[styles.time, styles.timeTypo]}>TIME</Text>
        <Text style={[styles.text, styles.timeTypo]}>10 : 50</Text>
        <Text style={[styles.amPm, styles.amPmLayout]}>AM PM</Text>
        <Image
          style={[styles.rectangleIcon, styles.rectanglePosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-30.png")}
        />
        <View style={[styles.rectangleView, styles.vectorLayout]} />
        <View style={styles.healthcareChild2} />
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group-41.png")}
        />
        <Image
          style={styles.image35Icon}
          resizeMode="cover"
          source={require("../assets/image-35.png")}
        />
        <Image
          style={[styles.healthcareChild3, styles.amPmLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-28.png")}
        />
        <View style={[styles.healthcareChild4, styles.childBorder]} />
        <Pressable
          style={[styles.history, styles.historyPosition]}
          onPress={() => navigation.navigate("AppoinemntHistory")}
        >
          <Text style={[styles.history1, styles.amPmTypo]}>History</Text>
        </Pressable>
        <View style={[styles.mainbar, styles.mainbarPosition]}>
          <View style={[styles.mainbarChild, styles.mainbarPosition]} />
          <Pressable
            style={[styles.vector, styles.vectorLayout]}
            onPress={() => navigation.navigate("Message")}
          >
            <Image
              style={styles.icon3}
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
              style={styles.icon4}
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
              style={styles.icon2}
              resizeMode="cover"
              source={require("../assets/user1.png")}
            />
          </Pressable>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={rectangleImageVisible}>
        <View style={styles.rectangleImageOverlay}>
          <Pressable
            style={styles.rectangleImageBg}
            onPress={closeRectangleImage}
          />
          <Keyboard1 onClose={closeRectangleImage} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  yourTypo: {
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.libreBodoniRegular,
  },
  wrapperPosition: {
    left: 21,
    position: "absolute",
  },
  healthcareChildLayout: {
    height: 48,
    position: "absolute",
  },
  image6IconPosition: {
    left: 279,
    width: 48,
    top: 159,
  },
  image3IconPosition: {
    left: 92,
    width: 48,
  },
  image2Layout: {
    height: 45,
    position: "absolute",
  },
  iconLayout: {
    borderRadius: Border.br_126xl,
    height: 45,
    position: "absolute",
  },
  amPmTypo: {
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  vector1Layout: {
    height: 24,
    position: "absolute",
  },
  timeTypo: {
    left: 44,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  amPmLayout: {
    height: 29,
    position: "absolute",
  },
  rectanglePosition: {
    top: 624,
    opacity: 0.4,
  },
  vectorLayout: {
    height: 25,
    position: "absolute",
  },
  childBorder: {
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  historyPosition: {
    top: 310,
    position: "absolute",
  },
  mainbarPosition: {
    height: 68,
    bottom: 0,
    position: "absolute",
  },
  menuTypo: {
    fontSize: FontSize.size_xs,
    bottom: 8,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  letsFindYour: {
    top: 99,
    left: 32,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  chooseYourAppointment: {
    top: 306,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.libreBodoniRegular,
  },
  healthcareChild: {
    left: 25,
    width: 48,
    height: 48,
    top: 159,
  },
  healthcareItem: {
    left: 217,
    width: 48,
    height: 48,
    top: 159,
  },
  healthcareInner: {
    height: 48,
    position: "absolute",
  },
  ellipseIcon: {
    left: 155,
    width: 48,
    height: 48,
    top: 159,
  },
  healthcareChild1: {
    height: 48,
    position: "absolute",
    top: 159,
  },
  icon: {
    borderRadius: 125,
    height: "100%",
    width: "100%",
  },
  image2: {
    left: 26,
    width: 46,
    top: 161,
  },
  image4Icon: {
    left: 156,
    width: 46,
    top: 161,
  },
  image5Icon: {
    left: 216,
    width: 49,
    top: 159,
  },
  image6Icon: {
    borderRadius: 360,
    left: 279,
    width: 48,
    top: 159,
  },
  searchDoctor: {
    top: 243,
    left: 53,
    width: 286,
    height: 33,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  rectangleImageOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  rectangleImageBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon1: {
    borderRadius: Border.br_21xl,
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: 234,
    width: 312,
    height: 28,
  },
  icon2: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrowLeftCircle: {
    left: 8,
    top: 50,
    width: 24,
  },
  image3Icon: {
    top: 160,
    left: 92,
    width: 48,
  },
  image7Icon: {
    top: 245,
    left: 35,
    width: 15,
    height: 15,
    position: "absolute",
  },
  image9Icon: {
    top: 589,
    left: 193,
    width: 129,
    height: 133,
    position: "absolute",
  },
  time: {
    top: 605,
    width: 35,
    height: 19,
  },
  text: {
    top: 628,
    width: 140,
    height: 28,
  },
  amPm: {
    top: 627,
    width: 53,
    left: 111,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    color: Color.labelsLightPrimary,
  },
  rectangleIcon: {
    left: 36,
    borderRadius: Border.br_11xl,
    width: 62,
    height: 27,
    opacity: 0.4,
    position: "absolute",
  },
  rectangleView: {
    left: 101,
    backgroundColor: Color.colorGainsboro_400,
    width: 67,
    opacity: 0.4,
    top: 624,
    borderRadius: Border.br_21xl,
  },
  healthcareChild2: {
    top: 626,
    backgroundColor: Color.colorGray_1800,
    width: 26,
    height: 22,
    opacity: 0.4,
    left: 111,
    borderRadius: Border.br_21xl,
    position: "absolute",
  },
  groupIcon: {
    top: 41,
    left: 323,
    width: 33,
    height: 34,
    position: "absolute",
  },
  image35Icon: {
    top: 344,
    left: 37,
    width: 284,
    height: 223,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  healthcareChild3: {
    top: 452,
    left: 205,
    width: 29,
  },
  healthcareChild4: {
    left: 280,
    borderColor: Color.colorRoyalblue_100,
    borderWidth: 1,
    width: 56,
    height: 16,
    top: 310,
    position: "absolute",
    borderRadius: Border.br_3xs,
  },
  history1: {
    fontSize: FontSize.size_2xs,
    color: Color.colorRoyalblue_100,
  },
  history: {
    left: 289,
  },
  mainbarChild: {
    right: 0,
    left: 0,
    borderColor: Color.colorDimgray_100,
    borderTopWidth: 2,
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  icon3: {
    height: "100%",
    width: "100%",
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
  icon4: {
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
  mainbar: {
    right: 1,
    left: -1,
  },
  healthcare: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Healthcare;
