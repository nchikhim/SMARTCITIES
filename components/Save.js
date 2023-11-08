import React, { useState, useCallback } from "react";
import { View, StyleSheet, Text, Image, Pressable, Modal } from "react-native";
import Care2 from "./Care2";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Save = ({ onClose }) => {
  const [vectorImageVisible, setVectorImageVisible] = useState(false);

  const openVectorImage = useCallback(() => {
    setVectorImageVisible(true);
  }, []);

  const closeVectorImage = useCallback(() => {
    setVectorImageVisible(false);
  }, []);

  return (
    <>
      <View style={[styles.save, styles.saveLayout]}>
        <View style={styles.rectangle} />
        <Text style={[styles.noFavoritesSaved, styles.favoritesTypo]}>
          No favorites saved yet
        </Text>
        <Pressable style={styles.vector} onPress={openVectorImage}>
          <Image
            style={[styles.icon, styles.saveLayout]}
            resizeMode="cover"
            source={require("../assets/vector45.png")}
          />
        </Pressable>
        <Image
          style={[styles.starIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/star.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/vector46.png")}
        />
        <Text style={[styles.favorites, styles.favoritesTypo]}>Favorites</Text>
      </View>

      <Modal animationType="fade" transparent visible={vectorImageVisible}>
        <View style={styles.vectorImageOverlay}>
          <Pressable style={styles.vectorImageBg} onPress={closeVectorImage} />
          <Care2 onClose={closeVectorImage} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  saveLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  favoritesTypo: {
    textAlign: "center",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  iconPosition: {
    top: "13.66%",
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  rectangle: {
    height: "93.04%",
    width: "91.49%",
    top: "3.35%",
    right: "3.95%",
    bottom: "3.61%",
    left: "4.56%",
    borderRadius: Border.br_9xl,
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.18)",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowRadius: 23,
    elevation: 23,
    shadowOpacity: 1,
    position: "absolute",
  },
  noFavoritesSaved: {
    top: "54.38%",
    left: "18.24%",
  },
  vectorImageOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  vectorImageBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "25.53%",
    top: "74.23%",
    right: "25.53%",
    bottom: "15.46%",
    width: "48.94%",
    height: "10.31%",
    position: "absolute",
  },
  starIcon: {
    height: "21.39%",
    width: "31%",
    right: "34.04%",
    bottom: "64.95%",
    left: "34.95%",
  },
  vectorIcon: {
    height: "28.35%",
    width: "27.05%",
    right: "36.17%",
    bottom: "57.99%",
    left: "36.78%",
  },
  favorites: {
    top: "46.91%",
    left: "37.08%",
  },
  save: {
    width: 329,
    height: 388,
  },
});

export default Save;
