import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Appointmnet = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.appointmnet}>
      <View style={styles.appointmnetChild} />
      <Pressable
        style={[styles.arrowLeftCircle, styles.vector1Layout]}
        onPress={() => navigation.navigate("DoctorList")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/arrowleftcircle3.png")}
        />
      </Pressable>
      <Text style={[styles.drZhouYi, styles.drZhouYiLayout]}>Dr. Zhou Yi</Text>
      <Text
        style={[styles.cardiacSurgeryMalaysia, styles.bookAppointment1Typo]}
      >
        Cardiac Surgery, Malaysia
      </Text>
      <View style={[styles.patient, styles.patientLayout]}>
        <Text style={styles.patients}>Patients</Text>
        <Text style={[styles.text, styles.textTypo]}>800+</Text>
      </View>
      <View style={[styles.patient1, styles.patientLayout]}>
        <Text style={styles.patients}>Experience</Text>
        <Text style={[styles.years, styles.textTypo]}>12 Years+</Text>
      </View>
      <Image
        style={styles.image17Icon}
        resizeMode="cover"
        source={require("../assets/image-17.png")}
      />
      <View style={styles.appointmnetItem} />
      <Text
        style={[styles.aboutDoctorSpecialtyContainer, styles.drZhouYiLayout]}
      >
        <Text style={styles.aboutDoctor}>{`About doctor...
`}</Text>
        <Text style={styles.specialtyCardiothoracicSurg}>{`
Specialty: Cardiothoracic Surgery
Languages: Mandarin, English, Bahasa Malaysia
Gender: Male
Qualifications: MS (UM), MRCSEd FAMS (CTh, S’pore), FRCSEd (CTh), FRCS England (CTh), FRCS Glasgow, MEBCTS (Cardiac Surgery), ANZCTS (CTh Australia)`}</Text>
      </Text>
      <Image
        style={styles.image30Icon}
        resizeMode="cover"
        source={require("../assets/image-30.png")}
      />
      <View style={[styles.appointmnetInner, styles.vectorLayout]} />
      <Pressable
        style={styles.bookAppointment}
        onPress={() => navigation.navigate("BookedSuccessfully")}
      >
        <Text style={[styles.bookAppointment1, styles.bookAppointment1Typo]}>
          Book Appointment
        </Text>
      </Pressable>
      <Text style={styles.doctorsProfile}>Doctor’s Profile</Text>
      <View style={styles.mainbarPosition}>
        <View style={[styles.mainbarChild, styles.mainbarPosition]} />
        <Pressable
          style={[styles.vector, styles.vectorLayout]}
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
  drZhouYiLayout: {
    width: 258,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  bookAppointment1Typo: {
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  patientLayout: {
    height: 99,
    width: 121,
    top: 248,
    borderRadius: Border.br_3xs,
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    height: 20,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  vectorLayout: {
    height: 25,
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
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  appointmnetChild: {
    top: 117,
    left: 13,
    backgroundColor: "rgba(226, 236, 249, 0.5)",
    width: 335,
    height: 602,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrowLeftCircle: {
    left: 11,
    top: 59,
    width: 24,
  },
  drZhouYi: {
    top: 155,
    fontSize: FontSize.size_13xl,
    height: 71,
    fontFamily: FontFamily.interRegular,
    left: 47,
    width: 258,
  },
  cardiacSurgeryMalaysia: {
    top: 190,
    width: 176,
    height: 12,
    color: Color.labelsLightPrimary,
    fontSize: FontSize.size_smi,
    left: 47,
    position: "absolute",
  },
  patients: {
    top: 26,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.handleeRegular,
    width: 108,
    height: 23,
    textAlign: "center",
    left: 6,
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  text: {
    left: 14,
    width: 92,
    top: 53,
  },
  patient: {
    backgroundColor: "rgba(176, 213, 248, 0.3)",
    left: 53,
  },
  years: {
    top: 54,
    width: 118,
    left: 6,
    height: 20,
    fontSize: FontSize.size_xl,
  },
  patient1: {
    left: 180,
    backgroundColor: Color.colorPalegoldenrod,
  },
  image17Icon: {
    top: 504,
    left: 23,
    width: 314,
    height: 87,
    position: "absolute",
  },
  appointmnetItem: {
    top: 351,
    backgroundColor: Color.colorGainsboro_400,
    width: 265,
    height: 127,
    opacity: 0.3,
    left: 53,
    borderRadius: Border.br_3xs,
    position: "absolute",
    overflow: "hidden",
  },
  aboutDoctor: {
    fontSize: FontSize.size_base,
  },
  specialtyCardiothoracicSurg: {
    fontSize: 9,
  },
  aboutDoctorSpecialtyContainer: {
    top: 361,
    left: 63,
    fontFamily: FontFamily.adaminaRegular,
    height: 113,
  },
  image30Icon: {
    top: 137,
    left: 234,
    borderRadius: Border.br_281xl,
    width: 89,
    height: 89,
    position: "absolute",
  },
  appointmnetInner: {
    top: 630,
    left: 117,
    backgroundColor: Color.colorRoyalblue_100,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 136,
    borderRadius: Border.br_3xs,
  },
  bookAppointment1: {
    color: Color.colorGray_100,
  },
  bookAppointment: {
    left: 128,
    top: 635,
    position: "absolute",
  },
  doctorsProfile: {
    left: 81,
    fontSize: FontSize.size_11xl,
    color: Color.colorGray_900,
    width: 248,
    height: 59,
    top: 53,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
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
    width: 24,
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
  appointmnet: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Appointmnet;
