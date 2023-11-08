import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Image, Pressable, Modal } from "react-native";
import LocationDetection from "../components/LocationDetection";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Login = () => {
  const [loginButtonContainerVisible, setLoginButtonContainerVisible] =
    useState(false);
  const navigation = useNavigation();

  const openLoginButtonContainer = useCallback(() => {
    setLoginButtonContainerVisible(true);
  }, []);

  const closeLoginButtonContainer = useCallback(() => {
    setLoginButtonContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.login}>
        <View style={styles.text}>
          <Text style={[styles.welcomeBackGlad, styles.orLoginWithFlexBox]}>
            Welcome back! Glad to see you, Again!
          </Text>
        </View>
        <View style={styles.registerButton}>
          <View style={styles.registerButtonChild} />
          <Text style={styles.enterYourEmail}>Enter your email</Text>
        </View>
        <View style={[styles.registerButton1, styles.buttonPosition]}>
          <View style={styles.registerButtonChild} />
          <Text style={styles.enterYourPassword}>Enter your password</Text>
          <Image
            style={[
              styles.fluenteye20FilledIcon,
              styles.loginButtonChildLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/fluenteye20filled.png")}
          />
        </View>
        <Text style={[styles.forgotPassword, styles.orLoginWithTypo]}>
          Forgot Password?
        </Text>
        <Pressable
          style={[styles.loginButton, styles.buttonPosition]}
          onPress={openLoginButtonContainer}
        >
          <View
            style={[styles.loginButtonChild, styles.loginButtonChildLayout]}
          />
          <Text style={[styles.login1, styles.text1Typo]}>Login</Text>
        </Pressable>
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
          style={styles.dontHaveAnContainer}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={[styles.text1, styles.text1Typo]}>
            <Text style={styles.dontHaveAn}>{`Don’t have an account? `}</Text>
            <Text style={styles.registerNow}>Register Now</Text>
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

      <Modal
        animationType="fade"
        transparent
        visible={loginButtonContainerVisible}
      >
        <View style={styles.loginButtonContainerOverlay}>
          <Pressable
            style={styles.loginButtonContainerBg}
            onPress={closeLoginButtonContainer}
          />
          <LocationDetection onClose={closeLoginButtonContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
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
  loginButtonChildLayout: {
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  orLoginWithTypo: {
    color: Color.darkGray,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.urbanistSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text1Typo: {
    textAlign: "center",
    fontSize: FontSize.size_mini,
  },
  loginWithLayout: {
    width: 330,
    position: "absolute",
  },
  frameLayout: {
    width: 105,
    top: 39,
    borderRadius: Border.br_5xs,
    height: 56,
    position: "absolute",
    overflow: "hidden",
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
    width: 280,
    color: Color.dark,
    textAlign: "left",
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
    left: 0,
    position: "absolute",
  },
  text: {
    top: 145,
    right: 74,
    left: 21,
    height: 78,
    position: "absolute",
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
  enterYourEmail: {
    width: "32.64%",
    top: "33.93%",
    left: "6.03%",
    alignItems: "flex-end",
    display: "flex",
    color: Color.gray,
    lineHeight: 19,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.urbanistMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  registerButton: {
    top: 280,
    height: 56,
    width: 330,
    left: 23,
    position: "absolute",
  },
  enterYourPassword: {
    left: 20,
    width: 164,
    top: 19,
    alignItems: "flex-end",
    display: "flex",
    color: Color.gray,
    fontFamily: FontFamily.urbanistMedium,
    fontWeight: "500",
    lineHeight: 19,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    position: "absolute",
  },
  fluenteye20FilledIcon: {
    top: 17,
    left: 298,
    width: 22,
    height: 22,
    overflow: "hidden",
  },
  registerButton1: {
    top: "43.23%",
    bottom: "49.88%",
  },
  forgotPassword: {
    top: 412,
    left: 242,
    textAlign: "right",
  },
  loginButtonContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  loginButtonContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  loginButtonChild: {
    backgroundColor: Color.colorMediumseagreen_100,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    borderRadius: Border.br_5xs,
    height: "100%",
    width: "100%",
  },
  login1: {
    left: 148,
    color: Color.white,
    width: 36,
    fontFamily: FontFamily.urbanistSemiBold,
    fontWeight: "600",
    textAlign: "center",
    top: 19,
    position: "absolute",
  },
  loginButton: {
    top: "61.21%",
    bottom: "31.9%",
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
    width: 330,
    top: 0,
  },
  frameParent: {
    top: 583,
    height: 95,
    left: 23,
    width: 330,
    overflow: "hidden",
  },
  dontHaveAn: {
    fontFamily: FontFamily.urbanistMedium,
    fontWeight: "500",
    color: Color.dark,
  },
  registerNow: {
    color: Color.colorMediumturquoise_100,
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
  },
  text1: {
    letterSpacing: 0.2,
    lineHeight: 21,
  },
  dontHaveAnContainer: {
    left: 61,
    top: 761,
    position: "absolute",
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
  login: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Login;
