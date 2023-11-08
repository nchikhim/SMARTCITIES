import React, { useState, useCallback } from "react";
import { StyleSheet, View, Image, Text, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HomeRepairServices3 from "../components/HomeRepairServices3";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Home2 = () => {
  const [arrowLeftCircleIconVisible, setArrowLeftCircleIconVisible] =
    useState(false);
  const navigation = useNavigation();

  const openArrowLeftCircleIcon = useCallback(() => {
    setArrowLeftCircleIconVisible(true);
  }, []);

  const closeArrowLeftCircleIcon = useCallback(() => {
    setArrowLeftCircleIconVisible(false);
  }, []);

  return (
    <>
      <View style={[styles.home2, styles.iconLayout]}>
        <View style={styles.home2Child} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout4]}
          resizeMode="cover"
          source={require("../assets/vector80.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout4]}
          resizeMode="cover"
          source={require("../assets/vector81.png")}
        />
        <Text style={styles.save}>SAVE</Text>
        <Text style={[styles.airConditioner, styles.userLayout]}>
          {" "}
          Air Conditioner
        </Text>
        <View style={[styles.coolFamily, styles.coolLayout]}>
          <Pressable
            style={[styles.coolFamilyChild, styles.coolLayout]}
            onPress={() => navigation.navigate("Home3")}
          />
          <Image
            style={[styles.coolFamilyItem, styles.itemLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-93.png")}
          />
          <Text style={[styles.mrLeeKai, styles.kaiTypo]}>MR. LEE KAI JUN</Text>
          <Image
            style={[styles.vectorIcon2, styles.vectorIconPosition6]}
            resizeMode="cover"
            source={require("../assets/vector82.png")}
          />
          <Image
            style={[styles.vectorIcon3, styles.vectorIconLayout1]}
            resizeMode="cover"
            source={require("../assets/vector83.png")}
          />
          <Text style={[styles.coolFamily1, styles.kaiTypo]}>COOL FAMILY</Text>
          <Text style={[styles.kamparPerak, styles.kaiTypo]}>
            kampar , Perak
          </Text>
          <Text
            style={[styles.mondaySaturday, styles.kaiTypo]}
          >{`MONDAY - SATURDAY
SUNDAY rest
10.30am - 5.00pm`}</Text>
          <Image
            style={[styles.vectorIcon4, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector84.png")}
          />
          <Image
            style={[styles.vectorIcon5, styles.vectorIconPosition5]}
            resizeMode="cover"
            source={require("../assets/vector85.png")}
          />
          <Image
            style={[styles.vectorIcon6, styles.vectorIconPosition4]}
            resizeMode="cover"
            source={require("../assets/vector86.png")}
          />
          <Text style={[styles.telWhatsapp, styles.telTypo]}>
            TEL / WHATSAPP : 011-14156780
          </Text>
        </View>
        <View style={[styles.znAirConditioner, styles.lbYapItemPosition]}>
          <View style={[styles.coolFamilyChild, styles.coolLayout]} />
          <Image
            style={[styles.znAirConditionerItem, styles.itemLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-91.png")}
          />
          <Image
            style={styles.vectorIcon7}
            resizeMode="cover"
            source={require("../assets/vector83.png")}
          />
          <Image
            style={[styles.vectorIcon8, styles.vectorIconPosition2]}
            resizeMode="cover"
            source={require("../assets/vector87.png")}
          />
          <Image
            style={[styles.vectorIcon9, styles.vectorIconPosition2]}
            resizeMode="cover"
            source={require("../assets/vector88.png")}
          />
          <Image
            style={[styles.vectorIcon10, styles.vectorIconPosition2]}
            resizeMode="cover"
            source={require("../assets/vector89.png")}
          />
          <Image
            style={[styles.vectorIcon11, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector84.png")}
          />
          <Text style={[styles.telWhatsapp1, styles.telTypo]}>
            TEL / WHATSAPP : 019-7865564
          </Text>
          <Text style={[styles.kamparPerak1, styles.mrPangWeiPosition]}>
            kampar , Perak
          </Text>
          <Text style={[styles.mrPangWei, styles.mrPangWeiPosition]}>
            MR. PANG WEI JIAN
          </Text>
          <Text
            style={[styles.znAirConditioner1, styles.lbYap1Typo]}
          >{` Z&N AIR CONDITIONER`}</Text>
          <Text
            style={[styles.mondayFriday, styles.mrPangWeiPosition]}
          >{`MONDAY - FRIDAY 
SUNDAY , SATURDAY REST
1.00 PM - 8.30 PM`}</Text>
        </View>
        <View style={[styles.lbYap, styles.coolLayout]}>
          <View style={[styles.coolFamilyChild, styles.coolLayout]} />
          <Image
            style={[styles.lbYapItem, styles.lbYapItemPosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-89.png")}
          />
          <Image
            style={[styles.vectorIcon12, styles.vectorIconLayout1]}
            resizeMode="cover"
            source={require("../assets/vector83.png")}
          />
          <Text style={[styles.mrChinKai, styles.kaiTypo]}>
            MR. CHIN KAI QIANG
          </Text>
          <Text style={[styles.lbYap1, styles.lbYap1Typo]}>LB Yap</Text>
          <Text style={[styles.kamparPerak2, styles.kaiTypo]}>
            kampar , Perak
          </Text>
          <Text style={[styles.sundayFriday, styles.kaiTypo]}>{`SUNDAY - FRIDAY
SATURDAY rest
10.00am - 6.30pm`}</Text>
          <Text style={[styles.telWhatsapp2, styles.telTypo]}>
            TEL / WHATSAPP : 011-14789967
          </Text>
          <Image
            style={[styles.vectorIcon13, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector90.png")}
          />
          <Image
            style={[styles.vectorIcon14, styles.vectorIconPosition]}
            resizeMode="cover"
            source={require("../assets/vector91.png")}
          />
          <Image
            style={[styles.vectorIcon15, styles.vectorIconPosition]}
            resizeMode="cover"
            source={require("../assets/vector92.png")}
          />
          <Image
            style={[styles.vectorIcon16, styles.vectorIconPosition]}
            resizeMode="cover"
            source={require("../assets/vector93.png")}
          />
        </View>
        <Pressable
          style={[styles.arrowLeftCircle, styles.vector1Layout]}
          onPress={openArrowLeftCircleIcon}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/arrowleftcircle9.png")}
          />
        </Pressable>
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
            style={[styles.user, styles.userLayout]}
            onPress={() => navigation.navigate("Profile")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/user.png")}
            />
          </Pressable>
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={arrowLeftCircleIconVisible}
      >
        <View style={styles.arrowLeftCircleIconOverlay}>
          <Pressable
            style={styles.arrowLeftCircleIconBg}
            onPress={closeArrowLeftCircleIcon}
          />
          <HomeRepairServices3 onClose={closeArrowLeftCircleIcon} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  vectorIconLayout4: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  userLayout: {
    height: 30,
    position: "absolute",
  },
  coolLayout: {
    height: 190,
    width: 320,
  },
  itemLayout: {
    height: 105,
    width: 107,
    top: 34,
  },
  kaiTypo: {
    fontSize: FontSize.size_smi,
    left: 167,
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.alatsiRegular,
    position: "absolute",
  },
  vectorIconPosition6: {
    bottom: "74.21%",
    top: "17.89%",
  },
  vectorIconLayout1: {
    left: "84.38%",
    right: "9.72%",
    width: "5.91%",
    height: "11.95%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout: {
    bottom: "35.26%",
    top: "56.32%",
    width: "5%",
    height: "8.42%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition5: {
    bottom: "48.42%",
    top: "43.16%",
    width: "4.06%",
    height: "8.42%",
  },
  vectorIconPosition4: {
    bottom: "61.58%",
    top: "30.53%",
  },
  telTypo: {
    fontSize: FontSize.size_mini,
    top: 169,
    color: Color.labelsLightPrimary,
    textAlign: "center",
    fontFamily: FontFamily.alatsiRegular,
    position: "absolute",
  },
  lbYapItemPosition: {
    left: 21,
    position: "absolute",
  },
  vectorIconPosition2: {
    left: "45.63%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  mrPangWeiPosition: {
    left: 170,
    fontSize: FontSize.size_smi,
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.alatsiRegular,
    position: "absolute",
  },
  lbYap1Typo: {
    top: 58,
    fontSize: FontSize.size_smi,
    color: Color.labelsLightPrimary,
    textAlign: "center",
    fontFamily: FontFamily.alatsiRegular,
    position: "absolute",
  },
  vectorIconPosition: {
    left: "45.16%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vector1Layout: {
    height: 24,
    position: "absolute",
  },
  mainbarPosition: {
    height: 68,
    bottom: 0,
    right: 0,
    position: "absolute",
  },
  menuTypo: {
    fontFamily: FontFamily.interRegular,
    bottom: 8,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  home2Child: {
    top: 77,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorLightblue_100,
    height: 49,
    width: 320,
    left: 22,
    position: "absolute",
  },
  vectorIcon: {
    height: "2.75%",
    width: "5.26%",
    top: "2.79%",
    right: "7.21%",
    bottom: "94.46%",
    left: "87.52%",
  },
  vectorIcon1: {
    height: "2.18%",
    width: "4.85%",
    top: "11.27%",
    right: "82.92%",
    bottom: "86.55%",
    left: "12.23%",
  },
  save: {
    top: 49,
    left: 312,
    color: "rgba(0, 0, 0, 0.7)",
    textAlign: "center",
    fontFamily: FontFamily.alatsiRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  airConditioner: {
    left: 88,
    fontSize: FontSize.size_3xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 179,
    color: Color.labelsLightPrimary,
    height: 30,
    top: 33,
    textAlign: "center",
  },
  coolFamilyChild: {
    top: 0,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorLinen,
    left: 0,
    position: "absolute",
  },
  coolFamilyItem: {
    left: 16,
    position: "absolute",
  },
  mrLeeKai: {
    top: 33,
    fontSize: FontSize.size_smi,
    textAlign: "center",
  },
  vectorIcon2: {
    left: "45%",
    right: "50.31%",
    width: "4.69%",
    height: "7.89%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon3: {
    top: "6.84%",
    bottom: "81.21%",
  },
  coolFamily1: {
    top: 56,
    textAlign: "center",
  },
  kamparPerak: {
    top: 83,
    textAlign: "center",
  },
  mondaySaturday: {
    top: 107,
    textAlign: "left",
  },
  vectorIcon4: {
    left: "44.69%",
    right: "50.31%",
  },
  vectorIcon5: {
    right: "50.94%",
    left: "45%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon6: {
    left: "45%",
    right: "50.31%",
    width: "4.69%",
    height: "7.89%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  telWhatsapp: {
    left: 56,
  },
  coolFamily: {
    top: 141,
    left: 22,
    position: "absolute",
  },
  znAirConditionerItem: {
    left: 22,
    position: "absolute",
  },
  vectorIcon7: {
    top: "4.74%",
    right: "9.41%",
    bottom: "83.32%",
    left: "84.69%",
    width: "5.91%",
    height: "11.95%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon8: {
    right: "49.69%",
    left: "45.63%",
    width: "4.69%",
    height: "7.89%",
    bottom: "74.21%",
    top: "17.89%",
  },
  vectorIcon9: {
    right: "49.69%",
    left: "45.63%",
    width: "4.69%",
    height: "7.89%",
    bottom: "61.58%",
    top: "30.53%",
  },
  vectorIcon10: {
    bottom: "48.42%",
    top: "43.16%",
    width: "4.06%",
    height: "8.42%",
    right: "50.31%",
  },
  vectorIcon11: {
    right: "50%",
    left: "45%",
  },
  telWhatsapp1: {
    left: 54,
  },
  kamparPerak1: {
    top: 81,
    textAlign: "center",
  },
  mrPangWei: {
    top: 34,
    textAlign: "center",
  },
  znAirConditioner1: {
    left: 168,
  },
  mondayFriday: {
    top: 106,
    textAlign: "left",
  },
  znAirConditioner: {
    top: 561,
    height: 190,
    width: 320,
  },
  lbYapItem: {
    height: 105,
    width: 107,
    top: 34,
  },
  vectorIcon12: {
    top: "5.26%",
    bottom: "82.79%",
  },
  mrChinKai: {
    top: 34,
    textAlign: "center",
  },
  lbYap1: {
    left: 167,
    top: 58,
  },
  kamparPerak2: {
    top: 82,
    textAlign: "center",
  },
  sundayFriday: {
    top: 105,
    textAlign: "left",
  },
  telWhatsapp2: {
    left: 53,
  },
  vectorIcon13: {
    right: "50.47%",
    left: "44.53%",
  },
  vectorIcon14: {
    right: "50.16%",
    left: "45.16%",
    width: "4.69%",
    height: "7.89%",
    bottom: "61.58%",
    top: "30.53%",
  },
  vectorIcon15: {
    right: "50.78%",
    bottom: "48.42%",
    top: "43.16%",
    width: "4.06%",
    height: "8.42%",
  },
  vectorIcon16: {
    right: "50.16%",
    left: "45.16%",
    width: "4.69%",
    height: "7.89%",
    bottom: "74.21%",
    top: "17.89%",
  },
  lbYap: {
    top: 351,
    left: 22,
    position: "absolute",
  },
  arrowLeftCircleIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  arrowLeftCircleIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    height: "100%",
  },
  arrowLeftCircle: {
    left: 11,
    top: 24,
    width: 24,
  },
  mainbarChild: {
    borderStyle: "solid",
    borderColor: Color.colorDimgray_100,
    borderTopWidth: 2,
    left: 0,
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
  },
  mainbar: {
    left: -1,
  },
  home2: {
    flex: 1,
    height: 825,
    backgroundColor: Color.white,
  },
});

export default Home2;
