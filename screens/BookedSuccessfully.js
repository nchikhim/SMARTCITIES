import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const BookedSuccessfully = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bookedSuccessfully}>
      <Text style={styles.yourAppointmentBooked}>
        Your Appointment Booked Successfully!
      </Text>
      <Text style={[styles.weHaveSent, styles.weHaveSentTypo]}>
        We have sent your booking information to your email address.
      </Text>
      <View style={[styles.bookedSuccessfullyChild, styles.childBorder]} />
      <Pressable
        style={styles.backToMainContainer}
        onPress={() => navigation.navigate("Menu")}
      >
        <Text style={[styles.backToMainMenu, styles.weHaveSentTypo]}>
          Back To Main Menu
        </Text>
      </Pressable>
      <Text
        style={[styles.appointmentBookedWith, styles.weHaveSentTypo]}
      >{`Appointment booked with Dr. Zhou Yi 
on 10th November 2023 at 10:50 AM.`}</Text>
      <Image
        style={styles.image31Icon}
        resizeMode="cover"
        source={require("../assets/image-31.png")}
      />
      <View style={[styles.mainbar, styles.mainbarPosition]}>
        <View style={[styles.mainbarChild, styles.mainbarPosition]} />
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("Message")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
        </Pressable>
        <Text style={[styles.message, styles.menuTypo]}>Message</Text>
        <Text style={[styles.menu, styles.menuTypo]}>Menu</Text>
        <Pressable
          style={styles.vector1}
          onPress={() => navigation.navigate("Menu")}
        >
          <Image
            style={styles.icon1}
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
            style={styles.icon2}
            resizeMode="cover"
            source={require("../assets/user1.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  weHaveSentTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
  },
  childBorder: {
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  mainbarPosition: {
    height: 68,
    bottom: 0,
    position: "absolute",
  },
  menuTypo: {
    fontSize: FontSize.size_xs,
    bottom: 8,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  yourAppointmentBooked: {
    top: 326,
    left: 18,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.libreBodoniRegular,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  weHaveSent: {
    top: 349,
    left: 20,
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_2xs,
    position: "absolute",
  },
  bookedSuccessfullyChild: {
    top: 562,
    left: 125,
    borderRadius: Border.br_3xs,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderColor: Color.colorRoyalblue_100,
    borderWidth: 1,
    width: 114,
    height: 37,
    position: "absolute",
  },
  backToMainMenu: {
    color: Color.colorRoyalblue_100,
  },
  backToMainContainer: {
    left: 132,
    top: 574,
    position: "absolute",
  },
  appointmentBookedWith: {
    top: 401,
    left: 80,
    color: "#455a64",
    position: "absolute",
  },
  image31Icon: {
    top: 200,
    left: 116,
    width: 116,
    height: 111,
    position: "absolute",
  },
  mainbarChild: {
    right: 0,
    left: 0,
    borderColor: Color.colorDimgray_100,
    borderTopWidth: 2,
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: 62,
    bottom: 25,
    width: 24,
    height: 25,
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
  icon1: {
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
  },
  vector1: {
    left: 169,
    right: 169,
    bottom: 26,
    height: 24,
    position: "absolute",
  },
  profile: {
    right: 54,
    width: 37,
  },
  icon2: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  user: {
    right: 57,
    bottom: 23,
    width: 30,
    height: 30,
    position: "absolute",
  },
  mainbar: {
    right: 1,
    left: -1,
  },
  bookedSuccessfully: {
    flex: 1,
    height: 796,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default BookedSuccessfully;
