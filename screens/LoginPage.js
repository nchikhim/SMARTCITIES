import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Image, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LocationDetection from "../components/LocationDetection";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const LoginPage = () => {
  const navigation = useNavigation();
  const [continueAsAVisible, setContinueAsAVisible] = useState(false);

  const openContinueAsA = useCallback(() => {
    setContinueAsAVisible(true);
  }, []);

  const closeContinueAsA = useCallback(() => {
    setContinueAsAVisible(false);
  }, []);

  return (
    <>
      <View style={styles.loginPage}>
        <Pressable
          style={[styles.loginButton, styles.buttonPosition]}
          onPress={() => navigation.navigate("Login")}
        >
          <View style={[styles.loginButtonChild, styles.buttonChildPosition]} />
          <Text style={[styles.login, styles.loginTypo]}>Login</Text>
        </Pressable>
        <Pressable
          style={[styles.registerButton, styles.buttonPosition]}
          onPress={() => navigation.navigate("Register")}
        >
          <View
            style={[styles.registerButtonChild, styles.buttonChildPosition]}
          />
          <Text style={[styles.register, styles.loginTypo]}>Register</Text>
        </Pressable>
        <Pressable
          style={styles.continueAsAContainer}
          onPress={openContinueAsA}
        >
          <Text style={styles.continueAsAGuest}>Continue as a guest</Text>
        </Pressable>
        <Image
          style={styles.loginPageChild}
          resizeMode="cover"
          source={require("../assets/rectangle-183.png")}
        />
        <Text style={styles.smartCommunity}>s}>SMART CITIES</Text>
      </View>

      <Modal animationType="fade" transparent visible={continueAsAVisible}>
        <View style={styles.continueAsAOverlay}>
          <Pressable style={styles.continueAsABg} onPress={closeContinueAsA} />
          <LocationDetection onClose={closeContinueAsA} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  buttonPosition: {
    left: "4.44%",
    right: "3.89%",
    width: "91.67%",
    height: "7%",
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
  loginTypo: {
    fontFamily: FontFamily.urbanistSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    top: 19,
    textAlign: "center",
    position: "absolute",
  },
  loginButtonChild: {
    backgroundColor: Color.colorMediumseagreen_100,
  },
  login: {
    left: 148,
    color: Color.white,
    width: 36,
    textAlign: "center",
  },
  loginButton: {
    top: "61.16%",
    bottom: "31.84%",
  },
  registerButtonChild: {
    borderStyle: "solid",
    borderColor: Color.dark,
    borderWidth: 1,
    backgroundColor: Color.white,
    borderRadius: Border.br_5xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  register: {
    left: 139,
    color: Color.dark,
    width: 55,
    textAlign: "center",
  },
  registerButton: {
    top: "70.04%",
    bottom: "22.96%",
  },
  continueAsAOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  continueAsABg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  continueAsAGuest: {
    fontSize: FontSize.size_sm,
    textDecoration: "underline",
    fontWeight: "700",
    fontFamily: FontFamily.urbanistBold,
    color: Color.colorMediumturquoise_100,
    textAlign: "center",
  },
  continueAsAContainer: {
    left: 118,
    top: 756,
    position: "absolute",
  },
  loginPageChild: {
    top: 189,
    left: 9,
    width: 310,
    height: 260,
    position: "absolute",
  },
  smartCommunity: {
    top: 105,
    left: 0,
    fontSize: FontSize.size_21xl,
    fontStyle: "italic",
    fontFamily: FontFamily.libreBodoniItalic,
    color: "#534fff",
    width: 360,
    height: 56,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    textAlign: "center",
    position: "absolute",
  },
  loginPage: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default LoginPage;
