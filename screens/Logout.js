import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Logout = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.logout}>
      <Image
        style={styles.areYouSureYouWantToLogo}
        resizeMode="cover"
        source={require("../assets/are-you-sure-you-want-to-logout.png")}
      />
      <Pressable
        style={[styles.cancelWrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={[styles.cancel, styles.cancelTypo]}>Cancel</Text>
      </Pressable>
      <Pressable
        style={[styles.logoutWrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("LoginPage")}
      >
        <Text style={[styles.logout1, styles.cancelTypo]}>Logout</Text>
      </Pressable>
      <Image
        style={styles.image36Icon}
        resizeMode="cover"
        source={require("../assets/image-36.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    height: 40,
    width: 99,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    top: 499,
    position: "absolute",
    overflow: "hidden",
  },
  cancelTypo: {
    textAlign: "center",
    fontFamily: FontFamily.libreBodoniRegular,
    fontSize: FontSize.size_mini,
    top: 10,
    position: "absolute",
  },
  areYouSureYouWantToLogo: {
    top: 405,
    left: 52,
    width: 256,
    height: 71,
    position: "absolute",
  },
  cancel: {
    left: 26,
    color: Color.colorDimgray_200,
  },
  cancelWrapper: {
    left: 66,
    borderColor: Color.colorDimgray_200,
  },
  logout1: {
    left: 25,
    color: Color.colorRed_100,
  },
  logoutWrapper: {
    left: 204,
    borderColor: Color.colorRed_100,
  },
  image36Icon: {
    top: 261,
    left: 128,
    width: 104,
    height: 116,
    position: "absolute",
  },
  logout: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Logout;
