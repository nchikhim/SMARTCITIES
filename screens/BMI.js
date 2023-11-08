import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const BMI = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bmi}>
      <Text style={styles.youreClarifiedAsContainer}>
        <Text style={styles.youreClarifiedAs}>{`You’re clarified as `}</Text>
        <Text style={styles.healthy}>healthy</Text>
        <Text style={styles.youreClarifiedAs}> right now!</Text>
      </Text>
      <Text style={styles.maintainYourCurrent}>
        Maintain your current physical activity levels and calories intake to
        prevent obesity.
      </Text>
      <Image
        style={styles.image33Icon}
        resizeMode="cover"
        source={require("../assets/image-33.png")}
      />
      <Pressable
        style={[styles.arrowLeftCircle, styles.vector1Layout]}
        onPress={() => navigation.navigate("HealthReport")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/arrowleftcircle3.png")}
        />
      </Pressable>
      <Image
        style={styles.image34Icon}
        resizeMode="cover"
        source={require("../assets/image-34.png")}
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
  mainbarPosition: {
    bottom: 0,
    right: 0,
    left: 0,
    height: 68,
    position: "absolute",
  },
  menuTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    bottom: 8,
    color: Color.labelsLightPrimary,
    textAlign: "left",
    position: "absolute",
  },
  youreClarifiedAs: {
    fontFamily: FontFamily.libreBodoniRegular,
    color: Color.colorGray_900,
  },
  healthy: {
    fontWeight: "700",
    fontFamily: FontFamily.libreBodoniBold,
    color: Color.colorForestgreen,
  },
  youreClarifiedAsContainer: {
    top: 112,
    left: 38,
    fontSize: FontSize.size_12xl_5,
    width: 290,
    height: 88,
    textAlign: "left",
    position: "absolute",
  },
  maintainYourCurrent: {
    top: 400,
    left: 10,
    fontSize: FontSize.size_base,
    fontStyle: "italic",
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    textAlign: "center",
    width: 356,
    height: 68,
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  image33Icon: {
    top: 248,
    left: 112,
    width: 139,
    height: 137,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrowLeftCircle: {
    left: 22,
    top: 41,
    width: 24,
  },
  image34Icon: {
    top: 517,
    width: 366,
    height: 201,
    left: 0,
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
  bmi: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default BMI;
