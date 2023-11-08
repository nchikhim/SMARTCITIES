import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Register = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.register}>
      <View style={[styles.text, styles.textLayout]}>
        <Text style={[styles.welcomeBackGlad, styles.orLoginWithFlexBox]}>
          Welcome and register now to start journey!
        </Text>
      </View>
      <View style={[styles.registerButton, styles.buttonPosition]}>
        <View style={styles.registerButtonChild} />
        <Text style={[styles.username, styles.usernameTypo]}>Username</Text>
      </View>
      <View style={[styles.registerButton1, styles.buttonPosition]}>
        <View style={styles.registerButtonChild} />
        <Text style={[styles.username, styles.usernameTypo]}>Email</Text>
      </View>
      <View style={[styles.registerButton2, styles.buttonPosition]}>
        <View style={styles.registerButtonChild} />
        <Text style={[styles.username, styles.usernameTypo]}>Password</Text>
      </View>
      <View style={[styles.registerButton3, styles.buttonPosition]}>
        <View style={styles.registerButtonChild} />
        <Text style={[styles.confirmPassword, styles.usernameTypo]}>
          Confirm password
        </Text>
      </View>
      <View style={[styles.frameParent, styles.loginWithLayout]}>
        <Image
          style={[styles.frameChild, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/frame-2.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/frame-3.png")}
        />
        <Image
          style={[styles.frameInner, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/frame-4.png")}
        />
        <View style={[styles.loginWith, styles.loginWithLayout]}>
          <Text style={[styles.orLoginWith, styles.orLoginWithTypo]}>
            Or Login with
          </Text>
          <View style={[styles.loginWithChild, styles.loginPosition]} />
          <View style={[styles.loginWithItem, styles.loginPosition]} />
        </View>
      </View>
      <Pressable
        style={[styles.loginButton, styles.buttonPosition]}
        onPress={() => navigation.navigate("AccountRegistered")}
      >
        <View style={styles.loginButtonChild} />
        <Text style={[styles.agreeAndRegister, styles.orLoginWithTypo]}>
          Agree and Register
        </Text>
      </Pressable>
      <Pressable
        style={styles.arrowLeftCircle}
        onPress={() => navigation.navigate("LoginPage")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/arrowleftcircle3.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  textLayout: {
    height: 86,
    position: "absolute",
  },
  orLoginWithFlexBox: {
    textAlign: "left",
    top: 0,
  },
  buttonPosition: {
    left: "6.13%",
    right: "5.87%",
    width: "88%",
    height: "6.9%",
    position: "absolute",
  },
  usernameTypo: {
    alignItems: "flex-end",
    display: "flex",
    color: Color.gray,
    fontFamily: FontFamily.urbanistMedium,
    fontWeight: "500",
    lineHeight: 19,
    left: 20,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    position: "absolute",
  },
  loginWithLayout: {
    width: 330,
    position: "absolute",
  },
  frameLayout: {
    height: 56,
    width: 105,
    top: 39,
    borderRadius: Border.br_5xs,
    position: "absolute",
    overflow: "hidden",
  },
  orLoginWithTypo: {
    fontFamily: FontFamily.urbanistSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  loginPosition: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorAliceblue,
    top: 9,
    borderStyle: "solid",
    position: "absolute",
  },
  welcomeBackGlad: {
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.3,
    lineHeight: 39,
    fontWeight: "700",
    fontFamily: FontFamily.urbanistBold,
    color: Color.dark,
    width: 310,
    left: 0,
    height: 86,
    position: "absolute",
  },
  text: {
    top: 145,
    right: 43,
    left: 22,
  },
  registerButtonChild: {
    backgroundColor: Color.colorWhitesmoke_200,
    borderColor: Color.colorGainsboro_300,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  username: {
    width: 108,
    top: 19,
    alignItems: "flex-end",
    display: "flex",
    color: Color.gray,
    fontFamily: FontFamily.urbanistMedium,
    fontWeight: "500",
    lineHeight: 19,
    left: 20,
  },
  registerButton: {
    top: "34.48%",
    bottom: "58.62%",
  },
  registerButton1: {
    top: "43.23%",
    bottom: "49.88%",
  },
  registerButton2: {
    top: "51.97%",
    bottom: "41.13%",
  },
  confirmPassword: {
    top: 18,
    width: 166,
  },
  registerButton3: {
    top: "60.71%",
    bottom: "32.39%",
  },
  frameChild: {
    left: 0,
  },
  frameItem: {
    left: 225,
  },
  frameInner: {
    left: 113,
  },
  orLoginWith: {
    left: 124,
    fontSize: FontSize.size_sm,
    color: Color.darkGray,
    width: 90,
    textAlign: "left",
    top: 0,
  },
  loginWithChild: {
    width: 113,
    left: 0,
  },
  loginWithItem: {
    left: 219,
    width: 112,
  },
  loginWith: {
    height: 17,
    left: 0,
    top: 0,
    width: 330,
  },
  frameParent: {
    top: 655,
    left: 23,
    height: 95,
    overflow: "hidden",
  },
  loginButtonChild: {
    backgroundColor: Color.colorMediumseagreen_100,
    borderRadius: Border.br_5xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  agreeAndRegister: {
    left: 94,
    color: Color.white,
    textAlign: "center",
    width: 143,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.urbanistSemiBold,
    fontWeight: "600",
    top: 19,
  },
  loginButton: {
    top: "70.07%",
    bottom: "23.03%",
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
    height: 24,
    position: "absolute",
  },
  register: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Register;
