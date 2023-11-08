import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const HealthcareMainPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.healthcareMainPage}>
      <Pressable
        style={[styles.arrowLeftCircle, styles.vector1Layout]}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/arrowleftcircle3.png")}
        />
      </Pressable>
      <Image
        style={styles.image21Icon}
        resizeMode="cover"
        source={require("../assets/image-21.png")}
      />
      <Text style={styles.healthcare}>Healthcare</Text>
      <Pressable
        style={[styles.doctorAppointmentServices, styles.doctorLayout]}
        onPress={() => navigation.navigate("Healthcare")}
      >
        <LinearGradient
          style={[
            styles.doctorAppointmentServicesChild,
            styles.image22IconLayout,
          ]}
          locations={[0, 1]}
          colors={["rgba(45, 143, 214, 0.5)", "rgba(244, 211, 126, 0)"]}
          useAngle={true}
          angle={180}
        />
        <Text
          style={[styles.doctorAppointmentServices1, styles.firstAidAtTypo]}
        >{`Doctor Appointment
Services`}</Text>
      </Pressable>
      <Pressable
        style={[styles.heatthReportSummary, styles.doctorLayout]}
        onPress={() => navigation.navigate("HealthReport")}
      >
        <LinearGradient
          style={[
            styles.doctorAppointmentServicesChild,
            styles.image22IconLayout,
          ]}
          locations={[0, 1]}
          colors={["rgba(45, 143, 214, 0.5)", "rgba(244, 211, 126, 0)"]}
          useAngle={true}
          angle={180}
        />
        <Text
          style={[styles.healthReportSummary, styles.firstAidAtTypo]}
        >{`Health Report 
Summary`}</Text>
      </Pressable>
      <Image
        style={styles.image23Icon}
        resizeMode="cover"
        source={require("../assets/image-23.png")}
      />
      <Pressable
        style={[styles.locksmith3, styles.doctorLayout]}
        onPress={() => navigation.navigate("FirstAid")}
      >
        <LinearGradient
          style={[
            styles.doctorAppointmentServicesChild,
            styles.image22IconLayout,
          ]}
          locations={[0, 1]}
          colors={["rgba(45, 143, 214, 0.5)", "rgba(244, 211, 126, 0)"]}
          useAngle={true}
          angle={180}
        />
        <View style={styles.locksmith3Item} />
        <Text style={[styles.firstAidAt, styles.firstAidAtTypo]}>{`First Aid
At Home`}</Text>
      </Pressable>
      <Image
        style={[styles.image22Icon, styles.image22IconLayout]}
        resizeMode="cover"
        source={require("../assets/image-22.png")}
      />
      <Image
        style={styles.image32Icon}
        resizeMode="cover"
        source={require("../assets/image-32.png")}
      />
      <Image
        style={styles.image50Icon}
        resizeMode="cover"
        source={require("../assets/image-50.png")}
      />
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
    height: 110,
    width: 300,
  },
  image22IconLayout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  firstAidAtTypo: {
    textAlign: "center",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.kameron,
    fontSize: FontSize.size_5xl,
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
    left: 11,
    width: 24,
    top: 27,
  },
  image21Icon: {
    top: 51,
    left: 177,
    width: 198,
    height: 151,
    position: "absolute",
  },
  healthcare: {
    top: 97,
    left: 23,
    fontSize: FontSize.size_12xl_5,
    color: Color.colorGray_900,
    width: 248,
    height: 59,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  doctorAppointmentServicesChild: {
    top: 0,
    backgroundColor: "transparent",
    left: 0,
    height: 110,
    width: 300,
  },
  doctorAppointmentServices1: {
    top: 17,
    left: 116,
    width: 180,
    height: 45,
  },
  doctorAppointmentServices: {
    top: 225,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 300,
    position: "absolute",
    left: 35,
  },
  healthReportSummary: {
    top: 34,
    left: 117,
  },
  heatthReportSummary: {
    top: 366,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 300,
    position: "absolute",
    left: 35,
  },
  image23Icon: {
    top: 372,
    left: 51,
    width: 90,
    height: 98,
    position: "absolute",
  },
  locksmith3Item: {
    top: 5,
    left: 182,
    width: 100,
    height: 100,
    position: "absolute",
    overflow: "hidden",
  },
  firstAidAt: {
    left: 155,
    top: 27,
  },
  locksmith3: {
    top: 506,
    left: 30,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 300,
    position: "absolute",
  },
  image22Icon: {
    top: 233,
    left: 45,
    width: 98,
    height: 96,
  },
  image32Icon: {
    top: 640,
    width: 360,
    height: 214,
    left: 0,
    position: "absolute",
  },
  image50Icon: {
    top: 514,
    borderRadius: 45,
    width: 95,
    height: 95,
    left: 46,
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
    height: 25,
    width: 24,
    position: "absolute",
  },
  message: {
    width: 55,
    left: 46,
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
  healthcareMainPage: {
    flex: 1,
    height: 922,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default HealthcareMainPage;
