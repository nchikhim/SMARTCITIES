import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Pressable, Image, Modal } from "react-native";
import Keyboard1 from "../components/Keyboard1";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Search = () => {
  const [rectangle1Visible, setRectangle1Visible] = useState(false);
  const navigation = useNavigation();

  const openRectangle1 = useCallback(() => {
    setRectangle1Visible(true);
  }, []);

  const closeRectangle1 = useCallback(() => {
    setRectangle1Visible(false);
  }, []);

  return (
    <>
      <View style={[styles.search, styles.iconLayout]}>
        <Text style={[styles.searchEverythingIn, styles.trySearchingForTypo]}>
          Search everything in SMART community. You can search all nodes in a
          page like text, component...
        </Text>
        <View style={styles.searchChild} />
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <Pressable
            style={[styles.groupChild, styles.groupChildLayout]}
            onPress={openRectangle1}
          />
          <Text
            style={[styles.trySearchingFor, styles.trySearchingForTypo]}
          >{`Try searching for something... `}</Text>
          <Image
            style={[styles.groupItem, styles.groupItemLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-8.png")}
          />
        </View>
        <Pressable
          style={[styles.arrowLeftCircle, styles.groupItemLayout]}
          onPress={() => navigation.navigate("Menu")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/arrowleftcircle3.png")}
          />
        </Pressable>
        <Image
          style={styles.searchItem}
          resizeMode="cover"
          source={require("../assets/rectangle-81.png")}
        />
      </View>

      <Modal animationType="fade" transparent visible={rectangle1Visible}>
        <View style={styles.rectangle1Overlay}>
          <Pressable style={styles.rectangle1Bg} onPress={closeRectangle1} />
          <Keyboard1 onClose={closeRectangle1} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  trySearchingForTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  groupChildLayout: {
    height: 30,
    width: 340,
    position: "absolute",
  },
  groupItemLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  searchEverythingIn: {
    top: 415,
    left: 41,
    color: "rgba(0, 0, 0, 0.8)",
    width: 280,
    height: 70,
  },
  searchChild: {
    top: -1,
    right: 0,
    backgroundColor: Color.colorGray_1100,
    borderStyle: "solid",
    borderColor: Color.colorGray_200,
    borderBottomWidth: 2,
    height: 111,
    left: 0,
    position: "absolute",
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
  groupChild: {
    top: 0,
    backgroundColor: Color.colorGainsboro_400,
    left: 0,
  },
  trySearchingFor: {
    top: 8,
    left: 40,
    color: Color.labelsLightPrimary,
  },
  groupItem: {
    top: 3,
    left: 3,
  },
  rectangleParent: {
    top: 68,
    left: 10,
  },
  icon: {
    height: "100%",
  },
  arrowLeftCircle: {
    top: 38,
    left: 10,
  },
  searchItem: {
    top: 253,
    left: 93,
    width: 152,
    height: 131,
    position: "absolute",
  },
  search: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
  },
});

export default Search;
