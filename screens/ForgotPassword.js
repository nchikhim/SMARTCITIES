import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const ForgotPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.forgotPassword}>
      <Text style={[styles.dontWorryIt, styles.dontWorryItPosition]}>
        Don't worry! It occurs. Please enter the email address linked with your
        account.
      </Text>
      <Text style={[styles.welcomeBackGlad, styles.loginTypo]}>
        Forgot Password?
      </Text>
      <View style={[styles.registerButton, styles.buttonPosition]}>
        <View
          style={[styles.registerButtonChild, styles.buttonChildPosition]}
        />
        <Text style={styles.enterYourEmail}>Enter your email</Text>
      </View>
      <Pressable
        style={[styles.loginButton, styles.buttonPosition]}
        onPress={() => navigation.navigate("OTPVerification")}
      >
        <View style={[styles.loginButtonChild, styles.buttonChildPosition]} />
        <Text style={[styles.sendCode, styles.textTypo]}>Send Code</Text>
      </Pressable>
      <Pressable
        style={styles.rememberPasswordLoginContainer}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={[styles.text, styles.textTypo]}>
          <Text style={styles.rememberPassword}>{`Remember Password? `}</Text>
          <Text style={[styles.login, styles.loginTypo]}>Login</Text>
        </Text>
      </Pressable>
      <Pressable
        style={styles.arrowLeftCircle}
        onPress={() => navigation.navigate("Login")}
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
  dontWorryItPosition: {
    textAlign: "left",
    left: 20,
    position: "absolute",
  },
  loginTypo: {
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
  },
  buttonPosition: {
    left: "6.13%",
    right: "5.87%",
    width: "88%",
    height: "6.9%",
    position: "absolute",
  },
  buttonChildPosition: {
    borderRadius: Border.br_5xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  textTypo: {
    textAlign: "center",
    fontSize: FontSize.size_mini,
  },
  dontWorryIt: {
    top: 194,
    fontSize: FontSize.size_base,
    lineHeight: 24,
    width: 331,
    color: Color.gray,
    textAlign: "left",
    fontFamily: FontFamily.urbanistMedium,
    fontWeight: "500",
    left: 20,
  },
  welcomeBackGlad: {
    top: 145,
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.3,
    lineHeight: 39,
    color: Color.dark,
    textAlign: "left",
    left: 20,
    position: "absolute",
    fontWeight: "700",
  },
  registerButtonChild: {
    backgroundColor: Color.colorWhitesmoke_200,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_300,
    borderWidth: 1,
  },
  enterYourEmail: {
    lineHeight: 19,
    display: "flex",
    alignItems: "flex-end",
    width: 108,
    fontSize: FontSize.size_mini,
    top: 19,
    textAlign: "left",
    color: Color.gray,
    fontFamily: FontFamily.urbanistMedium,
    fontWeight: "500",
    left: 20,
    position: "absolute",
  },
  registerButton: {
    top: "36.82%",
    bottom: "56.28%",
  },
  loginButtonChild: {
    backgroundColor: Color.colorMediumseagreen_100,
  },
  sendCode: {
    left: 124,
    fontWeight: "600",
    fontFamily: FontFamily.urbanistSemiBold,
    color: Color.white,
    width: 83,
    top: 19,
    textAlign: "center",
    position: "absolute",
  },
  loginButton: {
    top: "47.41%",
    bottom: "45.69%",
  },
  rememberPassword: {
    color: Color.dark,
    fontFamily: FontFamily.urbanistMedium,
    fontWeight: "500",
  },
  login: {
    color: Color.colorMediumturquoise_100,
  },
  text: {
    letterSpacing: 0.2,
    lineHeight: 21,
  },
  rememberPasswordLoginContainer: {
    left: 91,
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
  forgotPassword: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default ForgotPassword;
