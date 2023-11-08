import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Home42 from "./Home42";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Home41 = ({ onClose }) => {
  const navigation = useNavigation();
  const [rectangle1Visible, setRectangle1Visible] = useState(false);

  const openRectangle1 = useCallback(() => {
    setRectangle1Visible(true);
  }, []);

  const closeRectangle1 = useCallback(() => {
    setRectangle1Visible(false);
  }, []);

  return (
    <>
      <View style={styles.home4}>
        <Text style={styles.thePersonalInformation}>{`The personal information 
cannot be changed once confirm`}</Text>
        <Pressable
          style={[styles.home4Child, styles.home4ShadowBox]}
          onPress={() => navigation.navigate("HomeRepairServices2")}
        />
        <Text style={[styles.confirm, styles.backTypo]}>{`CONFIRM `}</Text>
        <Pressable
          style={[styles.home4Item, styles.home4ShadowBox]}
          onPress={openRectangle1}
        />
        <Text style={[styles.back, styles.backTypo]}>{`BACK `}</Text>
      </View>

      <Modal animationType="fade" transparent visible={rectangle1Visible}>
        <View style={styles.rectangle1Overlay}>
          <Pressable style={styles.rectangle1Bg} onPress={closeRectangle1} />
          <Home42 onClose={closeRectangle1} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  home4ShadowBox: {
    height: 46,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorLemonchiffon,
    top: 191,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  backTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi,
    top: 205,
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  thePersonalInformation: {
    top: 66,
    left: 17,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.paytoneOneRegular,
    textAlign: "center",
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  home4Child: {
    left: 158,
    width: 138,
  },
  confirm: {
    left: 199,
  },
  rectangle1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  rectangle1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  home4Item: {
    left: 2,
    width: 146,
  },
  back: {
    left: 56,
  },
  home4: {
    backgroundColor: Color.white,
    width: 298,
    height: 249,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: Border.br_11xl,
  },
});

export default Home41;
