import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Padding, Border, FontSize } from "../GlobalStyles";

const HealthReport = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.healthReport}>
      <Pressable
        style={[styles.arrowLeftCircle, styles.vector1Layout]}
        onPress={() => navigation.navigate("HealthcareMainPage")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/arrowleftcircle3.png")}
        />
      </Pressable>
      <Image
        style={styles.healthReportChild}
        resizeMode="cover"
        source={require("../assets/group-41.png")}
      />
      <Text style={styles.hiCoolgirlsFridayContainer}>
        <Text style={styles.hiCoolgirls}>{`Hi, coolgirls！
`}</Text>
        <Text style={styles.friday10thNovember}>
          Friday, 10th November 2023
        </Text>
      </Text>
      <View style={[styles.heartRate, styles.heartRateLayout]}>
        <View style={[styles.heartRateChild, styles.childBorder]} />
        <Text style={[styles.heartRate1, styles.stepsTypo]}>Heart Rate</Text>
        <Text style={[styles.text, styles.textLayout]}>90</Text>
        <Text style={[styles.bpm, styles.bpmTypo]}>bpm</Text>
        <View style={[styles.rectangleParent, styles.groupChildLayout4]}>
          <View style={[styles.groupChild, styles.groupChildLayout4]} />
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector52.png")}
          />
        </View>
        <View style={[styles.normalWrapper, styles.normalLayout]}>
          <Text style={[styles.normal, styles.stepsTypo]}>Normal</Text>
        </View>
        <Image
          style={styles.heartRateItem}
          resizeMode="cover"
          source={require("../assets/group-29.png")}
        />
      </View>
      <View style={[styles.healthReportItem, styles.childBorder]} />
      <Image
        style={styles.healthReportInner}
        resizeMode="cover"
        source={require("../assets/group-11.png")}
      />
      <Text style={[styles.steps, styles.stepsTypo]}>Steps</Text>
      <Text style={[styles.steps1, styles.stepsTypo]}>
        <Text style={styles.text1}>{`9999 `}</Text>
        <Text style={styles.steps2}>steps</Text>
      </Text>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.text2, styles.text2Position]}>🔥</Text>
      </View>
      <View style={[styles.bloodPressure, styles.heartRateLayout]}>
        <View style={[styles.bloodPressureChild, styles.childBorder]} />
        <Text style={[styles.bloodPressure1, styles.stepsTypo]}>
          Blood Pressure
        </Text>
        <Text style={[styles.text3, styles.textPosition]}>102</Text>
        <Text style={[styles.text4, styles.bpmTypo]}>/ 72</Text>
        <Text style={[styles.mmhg, styles.bpmTypo]}>mmhg</Text>
        <Image
          style={styles.bloodPressureItem}
          resizeMode="cover"
          source={require("../assets/group-30.png")}
        />
        <View style={[styles.rectangleContainer, styles.groupInnerLayout]}>
          <View style={[styles.groupInner, styles.groupInnerLayout]} />
          <Image
            style={styles.nounBloodPressure109891}
            resizeMode="cover"
            source={require("../assets/noun-blood-pressure-10989-1.png")}
          />
        </View>
        <View style={[styles.normalContainer, styles.normalLayout]}>
          <Text style={[styles.normal, styles.stepsTypo]}>Normal</Text>
        </View>
      </View>
      <Text style={styles.healthReportSummary}>{`Health Report
Summary`}</Text>
      <View style={[styles.groupView, styles.viewLayout]}>
        <View style={[styles.rectangleView, styles.viewLayout]} />
        <Text style={[styles.height, styles.cmTypo]}>Height</Text>
        <Text style={[styles.cm, styles.cmTypo]}>160 cm</Text>
        <View style={styles.rectangleParent1}>
          <View style={[styles.groupChild1, styles.groupChildLayout1]} />
          <View style={[styles.groupChild2, styles.groupChildBg1]} />
          <View style={[styles.groupChild3, styles.groupChildLayout1]} />
          <View style={[styles.groupChild4, styles.groupChildBg]} />
          <View style={[styles.groupChild5, styles.groupChildLayout1]} />
          <View style={[styles.groupChild6, styles.groupChildLayout1]} />
          <View style={[styles.groupChild7, styles.groupChildLayout1]} />
          <View style={[styles.groupChild8, styles.groupChildLayout1]} />
          <View style={[styles.groupChild9, styles.groupChildLayout1]} />
        </View>
      </View>
      <View style={[styles.rectangleParent2, styles.groupChild10Layout]}>
        <View style={[styles.groupChild10, styles.groupChild10Layout]} />
        <Text style={[styles.text5, styles.text5Typo]}>19.5</Text>
        <Text style={[styles.bodyMassIndex, styles.text5Typo]}>
          Body Mass Index (BMI)
        </Text>
        <View style={styles.youreHealthyWrapper}>
          <Text style={styles.youreHealthy}>You’re Healthy</Text>
        </View>
        <View style={styles.parent}>
          <Text style={[styles.text6, styles.textTypo]}>15</Text>
          <Text style={[styles.text7, styles.textTypo]}>18.5</Text>
          <Text style={[styles.text8, styles.textTypo]}>25</Text>
          <Text style={[styles.text9, styles.textTypo]}>30</Text>
          <Text style={[styles.text10, styles.textTypo]}>40</Text>
          <LinearGradient
            style={[styles.rectangleLineargradient, styles.text2Position]}
            locations={[0, 0.38, 0.7, 1]}
            colors={["#b5d4f1", "#81e6db", "#e8d284", "#e2798e"]}
            useAngle={true}
            angle={90}
          />
          <View style={[styles.groupChild11, styles.groupChildBg]} />
        </View>
      </View>
      <Image
        style={styles.image20Icon}
        resizeMode="cover"
        source={require("../assets/image-20.png")}
      />
      <View style={[styles.rectangleParent3, styles.groupChild12Layout]}>
        <View style={[styles.groupChild12, styles.groupChild12Layout]} />
        <Text style={[styles.weight, styles.kgPosition]}>Weight</Text>
        <Text style={[styles.kg, styles.kgPosition]}>50 kg</Text>
        <View style={[styles.rectangleParent4, styles.vectorPosition]}>
          <View style={[styles.groupChild13, styles.groupChildLayout]} />
          <View style={[styles.groupChild14, styles.groupChildLayout]} />
          <View style={[styles.groupChild15, styles.groupChildLayout]} />
          <View style={[styles.groupChild16, styles.groupChildBg]} />
          <View style={[styles.groupChild17, styles.groupChildLayout]} />
          <View style={[styles.groupChild18, styles.groupChildLayout]} />
          <View style={[styles.groupChild19, styles.groupChildLayout]} />
          <View style={[styles.groupChild20, styles.groupChildLayout]} />
          <View style={[styles.groupChild21, styles.groupChildLayout]} />
        </View>
      </View>
      <Pressable
        style={[styles.learnMoreAboutBmiWrapper, styles.childBorder]}
        onPress={() => navigation.navigate("BMI")}
      >
        <Text style={[styles.learnMoreAbout, styles.text2Position]}>
          Learn more about BMI
        </Text>
      </Pressable>
      <View style={styles.mainbarPosition}>
        <View style={[styles.mainbarChild, styles.mainbarPosition]} />
        <Pressable
          style={[styles.vector, styles.vectorPosition]}
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
            style={[styles.icon2, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector3.png")}
          />
        </Pressable>
        <Text style={[styles.profile, styles.menuTypo]}>Profile</Text>
        <Pressable
          style={[styles.user, styles.textLayout]}
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
  heartRateLayout: {
    height: 183,
    width: 163,
    top: 432,
    position: "absolute",
  },
  childBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  stepsTypo: {
    fontFamily: FontFamily.mulishSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  textLayout: {
    width: 30,
    position: "absolute",
  },
  bpmTypo: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout4: {
    height: 40,
    width: 44,
    position: "absolute",
  },
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  normalLayout: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
    borderRadius: Border.br_9xs,
    flexDirection: "row",
    height: 16,
    width: 44,
    position: "absolute",
  },
  groupLayout: {
    height: 45,
    width: 52,
    position: "absolute",
  },
  text2Position: {
    top: 11,
    position: "absolute",
  },
  textPosition: {
    color: Color.colorGray_500,
    top: 68,
    fontFamily: FontFamily.mulishRegular,
    left: 15,
    textAlign: "left",
  },
  groupInnerLayout: {
    height: 41,
    width: 44,
    position: "absolute",
  },
  viewLayout: {
    width: 166,
    height: 50,
    position: "absolute",
  },
  cmTypo: {
    height: 12,
    top: 28,
    color: Color.colorGray_500,
    fontFamily: FontFamily.mulishRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout1: {
    height: 6,
    width: 2,
    borderRadius: Border.br_6xl,
    top: 0,
    position: "absolute",
  },
  groupChildBg1: {
    backgroundColor: Color.colorGray_1400,
    left: 11,
  },
  groupChildBg: {
    backgroundColor: Color.colorIndianred,
    position: "absolute",
  },
  groupChild10Layout: {
    height: 184,
    width: 283,
    position: "absolute",
  },
  text5Typo: {
    color: Color.white,
    fontFamily: FontFamily.mulishRegular,
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    top: 33,
    color: Color.white,
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  groupChild12Layout: {
    width: 161,
    height: 50,
    position: "absolute",
  },
  kgPosition: {
    top: 26,
    height: 16,
    color: Color.colorGray_500,
    fontFamily: FontFamily.mulishRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  vectorPosition: {
    left: 62,
    position: "absolute",
  },
  groupChildLayout: {
    height: 7,
    width: 2,
    borderRadius: Border.br_6xl,
    top: 0,
    position: "absolute",
  },
  mainbarPosition: {
    height: 68,
    bottom: 0,
    right: 0,
    left: 0,
    position: "absolute",
  },
  menuTypo: {
    bottom: 8,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrowLeftCircle: {
    top: 41,
    width: 24,
    left: 22,
  },
  healthReportChild: {
    top: 40,
    left: 309,
    width: 33,
    height: 34,
    position: "absolute",
  },
  hiCoolgirls: {
    fontSize: FontSize.size_5xl,
  },
  friday10thNovember: {
    fontSize: FontSize.size_xs,
  },
  hiCoolgirlsFridayContainer: {
    top: 184,
    left: 30,
    fontFamily: FontFamily.kameron,
    width: 151,
    height: 15,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  heartRateChild: {
    borderColor: Color.colorGainsboro_100,
    elevation: 50,
    shadowRadius: 50,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    borderWidth: 1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_xs,
    position: "absolute",
    backgroundColor: Color.white,
    left: 0,
    top: 0,
    height: 183,
    width: 163,
  },
  heartRate1: {
    left: 67,
    width: 64,
    height: 14,
    fontSize: FontSize.size_base,
    top: 14,
    fontWeight: "600",
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  text: {
    opacity: 0.9,
    height: 28,
    color: Color.colorGray_500,
    top: 68,
    fontFamily: FontFamily.mulishRegular,
    left: 15,
    textAlign: "left",
    fontSize: FontSize.size_5xl,
  },
  bpm: {
    top: 76,
    left: 50,
    fontSize: FontSize.size_smi,
    width: 41,
    height: 14,
  },
  groupChild: {
    backgroundColor: Color.colorLavenderblush,
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
  },
  vectorIcon: {
    height: "54.91%",
    width: "51.8%",
    top: "25.69%",
    right: "24.1%",
    bottom: "19.4%",
    left: "24.1%",
    maxHeight: "100%",
    position: "absolute",
  },
  rectangleParent: {
    left: 15,
    top: 14,
  },
  normal: {
    fontSize: FontSize.size_xs,
    color: Color.labelsLightPrimary,
  },
  normalWrapper: {
    top: 109,
    left: 12,
    backgroundColor: Color.colorLavenderblush,
  },
  heartRateItem: {
    top: 125,
    height: 50,
    width: 133,
    left: 15,
    position: "absolute",
  },
  heartRate: {
    left: 19,
  },
  healthReportItem: {
    top: 263,
    width: 331,
    height: 147,
    borderColor: Color.colorGainsboro_100,
    elevation: 50,
    shadowRadius: 50,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    borderWidth: 1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_xs,
    position: "absolute",
    backgroundColor: Color.white,
    left: 19,
  },
  healthReportInner: {
    top: 337,
    left: 56,
    width: 270,
    height: 73,
    position: "absolute",
  },
  steps: {
    top: 289,
    left: 101,
    width: 75,
    height: 16,
    fontSize: FontSize.size_base,
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  text1: {
    fontSize: FontSize.size_base,
  },
  steps2: {
    fontSize: FontSize.size_sm,
  },
  steps1: {
    top: 330,
    left: 52,
    width: 107,
    height: 16,
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  groupItem: {
    backgroundColor: Color.colorPalegoldenrod,
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
  },
  text2: {
    left: 14,
    fontFamily: FontFamily.mulishSemiBold,
    fontWeight: "600",
    textAlign: "left",
    fontSize: FontSize.size_5xl,
    color: Color.labelsLightPrimary,
  },
  rectangleGroup: {
    top: 275,
    left: 39,
  },
  bloodPressureChild: {
    borderColor: Color.colorGainsboro_100,
    elevation: 50,
    shadowRadius: 50,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    borderWidth: 1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_xs,
    position: "absolute",
    backgroundColor: Color.white,
    left: 0,
    top: 0,
    height: 183,
    width: 163,
  },
  bloodPressure1: {
    top: 20,
    left: 72,
    width: 83,
    height: 28,
    fontSize: FontSize.size_base,
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  text3: {
    fontSize: FontSize.size_xl,
    height: 56,
    width: 44,
    position: "absolute",
  },
  text4: {
    top: 70,
    width: 22,
    left: 55,
    height: 28,
    fontSize: FontSize.size_xs,
  },
  mmhg: {
    top: 79,
    left: 90,
    width: 47,
    height: 21,
    fontSize: FontSize.size_xs,
  },
  bloodPressureItem: {
    top: 124,
    height: 51,
    width: 133,
    left: 15,
    position: "absolute",
  },
  groupInner: {
    backgroundColor: Color.colorLightcyan,
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
  },
  nounBloodPressure109891: {
    top: 8,
    width: 28,
    height: 25,
    left: 8,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleContainer: {
    left: 15,
    top: 14,
  },
  normalContainer: {
    top: 107,
    backgroundColor: Color.colorLightcyan,
    left: 19,
  },
  bloodPressure: {
    left: 187,
  },
  healthReportSummary: {
    top: 99,
    left: 27,
    fontSize: FontSize.size_12xl_5,
    color: Color.colorGray_900,
    width: 248,
    height: 59,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  rectangleView: {
    backgroundColor: "#f8debd",
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
  },
  height: {
    left: 23,
    width: 44,
  },
  cm: {
    left: 86,
    width: 49,
  },
  groupChild1: {
    backgroundColor: Color.colorGray_1300,
    left: 0,
  },
  groupChild2: {
    height: 6,
    width: 2,
    borderRadius: Border.br_6xl,
    top: 0,
    position: "absolute",
  },
  groupChild3: {
    left: 21,
    backgroundColor: Color.colorGray_1500,
  },
  groupChild4: {
    left: 32,
    width: 2,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorIndianred,
    top: 0,
    height: 13,
  },
  groupChild5: {
    left: 43,
    backgroundColor: Color.colorGray_600,
  },
  groupChild6: {
    left: 53,
    backgroundColor: Color.colorGray_600,
  },
  groupChild7: {
    left: 64,
    backgroundColor: Color.colorGray_600,
  },
  groupChild8: {
    left: 75,
    backgroundColor: Color.colorGray_1600,
  },
  groupChild9: {
    left: 85,
    backgroundColor: Color.colorGray_1700,
  },
  rectangleParent1: {
    top: 12,
    left: 78,
    width: 87,
    height: 13,
    position: "absolute",
  },
  groupView: {
    top: 1010,
    left: 19,
  },
  groupChild10: {
    backgroundColor: "#4a4949",
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
  },
  text5: {
    left: 24,
    top: 62,
    fontSize: FontSize.size_5xl,
  },
  bodyMassIndex: {
    top: 22,
    left: 8,
    fontSize: FontSize.size_base,
  },
  youreHealthy: {
    fontFamily: FontFamily.mulishRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.labelsLightPrimary,
  },
  youreHealthyWrapper: {
    left: 166,
    borderRadius: Border.br_5xs,
    backgroundColor: "#d5ffdd",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 6,
    top: 62,
    flexDirection: "row",
    position: "absolute",
  },
  text6: {
    left: 0,
  },
  text7: {
    left: 55,
  },
  text8: {
    left: 117,
  },
  text9: {
    left: 170,
  },
  text10: {
    left: 231,
  },
  rectangleLineargradient: {
    borderRadius: 21,
    width: 243,
    backgroundColor: "transparent",
    height: 14,
    left: 0,
  },
  groupChild11: {
    top: -1,
    borderRadius: Border.br_lgi,
    borderColor: Color.white,
    width: 8,
    height: 8,
    left: 81,
    borderWidth: 1,
    borderStyle: "solid",
  },
  parent: {
    top: 121,
    width: 246,
    height: 48,
    left: 24,
    position: "absolute",
  },
  rectangleParent2: {
    top: 1078,
    left: 44,
  },
  image20Icon: {
    top: 640,
    left: 97,
    width: 177,
    height: 352,
    position: "absolute",
  },
  groupChild12: {
    backgroundColor: Color.colorLightcyan,
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
  },
  weight: {
    left: 17,
    width: 56,
    textAlign: "left",
  },
  kg: {
    textAlign: "center",
    width: 42,
    left: 81,
  },
  groupChild13: {
    backgroundColor: Color.colorGray_1300,
    left: 0,
  },
  groupChild14: {
    backgroundColor: Color.colorGray_1400,
    left: 11,
  },
  groupChild15: {
    backgroundColor: Color.colorGray_1500,
    left: 22,
  },
  groupChild16: {
    left: 33,
    width: 2,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorIndianred,
    top: 0,
    height: 16,
  },
  groupChild17: {
    left: 44,
    backgroundColor: Color.colorGray_600,
  },
  groupChild18: {
    backgroundColor: Color.colorGray_600,
    left: 55,
  },
  groupChild19: {
    left: 66,
    backgroundColor: Color.colorGray_600,
  },
  groupChild20: {
    left: 77,
    backgroundColor: Color.colorGray_1600,
  },
  groupChild21: {
    left: 88,
    backgroundColor: Color.colorGray_1700,
  },
  rectangleParent4: {
    top: 9,
    width: 90,
    height: 16,
  },
  rectangleParent3: {
    left: 194,
    top: 1010,
  },
  learnMoreAbout: {
    left: 6,
    color: Color.colorDarkgreen,
    fontFamily: FontFamily.mulishSemiBold,
    fontWeight: "600",
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  learnMoreAboutBmiWrapper: {
    top: 1274,
    left: 113,
    borderRadius: Border.br_3xs,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    borderColor: Color.colorMediumseagreen_100,
    width: 138,
    height: 37,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderWidth: 1,
    position: "absolute",
    overflow: "hidden",
  },
  mainbarChild: {
    borderColor: Color.colorDimgray_100,
    borderTopWidth: 2,
    borderStyle: "solid",
    height: 68,
    bottom: 0,
    right: 0,
    backgroundColor: Color.white,
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  vector: {
    bottom: 25,
    height: 25,
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
    height: "100%",
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
    height: 30,
  },
  healthReport: {
    flex: 1,
    height: 1384,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default HealthReport;
