import * as React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const HomeRepairServices3 = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={[styles.homeRepairServices, styles.iconLayout1]}
      locations={[0, 1]}
      colors={["#f1f0e6", "rgba(241, 241, 230, 0)"]}
      useAngle={true}
      angle={180}
    >
      <View style={styles.options}>
        <View style={[styles.plumbingRepair, styles.plumbingLayout]}>
          <View style={[styles.plumbingRepairChild, styles.repairChildBg]} />
          <Text style={[styles.plumbingRepair1, styles.repairTypo]}>{`Plumbing 
repair`}</Text>
          <Image
            style={[styles.pipelineMaintenanceamicoIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/pipelinemaintenanceamico.png")}
          />
        </View>
        <View style={[styles.applianceRepair, styles.applianceLayout]}>
          <View style={[styles.applianceRepairChild, styles.applianceLayout]} />
          <Text
            style={[styles.applianceRepair1, styles.repairTypo]}
          >{`Appliance 
repair`}</Text>
          <Image
            style={[styles.electricianrafikiIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/electricianrafiki.png")}
          />
        </View>
        <View style={[styles.electricalRepair, styles.airConditionerPosition]}>
          <View style={[styles.applianceRepairChild, styles.applianceLayout]} />
          <Image
            style={[styles.electriciancuateIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/electriciancuate5.png")}
          />
          <Text
            style={[styles.electricalRepair1, styles.airConditioner1Typo]}
          >{`Electrical 
repair`}</Text>
        </View>
        <View style={[styles.airConditioner, styles.airConditionerPosition]}>
          <Pressable
            style={[styles.airConditionerChild, styles.repairChildBg]}
            onPress={() => navigation.navigate("Home2")}
          />
          <Text style={[styles.airConditioner1, styles.airConditioner1Typo]}>
            {" "}
            AIR Conditioner
          </Text>
          <Image
            style={styles.airConditionerIcon}
            resizeMode="cover"
            source={require("../assets/air-conditioner.png")}
          />
          <Image
            style={[styles.earlyMorningbroIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/earlymorningbro.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.alluraChillingIcon, styles.airConditionerPosition]}
        resizeMode="cover"
        source={require("../assets/allura-chilling.png")}
      />
      <Text style={styles.homeRepairServices1}> Home Repair Services</Text>
      <Pressable
        style={[styles.arrowLeftCircle, styles.vector1Layout]}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/arrowleftcircle3.png")}
        />
      </Pressable>
      <View style={styles.mainbarPosition}>
        <View style={[styles.mainbarChild, styles.mainbarPosition]} />
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("Message")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
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
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/user.png")}
          />
        </Pressable>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  plumbingLayout: {
    height: 185,
    width: 166,
  },
  repairChildBg: {
    backgroundColor: Color.colorLemonchiffon,
    borderRadius: Border.br_11xl,
    left: 0,
  },
  repairTypo: {
    width: 135,
    textAlign: "center",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.alatsiRegular,
    fontSize: FontSize.size_3xl,
    top: 5,
    position: "absolute",
  },
  iconPosition: {
    left: "6.63%",
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  applianceLayout: {
    height: 184,
    top: 0,
    width: 166,
    position: "absolute",
  },
  airConditionerPosition: {
    left: 0,
    position: "absolute",
  },
  airConditioner1Typo: {
    left: 15,
    width: 135,
    textAlign: "center",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.alatsiRegular,
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  vector1Layout: {
    height: 24,
    position: "absolute",
  },
  iconLayout: {
    width: "100%",
    height: "100%",
  },
  mainbarPosition: {
    height: 68,
    bottom: 0,
    right: 0,
    left: 0,
    position: "absolute",
  },
  menuTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    bottom: 8,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  plumbingRepairChild: {
    top: 0,
    height: 185,
    width: 166,
    position: "absolute",
  },
  plumbingRepair1: {
    left: 16,
    height: 69,
  },
  pipelineMaintenanceamicoIcon: {
    height: "58.86%",
    width: "81.33%",
    top: "40.7%",
    right: "12.05%",
    bottom: "0.43%",
  },
  plumbingRepair: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 180,
    top: 228,
    height: 185,
    position: "absolute",
  },
  applianceRepairChild: {
    backgroundColor: Color.colorLemonchiffon,
    borderRadius: Border.br_11xl,
    left: 0,
  },
  applianceRepair1: {
    left: 17,
    height: 65,
  },
  electricianrafikiIcon: {
    height: "65.62%",
    width: "87.95%",
    top: "34.33%",
    right: "5.42%",
    bottom: "0.05%",
  },
  applianceRepair: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 180,
  },
  electriciancuateIcon: {
    height: "55.68%",
    width: "79.52%",
    top: "44.32%",
    right: "8.43%",
    bottom: "0%",
    left: "12.05%",
    position: "absolute",
  },
  electricalRepair1: {
    top: 6,
    height: 69,
  },
  electricalRepair: {
    height: 185,
    width: 166,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 228,
  },
  airConditionerChild: {
    top: 8,
    height: 177,
    width: 166,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  airConditioner1: {
    top: 56,
    height: 62,
  },
  airConditionerIcon: {
    left: 18,
    width: 131,
    height: 56,
    top: 0,
    position: "absolute",
  },
  earlyMorningbroIcon: {
    height: "31.46%",
    width: "69.88%",
    top: "66.27%",
    right: "15.06%",
    bottom: "2.27%",
    left: "15.06%",
    position: "absolute",
  },
  airConditioner: {
    top: 0,
    height: 185,
    width: 166,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  options: {
    top: 301,
    left: 7,
    width: 346,
    height: 413,
    position: "absolute",
  },
  alluraChillingIcon: {
    top: 44,
    width: 471,
    height: 191,
  },
  homeRepairServices1: {
    top: 238,
    fontSize: FontSize.size_11xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 338,
    height: 41,
    textAlign: "left",
    left: 15,
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrowLeftCircle: {
    left: 11,
    top: 26,
    width: 24,
  },
  mainbarChild: {
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.colorDimgray_100,
    borderTopWidth: 2,
  },
  icon1: {
    height: "100%",
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
  homeRepairServices: {
    width: 360,
    height: 825,
    backgroundColor: "transparent",
  },
});

export default HomeRepairServices3;
