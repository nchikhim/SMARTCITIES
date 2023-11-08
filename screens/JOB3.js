import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const JOB3 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.job3, styles.job3ShadowBox]}>
      <LinearGradient
        style={styles.job3Child}
        locations={[0, 1]}
        colors={["#c2e9e4", "rgba(194, 233, 228, 0)"]}
        useAngle={true}
        angle={180}
      />
      <Image
        style={styles.job3Item}
        resizeMode="cover"
        source={require("../assets/rectangle-48.png")}
      />
      <Image
        style={styles.job3Inner}
        resizeMode="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <View style={[styles.apply, styles.applyLayout]}>
        <Pressable
          style={[styles.applyChild, styles.applyLayout]}
          onPress={() => navigation.navigate("HomeRepairServices1")}
        />
        <Text style={styles.apply1}>APPLY</Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
      </View>
      <Image
        style={styles.lineIcon}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <Image
        style={styles.job3Child1}
        resizeMode="cover"
        source={require("../assets/line-2.png")}
      />
      <Text style={[styles.jobHighlightsBasic, styles.jobTypo]}>{`Job Highlights

Basic + Allowance up to RM 3,000 depending on candidate experience with additional Incentive provided
Employee Benefit
On-job Training & Development Provided
Rapid Career Advancement based on candidate on-job performance`}</Text>
      <Text style={[styles.jobRequirements, styles.jobTypo]}>{`Job requirements

• Candidate must possess at least SPM certification.

•No prior working experience required.

• Prior working experience in Food & Beverages Outlet is an added advantage.

• Able to work as a team to achieve outlet target and ensure smooth outlet proc ess.

• Self-discipline and self-driven to keep up-to- date knowledge and skillset to fulfil task on outlet operations`}</Text>
      <Text style={[styles.teaBarista, styles.jobTypo]}>Tea Barista</Text>
      <Text
        style={[styles.telephoneWhatsapp, styles.jobTypo]}
      >{`telephone / Whatsapp : 011-13456787

23, Jalan Batu Karang, Taman Bandar Baru, 31900 Kampar Perak.`}</Text>
      <Image
        style={styles.phphoneIcon}
        resizeMode="cover"
        source={require("../assets/phphone.png")}
      />
      <Image
        style={styles.octiconlocation16}
        resizeMode="cover"
        source={require("../assets/octiconlocation16.png")}
      />
      <Pressable
        style={[styles.arrowLeftCircle, styles.vector1Layout]}
        onPress={() => navigation.navigate("JOB2")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/arrowleftcircle.png")}
        />
      </Pressable>
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
            source={require("../assets/user.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  job3ShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  applyLayout: {
    height: 46,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  jobTypo: {
    transform: [
      {
        rotate: "0.45deg",
      },
    ],
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  vector1Layout: {
    height: 24,
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
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  job3Child: {
    top: -9,
    width: 360,
    height: 833,
    backgroundColor: "transparent",
    left: 0,
    position: "absolute",
  },
  job3Item: {
    top: 155,
    left: 39,
    borderRadius: Border.br_xl,
    height: 43,
    width: 290,
    position: "absolute",
  },
  job3Inner: {
    top: 41,
    left: 126,
    width: 117,
    height: 107,
    position: "absolute",
  },
  applyChild: {
    top: 0,
    left: 41,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorPaleturquoise,
    width: 157,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  apply1: {
    top: 15,
    left: 99,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  vectorIcon: {
    height: "49.57%",
    width: "7.83%",
    top: "17.17%",
    right: "92.17%",
    bottom: "33.26%",
    left: "0%",
  },
  vectorIcon1: {
    height: "54.13%",
    width: "11.01%",
    top: "15.22%",
    right: "-0.37%",
    bottom: "30.65%",
    left: "89.36%",
  },
  apply: {
    top: 704,
    left: 65,
    width: 245,
  },
  lineIcon: {
    top: 366,
    left: 28,
    width: 297,
    height: 3,
    position: "absolute",
  },
  job3Child1: {
    top: 621,
    left: 26,
    height: 1,
    width: 295,
    position: "absolute",
  },
  jobHighlightsBasic: {
    top: 224,
    height: 135,
    fontSize: FontSize.size_xs,
    transform: [
      {
        rotate: "0.45deg",
      },
    ],
    left: 32,
    width: 290,
  },
  jobRequirements: {
    top: 375,
    left: 31,
    height: 224,
    fontSize: FontSize.size_xs,
    transform: [
      {
        rotate: "0.45deg",
      },
    ],
    width: 295,
  },
  teaBarista: {
    top: 163,
    left: 150,
    transform: [
      {
        rotate: "0.45deg",
      },
    ],
    fontSize: FontSize.size_smi,
  },
  telephoneWhatsapp: {
    top: 633,
    left: 55,
    width: 264,
    height: 69,
    fontSize: FontSize.size_xs,
    transform: [
      {
        rotate: "0.45deg",
      },
    ],
  },
  phphoneIcon: {
    top: 628,
    width: 20,
    height: 20,
    left: 32,
    position: "absolute",
    overflow: "hidden",
  },
  octiconlocation16: {
    top: 662,
    left: 33,
    width: 16,
    height: 16,
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrowLeftCircle: {
    left: 11,
    top: 23,
    width: 24,
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
    height: "100%",
    maxWidth: "100%",
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
  job3: {
    flex: 1,
    height: 824,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default JOB3;
