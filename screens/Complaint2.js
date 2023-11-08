import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Complaint2 = () => {
  return (
    <View style={styles.complaint2}>
      <Image
        style={[styles.electriciancuateIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/electriciancuate4.png")}
      />
      <LinearGradient
        style={styles.complaint2Child}
        locations={[1, 1]}
        colors={["rgba(254, 254, 254, 0.82)", "rgba(250, 250, 250, 0)"]}
        useAngle={true}
        angle={179.57}
      />
      <Text style={[styles.complaintId134974, styles.complaintLayout]}>
        Complaint ID: 134974
      </Text>
      <Text style={[styles.statusSuccessful, styles.complaintFlexBox]}>
        Status: successful
      </Text>
      <Text style={[styles.complaintTypeStreet, styles.complaintFlexBox]}>
        Complaint type: Street lamp
      </Text>
      <Text style={[styles.history, styles.complaintFlexBox]}>History</Text>
      <Image
        style={[styles.complaint2Item, styles.complaint2Position]}
        resizeMode="cover"
        source={require("../assets/line-101.png")}
      />
      <Text style={[styles.complaintDate1, styles.complaintFlexBox]}>
        Complaint date: 1 / 11 / 2023
      </Text>
      <Text style={[styles.complaintId1349741, styles.complaintTypo]}>
        Complaint ID: 134974
      </Text>
      <Text style={[styles.statusSuccessful1, styles.complaintTypo]}>
        Status: successful
      </Text>
      <Text style={[styles.complaintTypePublic, styles.complaintTypo]}>
        Complaint type: Public facilities
      </Text>
      <Image
        style={[styles.complaint2Inner, styles.complaint2Position]}
        resizeMode="cover"
        source={require("../assets/line-11.png")}
      />
      <Text style={[styles.complaintDate26, styles.complaintTypo]}>
        Complaint date: 26 / 10 / 2023
      </Text>
      <Image
        style={[styles.iconTimeHistory, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/-icon-time-history.png")}
      />
      <Image
        style={styles.arrowLeftCircleIcon}
        resizeMode="cover"
        source={require("../assets/arrowleftcircle8.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  complaintLayout: {
    height: 20,
    width: 198,
  },
  complaintFlexBox: {
    textAlign: "left",
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  complaint2Position: {
    width: 236,
    left: 0,
    position: "absolute",
  },
  complaintTypo: {
    left: 9,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  electriciancuateIcon: {
    height: "68.06%",
    width: "150.82%",
    top: "14.25%",
    right: "-313.89%",
    bottom: "17.69%",
    left: "263.07%",
  },
  complaint2Child: {
    top: 0,
    left: 5,
    width: 354,
    height: 952,
    backgroundColor: "transparent",
    position: "absolute",
  },
  complaintId134974: {
    top: 67,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    position: "absolute",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi,
    left: 13,
  },
  statusSuccessful: {
    top: 128,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi,
    left: 13,
    color: Color.labelsLightPrimary,
  },
  complaintTypeStreet: {
    top: 86,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi,
    left: 13,
    color: Color.labelsLightPrimary,
  },
  history: {
    top: 17,
    left: 99,
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
  },
  complaint2Item: {
    top: 163,
    height: 2,
  },
  complaintDate1: {
    top: 107,
    width: 208,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi,
    left: 13,
    color: Color.labelsLightPrimary,
  },
  complaintId1349741: {
    top: 185,
    height: 20,
    width: 198,
  },
  statusSuccessful1: {
    top: 246,
  },
  complaintTypePublic: {
    top: 204,
  },
  complaint2Inner: {
    top: 285,
    height: 4,
  },
  complaintDate26: {
    top: 225,
    width: 208,
  },
  iconTimeHistory: {
    height: "2.69%",
    width: "9.02%",
    top: "2.17%",
    right: "63.93%",
    bottom: "95.14%",
    left: "27.05%",
  },
  arrowLeftCircleIcon: {
    top: 24,
    left: 11,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  complaint2: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Complaint2;
