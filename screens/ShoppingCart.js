import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const ShoppingCart = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.shoppingCart}>
      <Text style={[styles.shoppingCart1, styles.selectAllFlexBox]}>
        Shopping Cart
      </Text>
      <View style={[styles.shoppingCartChild, styles.hawaiiPizzaSliceLayout]} />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("SuccessScreen")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/group-21.png")}
        />
      </Pressable>
      <View style={[styles.hawaiiPizzaSlice, styles.hawaiiPizzaSliceLayout]}>
        <View style={[styles.hawaiiPizzaSliceChild, styles.nasiChildLayout]} />
        <Image
          style={[styles.hawaiiPizzaSliceItem, styles.itemLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-101.png")}
        />
        <Image
          style={[styles.hawaiiPizzaSliceItem, styles.itemLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-101.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.innerLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-15.png")}
        />
        <Text
          style={[styles.hawaiiPizzaSliceContainer, styles.selectAllFlexBox]}
        >
          <Text style={styles.hawaiiPizzaSliceRegularchi}>
            <Text
              style={[styles.hawaiiPizzaSlice1, styles.selectAllTypo]}
            >{`Hawaii Pizza Slice
`}</Text>
            <Text style={styles.regularchicken}>{`Regular,Chicken
`}</Text>
          </Text>
          <Text style={styles.rm1890}>RM 18.90</Text>
        </Text>
        <Text style={styles.x1}>x1</Text>
      </View>
      <View style={[styles.nasiLemak, styles.nasiChildLayout]}>
        <View style={[styles.nasiLemakChild, styles.nasiChildLayout]} />
        <Text style={[styles.nasiLemakAyamContainer, styles.containerPosition]}>
          <Text style={styles.hawaiiPizzaSliceRegularchi}>
            <Text
              style={[styles.hawaiiPizzaSlice1, styles.selectAllTypo]}
            >{`Nasi Lemak
`}</Text>
            <Text style={styles.regularchicken}>{`Ayam rendang
`}</Text>
          </Text>
          <Text style={styles.rm1890}>RM 13.50</Text>
        </Text>
        <Image
          style={[styles.ellipseIcon, styles.innerLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-161.png")}
        />
        <Text style={[styles.x11, styles.x11Typo]}>x1</Text>
        <Image
          style={[styles.hawaiiPizzaSliceItem, styles.itemLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-111.png")}
        />
      </View>
      <View style={[styles.curryMee, styles.nasiChildLayout]}>
        <View style={[styles.hawaiiPizzaSliceChild, styles.nasiChildLayout]} />
        <Text style={[styles.curryMeeSmallContainer, styles.containerPosition]}>
          <Text style={styles.hawaiiPizzaSliceRegularchi}>
            <Text
              style={[styles.hawaiiPizzaSlice1, styles.selectAllTypo]}
            >{`Curry Mee
`}</Text>
            <Text style={styles.regularchicken}>{`Small
`}</Text>
          </Text>
          <Text style={styles.rm1890}>RM 11.90</Text>
        </Text>
        <Text style={[styles.x12, styles.x11Typo]}>x1</Text>
        <Image
          style={[styles.ellipseIcon, styles.innerLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-17.png")}
        />
        <Image
          style={[styles.hawaiiPizzaSliceItem, styles.itemLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-12.png")}
        />
      </View>
      <View style={[styles.plus, styles.nasiChildLayout]}>
        <View style={[styles.hawaiiPizzaSliceChild, styles.nasiChildLayout]} />
        <Text style={[styles.plus125lRmContainer, styles.containerLayout]}>
          <Text style={styles.hawaiiPizzaSliceRegularchi}>
            <Text
              style={[styles.hawaiiPizzaSlice1, styles.selectAllTypo]}
            >{`100 Plus
`}</Text>
            <Text style={styles.regularchicken}>{`1.25L
`}</Text>
          </Text>
          <Text style={styles.rm1890}>{`RM 5.80
`}</Text>
        </Text>
        <Text style={[styles.x4, styles.x4Typo]}>x4</Text>
        <Image
          style={[styles.plusItem, styles.plusPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-13.png")}
        />
        <Image
          style={[styles.plusInner, styles.plusPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-161.png")}
        />
      </View>
      <View style={[styles.saladBowl, styles.nasiChildLayout]}>
        <View style={[styles.saladBowlChild, styles.nasiChildLayout]} />
        <Image
          style={[styles.saladBowlItem, styles.saladPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-8.png")}
        />
        <Text style={[styles.saladBowlNoContainer, styles.containerLayout]}>
          <Text style={styles.hawaiiPizzaSliceRegularchi}>
            <Text
              style={[styles.hawaiiPizzaSlice1, styles.selectAllTypo]}
            >{`Salad Bowl
`}</Text>
            <Text style={styles.regularchicken}>{`No sauces
`}</Text>
          </Text>
          <Text style={styles.rm1890}>RM 13.00</Text>
        </Text>
        <Image
          style={[styles.saladBowlInner, styles.saladPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-161.png")}
        />
        <Text style={[styles.x13, styles.x4Typo]}>x1</Text>
      </View>
      <View style={[styles.shoppingCartItem, styles.vector1Layout]} />
      <View style={[styles.shoppingCartInner, styles.shoppingPosition]} />
      <Text style={[styles.selectAll, styles.selectAllTypo]}>SELECT ALL</Text>
      <Image
        style={[styles.rectangleIcon, styles.rectangleLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-51.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleLayout]} />
      <Pressable
        style={[styles.arrowLeftCircle, styles.vector1Layout]}
        onPress={() => navigation.navigate("Shopping")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout1]}
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
            style={styles.iconLayout1}
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
            style={styles.iconLayout}
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
            style={[styles.icon1, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/user1.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  selectAllFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  hawaiiPizzaSliceLayout: {
    width: 360,
    position: "absolute",
  },
  iconLayout: {
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
  },
  nasiChildLayout: {
    height: 108,
    width: 360,
    position: "absolute",
  },
  itemLayout: {
    height: 90,
    width: 90,
  },
  innerLayout: {
    height: 12,
    width: 12,
  },
  selectAllTypo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  containerPosition: {
    width: 203,
    left: 133,
    textAlign: "left",
    position: "absolute",
  },
  x11Typo: {
    top: 76,
    height: 32,
    width: 38,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    color: Color.labelsLightPrimary,
    textAlign: "left",
    position: "absolute",
  },
  containerLayout: {
    width: 208,
    textAlign: "left",
    position: "absolute",
  },
  x4Typo: {
    top: 75,
    height: 32,
    width: 38,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    color: Color.labelsLightPrimary,
    textAlign: "left",
    position: "absolute",
  },
  plusPosition: {
    top: 7,
    position: "absolute",
  },
  saladPosition: {
    top: 11,
    position: "absolute",
  },
  vector1Layout: {
    height: 24,
    position: "absolute",
  },
  shoppingPosition: {
    left: "50%",
    top: "50%",
  },
  rectangleLayout: {
    width: 13,
    left: 343,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
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
    color: Color.labelsLightPrimary,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  shoppingCart1: {
    top: 60,
    left: 16,
    fontSize: FontSize.size_12xl_5,
    color: Color.colorGray_900,
    width: 248,
    height: 59,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  shoppingCartChild: {
    marginTop: -288,
    marginLeft: -180,
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    backgroundColor: "#f1f5ef",
    height: 613,
    left: "50%",
    top: "50%",
  },
  icon: {
    maxHeight: "100%",
    width: "100%",
  },
  wrapper: {
    left: "77.22%",
    top: "16.25%",
    right: "7.81%",
    bottom: "80.46%",
    width: "14.97%",
    height: "3.29%",
    position: "absolute",
  },
  hawaiiPizzaSliceChild: {
    backgroundColor: Color.colorMintcream_100,
    borderRadius: Border.br_mini,
    left: 0,
    top: 0,
    height: 108,
  },
  hawaiiPizzaSliceItem: {
    left: 14,
    top: 9,
    position: "absolute",
  },
  ellipseIcon: {
    left: 327,
    top: 9,
    position: "absolute",
  },
  hawaiiPizzaSlice1: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
  },
  regularchicken: {
    fontFamily: FontFamily.preahvihearRegular,
    fontSize: FontSize.size_xs,
  },
  hawaiiPizzaSliceRegularchi: {
    color: Color.labelsLightPrimary,
  },
  rm1890: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.pragatiNarrowRegular,
    color: Color.colorCrimson,
  },
  hawaiiPizzaSliceContainer: {
    left: 131,
    width: 201,
    height: 75,
    top: 24,
  },
  x1: {
    top: 77,
    left: 317,
    height: 32,
    width: 38,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    color: Color.labelsLightPrimary,
    textAlign: "left",
    position: "absolute",
  },
  hawaiiPizzaSlice: {
    top: 278,
    height: 109,
    left: -2,
  },
  nasiLemakChild: {
    backgroundColor: "rgba(252, 254, 248, 0.94)",
    borderRadius: Border.br_mini,
    left: 0,
    top: 0,
    height: 108,
  },
  nasiLemakAyamContainer: {
    top: 25,
    height: 73,
  },
  x11: {
    left: 316,
  },
  nasiLemak: {
    top: 391,
    left: -2,
  },
  curryMeeSmallContainer: {
    height: 74,
    top: 24,
  },
  x12: {
    left: 315,
  },
  curryMee: {
    top: 504,
    left: -2,
  },
  plus125lRmContainer: {
    left: 132,
    height: 73,
    top: 24,
  },
  x4: {
    left: 313,
  },
  plusItem: {
    left: 13,
    height: 90,
    width: 90,
  },
  plusInner: {
    left: 326,
    height: 12,
    width: 12,
  },
  plus: {
    top: 617,
    left: -1,
  },
  saladBowlChild: {
    backgroundColor: "#fcfdf8",
    borderRadius: Border.br_mini,
    left: 0,
    top: 0,
    height: 108,
  },
  saladBowlItem: {
    left: 15,
    height: 90,
    width: 90,
  },
  saladBowlNoContainer: {
    top: 30,
    left: 134,
    height: 71,
  },
  saladBowlInner: {
    left: 328,
    height: 12,
    width: 12,
  },
  x13: {
    left: 318,
  },
  saladBowl: {
    top: 163,
    left: -3,
  },
  shoppingCartItem: {
    marginTop: -270,
    marginLeft: -164,
    backgroundColor: Color.colorGray_1900,
    width: 24,
    left: "50%",
    top: "50%",
  },
  shoppingCartInner: {
    marginTop: -267,
    marginLeft: -161,
    backgroundColor: Color.colorGainsboro_400,
    width: 18,
    height: 18,
    position: "absolute",
  },
  selectAll: {
    top: 135,
    left: 48,
    fontSize: FontSize.size_smi,
    color: Color.colorGray_1900,
    width: 81,
    height: 15,
    textAlign: "left",
    position: "absolute",
  },
  rectangleIcon: {
    top: 182,
    height: 532,
  },
  rectangleView: {
    top: 204,
    backgroundColor: "#c6c1c1",
    height: 49,
  },
  icon1: {
    overflow: "hidden",
  },
  arrowLeftCircle: {
    left: 10,
    top: 32,
    width: 24,
  },
  mainbarChild: {
    borderStyle: "solid",
    borderColor: Color.colorDimgray_100,
    borderTopWidth: 2,
    backgroundColor: Color.white,
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
  shoppingCart: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default ShoppingCart;
