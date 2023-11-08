import * as React from "react";
import { View, Image, StyleSheet } from "react-native";

const Keyboard1 = ({ onClose }) => {
  return (
    <View style={styles.keyboard}>
      <Image
        style={styles.frame5Icon}
        resizeMode="cover"
        source={require("../assets/frame5.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frame5Icon: {
    position: "absolute",
    top: 0,
    left: -4,
    width: 368,
    height: 247,
  },
  keyboard: {
    width: 360,
    height: 239,
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default Keyboard1;
