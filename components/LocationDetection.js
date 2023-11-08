import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, Image, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import EnableLocation from "./EnableLocation";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const LocationDetection = ({ onClose }) => {
  const navigation = useNavigation();
  const [dontAllowContainerVisible, setDontAllowContainerVisible] =
    useState(false);

  const openDontAllowContainer = useCallback(() => {
    setDontAllowContainerVisible(true);
  }, []);

  const closeDontAllowContainer = useCallback(() => {
    setDontAllowContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.locationdetection}>
        <View style={styles.viewsAlertsLightPreci}>
          <View style={styles.viewsAlertsLightPreciInner}>
            <View style={styles.titleParent}>
              <Text
                style={[styles.title, styles.titleLayout]}
              >{`Allow “App” to use 
your location?`}</Text>
              <Text style={[styles.description, styles.allowOnce1Typo]}>
                Your precise location is used to show your position on the map,
                get directions, estimate travel times and improve search results
              </Text>
            </View>
          </View>
          <View style={styles.mapLayout}>
            <View style={[styles.map1, styles.mapPosition]}>
              <Image
                style={[styles.mapViewIcon, styles.mapPosition]}
                resizeMode="cover"
                source={require("../assets/map-view.png")}
              />
            </View>
            <View style={styles.preciseSwitcherOnLight}>
              <Image
                style={styles.preciseSwitcherOnLightChild}
                resizeMode="cover"
                source={require("../assets/vector-1.png")}
              />
              <Text style={[styles.preciseOn, styles.preciseOnClr]}>
                Precise: On
              </Text>
            </View>
            <Image
              style={styles.precisePinIcon}
              resizeMode="cover"
              source={require("../assets/precise-pin.png")}
            />
          </View>
          <View style={styles.titleParent}>
            <View style={styles.topBorder} />
            <Pressable
              style={styles.allowOnce}
              onPress={() => navigation.navigate("Menu")}
            >
              <Text style={[styles.allowOnce1, styles.preciseOnClr]}>
                Allow Once
              </Text>
            </Pressable>
            <View style={styles.topBorder} />
            <Pressable
              style={styles.allowOnce}
              onPress={() => navigation.navigate("Menu")}
            >
              <Text style={[styles.allowOnce1, styles.preciseOnClr]}>
                Allow While Using the App
              </Text>
            </Pressable>
            <View style={styles.topBorder} />
            <Pressable
              style={styles.allowOnce}
              onPress={openDontAllowContainer}
            >
              <Text style={[styles.allowOnce1, styles.preciseOnClr]}>
                Don’t Allow
              </Text>
            </Pressable>
          </View>
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={dontAllowContainerVisible}
      >
        <View style={styles.dontAllowContainerOverlay}>
          <Pressable
            style={styles.dontAllowContainerBg}
            onPress={closeDontAllowContainer}
          />
          <EnableLocation onClose={closeDontAllowContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  titleLayout: {
    width: 238,
    color: Color.labelsLightPrimary,
    letterSpacing: 0,
  },
  allowOnce1Typo: {
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
  },
  mapPosition: {
    left: 0,
    position: "absolute",
  },
  preciseOnClr: {
    color: Color.tintsBlueLight,
    letterSpacing: 0,
  },
  title: {
    textAlign: "center",
    width: 238,
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interThin,
    fontWeight: "100",
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.size_mid,
  },
  description: {
    lineHeight: 16,
    marginTop: 2,
    fontSize: FontSize.size_smi,
    width: 238,
    color: Color.labelsLightPrimary,
    letterSpacing: 0,
    fontFamily: FontFamily.interRegular,
  },
  titleParent: {
    alignItems: "center",
  },
  viewsAlertsLightPreciInner: {
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    padding: 16,
    overflow: "hidden",
  },
  mapViewIcon: {
    bottom: -8,
    width: 288,
    height: 182,
  },
  map1: {
    top: 0,
    height: 174,
    width: 270,
    overflow: "hidden",
  },
  preciseSwitcherOnLightChild: {
    width: 10,
    height: 9,
  },
  preciseOn: {
    lineHeight: 18,
    textAlign: "left",
    display: "flex",
    width: 73,
    height: 17,
    marginLeft: 5,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.interThin,
    fontWeight: "100",
    color: Color.tintsBlueLight,
    alignItems: "center",
  },
  preciseSwitcherOnLight: {
    top: 8,
    left: 8,
    borderRadius: 1000,
    shadowColor: "rgba(0, 0, 0, 0.12)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    flexDirection: "row",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 3,
    alignItems: "center",
    position: "absolute",
    backgroundColor: Color.white,
  },
  precisePinIcon: {
    bottom: 86,
    left: 127,
    width: 42,
    height: 42,
    position: "absolute",
  },
  mapLayout: {
    height: 174,
    width: 270,
  },
  topBorder: {
    backgroundColor: Color.colorDarkslategray_500,
    height: 1,
    width: 270,
  },
  allowOnce1: {
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.tintsBlueLight,
    lineHeight: 22,
    fontSize: FontSize.size_mid,
  },
  allowOnce: {
    alignSelf: "stretch",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
  },
  dontAllowContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  dontAllowContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  viewsAlertsLightPreci: {
    marginTop: -223.75,
    marginLeft: -135,
    top: "50%",
    left: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    position: "absolute",
    borderRadius: Border.br_base,
  },
  locationdetection: {
    height: 448,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    width: 270,
    backgroundColor: Color.white,
    borderRadius: Border.br_base,
  },
});

export default LocationDetection;
