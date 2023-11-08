import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const CancelAppointment = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.cancelAppointment}>
      <Text style={styles.cancelAppointmentAreContainer}>
        <Text style={styles.cancelAppointment1}>{`Cancel Appointment

`}</Text>
        <Text style={styles.areYouSure}>Are you sure you want to cancel?</Text>
      </Text>
      <View style={[styles.cancelAppointmentChild, styles.cancelShadowBox]} />
      <Pressable
        style={[styles.confirm, styles.backPosition]}
        onPress={() => navigation.navigate("HealthcareMainPage")}
      >
        <Text style={[styles.confirm1, styles.back1Typo]}>{`CONFIRM `}</Text>
      </Pressable>
      <View style={[styles.cancelAppointmentItem, styles.cancelShadowBox]} />
      <Pressable
        style={[styles.back, styles.backPosition]}
        onPress={() => navigation.navigate("AppoinemntHistory")}
      >
        <Text style={[styles.back1, styles.back1Typo]}>{`BACK `}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  cancelShadowBox: {
    height: 46,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorPaleturquoise,
    top: 191,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  backPosition: {
    top: 206,
    position: "absolute",
  },
  back1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi,
  },
  cancelAppointment1: {
    fontFamily: FontFamily.paytoneOneRegular,
  },
  areYouSure: {
    fontFamily: FontFamily.libreBodoniRegular,
  },
  cancelAppointmentAreContainer: {
    top: 66,
    left: 34,
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  cancelAppointmentChild: {
    left: 159,
    width: 138,
  },
  confirm1: {
    color: Color.colorRed_100,
  },
  confirm: {
    left: 199,
  },
  cancelAppointmentItem: {
    left: 1,
    width: 146,
  },
  back1: {
    color: Color.labelsLightPrimary,
  },
  back: {
    left: 56,
  },
  cancelAppointment: {
    backgroundColor: Color.white,
    width: 298,
    height: 270,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: Border.br_11xl,
  },
});

export default CancelAppointment;
