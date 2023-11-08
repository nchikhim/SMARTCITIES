import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const HomeRepairServices1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.homeRepairServices, styles.iconLayout]}>
      <View style={[styles.homeRepairServicesChild, styles.homePosition]} />
      <View style={[styles.homeRepairServicesItem, styles.homePosition]} />
      <View
        style={[
          styles.homeRepairServicesInner,
          styles.previousWorkExperiencePosition,
        ]}
      />
      <View style={[styles.rectangleView, styles.homePosition]} />
      <Image
        style={styles.electriciancuateIcon}
        resizeMode="cover"
        source={require("../assets/electriciancuate1.png")}
      />
      <View
        style={[styles.homeRepairServicesChild1, styles.continueChildLayout]}
      />
      <Text style={[styles.book, styles.dateFlexBox]}>BOOK</Text>
      <View style={[styles.continue, styles.continueChildLayout]}>
        <Pressable
          style={[styles.continueChild, styles.lineIconPosition]}
          onPress={() => navigation.navigate("HomeRepairServices")}
        />
        <Text style={[styles.continue1, styles.dateFlexBox]}>CONTINUE</Text>
      </View>
      <Image
        style={[styles.lineIcon, styles.lineIconPosition]}
        resizeMode="cover"
        source={require("../assets/line-12.png")}
      />
      <Text style={styles.jobApplication}>Job application</Text>
      <Text style={[styles.dateOfBirth, styles.dateOfBirthLayout]}>
        Date of birth
      </Text>
      <Text style={[styles.currentAddress, styles.dateTypo]}>
        Current address
      </Text>
      <Text style={[styles.email, styles.emailTypo]}>Email</Text>
      <Text style={[styles.availableStartDate, styles.dateTypo]}>
        Available start date
      </Text>
      <Text style={[styles.firstName, styles.nameTypo]}>{`FIRST  NAME `}</Text>
      <Text style={[styles.lastName, styles.lastNamePosition]}>LAST NAME</Text>
      <Text style={[styles.confirmEmail, styles.lastNamePosition]}>
        Confirm Email
      </Text>
      <Text
        style={[styles.phoneNumber, styles.dateTypo]}
      >{`Phone number `}</Text>
      <Text style={[styles.datesOfEmploymentContainer, styles.dateFlexBox]}>
        <Text style={styles.dateTypo}>{`Dates of employment
  `}</Text>
        <Text style={styles.text}>{`2/ 4 /2021 - 7 /6/2023
`}</Text>
        <Text style={styles.dateTypo}>{`Company name
 `}</Text>
        <Text style={styles.text}>{`Coffee bean
`}</Text>
        <Text style={styles.dateTypo}>{`Job title
`}</Text>
        <Text style={styles.text}>{`Coffee barista
`}</Text>
        <Text style={styles.dateTypo}>{`Job description
`}</Text>
        <Text style={styles.text}>
          prepares blended and cold drinks provided by the store
        </Text>
      </Text>
      <Text
        style={[styles.previousWorkExperience, styles.dateTypo]}
      >{`Previous work experience  `}</Text>
      <View
        style={[styles.homeRepairServicesChild2, styles.homeChildPosition2]}
      />
      <Text style={[styles.cool, styles.textTypo]}>cool</Text>
      <View
        style={[styles.homeRepairServicesChild3, styles.homeChildPosition1]}
      />
      <View
        style={[styles.homeRepairServicesChild4, styles.homeChildPosition1]}
      />
      <View
        style={[styles.homeRepairServicesChild5, styles.homeChildPosition2]}
      />
      <View
        style={[styles.homeRepairServicesChild6, styles.homeChildPosition]}
      />
      <View
        style={[styles.homeRepairServicesChild7, styles.homeChildPosition2]}
      />
      <View
        style={[styles.homeRepairServicesChild8, styles.homeChildPosition]}
      />
      <View
        style={[styles.homeRepairServicesChild9, styles.homeChildPosition2]}
      />
      <View
        style={[styles.homeRepairServicesChild10, styles.homeChildPosition3]}
      />
      <Pressable
        style={[styles.arrowLeftCircle, styles.dateOfBirthLayout]}
        onPress={() => navigation.navigate("JOB3")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/arrowleftcircle5.png")}
        />
      </Pressable>
      <Text style={[styles.girls, styles.textTypo]}>girls</Text>
      <Text style={[styles.text1, styles.textTypo]}>6 / 1 / 1999</Text>
      <Text style={[styles.text2, styles.textTypo]}>019- 8777671</Text>
      <Text style={[styles.no3347JlnSeksyen, styles.kamparPerakTypo]}>
        No.3347, Jln Seksyen 3/3, Bandar Barat,
      </Text>
      <Text style={[styles.kamparPerak, styles.kamparPerakTypo]}>
        {" "}
        31900 Kampar, Perak
      </Text>
      <Text
        style={[styles.coolgirlsgmailcom, styles.coolgirlsgmailcomTypo]}
      >{`coolgirls@gmail.com
`}</Text>
      <Text
        style={[styles.coolgirlsgmailcom1, styles.coolgirlsgmailcomTypo]}
      >{`coolgirls@gmail.com
`}</Text>
      <Text style={[styles.text3, styles.textTypo]}>4/11/2023</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  homePosition: {
    width: 221,
    backgroundColor: Color.colorGainsboro_400,
    left: 5,
    position: "absolute",
  },
  previousWorkExperiencePosition: {
    left: 5,
    position: "absolute",
  },
  continueChildLayout: {
    height: 46,
    width: 157,
  },
  dateFlexBox: {
    textAlign: "left",
    color: Color.labelsLightPrimary,
  },
  lineIconPosition: {
    left: 0,
    position: "absolute",
  },
  dateOfBirthLayout: {
    height: 24,
    position: "absolute",
  },
  dateTypo: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.alatsiRegular,
  },
  emailTypo: {
    top: 343,
    height: 24,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.alatsiRegular,
    textAlign: "left",
    color: Color.labelsLightPrimary,
  },
  nameTypo: {
    top: 65,
    height: 24,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.alatsiRegular,
    textAlign: "left",
    color: Color.labelsLightPrimary,
  },
  lastNamePosition: {
    left: 191,
    position: "absolute",
  },
  homeChildPosition2: {
    width: 146,
    left: 9,
    backgroundColor: Color.colorGainsboro_400,
    position: "absolute",
  },
  textTypo: {
    height: 17,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  homeChildPosition1: {
    width: 340,
    left: 9,
    backgroundColor: Color.colorGainsboro_400,
    position: "absolute",
  },
  homeChildPosition: {
    top: 367,
    height: 25,
    backgroundColor: Color.colorGainsboro_400,
    position: "absolute",
  },
  homeChildPosition3: {
    top: 89,
    height: 26,
  },
  kamparPerakTypo: {
    letterSpacing: 0.5,
    height: 17,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  coolgirlsgmailcomTypo: {
    height: 33,
    top: 371,
    width: 146,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  homeRepairServicesChild: {
    top: 541,
    height: 25,
  },
  homeRepairServicesItem: {
    top: 592,
    height: 25,
  },
  homeRepairServicesInner: {
    top: 690,
    width: 327,
    height: 35,
    backgroundColor: Color.colorGainsboro_400,
  },
  rectangleView: {
    top: 642,
    height: 22,
  },
  electriciancuateIcon: {
    height: "68.07%",
    width: "150.83%",
    top: "14.25%",
    right: "-313.89%",
    bottom: "17.67%",
    left: "263.06%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  homeRepairServicesChild1: {
    top: 744,
    left: -221,
    backgroundColor: Color.colorPaleturquoise,
    borderRadius: Border.br_11xl,
    width: 157,
    position: "absolute",
  },
  book: {
    top: 759,
    left: -160,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi,
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  continueChild: {
    top: 0,
    height: 46,
    width: 157,
    backgroundColor: Color.colorPaleturquoise,
    borderRadius: Border.br_11xl,
  },
  continue1: {
    top: 15,
    left: 45,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi,
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  continue: {
    top: 745,
    left: 109,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    position: "absolute",
  },
  lineIcon: {
    top: 51,
    width: 360,
    height: 2,
  },
  jobApplication: {
    top: 13,
    left: 82,
    fontSize: FontSize.size_11xl,
    transform: [
      {
        rotate: "0.45deg",
      },
    ],
    fontFamily: FontFamily.alatsiRegular,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  dateOfBirth: {
    top: 130,
    width: 110,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.alatsiRegular,
    left: 9,
    textAlign: "left",
    color: Color.labelsLightPrimary,
  },
  currentAddress: {
    top: 245,
    width: 137,
    left: 9,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    height: 25,
    position: "absolute",
  },
  email: {
    width: 49,
    left: 9,
    position: "absolute",
  },
  availableStartDate: {
    top: 404,
    left: 11,
    width: 167,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    height: 25,
    position: "absolute",
  },
  firstName: {
    width: 104,
    left: 9,
    position: "absolute",
  },
  lastName: {
    width: 95,
    top: 65,
    height: 24,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.alatsiRegular,
    textAlign: "left",
    color: Color.labelsLightPrimary,
  },
  confirmEmail: {
    width: 122,
    top: 343,
    height: 24,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.alatsiRegular,
    textAlign: "left",
    color: Color.labelsLightPrimary,
  },
  phoneNumber: {
    top: 189,
    width: 127,
    left: 9,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    height: 25,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interRegular,
  },
  datesOfEmploymentContainer: {
    top: 510,
    left: 7,
    width: 332,
    position: "absolute",
  },
  previousWorkExperience: {
    top: 481,
    width: 231,
    height: 19,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    left: 5,
    position: "absolute",
  },
  homeRepairServicesChild2: {
    height: 26,
    top: 89,
  },
  cool: {
    width: 30,
    top: 93,
    height: 17,
    left: 14,
  },
  homeRepairServicesChild3: {
    top: 271,
    height: 25,
  },
  homeRepairServicesChild4: {
    top: 306,
    height: 26,
  },
  homeRepairServicesChild5: {
    top: 214,
    height: 25,
  },
  homeRepairServicesChild6: {
    left: 188,
    width: 161,
  },
  homeRepairServicesChild7: {
    top: 429,
    height: 25,
  },
  homeRepairServicesChild8: {
    width: 166,
    left: 9,
  },
  homeRepairServicesChild9: {
    top: 152,
    height: 25,
  },
  homeRepairServicesChild10: {
    width: 158,
    height: 26,
    left: 191,
    position: "absolute",
    backgroundColor: Color.colorGainsboro_400,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  arrowLeftCircle: {
    left: 12,
    top: 18,
    width: 24,
  },
  girls: {
    left: 200,
    width: 30,
    top: 93,
    height: 17,
  },
  text1: {
    top: 156,
    width: 79,
    left: 14,
  },
  text2: {
    top: 218,
    width: 98,
    left: 14,
  },
  no3347JlnSeksyen: {
    top: 274,
    width: 303,
    left: 14,
  },
  kamparPerak: {
    top: 313,
    width: 164,
    left: 9,
  },
  coolgirlsgmailcom: {
    left: 14,
  },
  coolgirlsgmailcom1: {
    left: 193,
  },
  text3: {
    top: 433,
    width: 72,
    left: 14,
  },
  homeRepairServices: {
    backgroundColor: Color.white,
    flex: 1,
    height: 825,
    overflow: "hidden",
  },
});

export default HomeRepairServices1;
