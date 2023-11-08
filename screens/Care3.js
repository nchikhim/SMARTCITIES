import React, { useState, useCallback } from "react";
import { Text, StyleSheet, Image, Pressable, View, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Interview from "../components/Interview";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Care3 = () => {
  const [groupContainer1Visible, setGroupContainer1Visible] = useState(false);
  const navigation = useNavigation();

  const openGroupContainer1 = useCallback(() => {
    setGroupContainer1Visible(true);
  }, []);

  const closeGroupContainer1 = useCallback(() => {
    setGroupContainer1Visible(false);
  }, []);

  return (
    <>
      <View style={styles.care3}>
        <Text style={styles.carer}>Carer</Text>
        <Pressable
          style={[styles.arrowLeftCircle, styles.vector1Layout]}
          onPress={() => navigation.navigate("Care2")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/arrowleftcircle3.png")}
          />
        </Pressable>
        <Text style={[styles.rating, styles.certificateTypo]}>Rating:</Text>
        <Image
          style={[styles.starIcon, styles.starIconPosition]}
          resizeMode="cover"
          source={require("../assets/star2.png")}
        />
        <Image
          style={[styles.starIcon1, styles.starIconPosition]}
          resizeMode="cover"
          source={require("../assets/star2.png")}
        />
        <Image
          style={[styles.starIcon2, styles.starIconPosition]}
          resizeMode="cover"
          source={require("../assets/star2.png")}
        />
        <Image
          style={[styles.starIcon3, styles.starIconPosition]}
          resizeMode="cover"
          source={require("../assets/star2.png")}
        />
        <Image
          style={[styles.starIcon4, styles.starIconPosition]}
          resizeMode="cover"
          source={require("../assets/star2.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector63.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.certificatePosition]}
          resizeMode="cover"
          source={require("../assets/vector64.png")}
        />
        <Text style={[styles.kamparPerak, styles.yearsTypo]}>
          kampar, Perak
        </Text>
        <Text style={[styles.rachealLimYi, styles.yearsTypo]}>
          Racheal Lim Yi
        </Text>
        <Text style={[styles.years, styles.yearsPosition]}>4 years</Text>
        <Text style={[styles.approximateSalaryPer, styles.rm8000Position]}>
          Approximate salary: per day
        </Text>
        <Text style={[styles.rm8000, styles.rm8000Position]}>RM 80.00</Text>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector65.png")}
        />
        <Text style={[styles.text, styles.yearsPosition]}>011-98765432</Text>
        <Image
          style={[styles.vectorIcon3, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector66.png")}
        />
        <Image
          style={[styles.vectorIcon4, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector67.png")}
        />
        <Text style={[styles.yearsOld, styles.yearsPosition]}>
          35 years old
        </Text>
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild, styles.childBg]} />
          <Text style={[styles.iAmPractical, styles.iAmPracticalPosition]}>
            {" "}
            I am practical and serious about my work, have good adaptability and
            proficient communication skills, have good overall quarity, can
            endure hardships and stand hard work, be loyal and steady, adhere to
            the principle of integrity, and have the courage to challenge myself
            to develop my own potential.
          </Text>
          <Text style={[styles.selfEvaluation, styles.iAmPracticalPosition]}>
            Self-evaluation:
          </Text>
        </View>
        <View style={[styles.care3Child, styles.childBg]} />
        <Text
          style={[
            styles.relevantDepartmentCertificat,
            styles.certificatePosition,
          ]}
        >{`Relevant department certification/ 
certificate:`}</Text>
        <Text
          style={[styles.nutritionistCertificate, styles.certificatePosition]}
        >{`Nutritionist certificate >>`}</Text>
        <Text
          style={[styles.nursingCertificate, styles.certificatePosition]}
        >{`Nursing certificate >>`}</Text>
        <Text
          style={[styles.graduationCertificate, styles.certificatePosition]}
        >{`Graduation certificate >>`}</Text>
        <Pressable
          style={[styles.rectangleGroup, styles.groupLayout]}
          onPress={openGroupContainer1}
        >
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={[styles.interview, styles.interviewPosition]}>
            Interview
          </Text>
        </Pressable>
        <Image
          style={[styles.care3Item, styles.interviewPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-27.png")}
        />
        <Image
          style={[styles.care3Inner, styles.vectorLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-205.png")}
        />
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

      <Modal animationType="fade" transparent visible={groupContainer1Visible}>
        <View style={styles.groupContainer1Overlay}>
          <Pressable
            style={styles.groupContainer1Bg}
            onPress={closeGroupContainer1}
          />
          <Interview onClose={closeGroupContainer1} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  vector1Layout: {
    height: 24,
    position: "absolute",
  },
  certificateTypo: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  starIconPosition: {
    top: 172,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout1: {
    height: 17,
    position: "absolute",
  },
  certificatePosition: {
    left: 36,
    position: "absolute",
  },
  yearsTypo: {
    textAlign: "center",
    fontFamily: FontFamily.alatsiRegular,
    position: "absolute",
  },
  yearsPosition: {
    left: 65,
    fontSize: FontSize.size_base,
    color: Color.labelsLightPrimary,
  },
  rm8000Position: {
    top: 381,
    fontFamily: FontFamily.alatsiRegular,
    textAlign: "left",
    position: "absolute",
  },
  vectorIconLayout: {
    height: 14,
    width: 14,
    left: 34,
    position: "absolute",
  },
  childBg: {
    backgroundColor: Color.colorGainsboro_400,
    width: 320,
    position: "absolute",
  },
  iAmPracticalPosition: {
    left: 13,
    fontFamily: FontFamily.alatsiRegular,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  groupLayout: {
    height: 41,
    width: 130,
    position: "absolute",
  },
  interviewPosition: {
    left: 32,
    position: "absolute",
  },
  vectorLayout: {
    height: 25,
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
    fontSize: FontSize.size_xs,
    bottom: 8,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  carer: {
    left: 137,
    fontSize: FontSize.size_13xl,
    width: 85,
    height: 36,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.labelsLightPrimary,
    top: 32,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrowLeftCircle: {
    left: 10,
    width: 24,
    top: 32,
    height: 24,
  },
  rating: {
    top: 146,
    left: 199,
    color: Color.labelsLightPrimary,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  starIcon: {
    left: 315,
  },
  starIcon1: {
    left: 199,
  },
  starIcon2: {
    left: 228,
  },
  starIcon3: {
    left: 257,
  },
  starIcon4: {
    left: 286,
  },
  vectorIcon: {
    top: 293,
    width: 15,
    left: 34,
    height: 17,
  },
  vectorIcon1: {
    top: 415,
    width: 13,
    height: 18,
  },
  kamparPerak: {
    top: 413,
    fontSize: FontSize.size_base,
    left: 64,
    fontFamily: FontFamily.alatsiRegular,
    color: Color.labelsLightPrimary,
  },
  rachealLimYi: {
    top: 292,
    fontSize: FontSize.size_base,
    left: 64,
    fontFamily: FontFamily.alatsiRegular,
    color: Color.labelsLightPrimary,
  },
  years: {
    top: 349,
    textAlign: "center",
    fontFamily: FontFamily.alatsiRegular,
    position: "absolute",
  },
  approximateSalaryPer: {
    left: 65,
    fontSize: FontSize.size_base,
    color: Color.labelsLightPrimary,
  },
  rm8000: {
    left: 208,
    fontSize: FontSize.size_mid,
    color: Color.colorRed_100,
  },
  vectorIcon2: {
    top: 446,
    left: 33,
    width: 17,
  },
  text: {
    top: 445,
    textAlign: "center",
    fontFamily: FontFamily.alatsiRegular,
    position: "absolute",
  },
  vectorIcon3: {
    top: 385,
  },
  vectorIcon4: {
    top: 352,
  },
  yearsOld: {
    top: 317,
    textAlign: "center",
    fontFamily: FontFamily.alatsiRegular,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
    height: 161,
  },
  iAmPractical: {
    top: 27,
    fontSize: FontSize.size_sm,
    width: 294,
    height: 121,
  },
  selfEvaluation: {
    top: 8,
    width: 111,
    height: 19,
    fontSize: FontSize.size_base,
  },
  rectangleParent: {
    top: 502,
    height: 161,
    width: 320,
    left: 20,
    position: "absolute",
  },
  care3Child: {
    top: 700,
    borderRadius: Border.br_sm,
    height: 129,
    left: 20,
    backgroundColor: Color.colorGainsboro_400,
  },
  relevantDepartmentCertificat: {
    top: 713,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.labelsLightPrimary,
  },
  nutritionistCertificate: {
    top: 755,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.labelsLightPrimary,
  },
  nursingCertificate: {
    top: 779,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.labelsLightPrimary,
  },
  graduationCertificate: {
    top: 802,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.labelsLightPrimary,
  },
  groupContainer1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupContainer1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  groupItem: {
    backgroundColor: Color.colorForestgreen,
    borderColor: Color.labelsLightPrimary,
    borderWidth: 2,
    borderStyle: "solid",
    left: 0,
    top: 0,
  },
  interview: {
    top: 12,
    color: Color.white,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  rectangleGroup: {
    top: 898,
    left: 115,
  },
  care3Item: {
    top: 130,
    width: 125,
    height: 125,
  },
  care3Inner: {
    top: 230,
    left: 132,
    width: 25,
  },
  mainbarChild: {
    borderColor: Color.colorDimgray_100,
    borderTopWidth: 2,
    borderStyle: "solid",
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
  care3: {
    flex: 1,
    height: 1039,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Care3;
