import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Home4 = ({ onClose }) => {
  return (
    <View style={styles.home4}>
      <Text style={styles.dateCannotBe}>{`Date cannot be selected. `}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dateCannotBe: {
    position: "absolute",
    top: 13,
    left: 51,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.paytoneOneRegular,
    color: Color.labelsLightPrimary,
    textAlign: "center",
  },
  home4: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.white,
    width: 298,
    height: 47,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default Home4;
