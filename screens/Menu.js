import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Menu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.menu}>
      <Image
        style={[styles.menuChild, styles.menuPosition1]}
        resizeMode="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <Image
        style={[styles.menuItem, styles.menuPosition1]}
        resizeMode="cover"
        source={require("../assets/rectangle-9.png")}
      />
      <Text style={[styles.complaint, styles.shoppingTypo]}>Complaint</Text>
      <Text style={[styles.shopping, styles.shoppingTypo]}>Shopping</Text>
      <Text style={[styles.healthcare, styles.shoppingTypo]}>Healthcare</Text>
      <Text style={[styles.services, styles.shoppingTypo]}>Services</Text>
      <Text style={[styles.locksmith, styles.jobTypo]}>Locksmith</Text>
      <Text style={[styles.repair, styles.jobTypo]}>Repair</Text>
      <Text style={[styles.bills, styles.jobTypo]}>Bills</Text>
      <Pressable
        style={[styles.wrapper, styles.userLayout]}
        onPress={() => navigation.navigate("UtilityBill")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/group-1000.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.container, styles.wrapper1Position]}
        onPress={() => navigation.navigate("HomeRepairServices3")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/group-1001.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.frame, styles.framePosition]}
        onPress={() => navigation.navigate("LockSmith")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/group-1003.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.groupPressable, styles.wrapperLayout]}
        onPress={() => navigation.navigate("Care1")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/group-1006.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.wrapper1, styles.wrapperLayout]}
        onPress={() => navigation.navigate("HealthcareMainPage")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/group-1007.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.wrapper2, styles.wrapperLayout]}
        onPress={() => navigation.navigate("Shopping")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/group-1005.png")}
        />
      </Pressable>
      <View style={[styles.menuInner, styles.lineLayout]} />
      <Text style={[styles.importantNotice, styles.services1Typo]}>
        Important Notice!
      </Text>
      <Pressable
        style={styles.seeMoreNoticeContainer}
        onPress={() => navigation.navigate("Notice")}
      >
        <Text
          style={[styles.seeMoreNotice, styles.seeMoreNoticeTypo]}
        >{`See more notice >>`}</Text>
      </Pressable>
      <View style={[styles.lineView, styles.lineLayout]} />
      <Text style={[styles.advertises, styles.services1Typo]}>Advertises</Text>
      <Pressable
        style={styles.seeMoreAdvertisesContainer}
        onPress={() => navigation.navigate("Advertise")}
      >
        <Text
          style={[styles.seeMoreNotice, styles.seeMoreNoticeTypo]}
        >{`See more advertises >>`}</Text>
      </Pressable>
      <Pressable
        style={[styles.groupParent, styles.advPosition]}
        onPress={() => navigation.navigate("Notice1")}
      >
        <View style={styles.childLayout}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <View style={[styles.groupItem, styles.groupLayout]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
          <Text style={[styles.mondayNovember6, styles.groupLayout]}>
            MONDAY, NOVEMBER 6
          </Text>
          <Image
            style={styles.rectangleIcon}
            resizeMode="cover"
            source={require("../assets/rectangle-180.png")}
          />
          <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
            <View style={[styles.rectangleView, styles.rectangleLayout]} />
            <View style={styles.groupChild1} />
          </View>
          <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
            <View style={[styles.rectangleView, styles.rectangleLayout]} />
            <View style={styles.groupChild1} />
          </View>
          <Image
            style={[styles.lineIcon, styles.lineLayout]}
            resizeMode="cover"
            source={require("../assets/line-14.png")}
          />
          <Text style={styles.waterOutage}>{`WATER
OUTAGE`}</Text>
        </View>
        <Image
          style={[styles.frameChild, styles.childLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-132.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.adv, styles.advPosition]}
        onPress={() => navigation.navigate("Ad1")}
      >
        <Image
          style={[styles.advChild, styles.childLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-131.png")}
        />
        <Image
          style={[styles.frameChild, styles.childLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-12.png")}
        />
      </Pressable>
      <Text style={[styles.services1, styles.services1Typo]}>Services</Text>
      <View style={[styles.menuChild1, styles.lineLayout]} />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("JOB1")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/vector78.png")}
        />
      </Pressable>
      <Text style={[styles.job, styles.jobPosition]}>Job</Text>
      <Pressable
        style={[styles.clarityformLine, styles.jobPosition]}
        onPress={() => navigation.navigate("CommunityComplaint")}
      >
        <Image
          style={styles.icon7}
          resizeMode="cover"
          source={require("../assets/clarityformline.png")}
        />
      </Pressable>
      <View style={styles.mainbarPosition}>
        <View style={[styles.mainbarChild, styles.mainbarPosition]} />
        <Pressable
          style={[styles.vector1, styles.vectorLayout]}
          onPress={() => navigation.navigate("Message")}
        >
          <Image
            style={styles.icon8}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
        </Pressable>
        <Text style={[styles.message, styles.menu1Typo]}>Message</Text>
        <Text style={[styles.menu1, styles.menu1Typo]}>Menu</Text>
        <Text style={[styles.profile, styles.menu1Typo]}>Profile</Text>
        <Pressable
          style={[styles.user, styles.userLayout]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={styles.icon7}
            resizeMode="cover"
            source={require("../assets/user1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.vector2, styles.vectorLayout]}
          onPress={() => navigation.navigate("Menu")}
        >
          <Image
            style={styles.icon8}
            resizeMode="cover"
            source={require("../assets/vector79.png")}
          />
        </Pressable>
      </View>
      <View style={styles.menuChild2} />
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("Search")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/rectangle-8.png")}
        />
      </Pressable>
      <Text style={[styles.tamanPerdanaPermai, styles.seeMoreNoticeTypo]}>
        Taman Perdana Permai
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  menuPosition1: {
    width: 339,
    left: 10,
    position: "absolute",
  },
  shoppingTypo: {
    height: 17,
    fontSize: FontSize.size_xs,
    top: 458,
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  jobTypo: {
    top: 373,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
  },
  userLayout: {
    height: 30,
    width: 30,
  },
  wrapper1Position: {
    left: 128,
    position: "absolute",
  },
  framePosition: {
    left: 203,
    position: "absolute",
  },
  wrapperLayout: {
    top: 420,
    height: 30,
    width: 30,
  },
  lineLayout: {
    height: 2,
    position: "absolute",
  },
  services1Typo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  seeMoreNoticeTypo: {
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.labelsLightPrimary,
  },
  advPosition: {
    flexDirection: "row",
    left: 15,
    width: 330,
    position: "absolute",
  },
  groupChildPosition: {
    top: 0,
    left: 0,
  },
  groupLayout: {
    width: 330,
    position: "absolute",
  },
  rectangleLayout: {
    height: 8,
    width: 9,
    position: "absolute",
  },
  childLayout: {
    height: 190,
    width: 330,
  },
  jobPosition: {
    left: 282,
    position: "absolute",
  },
  mainbarPosition: {
    height: 68,
    bottom: 0,
    right: 0,
    left: 0,
    position: "absolute",
  },
  vectorLayout: {
    height: 25,
    position: "absolute",
  },
  menu1Typo: {
    bottom: 8,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  menuChild: {
    top: 93,
    borderTopLeftRadius: Border.br_lgi,
    borderBottomLeftRadius: 4,
    height: 169,
  },
  menuItem: {
    top: 315,
    height: 194,
    borderRadius: Border.br_smi,
  },
  complaint: {
    left: 266,
    width: 60,
    height: 17,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    top: 458,
  },
  shopping: {
    left: 194,
    width: 60,
    height: 17,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    top: 458,
  },
  healthcare: {
    left: 113,
    width: 62,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    top: 458,
    height: 17,
  },
  services: {
    left: 29,
    width: 72,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    top: 458,
    height: 17,
  },
  locksmith: {
    left: 188,
    position: "absolute",
  },
  repair: {
    left: 123,
    position: "absolute",
  },
  bills: {
    left: 53,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: 337,
    width: 30,
    left: 50,
    position: "absolute",
  },
  container: {
    height: 30,
    width: 30,
    top: 337,
  },
  frame: {
    height: 30,
    width: 30,
    top: 337,
  },
  groupPressable: {
    left: 50,
    position: "absolute",
  },
  wrapper1: {
    left: 128,
    position: "absolute",
  },
  wrapper2: {
    left: 203,
    position: "absolute",
  },
  menuInner: {
    top: 526,
    width: 362,
    borderColor: Color.labelsLightPrimary,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: -1,
    height: 2,
    borderTopWidth: 2,
    borderStyle: "solid",
  },
  importantNotice: {
    top: 539,
    color: Color.colorRed_100,
    left: 10,
    fontSize: FontSize.size_base,
  },
  seeMoreNotice: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.labelsLightPrimary,
  },
  seeMoreNoticeContainer: {
    left: 214,
    top: 767,
    position: "absolute",
  },
  lineView: {
    top: 796,
    width: 362,
    borderColor: Color.labelsLightPrimary,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: -1,
    height: 2,
    borderTopWidth: 2,
    borderStyle: "solid",
  },
  advertises: {
    top: 810,
    color: Color.labelsLightPrimary,
    left: 10,
    fontSize: FontSize.size_base,
  },
  seeMoreAdvertisesContainer: {
    left: 187,
    top: 1038,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorGoldenrod,
    left: 0,
    height: 190,
    width: 330,
    borderRadius: Border.br_smi,
    position: "absolute",
  },
  groupItem: {
    top: 4,
    borderTopLeftRadius: Border.br_5xs,
    borderTopRightRadius: Border.br_5xs,
    backgroundColor: Color.colorGray_1000,
    height: 155,
    left: 0,
  },
  groupInner: {
    marginTop: 74,
    marginLeft: -165,
    top: "50%",
    left: "50%",
    borderBottomRightRadius: Border.br_smi,
    borderBottomLeftRadius: Border.br_smi,
    backgroundColor: Color.colorGold_100,
    height: 21,
  },
  mondayNovember6: {
    top: 174,
    fontSize: FontSize.size_smi,
    fontWeight: "700",
    fontFamily: FontFamily.archivoBold,
    height: 16,
    left: 0,
    textAlign: "center",
    color: Color.labelsLightPrimary,
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
  rectangleView: {
    left: 0,
    top: 0,
    backgroundColor: Color.white,
  },
  groupChild1: {
    top: 2,
    left: 2,
    backgroundColor: Color.labelsLightPrimary,
    width: 5,
    height: 4,
    position: "absolute",
  },
  rectangleGroup: {
    top: 147,
    left: 70,
  },
  rectangleContainer: {
    top: 146,
    left: 236,
  },
  lineIcon: {
    top: 149,
    left: 77,
    width: 159,
  },
  waterOutage: {
    top: 111,
    left: 97,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.concertOneRegular,
    color: Color.white,
    width: 124,
    height: 33,
    textAlign: "center",
    position: "absolute",
  },
  frameChild: {
    marginLeft: 50,
    borderRadius: Border.br_smi,
  },
  groupParent: {
    top: 567,
  },
  advChild: {
    borderRadius: Border.br_smi,
  },
  adv: {
    top: 838,
  },
  services1: {
    top: 287,
    left: 13,
    color: Color.labelsLightPrimary,
  },
  menuChild1: {
    top: 277,
    width: 362,
    borderColor: Color.labelsLightPrimary,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: -1,
    height: 2,
    borderTopWidth: 2,
    borderStyle: "solid",
  },
  vector: {
    left: 277,
    top: 336,
    height: 32,
    width: 32,
    position: "absolute",
  },
  job: {
    top: 373,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
  },
  icon7: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  clarityformLine: {
    top: 420,
    height: 30,
    width: 30,
  },
  mainbarChild: {
    borderColor: Color.colorDimgray_100,
    borderTopWidth: 2,
    borderStyle: "solid",
    height: 68,
    bottom: 0,
    backgroundColor: Color.white,
  },
  icon8: {
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
  },
  vector1: {
    left: 62,
    right: 274,
    bottom: 25,
  },
  message: {
    left: 46,
    width: 55,
  },
  menu1: {
    left: 164,
    width: 32,
  },
  profile: {
    right: 54,
    width: 37,
  },
  user: {
    right: 57,
    bottom: 23,
    position: "absolute",
  },
  vector2: {
    left: 169,
    right: 169,
    bottom: 26,
  },
  menuChild2: {
    backgroundColor: Color.colorGray_1100,
    borderColor: Color.colorGray_200,
    borderBottomWidth: 2,
    height: 80,
    right: 0,
    left: 0,
    top: 0,
    borderStyle: "solid",
    position: "absolute",
  },
  rectanglePressable: {
    top: 40,
    right: 14,
    width: 24,
    height: 24,
    position: "absolute",
  },
  tamanPerdanaPermai: {
    top: 32,
    left: 23,
    fontSize: FontSize.size_7xl,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  menu: {
    flex: 1,
    height: 1132,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Menu;
