import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const FoodSelectionPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.foodSelectionPage}>
      <View style={[styles.foodSelectionPageChild, styles.foodChildLayout1]} />
      <View style={[styles.foodSelectionPageItem, styles.foodChildLayout1]} />
      <View style={[styles.foodSelectionPageInner, styles.foodChildLayout1]} />
      <View style={[styles.rectangleView, styles.foodChildLayout1]} />
      <View style={[styles.foodSelectionPageChild1, styles.foodChildLayout1]} />
      <View style={[styles.foodSelectionPageChild2, styles.foodChildLayout1]} />
      <View style={[styles.foodSelectionPageChild3, styles.foodChildLayout1]} />
      <View style={[styles.foodSelectionPageChild4, styles.foodChildLayout1]} />
      <Text style={styles.more}>More...</Text>
      <Text style={styles.food}>Food</Text>
      <Image
        style={[styles.rectangleIcon, styles.foodChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-2221.png")}
      />
      <Text style={[styles.springRollRmContainer, styles.containerTypo1]}>
        <Text style={styles.springRoll}>{`Spring Roll
`}</Text>
        <Text style={styles.rm800}>{`
RM 8.00`}</Text>
      </Text>
      <Text style={[styles.nasiBriyaniRmContainer, styles.containerTypo1]}>
        <Text style={styles.springRoll}>{`Nasi Briyani
`}</Text>
        <Text style={styles.rm800}>{`
RM 11.90`}</Text>
      </Text>
      <Text style={[styles.sambalCrabRmContainer, styles.containerTypo1]}>
        <Text style={styles.springRoll}>{`Sambal Crab
`}</Text>
        <Text style={styles.rm800}>{`
RM 26.50`}</Text>
      </Text>
      <Text style={[styles.rotiTelurRmContainer, styles.containerTypo1]}>
        <Text style={styles.springRoll}>{`Roti Telur
`}</Text>
        <Text style={styles.rm800}>{`
RM 3.50`}</Text>
      </Text>
      <Text style={[styles.curryFishHeadContainer, styles.containerTypo1]}>
        <Text style={styles.curryFishHead}>{`Curry Fish Head
`}</Text>
        <Text style={styles.rm800}>{`
RM 22.80`}</Text>
      </Text>
      <Text style={[styles.asamLaksaRmContainer, styles.containerTypo]}>
        <Text style={styles.curryFishHead}>{`Asam Laksa
`}</Text>
        <Text style={styles.rm800}>{`
RM 7.80`}</Text>
      </Text>
      <Text style={[styles.kuihLapisRmContainer, styles.containerTypo]}>
        <Text style={styles.curryFishHead}>{`Kuih Lapis
`}</Text>
        <Text style={styles.rm800}>{`
RM 5.00`}</Text>
      </Text>
      <Text style={[styles.curryPuffRmContainer, styles.containerTypo]}>
        <Text style={styles.curryFishHead}>{`Curry Puff
`}</Text>
        <Text style={styles.rm800}>{`
RM 5.00`}</Text>
      </Text>
      <Image
        style={[styles.foodSelectionPageChild5, styles.foodChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-2231.png")}
      />
      <Image
        style={[styles.foodSelectionPageChild6, styles.foodChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-2241.png")}
      />
      <Image
        style={[styles.foodSelectionPageChild7, styles.foodChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-2251.png")}
      />
      <Image
        style={[styles.foodSelectionPageChild8, styles.foodChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-2261.png")}
      />
      <Image
        style={[styles.foodSelectionPageChild9, styles.foodChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-2271.png")}
      />
      <Image
        style={[styles.foodSelectionPageChild10, styles.foodChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-2281.png")}
      />
      <Image
        style={[styles.foodSelectionPageChild11, styles.foodChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-2291.png")}
      />
      <Pressable
        style={[styles.arrowLeftCircle, styles.vector1Layout]}
        onPress={() => navigation.navigate("Shopping")}
      >
        <Image
          style={styles.icon}
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
  foodChildLayout1: {
    height: 113,
    width: 360,
    backgroundColor: Color.colorGainsboro_500,
    borderRadius: Border.br_5xs,
    left: 0,
    position: "absolute",
  },
  foodChildLayout: {
    height: 100,
    width: 100,
    borderRadius: Border.br_8xs,
    left: 13,
    position: "absolute",
  },
  containerTypo1: {
    height: 81,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 134,
    color: Color.labelsLightPrimary,
    textAlign: "left",
    position: "absolute",
  },
  containerTypo: {
    width: 223,
    height: 81,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 134,
    color: Color.labelsLightPrimary,
    textAlign: "left",
    position: "absolute",
  },
  vector1Layout: {
    height: 24,
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
    fontSize: FontSize.size_xs,
    bottom: 8,
    color: Color.labelsLightPrimary,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  foodSelectionPageChild: {
    top: 75,
  },
  foodSelectionPageItem: {
    top: 191,
  },
  foodSelectionPageInner: {
    top: 307,
  },
  rectangleView: {
    top: 423,
  },
  foodSelectionPageChild1: {
    top: 539,
  },
  foodSelectionPageChild2: {
    top: 655,
  },
  foodSelectionPageChild3: {
    top: 771,
  },
  foodSelectionPageChild4: {
    top: 887,
  },
  more: {
    top: 1007,
    left: 152,
    color: Color.colorGray_700,
    width: 56,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  food: {
    top: 19,
    left: 146,
    width: 107,
    height: 39,
    color: Color.labelsLightPrimary,
    fontSize: FontSize.size_11xl,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  rectangleIcon: {
    top: 82,
  },
  springRoll: {
    fontSize: FontSize.size_11xl,
  },
  rm800: {
    fontSize: FontSize.size_mini,
  },
  springRollRmContainer: {
    top: 97,
    width: 204,
    height: 81,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 134,
  },
  nasiBriyaniRmContainer: {
    top: 212,
    width: 204,
    height: 81,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 134,
  },
  sambalCrabRmContainer: {
    top: 325,
    width: 204,
    height: 81,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 134,
  },
  rotiTelurRmContainer: {
    top: 441,
    width: 204,
    height: 81,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 134,
  },
  curryFishHead: {
    fontSize: FontSize.size_9xl,
  },
  curryFishHeadContainer: {
    top: 558,
    width: 230,
    height: 81,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 134,
  },
  asamLaksaRmContainer: {
    top: 675,
  },
  kuihLapisRmContainer: {
    top: 786,
  },
  curryPuffRmContainer: {
    top: 902,
  },
  foodSelectionPageChild5: {
    top: 198,
  },
  foodSelectionPageChild6: {
    top: 314,
  },
  foodSelectionPageChild7: {
    top: 430,
  },
  foodSelectionPageChild8: {
    top: 546,
  },
  foodSelectionPageChild9: {
    top: 662,
  },
  foodSelectionPageChild10: {
    top: 778,
  },
  foodSelectionPageChild11: {
    top: 893,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrowLeftCircle: {
    top: 27,
    width: 24,
    left: 13,
    height: 24,
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
  foodSelectionPage: {
    flex: 1,
    height: 1099,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default FoodSelectionPage;
