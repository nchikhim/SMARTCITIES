import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Complaint4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.complaint4}>
      <Image
        style={styles.electriciancuateIcon}
        resizeMode="cover"
        source={require("../assets/electriciancuate.png")}
      />
      <View style={[styles.complaint4Child, styles.backToMenuLayout]} />
      <Text style={[styles.book, styles.bookTypo]}>BOOK</Text>
      <View style={[styles.backToMenu, styles.backToMenuLayout]}>
        <Pressable
          style={styles.backToMenuChild}
          onPress={() => navigation.navigate("CommunityComplaint")}
        />
        <Text style={[styles.backToMenu1, styles.bookTypo]}>BACK TO MENU</Text>
      </View>
      <Text style={[styles.youWillBe, styles.bookTypo]}>
        You will be notified of the progress via your email
      </Text>
      <Text style={styles.sendSuccessful}>{`Send
Successful`}</Text>
      <View style={styles.mainbarPosition}>
        <View style={[styles.mainbarChild, styles.mainbarPosition]} />
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector2.png")}
        />
        <Text style={[styles.message, styles.menuTypo]}>Message</Text>
        <Text style={[styles.menu, styles.menuTypo]}>Menu</Text>
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("Menu")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
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
            style={[styles.icon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/user.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backToMenuLayout: {
    height: 46,
    width: 157,
    position: "absolute",
  },
  bookTypo: {
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi,
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
  iconLayout: {
    height: "100%",
    overflow: "hidden",
  },
  electriciancuateIcon: {
    height: "68.07%",
    width: "150.83%",
    top: "14.25%",
    right: "-313.89%",
    bottom: "17.68%",
    left: "263.06%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  complaint4Child: {
    top: 744,
    left: -221,
    backgroundColor: Color.colorPaleturquoise,
    borderRadius: Border.br_11xl,
    width: 157,
  },
  book: {
    top: 759,
    left: -160,
  },
  backToMenuChild: {
    top: 0,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    left: 0,
    height: 46,
    width: 157,
    backgroundColor: Color.colorPaleturquoise,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  backToMenu1: {
    top: 15,
    left: 33,
  },
  backToMenu: {
    top: 645,
    left: 101,
  },
  youWillBe: {
    top: 374,
    left: 34,
  },
  sendSuccessful: {
    top: 261,
    left: 24,
    fontSize: FontSize.size_21xl,
    letterSpacing: 1.2,
    fontFamily: FontFamily.pollerOneRegular,
    color: Color.colorMediumseagreen_100,
    textAlign: "center",
    width: 323,
    height: 126,
    position: "absolute",
  },
  mainbarChild: {
    borderStyle: "solid",
    borderColor: Color.colorDimgray_100,
    borderTopWidth: 2,
    backgroundColor: Color.white,
  },
  vectorIcon: {
    bottom: 25,
    left: 62,
    width: 24,
    height: 25,
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
  icon: {
    maxWidth: "100%",
  },
  vector: {
    left: 169,
    right: 169,
    bottom: 26,
    height: 24,
    position: "absolute",
  },
  profile: {
    right: 54,
    width: 37,
  },
  icon1: {
    width: "100%",
  },
  user: {
    right: 57,
    bottom: 23,
    width: 30,
    height: 30,
    position: "absolute",
  },
  complaint4: {
    flex: 1,
    height: 781,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Complaint4;
