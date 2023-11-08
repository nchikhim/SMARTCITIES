import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Message = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.message}>
      <View style={styles.mainbarPosition}>
        <View style={[styles.mainbarChild, styles.mainbarPosition]} />
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector40.png")}
        />
        <Text style={[styles.message1, styles.messageFlexBox]}>Message</Text>
        <Text style={[styles.menu, styles.messageFlexBox]}>Menu</Text>
        <Pressable
          style={[styles.vector, styles.vectorLayout]}
          onPress={() => navigation.navigate("Menu")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/vector3.png")}
          />
        </Pressable>
        <Text style={[styles.profile, styles.messageFlexBox]}>Profile</Text>
        <Pressable
          style={styles.user}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/user2.png")}
          />
        </Pressable>
      </View>
      <Text style={[styles.message2, styles.messageFlexBox]}>Message</Text>
      <Pressable
        style={[styles.arrowLeftCircle, styles.vectorLayout]}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/arrowleftcircle3.png")}
        />
      </Pressable>
      <Image
        style={[styles.messageChild, styles.messageLayout]}
        resizeMode="cover"
        source={require("../assets/line-21.png")}
      />
      <Image
        style={[styles.messageItem, styles.messageLayout]}
        resizeMode="cover"
        source={require("../assets/line-21.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector41.png")}
      />
      <Text
        style={[styles.yourAdWith, styles.withTypo]}
      >{`Your ad with title JKL will expire on ... `}</Text>
      <Text style={[styles.advertise, styles.withTypo]}>Advertise</Text>
      <View style={styles.image18Parent}>
        <Pressable
          style={styles.image18}
          onPress={() => navigation.navigate("HelpCentre")}
        >
          <Image
            style={styles.icon3}
            resizeMode="cover"
            source={require("../assets/image-182.png")}
          />
        </Pressable>
        <Text style={[styles.helpCenter, styles.hiIHaveTypo]}>Help center</Text>
        <Text style={[styles.hiIHave, styles.hiIHaveTypo]}>
          Hi, i have an enquiry about ...
        </Text>
        <Text style={[styles.text, styles.textTypo1]}>10:45</Text>
      </View>
      <Text style={[styles.text1, styles.textTypo]}>20:56</Text>
      <Image
        style={[styles.vectorIcon2, styles.servicesPosition]}
        resizeMode="cover"
        source={require("../assets/vector42.png")}
      />
      <Text style={[styles.services, styles.servicesPosition]}>Services</Text>
      <Text style={[styles.interviewWithRacheal, styles.withTypo]}>
        Interview with Racheal Lim Yi ...
      </Text>
      <Image
        style={[styles.messageInner, styles.messageLayout]}
        resizeMode="cover"
        source={require("../assets/line-21.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIcon3Position]}
        resizeMode="cover"
        source={require("../assets/vector43.png")}
      />
      <Text style={[styles.healthReminder, styles.vectorIcon3Position]}>
        Health reminder
      </Text>
      <Text style={[styles.youHaveMake, styles.withTypo]}>
        You have make appointment ...
      </Text>
      <Text style={[styles.text2, styles.textTypo]}>10:00</Text>
      <Text style={[styles.text3, styles.textTypo1]}>2023/11/4</Text>
      <Image
        style={styles.vectorIcon4}
        resizeMode="cover"
        source={require("../assets/vector44.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainbarPosition: {
    height: 68,
    bottom: 0,
    right: 0,
    left: 0,
    position: "absolute",
  },
  messageFlexBox: {
    textAlign: "left",
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  vectorLayout: {
    height: 24,
    position: "absolute",
  },
  messageLayout: {
    height: 1,
    width: 360,
    left: 0,
    position: "absolute",
  },
  vectorIconLayout: {
    height: 35,
    width: 35,
    left: 29,
  },
  withTypo: {
    left: 81,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
  },
  hiIHaveTypo: {
    left: 52,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  textTypo1: {
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  textTypo: {
    left: 319,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  servicesPosition: {
    top: 238,
    position: "absolute",
  },
  vectorIcon3Position: {
    top: 306,
    position: "absolute",
  },
  mainbarChild: {
    borderStyle: "solid",
    borderColor: Color.colorDimgray_100,
    borderTopWidth: 2,
    backgroundColor: Color.white,
  },
  vectorIcon: {
    bottom: 24,
    left: 61,
    width: 26,
    height: 27,
    position: "absolute",
  },
  message1: {
    left: 46,
    width: 55,
    fontFamily: FontFamily.interRegular,
    color: Color.labelsLightPrimary,
    fontSize: FontSize.size_xs,
    bottom: 8,
  },
  menu: {
    left: 164,
    width: 32,
    fontFamily: FontFamily.interRegular,
    color: Color.labelsLightPrimary,
    fontSize: FontSize.size_xs,
    bottom: 8,
  },
  icon: {
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
  },
  vector: {
    left: 169,
    right: 169,
    bottom: 26,
  },
  profile: {
    right: 51,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 39,
    fontSize: FontSize.size_xs,
    bottom: 8,
  },
  icon1: {
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
  message2: {
    left: 109,
    fontSize: FontSize.size_13xl,
    width: 141,
    height: 39,
    top: 28,
    fontFamily: FontFamily.interRegular,
    color: Color.labelsLightPrimary,
  },
  arrowLeftCircle: {
    left: 17,
    top: 32,
    width: 24,
  },
  messageChild: {
    top: 149,
  },
  messageItem: {
    top: 220,
  },
  vectorIcon1: {
    top: 99,
    position: "absolute",
  },
  yourAdWith: {
    top: 118,
    position: "absolute",
  },
  advertise: {
    top: 99,
    position: "absolute",
  },
  icon3: {
    borderRadius: Border.br_191xl,
    height: "100%",
    width: "100%",
  },
  image18: {
    width: 34,
    height: 34,
    top: 6,
    left: 0,
    position: "absolute",
  },
  helpCenter: {
    top: 6,
  },
  hiIHave: {
    top: 28,
  },
  text: {
    top: 0,
    left: 290,
  },
  image18Parent: {
    top: 161,
    width: 317,
    height: 43,
    left: 29,
    position: "absolute",
  },
  text1: {
    top: 93,
  },
  vectorIcon2: {
    height: 35,
    width: 35,
    left: 29,
  },
  services: {
    left: 81,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
  },
  interviewWithRacheal: {
    top: 257,
    position: "absolute",
  },
  messageInner: {
    top: 288,
  },
  vectorIcon3: {
    height: 35,
    width: 35,
    left: 29,
  },
  healthReminder: {
    left: 81,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
  },
  youHaveMake: {
    top: 325,
    position: "absolute",
  },
  text2: {
    top: 232,
  },
  text3: {
    top: 300,
    left: 298,
  },
  vectorIcon4: {
    left: 53,
    width: 19,
    height: 19,
    top: 93,
    position: "absolute",
  },
  message: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Message;
