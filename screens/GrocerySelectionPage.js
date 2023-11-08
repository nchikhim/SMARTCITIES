import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const GrocerySelectionPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.grocerySelectionPage}>
      <View
        style={[styles.grocerySelectionPageChild, styles.groceryChildLayout1]}
      />
      <View
        style={[styles.grocerySelectionPageItem, styles.groceryChildLayout1]}
      />
      <View
        style={[styles.grocerySelectionPageInner, styles.groceryChildLayout1]}
      />
      <View style={[styles.rectangleView, styles.groceryChildLayout1]} />
      <View
        style={[styles.grocerySelectionPageChild1, styles.groceryChildLayout1]}
      />
      <View
        style={[styles.grocerySelectionPageChild2, styles.groceryChildLayout1]}
      />
      <View
        style={[styles.grocerySelectionPageChild3, styles.groceryChildLayout1]}
      />
      <View
        style={[styles.grocerySelectionPageChild4, styles.groceryChildLayout1]}
      />
      <Text style={styles.more}>More...</Text>
      <Text style={styles.grocery}>Grocery</Text>
      <Image
        style={[styles.rectangleIcon, styles.groceryChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-222.png")}
      />
      <Text style={[styles.cornFlakesRmContainer, styles.containerTypo1]}>
        <Text style={styles.cornFlakes}>{`Corn Flakes
`}</Text>
        <Text style={styles.rm990}>{`
RM 9.90`}</Text>
      </Text>
      <Text style={[styles.eggRm1390Container, styles.containerTypo1]}>
        <Text style={styles.cornFlakes}>{`Egg
`}</Text>
        <Text style={styles.rm990}>{`
RM 13.90`}</Text>
      </Text>
      <Text style={[styles.milkRm720Container, styles.containerTypo1]}>
        <Text style={styles.cornFlakes}>{`Milk
`}</Text>
        <Text style={styles.rm990}>{`
RM 7.20`}</Text>
      </Text>
      <Text style={[styles.sausageRm799Container, styles.containerTypo1]}>
        <Text style={styles.cornFlakes}>{`Sausage
`}</Text>
        <Text style={styles.rm990}>{`
RM 7.99`}</Text>
      </Text>
      <Text style={[styles.cookingOilRmContainer, styles.containerTypo1]}>
        <Text style={styles.cookingOil}>{`Cooking Oil
`}</Text>
        <Text style={styles.rm990}>{`
RM 42.50`}</Text>
      </Text>
      <Text style={[styles.orangeJuiceRmContainer, styles.containerTypo]}>
        <Text style={styles.cookingOil}>{`Orange Juice
`}</Text>
        <Text style={styles.rm990}>{`
RM 6.99`}</Text>
      </Text>
      <Text style={[styles.fabricSoftenerRmContainer, styles.containerTypo]}>
        <Text style={styles.cookingOil}>{`Fabric Softener
`}</Text>
        <Text style={styles.rm990}>{`
RM 7.35`}</Text>
      </Text>
      <Text style={[styles.coffeeBeanRmContainer, styles.containerTypo]}>
        <Text style={styles.cookingOil}>{`Coffee Bean
`}</Text>
        <Text style={styles.rm990}>{`
RM 28.00`}</Text>
      </Text>
      <Image
        style={[styles.grocerySelectionPageChild5, styles.groceryChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-223.png")}
      />
      <Image
        style={[styles.grocerySelectionPageChild6, styles.groceryChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-224.png")}
      />
      <Image
        style={[styles.grocerySelectionPageChild7, styles.groceryChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-225.png")}
      />
      <Image
        style={[styles.grocerySelectionPageChild8, styles.groceryChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-226.png")}
      />
      <Image
        style={[styles.grocerySelectionPageChild9, styles.groceryChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-227.png")}
      />
      <Image
        style={[styles.grocerySelectionPageChild10, styles.groceryChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-228.png")}
      />
      <Image
        style={[styles.grocerySelectionPageChild11, styles.groceryChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-229.png")}
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
  groceryChildLayout1: {
    height: 113,
    width: 360,
    backgroundColor: Color.colorGainsboro_500,
    borderRadius: Border.br_5xs,
    left: 0,
    position: "absolute",
  },
  groceryChildLayout: {
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
  grocerySelectionPageChild: {
    top: 75,
  },
  grocerySelectionPageItem: {
    top: 191,
  },
  grocerySelectionPageInner: {
    top: 307,
  },
  rectangleView: {
    top: 423,
  },
  grocerySelectionPageChild1: {
    top: 539,
  },
  grocerySelectionPageChild2: {
    top: 655,
  },
  grocerySelectionPageChild3: {
    top: 771,
  },
  grocerySelectionPageChild4: {
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
  grocery: {
    top: 19,
    left: 123,
    width: 164,
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
  cornFlakes: {
    fontSize: FontSize.size_11xl,
  },
  rm990: {
    fontSize: FontSize.size_mini,
  },
  cornFlakesRmContainer: {
    top: 97,
    width: 204,
    height: 81,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 134,
  },
  eggRm1390Container: {
    top: 212,
    width: 204,
    height: 81,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 134,
  },
  milkRm720Container: {
    top: 325,
    width: 204,
    height: 81,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 134,
  },
  sausageRm799Container: {
    top: 441,
    width: 204,
    height: 81,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 134,
  },
  cookingOil: {
    fontSize: FontSize.size_9xl,
  },
  cookingOilRmContainer: {
    top: 558,
    width: 230,
    height: 81,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 134,
  },
  orangeJuiceRmContainer: {
    top: 675,
  },
  fabricSoftenerRmContainer: {
    top: 786,
  },
  coffeeBeanRmContainer: {
    top: 903,
  },
  grocerySelectionPageChild5: {
    top: 198,
  },
  grocerySelectionPageChild6: {
    top: 314,
  },
  grocerySelectionPageChild7: {
    top: 430,
  },
  grocerySelectionPageChild8: {
    top: 546,
  },
  grocerySelectionPageChild9: {
    top: 662,
  },
  grocerySelectionPageChild10: {
    top: 778,
  },
  grocerySelectionPageChild11: {
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
    bottom: 0,
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
  mainbar: {
    bottom: -1,
  },
  grocerySelectionPage: {
    flex: 1,
    height: 1099,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default GrocerySelectionPage;
