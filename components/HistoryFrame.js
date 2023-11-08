import * as React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const HistoryFrame = ({ onClose }) => {
  return (
    <View style={styles.historyFrame}>
      <View style={styles.historyFrameChild} />
      <Image
        style={[styles.historyFrameItem, styles.historyFrameLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-22.png")}
      />
      <Image
        style={[styles.historyFrameInner, styles.historyFrameLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-23.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.historyFrameLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-24.png")}
      />
      <Text style={[styles.success, styles.failTypo]}>Success</Text>
      <Text style={[styles.fail, styles.failTypo]}>Fail</Text>
      <Text style={[styles.pending, styles.failTypo]}>Pending</Text>
      <Image
        style={[styles.historyFrameChild1, styles.historyFrameLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-25.png")}
      />
      <Text style={[styles.advertisingTimeIs, styles.failTypo]}>
        Advertising time is almost over
      </Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector5.png")}
      />
      <Text style={[styles.revise, styles.payTypo]}>Revise</Text>
      <Text style={[styles.delete, styles.payTypo]}>Delete</Text>
      <Image
        style={[styles.vectorIcon2, styles.vectorIcon2Position]}
        resizeMode="cover"
        source={require("../assets/vector6.png")}
      />
      <Text style={[styles.extendDuration, styles.vectorIcon2Position]}>
        Extend duration
      </Text>
      <Image
        style={styles.vectorIcon3}
        resizeMode="cover"
        source={require("../assets/vector7.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector8.png")}
      />
      <Text style={[styles.pay, styles.payTypo]}>Pay</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  historyFrameLayout: {
    height: 28,
    width: 28,
    left: 43,
    position: "absolute",
  },
  failTypo: {
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    left: 87,
    position: "absolute",
  },
  vectorIconLayout: {
    height: 22,
    width: 22,
    left: 86,
    position: "absolute",
  },
  payTypo: {
    left: 118,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
  },
  vectorIcon2Position: {
    top: 261,
    position: "absolute",
  },
  historyFrameChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_21xl,
    backgroundColor: "#dedede",
    borderStyle: "solid",
    borderColor: Color.labelsLightPrimary,
    borderWidth: 2,
    height: 335,
    position: "absolute",
    width: 341,
  },
  historyFrameItem: {
    top: 56,
  },
  historyFrameInner: {
    top: 119,
  },
  ellipseIcon: {
    top: 212,
  },
  success: {
    top: 57,
  },
  fail: {
    top: 120,
  },
  pending: {
    top: 213,
  },
  historyFrameChild1: {
    top: 243,
  },
  advertisingTimeIs: {
    top: 244,
  },
  vectorIcon: {
    top: 149,
  },
  vectorIcon1: {
    top: 180,
  },
  revise: {
    top: 151,
    position: "absolute",
  },
  delete: {
    top: 182,
    position: "absolute",
  },
  vectorIcon2: {
    left: 90,
    width: 14,
    height: 17,
  },
  extendDuration: {
    left: 118,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
  },
  vectorIcon3: {
    top: 51,
    left: 212,
    width: 105,
    height: 105,
    position: "absolute",
  },
  vectorIcon4: {
    top: 86,
  },
  pay: {
    top: 88,
    position: "absolute",
  },
  historyFrame: {
    height: 336,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
    width: 341,
  },
});

export default HistoryFrame;
