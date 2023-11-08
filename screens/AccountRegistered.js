import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const AccountRegistered = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.accountRegistered}>
      <Image
        style={styles.successmarkIcon}
        resizeMode="cover"
        source={require("../assets/successmark.png")}
      />
      <View style={styles.text}>
        <Text style={[styles.yourAccountHas, styles.accountFlexBox]}>
          Your account has been created successfully.
        </Text>
        <Text style={[styles.accountRegistered1, styles.accountFlexBox]}>
          Account Registered!
        </Text>
      </View>
      <Pressable
        style={styles.loginButton}
        onPress={() => navigation.navigate("Login")}
      >
        <View style={styles.loginButtonChild} />
        <Text style={[styles.backToLogin, styles.accountFlexBox]}>
          Back to Login
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  accountFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  successmarkIcon: {
    top: 214,
    left: 138,
    width: 100,
    height: 100,
    position: "absolute",
    overflow: "hidden",
  },
  yourAccountHas: {
    top: 39,
    left: 3,
    lineHeight: 23,
    fontWeight: "500",
    fontFamily: FontFamily.urbanistMedium,
    color: Color.gray,
    width: 226,
    fontSize: FontSize.size_mini,
    textAlign: "center",
  },
  accountRegistered1: {
    top: 0,
    left: 0,
    fontSize: FontSize.size_7xl,
    fontWeight: "700",
    fontFamily: FontFamily.urbanistBold,
    color: Color.dark,
  },
  text: {
    top: 344,
    left: 72,
    width: 232,
    height: 85,
    position: "absolute",
  },
  loginButtonChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorMediumseagreen_100,
    position: "absolute",
    width: "100%",
  },
  backToLogin: {
    top: 19,
    left: 92,
    fontWeight: "600",
    fontFamily: FontFamily.urbanistSemiBold,
    color: Color.white,
    width: 147,
    fontSize: FontSize.size_mini,
    textAlign: "center",
  },
  loginButton: {
    height: "6.9%",
    width: "88%",
    top: "56.53%",
    right: "5.87%",
    bottom: "36.58%",
    left: "6.13%",
    position: "absolute",
  },
  accountRegistered: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default AccountRegistered;
