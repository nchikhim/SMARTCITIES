import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const OTPVerification = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.otpVerification}>
      <Text style={[styles.welcomeBackGlad, styles.welcomeBackGladPosition]}>
        OTP Verification
      </Text>
      <Text style={[styles.enterTheVerification, styles.didntReceivedCodeTypo]}>
        Enter the verification code we just sent on your email address.
      </Text>
      <View style={styles.enterOtpInput}>
        <View style={[styles.blank, styles.viewLayout]} />
        <View style={[styles.view, styles.viewLayout]}>
          <View style={[styles.blank1, styles.childBorder]} />
        </View>
        <View style={styles.view1}>
          <View style={[styles.child, styles.childBorder]} />
        </View>
        <View style={[styles.view2, styles.viewLayout]}>
          <View style={[styles.child, styles.childBorder]} />
        </View>
      </View>
      <Pressable
        style={styles.loginButton}
        onPress={() => navigation.navigate("ResetPassword")}
      >
        <View style={[styles.loginButtonChild, styles.iconLayout]} />
        <Text style={[styles.verify, styles.verifyTypo]}>Verify</Text>
      </Pressable>
      <Text style={[styles.didntReceivedCodeContainer, styles.verifyTypo]}>
        <Text
          style={[styles.didntReceivedCode, styles.didntReceivedCodeTypo]}
        >{`Didn’t received code? `}</Text>
        <Text style={[styles.resend, styles.resendTypo]}>Resend</Text>
      </Text>
      <Pressable
        style={styles.arrowLeftCircle}
        onPress={() => navigation.navigate("ForgotPassword")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/arrowleftcircle3.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeBackGladPosition: {
    textAlign: "left",
    left: 20,
    position: "absolute",
  },
  didntReceivedCodeTypo: {
    fontFamily: FontFamily.urbanistMedium,
    fontWeight: "500",
  },
  viewLayout: {
    width: 69,
    top: 0,
    height: 60,
    position: "absolute",
  },
  childBorder: {
    borderColor: Color.colorMediumturquoise_100,
    left: 0,
    width: 69,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    top: 0,
    height: 60,
    position: "absolute",
    backgroundColor: Color.white,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  verifyTypo: {
    textAlign: "center",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  resendTypo: {
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
  },
  welcomeBackGlad: {
    top: 138,
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.3,
    lineHeight: 39,
    color: Color.dark,
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
  },
  enterTheVerification: {
    top: 187,
    fontSize: FontSize.size_base,
    lineHeight: 24,
    color: Color.gray1,
    width: 331,
    textAlign: "left",
    left: 20,
    position: "absolute",
  },
  blank: {
    left: 261,
    backgroundColor: Color.colorWhitesmoke_200,
    borderColor: Color.colorAliceblue,
    borderWidth: 1,
    borderStyle: "solid",
    width: 69,
    borderRadius: Border.br_5xs,
    top: 0,
  },
  blank1: {
    borderWidth: 1,
  },
  view: {
    left: 174,
    width: 69,
    top: 0,
  },
  child: {
    borderWidth: 1.2,
  },
  view1: {
    left: 0,
    width: 69,
    top: 0,
    height: 60,
    position: "absolute",
  },
  view2: {
    left: 87,
    width: 69,
    top: 0,
  },
  enterOtpInput: {
    top: 292,
    left: 23,
    width: 330,
    height: 60,
    position: "absolute",
  },
  loginButtonChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorMediumseagreen_100,
    borderRadius: Border.br_5xs,
    height: "100%",
    position: "absolute",
  },
  verify: {
    top: 19,
    left: 124,
    fontWeight: "600",
    fontFamily: FontFamily.urbanistSemiBold,
    color: Color.white,
    width: 83,
  },
  loginButton: {
    height: "6.9%",
    width: "88%",
    top: "47.04%",
    right: "5.87%",
    bottom: "46.06%",
    left: "6.13%",
    position: "absolute",
  },
  didntReceivedCode: {
    color: Color.dark,
  },
  resend: {
    color: Color.colorMediumturquoise_100,
  },
  didntReceivedCodeContainer: {
    top: 761,
    left: 88,
    letterSpacing: 0.2,
    lineHeight: 21,
  },
  icon: {
    overflow: "hidden",
  },
  arrowLeftCircle: {
    left: 10,
    top: 32,
    width: 24,
    height: 24,
    position: "absolute",
  },
  otpVerification: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default OTPVerification;
