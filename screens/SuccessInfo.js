import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const SuccessInfo = () => {
  return (
    <View style={styles.successInfo}>
      <View style={styles.successInfoChild} />
      <Text style={[styles.success, styles.successTypo]}>Success</Text>
      <Text style={[styles.weWillFollow, styles.successTypo]}>
        We will follow up with you via message later.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  successTypo: {
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  successInfoChild: {
    top: 0,
    left: 1,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.labelsLightPrimary,
    borderWidth: 1,
    width: 312,
    position: "absolute",
    height: 131,
  },
  success: {
    top: 21,
    left: 116,
  },
  weWillFollow: {
    top: 55,
    left: 19,
    width: 279,
  },
  successInfo: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 131,
  },
});

export default SuccessInfo;
