import React, { useState, useCallback } from "react";
import { Image, StyleSheet, Pressable, Text, View, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CancelAppointment from "../components/CancelAppointment";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const AppoinemntHistory = () => {
  const [cancelTextVisible, setCancelTextVisible] = useState(false);
  const navigation = useNavigation();

  const openCancelText = useCallback(() => {
    setCancelTextVisible(true);
  }, []);

  const closeCancelText = useCallback(() => {
    setCancelTextVisible(false);
  }, []);

  return (
    <>
      <View style={styles.appoinemntHistory}>
        <Pressable
          style={[styles.arrowLeftCircle, styles.vector1Layout]}
          onPress={() => navigation.navigate("Healthcare")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/arrowleftcircle3.png")}
          />
        </Pressable>
        <Text style={styles.history}>History</Text>
        <View style={styles.appoinemntHistoryChild} />
        <Image
          style={styles.image30Icon}
          resizeMode="cover"
          source={require("../assets/image-30.png")}
        />
        <Text style={styles.date10thNovember}>{`Date: 10th November 2023
Time: 10:50 AM
Doctor: Dr. Zhou Yi`}</Text>
        <Text style={[styles.view, styles.viewTypo]}>View</Text>
        <Pressable
          style={[styles.cancel, styles.viewPosition]}
          onPress={openCancelText}
        >
          <Text style={[styles.cancel1, styles.viewTypo]}>Cancel</Text>
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
              style={styles.icon2}
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
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/user1.png")}
            />
          </Pressable>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={cancelTextVisible}>
        <View style={styles.cancelTextOverlay}>
          <Pressable style={styles.cancelTextBg} onPress={closeCancelText} />
          <CancelAppointment onClose={closeCancelText} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  vector1Layout: {
    height: 24,
    position: "absolute",
  },
  viewTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.lateefRegular,
    textAlign: "left",
  },
  viewPosition: {
    top: 215,
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
    bottom: 8,
    fontSize: FontSize.size_xs,
    color: Color.labelsLightPrimary,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrowLeftCircle: {
    left: 11,
    top: 59,
    width: 24,
  },
  history: {
    top: 51,
    left: 136,
    fontSize: FontSize.size_11xl,
    color: Color.colorGray_900,
    width: 248,
    height: 59,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  appoinemntHistoryChild: {
    top: 110,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGainsboro_400,
    width: 360,
    height: 136,
    left: 0,
    position: "absolute",
  },
  image30Icon: {
    left: 230,
    borderRadius: Border.br_281xl,
    width: 89,
    height: 89,
    top: 132,
    position: "absolute",
  },
  date10thNovember: {
    fontSize: FontSize.size_base,
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.lateefRegular,
    left: 27,
    top: 132,
    textAlign: "left",
    position: "absolute",
  },
  view: {
    left: 84,
    color: "#1f64e7",
    top: 215,
    position: "absolute",
  },
  cancelTextOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  cancelTextBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  cancel1: {
    color: Color.colorRed_100,
  },
  cancel: {
    left: 27,
    top: 215,
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
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
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
  appoinemntHistory: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default AppoinemntHistory;
