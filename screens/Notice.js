import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Notice = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.notice}>
      <Image
        style={[styles.noticeChild, styles.rectangleLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-13.png")}
      />
      <Text style={styles.advertises}>Advertises</Text>
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
      <Text style={[styles.clickOnThe, styles.notice1Typo]}>
        Click on the ad to see more details
      </Text>
      <Text style={[styles.importantNotice, styles.lostCatTypo]}>
        Important Notice!
      </Text>
      <View style={[styles.noticeItem, styles.noticeItemBorder]} />
      <Text style={[styles.notice1, styles.notice1Typo]}>Notice</Text>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.lostCat, styles.lostCatTypo]}>LOST CAT</Text>
        <Text style={[styles.helpUsFind, styles.ifYouHaveTypo]}>
          Help us find our doy. Lost in Center Park in Garden on Tuesday 3nd
          November at 4pm
        </Text>
        <Text style={[styles.sherry3Years, styles.groupItemPosition]}>{`Sherry
3 years old, male`}</Text>
        <Text style={[styles.ifYouHave, styles.ifYouHaveTypo]}>
          If you have any information please contact:
        </Text>
        <Image
          style={[styles.groupItem, styles.groupItemPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-175.png")}
        />
        <Text style={styles.text}>016-236 9898</Text>
      </View>
      <Pressable
        style={[styles.rectangleGroup, styles.rectangleLayout]}
        onPress={() => navigation.navigate("Notice1")}
      >
        <View style={[styles.groupInner, styles.groupPosition]} />
        <View style={[styles.rectangleView, styles.groupPosition]} />
        <View style={[styles.groupChild1, styles.childPosition]} />
        <Text style={[styles.mondayNovember6, styles.waterOutageFlexBox]}>
          MONDAY, NOVEMBER 6
        </Text>
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require("../assets/rectangle-180.png")}
        />
        <Text style={[styles.waterOutage, styles.waterOutageFlexBox]}>{`WATER
OUTAGE`}</Text>
      </Pressable>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector77.png")}
      />
      <View style={[styles.mainbar, styles.mainbarPosition]}>
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
  rectangleLayout: {
    height: 190,
    width: 330,
    left: 15,
    position: "absolute",
  },
  vector1Layout: {
    height: 24,
    position: "absolute",
  },
  notice1Typo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  lostCatTypo: {
    color: Color.colorRed_100,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  noticeItemBorder: {
    borderTopWidth: 2,
    borderStyle: "solid",
  },
  groupPosition: {
    left: 0,
    width: 330,
  },
  ifYouHaveTypo: {
    width: 182,
    fontSize: FontSize.size_2xs,
    left: 126,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  groupItemPosition: {
    top: 51,
    position: "absolute",
  },
  childPosition: {
    right: 0,
    left: 0,
  },
  waterOutageFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  mainbarPosition: {
    height: 68,
    bottom: 0,
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
  noticeChild: {
    top: 384,
    borderRadius: Border.br_smi,
    width: 330,
  },
  advertises: {
    left: 99,
    fontSize: FontSize.size_13xl,
    width: 162,
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
  clickOnThe: {
    top: 96,
    left: 42,
  },
  importantNotice: {
    top: 141,
    left: 20,
  },
  noticeItem: {
    top: 603,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderColor: Color.labelsLightPrimary,
    width: 362,
    height: 2,
    left: -1,
    position: "absolute",
  },
  notice1: {
    top: 618,
    left: 15,
    fontSize: FontSize.size_base,
  },
  groupChild: {
    backgroundColor: "#c4c4c4",
    top: 0,
    left: 0,
    height: 190,
    borderRadius: Border.br_smi,
    position: "absolute",
  },
  lostCat: {
    top: 14,
    left: 125,
  },
  helpUsFind: {
    top: 88,
  },
  sherry3Years: {
    fontSize: FontSize.size_2xs,
    left: 126,
    top: 51,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
  },
  ifYouHave: {
    top: 138,
  },
  groupItem: {
    width: 89,
    height: 111,
    left: 20,
  },
  text: {
    top: 154,
    left: 176,
    fontSize: FontSize.size_xs,
    color: Color.colorRed_100,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  rectangleParent: {
    top: 651,
  },
  groupInner: {
    backgroundColor: Color.colorGoldenrod,
    top: 0,
    left: 0,
    height: 190,
    borderRadius: Border.br_smi,
    position: "absolute",
  },
  rectangleView: {
    top: 4,
    borderTopLeftRadius: Border.br_5xs,
    borderTopRightRadius: Border.br_5xs,
    backgroundColor: Color.colorGray_1000,
    height: 155,
    position: "absolute",
  },
  groupChild1: {
    top: 159,
    borderBottomRightRadius: Border.br_smi,
    borderBottomLeftRadius: Border.br_smi,
    backgroundColor: Color.colorGold_100,
    height: 21,
    position: "absolute",
  },
  mondayNovember6: {
    top: 174,
    fontSize: FontSize.size_smi,
    fontWeight: "700",
    fontFamily: FontFamily.archivoBold,
    height: 16,
    left: 0,
    width: 330,
    color: Color.labelsLightPrimary,
    textAlign: "center",
  },
  rectangleIcon: {
    top: 22,
    left: 107,
    borderTopLeftRadius: Border.br_8xs,
    borderTopRightRadius: Border.br_8xs,
    width: 103,
    height: 95,
    position: "absolute",
  },
  waterOutage: {
    top: 111,
    left: 97,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.concertOneRegular,
    color: Color.white,
    width: 124,
    height: 33,
  },
  rectangleGroup: {
    top: 181,
  },
  vectorIcon: {
    top: 95,
    left: 11,
    width: 22,
    height: 22,
    position: "absolute",
  },
  mainbarChild: {
    borderColor: Color.colorDimgray_100,
    right: 0,
    left: 0,
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
  mainbar: {
    right: 1,
    left: -1,
  },
  notice: {
    flex: 1,
    height: 968,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Notice;
