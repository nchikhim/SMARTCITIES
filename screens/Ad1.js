import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const Ad1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.ad1}>
      <View style={[styles.ad1Child, styles.ad1Layout]} />
      <View style={[styles.ad1Item, styles.ad1Position]} />
      <Text style={[styles.beautysJeans, styles.gardenTypo]}>
        Beauty’s Jeans
      </Text>
      <Pressable
        style={[styles.arrowLeftCircle, styles.vector1Layout]}
        onPress={() => navigation.navigate("Advertise")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/arrowleftcircle3.png")}
        />
      </Pressable>
      <Text style={[styles.thisDataWas, styles.kfcTypo]}>
        *This data was obtained from manually measuring the product, it may be
        off by 1-2 cm
      </Text>
      <Image
        style={[styles.vectorIcon, styles.ad1ChildPosition]}
        resizeMode="cover"
        source={require("../assets/vector74.png")}
      />
      <Image
        style={[styles.ad1Inner, styles.ad1Position]}
        resizeMode="cover"
        source={require("../assets/rectangle-176.png")}
      />
      <Text style={[styles.address88Jln, styles.gardenTypo]}>{`Address: 
88, Jln Baru, Bandar Barat, 31900 Kampar, Perak`}</Text>
      <Text
        style={[styles.regularFitReleaxed, styles.gotManyTypePosition]}
      >{`~Regular fit 
~Releaxed fit
~Loode fit
~Boyfriend fit
~Skinny fit
~Boot cut
~Wide leg
~Baggy fit
~Jeggings fit
~Straight cut`}</Text>
      <Text style={[styles.gotManyType, styles.gotManyTypePosition]}>
        Got many type of jeans!
      </Text>
      <View style={styles.rectangleParent}>
        <View style={[styles.frameChild, styles.frameChildPosition]} />
        <View style={[styles.frameItem, styles.frameItemLayout]} />
        <View style={styles.frameInner} />
        <View style={[styles.rectangleView, styles.kfcTransform]} />
        <Text style={[styles.kfc, styles.kfcTransform]}>KFC</Text>
        <View style={styles.frameChild1} />
        <Text style={[styles.weAreHere, styles.areTypo]}>We are here!</Text>
        <Image
          style={styles.arrowIcon}
          resizeMode="cover"
          source={require("../assets/arrow-1.png")}
        />
        <View style={styles.frameChild2} />
        <Text style={[styles.garden, styles.gardenTypo]}>Garden</Text>
        <Text style={[styles.youAreHere, styles.areTypo]}>You are here!</Text>
        <Image
          style={[styles.lineIcon, styles.lineIconPosition]}
          resizeMode="cover"
          source={require("../assets/line-17.png")}
        />
        <Image
          style={[styles.frameChild3, styles.frameChildPosition]}
          resizeMode="cover"
          source={require("../assets/line-18.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector75.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector75.png")}
        />
        <Image
          style={[styles.vectorIcon3, styles.frameItemLayout]}
          resizeMode="cover"
          source={require("../assets/vector76.png")}
        />
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
  ad1Layout: {
    width: 325,
    borderRadius: Border.br_lgi,
  },
  ad1Position: {
    left: 18,
    position: "absolute",
  },
  gardenTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  vector1Layout: {
    height: 24,
    position: "absolute",
  },
  kfcTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  ad1ChildPosition: {
    left: 17,
    position: "absolute",
  },
  gotManyTypePosition: {
    left: 35,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  frameChildPosition: {
    left: 0,
    position: "absolute",
  },
  frameItemLayout: {
    height: 10,
    position: "absolute",
  },
  kfcTransform: {
    transform: [
      {
        rotate: "89.82deg",
      },
    ],
    position: "absolute",
  },
  areTypo: {
    fontSize: FontSize.size_2xs,
    height: 10,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  lineIconPosition: {
    top: 0,
    height: 141,
  },
  vectorIconLayout: {
    height: 6,
    width: 13,
    top: 63,
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
  ad1Child: {
    top: 316,
    backgroundColor: "rgba(170, 204, 255, 0.5)",
    height: 226,
    left: 17,
    position: "absolute",
  },
  ad1Item: {
    top: 562,
    backgroundColor: Color.colorGainsboro_500,
    height: 235,
    width: 325,
    borderRadius: Border.br_lgi,
  },
  beautysJeans: {
    left: 67,
    fontSize: FontSize.size_13xl,
    width: 226,
    height: 36,
    top: 32,
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
  },
  thisDataWas: {
    top: 246,
    left: 29,
    width: 302,
    height: 34,
    color: Color.labelsLightPrimary,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  vectorIcon: {
    top: 817,
    width: 326,
    height: 78,
  },
  ad1Inner: {
    top: 92,
    width: 323,
    height: 142,
  },
  address88Jln: {
    top: 573,
    left: 36,
    fontSize: FontSize.size_mini,
    width: 290,
    height: 58,
  },
  regularFitReleaxed: {
    top: 355,
    fontSize: FontSize.size_sm,
  },
  gotManyType: {
    top: 329,
    fontSize: FontSize.size_base,
  },
  frameChild: {
    top: 0,
    height: 141,
    width: 250,
    left: 0,
    backgroundColor: Color.white,
  },
  frameItem: {
    top: 66,
    left: 88,
    borderTopWidth: 10,
    width: 167,
    borderColor: Color.labelsLightPrimary,
    height: 10,
    borderStyle: "solid",
  },
  frameInner: {
    left: 146,
    borderRightWidth: 10,
    width: 10,
    height: 83,
    top: 63,
    borderColor: Color.labelsLightPrimary,
    borderStyle: "solid",
    position: "absolute",
  },
  rectangleView: {
    top: 84,
    left: 122,
    width: 36,
    height: 20,
    backgroundColor: Color.colorGainsboro_400,
  },
  kfc: {
    top: 90,
    left: 119,
    color: Color.colorRed_100,
    height: 18,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    width: 24,
  },
  frameChild1: {
    top: 102,
    left: 61,
    width: 20,
    height: 16,
    backgroundColor: Color.colorGainsboro_400,
    position: "absolute",
  },
  weAreHere: {
    top: 74,
    left: 9,
    width: 66,
  },
  arrowIcon: {
    top: 86,
    left: 48,
    width: 14,
    height: 12,
    position: "absolute",
  },
  frameChild2: {
    top: 71,
    left: 161,
    backgroundColor: "#9aea74",
    width: 89,
    height: 71,
    position: "absolute",
  },
  garden: {
    top: 82,
    left: 183,
    fontSize: FontSize.size_smi,
    width: 45,
    height: 13,
  },
  youAreHere: {
    top: 99,
    left: 171,
    width: 69,
  },
  lineIcon: {
    left: 85,
    width: 11,
    position: "absolute",
  },
  frameChild3: {
    top: 120,
    width: 92,
    height: 11,
  },
  vectorIcon1: {
    left: 178,
  },
  vectorIcon2: {
    left: 117,
  },
  vectorIcon3: {
    top: 89,
    left: 87,
    width: 7,
  },
  rectangleParent: {
    top: 637,
    left: 55,
    height: 141,
    width: 250,
    position: "absolute",
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
  ad1: {
    flex: 1,
    height: 993,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Ad1;
