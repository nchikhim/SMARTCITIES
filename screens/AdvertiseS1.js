import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const AdvertiseS1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.advertiseS1}>
      <Text style={styles.advertisements}>Advertisements</Text>
      <Text
        style={[styles.submitPleaseNoteThatContainer, styles.containerTypo]}
      >
        Submit:{`Please note that after review, if the `}
        {`staff finds that the advertisement `}
        {`contains any content that causes `}
        {`discomfort or false news, the `}submission will be rejected.
        {`Each advertising fee of RM50 per `}month.
      </Text>
      <Pressable
        style={[styles.arrowLeftCircle, styles.vector3Layout]}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/arrowleftcircle3.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.vector, styles.vectorLayout]}
        onPress={() => navigation.navigate("AdvertiseS2")}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/vector29.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.vector1, styles.vectorLayout]}
        onPress={() => navigation.navigate("Advertise2")}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/vector29.png")}
        />
      </Pressable>
      <View style={[styles.advertiseS1Child, styles.advertiseBorder]} />
      <View style={[styles.advertiseS1Item, styles.advertiseBorder]} />
      <Text
        style={[styles.statusAfterSubmittedContainer, styles.containerTypo]}
      >
        <Text>
          <Text style={styles.statusAfterSubmittedPleas}>{`Status:
After submitted, please check the 
submission status
`}</Text>
          <Text style={styles.ifSuccess}>IF SUCCESS</Text>
          <Text style={styles.statusAfterSubmittedPleas}>{`: Make the payment 
within one week.`}</Text>
        </Text>
        <Text>
          <Text style={styles.ifSuccess}>IF Fail</Text>
          <Text
            style={styles.statusAfterSubmittedPleas}
          >{`: You can try to revise and `}</Text>
        </Text>
        <Text
          style={styles.statusAfterSubmittedPleas}
        >{`resubmit or just delete. `}</Text>
      </Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector30.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector31.png")}
      />
      <View style={styles.mainbarPosition}>
        <View style={[styles.mainbarChild, styles.mainbarPosition]} />
        <Pressable
          style={styles.vector2}
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
          style={[styles.vector3, styles.vector3Layout]}
          onPress={() => navigation.navigate("Menu")}
        >
          <Image
            style={styles.icon4}
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
  containerTypo: {
    fontSize: FontSize.size_sm,
    left: 86,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  vector3Layout: {
    height: 24,
    position: "absolute",
  },
  vectorLayout: {
    width: 46,
    left: 23,
    height: 24,
    position: "absolute",
  },
  advertiseBorder: {
    width: 257,
    borderWidth: 2,
    borderColor: Color.labelsLightPrimary,
    backgroundColor: Color.colorGainsboro_600,
    borderRadius: Border.br_sm,
    left: 75,
    borderStyle: "solid",
    position: "absolute",
  },
  vectorIconLayout: {
    height: 42,
    width: 42,
    left: 25,
    position: "absolute",
  },
  mainbarPosition: {
    height: 68,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
  },
  menuTypo: {
    fontSize: FontSize.size_xs,
    bottom: 8,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  advertisements: {
    top: 31,
    left: 68,
    fontSize: FontSize.size_13xl,
    width: 253,
    height: 39,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  submitPleaseNoteThatContainer: {
    top: 121,
    width: 235,
    height: 134,
    color: Color.labelsLightPrimary,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrowLeftCircle: {
    left: 10,
    top: 35,
    width: 24,
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  vector: {
    top: 160,
  },
  vector1: {
    top: 330,
  },
  advertiseS1Child: {
    top: 115,
    height: 146,
  },
  advertiseS1Item: {
    height: 131,
    top: 284,
  },
  statusAfterSubmittedPleas: {
    color: Color.labelsLightPrimary,
  },
  ifSuccess: {
    color: Color.colorRed_100,
  },
  statusAfterSubmittedContainer: {
    top: 290,
  },
  vectorIcon: {
    top: 284,
  },
  vectorIcon1: {
    top: 114,
  },
  mainbarChild: {
    borderColor: Color.colorDimgray_100,
    borderTopWidth: 2,
    borderStyle: "solid",
    height: 68,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: Color.white,
  },
  vector2: {
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
  icon4: {
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
  },
  vector3: {
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
  advertiseS1: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default AdvertiseS1;
