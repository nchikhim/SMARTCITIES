import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Complaint3 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.complaint3, styles.iconLayout]}>
      <View style={styles.complaint3Child} />
      <Image
        style={styles.complaint3Item}
        resizeMode="cover"
        source={require("../assets/rectangle-92.png")}
      />
      <Text style={[styles.photo, styles.infoFlexBox]}>PHOTO :</Text>
      <View style={[styles.complaint3Inner, styles.lineViewBorder]} />
      <Image
        style={styles.clarityformLineIcon}
        resizeMode="cover"
        source={require("../assets/clarityformline1.png")}
      />
      <Image
        style={styles.electriciancuateIcon}
        resizeMode="cover"
        source={require("../assets/electriciancuate3.png")}
      />
      <Text style={[styles.complaintForm, styles.infoFlexBox]}>
        Complaint Form
      </Text>
      <Text
        style={[styles.nameCoolgirls, styles.infoFlexBox]}
      >{`NAME : CoolGirls
PHONE NUMBER : 012-345 6789
EMAIL: coolgirls@gmail.com

ADDRESS: 123, Jln Seksyen 1/2, Bandar Barat
STATE: Perak
City: Kampar
POSTCODE: 31900`}</Text>
      <Text style={[styles.personalInfo, styles.infoFlexBox]}>
        PERSONAL INFO
      </Text>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("Complaint4")}
      />
      <Text style={[styles.send, styles.infoFlexBox]}>SEND</Text>
      <View style={[styles.lineView, styles.lineViewBorder]} />
      <Text style={[styles.complaintInfo, styles.infoFlexBox]}>
        COMPLAINT INFO
      </Text>
      <Text
        style={[styles.complaintTypeStreet, styles.complaintTypo]}
      >{`COMPLAINT TYPE: street lamp 
COMPLAINT DETAIL: street lamp is broken`}</Text>
      <Text style={[styles.complaintDate26, styles.complaintTypo]}>
        COMPLAINT DATE: 26 / 10 / 2023
      </Text>
      <Text style={[styles.locationJlnSeksyen, styles.complaintTypo]}>
        LOCATION: Jln Seksyen 1/1, Bandar Barat, 31900 Kampar, Perak
      </Text>
      <Pressable
        style={styles.arrowLeftCircle}
        onPress={() => navigation.navigate("CommunityComplaint")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/arrowleftcircle7.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  infoFlexBox: {
    textAlign: "left",
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  lineViewBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.labelsLightPrimary,
    borderStyle: "solid",
    position: "absolute",
  },
  complaintTypo: {
    fontSize: FontSize.size_mini,
    left: 13,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  complaint3Child: {
    top: 76,
    left: 0,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGainsboro_200,
    borderWidth: 1,
    width: 360,
    height: 630,
    borderColor: Color.labelsLightPrimary,
    borderStyle: "solid",
    position: "absolute",
  },
  complaint3Item: {
    top: 564,
    width: 100,
    height: 128,
    left: 24,
    position: "absolute",
  },
  photo: {
    top: 540,
    fontFamily: FontFamily.interRegular,
    color: Color.labelsLightPrimary,
    fontSize: FontSize.size_xl,
    left: 24,
  },
  complaint3Inner: {
    top: 128,
    left: -1,
    width: 361,
  },
  clarityformLineIcon: {
    top: 31,
    left: 69,
    width: 36,
    height: 36,
    position: "absolute",
    overflow: "hidden",
  },
  electriciancuateIcon: {
    height: "68.07%",
    width: "150.83%",
    top: "14.25%",
    right: "-313.89%",
    bottom: "17.68%",
    left: "263.06%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  complaintForm: {
    top: 38,
    left: 120,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.size_xl,
  },
  nameCoolgirls: {
    top: 159,
    left: 10,
    fontSize: FontSize.size_base,
    width: 346,
    fontFamily: FontFamily.interRegular,
    color: Color.labelsLightPrimary,
  },
  personalInfo: {
    top: 92,
    left: 104,
    fontFamily: FontFamily.interRegular,
    color: Color.labelsLightPrimary,
    fontSize: FontSize.size_xl,
  },
  rectanglePressable: {
    top: 715,
    left: 101,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorPaleturquoise,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 157,
    height: 46,
    position: "absolute",
  },
  send: {
    top: 730,
    left: 162,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.interRegular,
    color: Color.labelsLightPrimary,
  },
  lineView: {
    top: 402,
    left: 1,
    width: 359,
  },
  complaintInfo: {
    top: 372,
    left: 92,
    width: 179,
    height: 27,
    fontFamily: FontFamily.interRegular,
    color: Color.labelsLightPrimary,
    fontSize: FontSize.size_xl,
  },
  complaintTypeStreet: {
    top: 423,
  },
  complaintDate26: {
    top: 462,
    width: 306,
  },
  locationJlnSeksyen: {
    top: 483,
    width: 333,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  arrowLeftCircle: {
    left: 11,
    top: 24,
    width: 24,
    height: 24,
    position: "absolute",
  },
  complaint3: {
    backgroundColor: Color.white,
    flex: 1,
    height: 781,
    overflow: "hidden",
  },
});

export default Complaint3;
