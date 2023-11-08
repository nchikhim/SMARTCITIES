import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const SuccessScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.successScreen, styles.iconLayout]}>
      <Text
        style={[styles.weWillSend, styles.weWillSendFlexBox]}
      >{`we will send order details and invoice in
your contact no. and registered email`}</Text>
      <Image
        style={[styles.successScreenChild, styles.icon2Layout]}
        resizeMode="cover"
        source={require("../assets/group-167.png")}
      />
      <Text style={[styles.paymentSuccessful, styles.weWillSendFlexBox]}>
        Payment Successful
      </Text>
      <Pressable
        style={[styles.arrowLeftCircle, styles.vector1Layout]}
        onPress={() => navigation.navigate("UtilityBill")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
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
            style={[styles.icon2, styles.icon2Layout]}
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
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  weWillSendFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  icon2Layout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  vector1Layout: {
    height: 24,
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
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontSize: FontSize.size_xs,
    bottom: 8,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  weWillSend: {
    top: 636,
    left: 50,
    fontSize: FontSize.size_sm,
    letterSpacing: 0.4,
    color: "#7a7a7a",
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
  },
  successScreenChild: {
    height: "30.85%",
    width: "74.78%",
    top: "40.21%",
    right: "10.83%",
    bottom: "28.94%",
    left: "14.39%",
    maxHeight: "100%",
    position: "absolute",
  },
  paymentSuccessful: {
    top: 143,
    left: 24,
    fontSize: FontSize.size_21xl,
    letterSpacing: 1.2,
    fontFamily: FontFamily.pollerOneRegular,
    color: Color.colorMediumseagreen_100,
    width: 323,
    height: 126,
  },
  icon: {
    height: "100%",
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
    height: "100%",
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
  successScreen: {
    flex: 1,
    height: 800,
    backgroundColor: Color.white,
  },
});

export default SuccessScreen;
