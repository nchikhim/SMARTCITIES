import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const ResetPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.resetPassword}>
      <Text style={styles.welcomeBackGlad}>Create new password</Text>
      <Text style={styles.yourNewPassword}>
        Your new password must be unique from those previously used.
      </Text>
      <View style={[styles.registerButton, styles.buttonPosition]}>
        <View
          style={[styles.registerButtonChild, styles.buttonChildPosition]}
        />
        <Text style={[styles.newPassword, styles.passwordTypo]}>
          New Password
        </Text>
      </View>
      <View style={[styles.registerButton1, styles.buttonPosition]}>
        <View
          style={[styles.registerButtonChild, styles.buttonChildPosition]}
        />
        <Text style={[styles.confirmPassword, styles.passwordTypo]}>
          Confirm Password
        </Text>
      </View>
      <Pressable
        style={[styles.loginButton, styles.buttonPosition]}
        onPress={() => navigation.navigate("PasswordChanged")}
      >
        <View style={[styles.loginButtonChild, styles.buttonChildPosition]} />
        <Text style={styles.resetPassword1}>Reset Password</Text>
      </Pressable>
      <Pressable
        style={styles.arrowLeftCircle}
        onPress={() => navigation.navigate("OTPVerification")}
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
  passwordTypo: {
    alignItems: "flex-end",
    display: "flex",
    lineHeight: 19,
    fontSize: FontSize.size_mini,
    top: 19,
    color: Color.gray,
    fontFamily: FontFamily.urbanistMedium,
    fontWeight: "500",
    textAlign: "left",
    left: 20,
    position: "absolute",
  },
  welcomeBackGlad: {
    top: 144,
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.3,
    lineHeight: 39,
    fontWeight: "700",
    fontFamily: FontFamily.urbanistBold,
    color: Color.dark,
    textAlign: "left",
    left: 20,
    position: "absolute",
  },
  yourNewPassword: {
    top: 193,
    fontSize: FontSize.size_base,
    lineHeight: 24,
    width: 331,
    color: Color.gray,
    fontFamily: FontFamily.urbanistMedium,
    fontWeight: "500",
    textAlign: "left",
    left: 20,
    position: "absolute",
  },
  registerButtonChild: {
    backgroundColor: Color.colorWhitesmoke_200,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_300,
    borderWidth: 1,
  },
  newPassword: {
    width: 108,
  },
  registerButton: {
    top: "36.7%",
    bottom: "56.4%",
  },
  confirmPassword: {
    width: 146,
  },
  registerButton1: {
    top: "45.44%",
    bottom: "47.66%",
  },
  loginButtonChild: {
    backgroundColor: Color.colorMediumseagreen_100,
  },
  resetPassword1: {
    left: 92,
    fontWeight: "600",
    fontFamily: FontFamily.urbanistSemiBold,
    color: Color.white,
    textAlign: "center",
    width: 147,
    fontSize: FontSize.size_mini,
    top: 19,
    position: "absolute",
  },
  loginButton: {
    top: "56.03%",
    bottom: "37.07%",
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
  resetPassword: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default ResetPassword;
