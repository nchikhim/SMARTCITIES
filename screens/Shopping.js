import React, { useState, useCallback } from "react";
import { Image, StyleSheet, Pressable, Text, View, Modal } from "react-native";
import Favourites from "../components/Favourites";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Shopping = () => {
  const [bookmarkIconVisible, setBookmarkIconVisible] = useState(false);
  const navigation = useNavigation();

  const openBookmarkIcon = useCallback(() => {
    setBookmarkIconVisible(true);
  }, []);

  const closeBookmarkIcon = useCallback(() => {
    setBookmarkIconVisible(false);
  }, []);

  return (
    <>
      <View style={[styles.shopping, styles.icon1Layout]}>
        <Image
          style={[styles.storeSvgIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/store-svg.png")}
        />
        <Pressable style={styles.bookmark} onPress={openBookmarkIcon}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/bookmark.png")}
          />
        </Pressable>
        <Text style={styles.shopping1}>Shopping</Text>
        <Image
          style={[styles.addShoppingCartIcon, styles.userLayout]}
          resizeMode="cover"
          source={require("../assets/add-shopping-cart.png")}
        />
        <Pressable
          style={[styles.food, styles.foodPosition]}
          onPress={() => navigation.navigate("FoodSelectionPage")}
        >
          <Text style={[styles.food1, styles.food1Typo]}>FOOD</Text>
          <Image
            style={[styles.foodIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/food-icon.png")}
          />
          <View style={styles.foodChild} />
        </Pressable>
        <Pressable
          style={styles.grocery}
          onPress={() => navigation.navigate("GrocerySelectionPage")}
        >
          <Image
            style={[styles.groceryChild, styles.groceryChildLayout]}
            resizeMode="cover"
            source={require("../assets/group-5.png")}
          />
          <Text style={[styles.grocery1, styles.food1Typo]}>GROCERY</Text>
          <View style={styles.foodChild} />
        </Pressable>
        <Pressable
          style={[styles.statustracker, styles.foodPosition]}
          onPress={() => navigation.navigate("GrocerySelectionPage")}
        >
          <Text style={[styles.statusTrack, styles.food1Typo]}>{`Status 
Track`}</Text>
          <View style={styles.foodChild} />
          <Image
            style={[styles.statustrackerItem, styles.groceryChildLayout]}
            resizeMode="cover"
            source={require("../assets/group-4.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.arrowLeftCircle, styles.vector1Layout]}
          onPress={() => navigation.navigate("Menu")}
        >
          <Image
            style={[styles.icon1, styles.icon1Layout]}
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
              style={[styles.icon2, styles.iconLayout1]}
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
              style={styles.icon3}
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
              style={[styles.icon1, styles.icon1Layout]}
              resizeMode="cover"
              source={require("../assets/user1.png")}
            />
          </Pressable>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={bookmarkIconVisible}>
        <View style={styles.bookmarkIconOverlay}>
          <Pressable
            style={styles.bookmarkIconBg}
            onPress={closeBookmarkIcon}
          />
          <Favourites onClose={closeBookmarkIcon} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  icon1Layout: {
    overflow: "hidden",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  userLayout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  foodPosition: {
    height: 140,
    left: "50%",
    top: "50%",
    marginLeft: -145,
    position: "absolute",
  },
  food1Typo: {
    color: Color.labelsLightPrimary,
    fontWeight: "700",
    left: "50%",
    top: "50%",
    textAlign: "left",
    fontSize: FontSize.size_13xl,
    position: "absolute",
  },
  groceryChildLayout: {
    height: "69.29%",
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
    left: 0,
    position: "absolute",
  },
  iconLayout1: {
    width: "100%",
    height: "100%",
  },
  menuTypo: {
    fontSize: FontSize.size_xs,
    bottom: 8,
    color: Color.labelsLightPrimary,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  storeSvgIcon: {
    height: "41.94%",
    width: "88.33%",
    top: "58.06%",
    right: "7.36%",
    bottom: "0%",
    left: "4.31%",
    opacity: 0.06,
    position: "absolute",
  },
  bookmarkIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  bookmarkIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  bookmark: {
    left: "70.28%",
    top: "12.63%",
    right: "21.39%",
    bottom: "83.63%",
    width: "8.33%",
    height: "3.75%",
    position: "absolute",
  },
  shopping1: {
    left: 26,
    color: Color.colorGray_900,
    width: 248,
    height: 59,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    top: 100,
    position: "absolute",
  },
  addShoppingCartIcon: {
    left: 295,
    top: 100,
    width: 30,
    overflow: "hidden",
  },
  food1: {
    marginTop: -13,
    marginLeft: 9.5,
    width: 126,
    height: 44,
    fontFamily: FontFamily.interBold,
    color: Color.labelsLightPrimary,
    fontWeight: "700",
  },
  foodIcon: {
    height: "70.5%",
    width: "32.29%",
    top: "15%",
    right: "59.73%",
    bottom: "14.5%",
    left: "7.97%",
    position: "absolute",
  },
  foodChild: {
    top: 0,
    borderRadius: Border.br_16xl,
    backgroundColor: Color.colorLightgreen,
    left: 0,
    height: 140,
    width: 301,
    position: "absolute",
  },
  food: {
    marginTop: -234,
    width: 301,
    height: 140,
    left: "50%",
    top: "50%",
    marginLeft: -145,
  },
  groceryChild: {
    width: "32.56%",
    top: "19.29%",
    right: "59.8%",
    bottom: "11.43%",
    left: "7.64%",
  },
  grocery1: {
    marginTop: -16,
    marginLeft: -13.5,
    fontFamily: FontFamily.robotoBold,
    width: 154,
    height: 55,
    color: Color.labelsLightPrimary,
    fontWeight: "700",
  },
  grocery: {
    height: "17.5%",
    width: "83.61%",
    top: "42.75%",
    right: "6.67%",
    bottom: "39.75%",
    left: "9.72%",
    position: "absolute",
  },
  statusTrack: {
    marginTop: -33,
    marginLeft: -7.5,
    width: 161,
    height: 76,
    fontFamily: FontFamily.interBold,
    color: Color.labelsLightPrimary,
    fontWeight: "700",
  },
  statustrackerItem: {
    width: "31.92%",
    top: "17.14%",
    right: "60.59%",
    bottom: "13.57%",
    left: "7.49%",
  },
  statustracker: {
    marginTop: 129,
    width: 307,
    height: 140,
    left: "50%",
    top: "50%",
    marginLeft: -145,
  },
  icon1: {
    height: "100%",
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
  icon2: {
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
  icon3: {
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
  },
  shopping: {
    flex: 1,
    height: 800,
    backgroundColor: Color.white,
  },
});

export default Shopping;
