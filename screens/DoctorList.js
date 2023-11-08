import * as React from "react";
import { Image, StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const DoctorList = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.doctorList}>
      <Pressable
        style={[styles.arrowLeftCircle, styles.vector1Layout]}
        onPress={() => navigation.navigate("Healthcare")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/arrowleftcircle3.png")}
        />
      </Pressable>
      <View style={styles.doctorListChild} />
      <View style={[styles.doctorListItem, styles.doctorLayout]} />
      <View style={[styles.doctorListInner, styles.doctorChildLayout2]} />
      <Text style={[styles.viewProfile, styles.viewTypo2]}>View Profile</Text>
      <Text style={[styles.drAhmadSaiful, styles.drAnnettaTypo]}>
        Dr. Ahmad Saiful
      </Text>
      <Text style={[styles.cardiacSurgeryMalaysia, styles.cardiacTypo2]}>
        Cardiac Surgery, Malaysia
      </Text>
      <Text style={[styles.cardiacSurgeryMalaysia1, styles.cardiacTypo1]}>
        Cardiac Surgery, Malaysia
      </Text>
      <Text style={[styles.appointment, styles.appointmentLayout]}>
        Appointment
      </Text>
      <View style={[styles.rectangleView, styles.doctorLayout]} />
      <View style={[styles.doctorListChild1, styles.doctorChildLayout2]} />
      <Text style={[styles.viewProfile1, styles.viewTypo1]}>View Profile</Text>
      <Text style={[styles.drWangQing, styles.drWangQingTypo]}>
        Dr. Wang Qing
      </Text>
      <View style={[styles.doctorListChild2, styles.doctorChildLayout1]} />
      <View style={[styles.doctorListChild3, styles.doctorChildLayout2]} />
      <Text style={[styles.viewProfile2, styles.viewTypo2]}>View Profile</Text>
      <Text
        style={[styles.drAnnetta, styles.drAnnettaTypo]}
      >{`Dr. Annetta `}</Text>
      <View style={[styles.doctorListChild4, styles.doctorChildLayout1]} />
      <View style={[styles.doctorListChild5, styles.doctorChildLayout]} />
      <Text style={[styles.viewProfile3, styles.viewTypo1]}>View Profile</Text>
      <Text style={[styles.cardiacSurgeryMalaysia2, styles.cardiacTypo]}>
        Cardiac Surgery, Malaysia
      </Text>
      <Text style={[styles.cardiacSurgeryMalaysia3, styles.cardiacTypo]}>
        Cardiac Surgery, Malaysia
      </Text>
      <View style={[styles.doctorListChild6, styles.doctorLayout]} />
      <Pressable
        style={[styles.rectanglePressable, styles.doctorChildLayout2]}
        onPress={() => navigation.navigate("Appointmnet")}
      />
      <Text style={[styles.viewProfile4, styles.viewTypo]}>View Profile</Text>
      <Text style={[styles.drZhouYi, styles.drZhouYiTypo]}>Dr. Zhou Yi</Text>
      <View style={styles.more}>
        <Text style={styles.more1}>More...</Text>
      </View>
      <Text style={[styles.drFangXin, styles.drZhouYiTypo]}>Dr. Fang Xin</Text>
      <Text style={[styles.cardiacSurgeryMalaysia4, styles.cardiacTypo2]}>
        Cardiac Surgery, Malaysia
      </Text>
      <Text style={[styles.cardiacSurgeryMalaysia5, styles.cardiacTypo1]}>
        Cardiac Surgery, Malaysia
      </Text>
      <View style={[styles.doctorListChild7, styles.doctorChildLayout]} />
      <Text style={[styles.viewProfile5, styles.viewTypo]}>View Profile</Text>
      <Text style={[styles.drTangMing, styles.drWangQingTypo]}>
        Dr. Tang Ming
      </Text>
      <View style={[styles.frameView, styles.doctorChildLayout2]} />
      <Image
        style={[styles.image24Icon, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/image-24.png")}
      />
      <Image
        style={[styles.image26Icon, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/image-24.png")}
      />
      <Image
        style={[styles.image25Icon, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/image-24.png")}
      />
      <Image
        style={[styles.image27Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/image-27.png")}
      />
      <Image
        style={[styles.image29Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/image-27.png")}
      />
      <Image
        style={[styles.image28Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/image-27.png")}
      />
      <Text style={[styles.doctorList1, styles.viewTypo2]}>Doctor List</Text>
      <View style={styles.mainbarPosition}>
        <View style={[styles.mainbarChild, styles.mainbarPosition]} />
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("Message")}
        >
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
        </Pressable>
        <Text style={[styles.message, styles.menuTypo]}>Message</Text>
        <Text style={[styles.menu, styles.menuTypo]}>Menu</Text>
        <Pressable
          style={[styles.vector1, styles.vector1Layout]}
          onPress={() => navigation.navigate("Menu")}
        >
          <Image
            style={styles.icon2}
            resizeMode="cover"
            source={require("../assets/vector3.png")}
          />
        </Pressable>
        <Text style={[styles.profile, styles.menuTypo]}>Profile</Text>
        <Pressable
          style={styles.user}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/user1.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vector1Layout: {
    height: 24,
    position: "absolute",
  },
  doctorLayout: {
    left: 190,
    height: 135,
    width: 143,
    backgroundColor: Color.colorGainsboro_400,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  doctorChildLayout2: {
    width: 100,
    position: "absolute",
  },
  viewTypo2: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  drAnnettaTypo: {
    color: Color.labelsLightPrimary,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  cardiacTypo2: {
    height: 12,
    width: 124,
    fontSize: FontSize.size_3xs,
    top: 609,
    color: Color.labelsLightPrimary,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  cardiacTypo1: {
    top: 237,
    height: 12,
    width: 124,
    fontSize: FontSize.size_3xs,
    color: Color.labelsLightPrimary,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  appointmentLayout: {
    height: 13,
    width: 82,
  },
  viewTypo1: {
    top: 445,
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  drWangQingTypo: {
    top: 409,
    color: Color.labelsLightPrimary,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  doctorChildLayout1: {
    left: 26,
    height: 135,
    width: 143,
    backgroundColor: Color.colorGainsboro_400,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  doctorChildLayout: {
    left: 51,
    width: 100,
    backgroundColor: Color.colorRoyalblue_100,
    borderRadius: Border.br_3xs,
    height: 24,
    position: "absolute",
  },
  cardiacTypo: {
    top: 425,
    height: 12,
    width: 124,
    fontSize: FontSize.size_3xs,
    color: Color.labelsLightPrimary,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  viewTypo: {
    color: Color.white,
    top: 257,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  drZhouYiTypo: {
    height: 20,
    width: 99,
    fontSize: FontSize.size_mini,
    color: Color.labelsLightPrimary,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iconLayout2: {
    height: 60,
    width: 63,
    borderRadius: Border.br_81xl_5,
    position: "absolute",
  },
  iconLayout: {
    height: 63,
    borderRadius: Border.br_281xl,
    width: 63,
    position: "absolute",
  },
  mainbarPosition: {
    height: 68,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
  },
  menuTypo: {
    fontSize: FontSize.size_xs,
    bottom: 8,
    color: Color.labelsLightPrimary,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrowLeftCircle: {
    left: 24,
    width: 24,
    top: 60,
    height: 24,
  },
  doctorListChild: {
    left: 30,
    height: 135,
    width: 143,
    backgroundColor: Color.colorGainsboro_400,
    borderRadius: Border.br_3xs,
    top: 149,
    position: "absolute",
  },
  doctorListItem: {
    top: 519,
  },
  doctorListInner: {
    backgroundColor: Color.colorRoyalblue_100,
    width: 100,
    borderRadius: Border.br_3xs,
    height: 24,
    left: 213,
    top: 625,
  },
  viewProfile: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_smi,
    top: 629,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    left: 227,
  },
  drAhmadSaiful: {
    left: 210,
    top: 596,
    color: Color.labelsLightPrimary,
  },
  cardiacSurgeryMalaysia: {
    left: 199,
  },
  cardiacSurgeryMalaysia1: {
    left: 38,
  },
  appointment: {
    top: 632,
    left: 58,
    color: Color.labelsLightPrimary,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  rectangleView: {
    top: 334,
  },
  doctorListChild1: {
    top: 441,
    backgroundColor: Color.colorRoyalblue_100,
    width: 100,
    borderRadius: Border.br_3xs,
    height: 24,
    left: 213,
  },
  viewProfile1: {
    left: 227,
  },
  drWangQing: {
    left: 217,
  },
  doctorListChild2: {
    top: 522,
  },
  doctorListChild3: {
    left: 47,
    backgroundColor: Color.colorRoyalblue_100,
    width: 100,
    borderRadius: Border.br_3xs,
    height: 24,
    top: 625,
  },
  viewProfile2: {
    left: 61,
    color: Color.colorGray_100,
    fontSize: FontSize.size_smi,
    top: 629,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  drAnnetta: {
    left: 63,
    top: 596,
    color: Color.labelsLightPrimary,
  },
  doctorListChild4: {
    top: 334,
  },
  doctorListChild5: {
    top: 441,
  },
  viewProfile3: {
    left: 65,
  },
  cardiacSurgeryMalaysia2: {
    left: 201,
  },
  cardiacSurgeryMalaysia3: {
    left: 38,
  },
  doctorListChild6: {
    top: 149,
    left: 190,
  },
  rectanglePressable: {
    top: 254,
    left: 210,
    backgroundColor: Color.colorRoyalblue_100,
    width: 100,
    borderRadius: Border.br_3xs,
    height: 24,
  },
  viewProfile4: {
    left: 227,
  },
  drZhouYi: {
    top: 222,
    left: 220,
  },
  more1: {
    top: "0%",
    left: "0%",
    color: Color.colorSteelblue,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    width: "100%",
  },
  more: {
    top: 691,
    left: 151,
    width: 56,
    height: 18,
    position: "absolute",
  },
  drFangXin: {
    top: 223,
    left: 60,
  },
  cardiacSurgeryMalaysia4: {
    left: 35,
  },
  cardiacSurgeryMalaysia5: {
    left: 199,
  },
  doctorListChild7: {
    top: 253,
  },
  viewProfile5: {
    left: 67,
    height: 13,
    width: 82,
  },
  drTangMing: {
    left: 57,
  },
  frameView: {
    top: 646,
    left: 273,
    height: 100,
    overflow: "hidden",
  },
  image24Icon: {
    top: 159,
    left: 69,
  },
  image26Icon: {
    left: 66,
    top: 530,
  },
  image25Icon: {
    top: 342,
    left: 227,
  },
  image27Icon: {
    top: 156,
    left: 230,
    height: 63,
    borderRadius: Border.br_281xl,
  },
  image29Icon: {
    left: 230,
    height: 63,
    borderRadius: Border.br_281xl,
    top: 530,
  },
  image28Icon: {
    top: 342,
    left: 67,
  },
  doctorList1: {
    left: 113,
    fontSize: FontSize.size_11xl,
    color: Color.colorGray_900,
    width: 248,
    height: 59,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    top: 60,
  },
  mainbarChild: {
    borderStyle: "solid",
    borderColor: Color.colorDimgray_100,
    borderTopWidth: 2,
    backgroundColor: Color.white,
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: 62,
    bottom: 25,
    height: 25,
    width: 24,
    position: "absolute",
  },
  message: {
    left: 46,
    width: 55,
  },
  menu: {
    left: 164,
    width: 32,
  },
  icon2: {
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
  },
  vector1: {
    left: 169,
    right: 169,
    bottom: 26,
  },
  profile: {
    right: 54,
    width: 37,
  },
  user: {
    right: 57,
    bottom: 23,
    width: 30,
    height: 30,
    position: "absolute",
  },
  doctorList: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default DoctorList;
