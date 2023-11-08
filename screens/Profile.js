import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile}>
      <View style={styles.profileChild} />
      <Text style={[styles.advertise, styles.advertiseLayout]}>Advertise</Text>
      <Text style={[styles.settings, styles.settingsLayout]}>Settings</Text>
      <Image
        style={[styles.vectorIcon, styles.image18Position]}
        resizeMode="cover"
        source={require("../assets/vector34.png")}
      />
      <Text style={[styles.complaint, styles.advertiseLayout]}>Complaint</Text>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("CommunityComplaint")}
      >
        <Image
          style={styles.iconLayout1}
          resizeMode="cover"
          source={require("../assets/vector35.png")}
        />
      </Pressable>
      <Text style={[styles.helpCentre, styles.settingsTypo]}>Help Centre</Text>
      <Pressable
        style={styles.vector1}
        onPress={() => navigation.navigate("AdvertiseS1")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector36.png")}
        />
      </Pressable>
      <View style={styles.profileItem} />
      <Text
        style={[styles.idCoolgirlsAddressContainer, styles.profile2FlexBox]}
      >
        ID : CoolGirls
        {`Address:  123, Jln Seksyen 1/2, Bandar Barat, 31900 Kampar, Perak  `}
        Contact No: 012-345 6789
      </Text>
      <Image
        style={[styles.editIcon, styles.settingsLayout]}
        resizeMode="cover"
        source={require("../assets/edit.png")}
      />
      <Image
        style={styles.profileInner}
        resizeMode="cover"
        source={require("../assets/group-42.png")}
      />
      <Image
        style={styles.cameraIcon}
        resizeMode="cover"
        source={require("../assets/camera.png")}
      />
      <Pressable
        style={[styles.image18, styles.image18Position]}
        onPress={() => navigation.navigate("HelpCentre")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/image-181.png")}
        />
      </Pressable>
      <View style={styles.mainbarPosition}>
        <View style={[styles.mainbarChild, styles.mainbarPosition]} />
        <Pressable
          style={[styles.vector2, styles.vector2Layout]}
          onPress={() => navigation.navigate("Message")}
        >
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
        </Pressable>
        <Text style={[styles.message, styles.menuPosition]}>Message</Text>
        <Text style={[styles.menu, styles.menuPosition]}>Menu</Text>
        <Pressable
          style={styles.vector3}
          onPress={() => navigation.navigate("Menu")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/vector3.png")}
          />
        </Pressable>
        <Text style={[styles.profile1, styles.menuPosition]}>Profile</Text>
        <Pressable
          style={styles.user}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={[styles.icon5, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/user2.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={styles.logOut}
        onPress={() => navigation.navigate("Logout")}
      >
        <Image
          style={[styles.icon5, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/logout.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.arrowLeftCircle, styles.profile2Position]}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon5, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/arrowleftcircle4.png")}
        />
      </Pressable>
      <Text style={[styles.profile2, styles.profile2Position]}>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  advertiseLayout: {
    height: 15,
    position: "absolute",
  },
  settingsLayout: {
    height: 16,
    position: "absolute",
  },
  image18Position: {
    top: 477,
    position: "absolute",
  },
  settingsTypo: {
    top: 521,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
  },
  iconLayout: {
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
  },
  profile2FlexBox: {
    textAlign: "left",
    color: Color.labelsLightPrimary,
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  mainbarPosition: {
    height: 68,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
  },
  vector2Layout: {
    height: 25,
    width: 24,
  },
  menuPosition: {
    bottom: 8,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  profile2Position: {
    top: 32,
    position: "absolute",
  },
  profileChild: {
    top: 358,
    left: 37,
    borderRadius: 34,
    backgroundColor: "rgba(217, 217, 217, 0.3)",
    width: 283,
    height: 218,
    position: "absolute",
  },
  advertise: {
    left: 93,
    width: 55,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontSize: FontSize.size_xs,
    top: 425,
    height: 15,
  },
  settings: {
    left: 211,
    width: 47,
    top: 521,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
  },
  vectorIcon: {
    left: 219,
    height: 33,
    width: 32,
  },
  complaint: {
    left: 206,
    width: 58,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    top: 425,
    height: 15,
  },
  vector: {
    left: 224,
    top: 387,
    width: 22,
    height: 28,
    position: "absolute",
  },
  helpCentre: {
    left: 84,
    width: 73,
    height: 15,
    position: "absolute",
  },
  icon1: {
    maxHeight: "100%",
    width: "100%",
  },
  vector1: {
    left: "29.72%",
    top: "48.5%",
    right: "62.78%",
    bottom: "48.38%",
    width: "7.5%",
    height: "3.13%",
    position: "absolute",
  },
  profileItem: {
    top: 250,
    left: 29,
    borderRadius: Border.br_lg,
    backgroundColor: "#f4ffae",
    borderColor: Color.labelsLightPrimary,
    borderWidth: 1,
    width: 301,
    height: 78,
    borderStyle: "solid",
    position: "absolute",
  },
  idCoolgirlsAddressContainer: {
    top: 260,
    left: 47,
    whiteSpace: "pre-wrap",
    width: 273,
    height: 63,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  editIcon: {
    top: 312,
    left: 320,
    width: 15,
    overflow: "hidden",
  },
  profileInner: {
    top: 115,
    left: 32,
    width: 100,
    height: 101,
    position: "absolute",
  },
  cameraIcon: {
    top: 195,
    left: 116,
    width: 20,
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },
  icon2: {
    borderRadius: Border.br_191xl,
  },
  image18: {
    left: 103,
    width: 35,
    height: 34,
  },
  mainbarChild: {
    borderColor: Color.colorDimgray_100,
    borderTopWidth: 2,
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  vector2: {
    left: 62,
    bottom: 25,
    position: "absolute",
  },
  message: {
    left: 46,
    width: 55,
    fontFamily: FontFamily.interRegular,
  },
  menu: {
    left: 164,
    width: 32,
    fontFamily: FontFamily.interRegular,
  },
  vector3: {
    left: 169,
    right: 169,
    bottom: 26,
    height: 24,
    position: "absolute",
  },
  profile1: {
    right: 51,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 39,
  },
  icon5: {
    overflow: "hidden",
  },
  user: {
    right: 57,
    bottom: 23,
    width: 30,
    height: 30,
    position: "absolute",
  },
  logOut: {
    top: 27,
    right: 35,
    width: 29,
    height: 31,
    position: "absolute",
  },
  arrowLeftCircle: {
    left: 9,
    height: 25,
    width: 24,
  },
  profile2: {
    left: 130,
    fontSize: FontSize.size_13xl,
    width: 98,
    height: 40,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
  },
  profile: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Profile;
