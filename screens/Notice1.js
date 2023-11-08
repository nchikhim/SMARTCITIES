import * as React from "react";
import { Image, StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Notice1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.notice1}>
      <Pressable
        style={[styles.arrowLeftCircle, styles.vector1Layout]}
        onPress={() => navigation.navigate("Notice")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/arrowleftcircle3.png")}
        />
      </Pressable>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <Text
          style={[styles.thereWillBe, styles.attentionTypo]}
        >{`There will be a water outage on Monday, 6 November 2023 to replace/repair isolation valves. The shutdown will occur between the hours of 9:00 AM to 3:00 PM

Please prepare for this outage by having extra drinking water on hand and turn off the breaker to your hot water heater. If you have any questions regarding this outage, please call the District office at 06-1234567.

Please share this notice with all the other people who drink this water, especially those who may not have received this notice directly. You can do this by posting this notice in a public place or distributing copies y hand or mail.

Thank you for your patience,
Water Operation
Mason County PUD No.1`}</Text>
        <Text style={styles.agateWaterSystem}>{`Agate Water System Users

06/11/2023`}</Text>
        <Text style={[styles.attention, styles.attentionTypo]}>ATTENTION</Text>
        <Text style={styles.waterOutage}>WATER OUTAGE</Text>
      </View>
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
  attentionTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
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
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrowLeftCircle: {
    left: 10,
    top: 32,
    width: 24,
  },
  groupChild: {
    top: 0,
    backgroundColor: "#ededed",
    left: 0,
    height: 415,
    width: 312,
    position: "absolute",
  },
  thereWillBe: {
    top: 149,
    left: 12,
    fontSize: FontSize.size_2xs,
    width: 287,
    height: 241,
    color: Color.labelsLightPrimary,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  agateWaterSystem: {
    top: 62,
    left: 73,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  attention: {
    top: 44,
    left: 113,
    fontSize: FontSize.size_mini,
    color: Color.colorRed_100,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  waterOutage: {
    top: 110,
    left: 109,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  rectangleParent: {
    top: 111,
    left: 24,
    height: 415,
    width: 312,
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
  notice1: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Notice1;
