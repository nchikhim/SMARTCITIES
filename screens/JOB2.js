import * as React from "react";
import { StyleSheet, View, Pressable, Image, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const JOB2 = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={[styles.job2, styles.job2Layout]}
      locations={[0, 1]}
      colors={["#c2e9e4", "rgba(255, 255, 255, 0)"]}
      useAngle={true}
      angle={180}
    >
      <View style={[styles.chagee, styles.chageeLayout]}>
        <Pressable
          style={styles.chageeChild}
          onPress={() => navigation.navigate("JOB3")}
        />
        <Image
          style={styles.chageeItem}
          resizeMode="cover"
          source={require("../assets/ellipse-9.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout3]}
          resizeMode="cover"
          source={require("../assets/vector9.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout2]}
          resizeMode="cover"
          source={require("../assets/vector10.png")}
        />
        <Text style={[styles.chagee1, styles.chagee1FlexBox]}>Chagee</Text>
        <Image
          style={[styles.groupIcon, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector11.png")}
        />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector12.png")}
        />
        <Image
          style={[styles.vectorIcon4, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector13.png")}
        />
        <Text style={[styles.kamparPerak, styles.kamparLayout]}>{` Kampar, Perak

`}</Text>
        <Text style={[styles.teaBarista, styles.dayWeekTypo]}>Tea Barista</Text>
        <Text
          style={[styles.dayWeek, styles.dayWeekTypo]}
        >{`5 day week `}</Text>
        <Text style={[styles.rm2500, styles.rm2500Typo]}>
          RM 2500 - RM3200 / month
        </Text>
      </View>
      <View style={[styles.pizzaHut, styles.chageeLayout]}>
        <View style={[styles.pizzaHutChild, styles.childLayout]} />
        <Image
          style={styles.pizzaHutItem}
          resizeMode="cover"
          source={require("../assets/ellipse-11.png")}
        />
        <Text style={[styles.pizzaHut1, styles.pizzaHut1Typo]}>Pizza Hut</Text>
        <Image
          style={[styles.vectorIcon5, styles.vectorIconLayout3]}
          resizeMode="cover"
          source={require("../assets/vector14.png")}
        />
        <Image
          style={[styles.vectorIcon6, styles.vectorIconLayout2]}
          resizeMode="cover"
          source={require("../assets/vector15.png")}
        />
        <Image
          style={[styles.groupIcon1, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group1.png")}
        />
        <Image
          style={[styles.vectorIcon7, styles.vectorIconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector16.png")}
        />
        <Image
          style={[styles.vectorIcon8, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector17.png")}
        />
        <Text style={[styles.kamparPerak1, styles.rm2500Typo]}>{` Kampar, Perak

`}</Text>
        <Text style={[styles.deliveryDriver, styles.dayWeek1Typo]}>
          Delivery driver
        </Text>
        <Text style={[styles.dayWeek1, styles.dayWeek1Typo]}>7 day week</Text>
        <Text style={[styles.rm2000Rm3600, styles.chefTypo]}>
          RM2000 - RM3600 / month
        </Text>
        <Image
          style={[styles.vectorIcon9, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector18.png")}
        />
      </View>
      <View style={[styles.sushiMentai, styles.job2ChildPosition]}>
        <View style={[styles.sushiMentaiChild, styles.childLayout]} />
        <Image
          style={styles.sushiMentaiItem}
          resizeMode="cover"
          source={require("../assets/ellipse-10.png")}
        />
        <Text style={[styles.rm2500Rm4300, styles.dayWeekTypo]}>
          {" "}
          RM2500 - RM4300 / month
        </Text>
        <Text style={styles.sushiMentai1}>Sushi Mentai</Text>
        <Image
          style={[styles.groupIcon2, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group2.png")}
        />
        <Image
          style={[styles.vectorIcon10, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector19.png")}
        />
        <Image
          style={[styles.vectorIcon11, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector20.png")}
        />
        <Image
          style={[styles.vectorIcon12, styles.vectorIconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector21.png")}
        />
        <Text
          style={[styles.kamparPerak2, styles.pizzaHut1Typo]}
        >{` Kampar, Perak

`}</Text>
        <Text style={[styles.chef, styles.chefTypo]}>Chef</Text>
        <Text style={[styles.dayWeek2, styles.chefTypo]}>6 day week</Text>
        <Image
          style={[styles.vectorIcon13, styles.vectorIconLayout2]}
          resizeMode="cover"
          source={require("../assets/vector22.png")}
        />
        <Image
          style={[styles.vectorIcon14, styles.vectorIconLayout3]}
          resizeMode="cover"
          source={require("../assets/vector23.png")}
        />
      </View>
      <View style={[styles.job2Child, styles.job2ChildPosition]} />
      <Image
        style={[styles.vectorIcon15, styles.vectorIconLayout3]}
        resizeMode="cover"
        source={require("../assets/vector24.png")}
      />
      <Image
        style={[styles.vectorIcon16, styles.vectorIconLayout3]}
        resizeMode="cover"
        source={require("../assets/vector25.png")}
      />
      <Image
        style={[styles.vectorIcon17, styles.vectorIconLayout3]}
        resizeMode="cover"
        source={require("../assets/vector26.png")}
      />
      <Pressable
        style={[styles.arrowLeftCircle, styles.vector1Layout]}
        onPress={() => navigation.navigate("JOB1")}
      >
        <Image
          style={[styles.icon, styles.job2Layout]}
          resizeMode="cover"
          source={require("../assets/arrowleftcircle1.png")}
        />
      </Pressable>
      <Text style={[styles.fullTime, styles.chagee1FlexBox]}>Full time</Text>
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
            style={[styles.icon, styles.job2Layout]}
            resizeMode="cover"
            source={require("../assets/user.png")}
          />
        </Pressable>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  job2Layout: {
    overflow: "hidden",
    width: "100%",
  },
  chageeLayout: {
    height: 160,
    width: 321,
  },
  vectorIconLayout3: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout2: {
    width: "8.41%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  chagee1FlexBox: {
    textAlign: "left",
    color: Color.labelsLightPrimary,
    transform: [
      {
        rotate: "0.44deg",
      },
    ],
    position: "absolute",
  },
  groupIconLayout: {
    width: "4.05%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout1: {
    width: "1.87%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout: {
    width: "5.3%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  kamparLayout: {
    width: 98,
    fontSize: FontSize.size_smi,
    left: "50%",
  },
  dayWeekTypo: {
    height: 16,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    transform: [
      {
        rotate: "0.44deg",
      },
    ],
    position: "absolute",
  },
  rm2500Typo: {
    height: 17,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    transform: [
      {
        rotate: "0.44deg",
      },
    ],
    position: "absolute",
  },
  childLayout: {
    height: 158,
    transform: [
      {
        rotate: "0.44deg",
      },
    ],
    width: 320,
    backgroundColor: Color.colorHoneydew_100,
    borderRadius: Border.br_11xl,
    top: 0,
    position: "absolute",
  },
  pizzaHut1Typo: {
    height: 18,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    transform: [
      {
        rotate: "0.44deg",
      },
    ],
    position: "absolute",
  },
  dayWeek1Typo: {
    height: 14,
    left: 168,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    transform: [
      {
        rotate: "0.44deg",
      },
    ],
    position: "absolute",
  },
  chefTypo: {
    height: 15,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    transform: [
      {
        rotate: "0.44deg",
      },
    ],
    position: "absolute",
  },
  job2ChildPosition: {
    left: 19,
    position: "absolute",
  },
  vector1Layout: {
    height: 24,
    position: "absolute",
  },
  mainbarPosition: {
    left: 0,
    right: 0,
    height: 68,
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
  chageeChild: {
    height: 157,
    transform: [
      {
        rotate: "0.44deg",
      },
    ],
    width: 320,
    backgroundColor: Color.colorHoneydew_100,
    borderRadius: Border.br_11xl,
    top: 0,
    left: 1,
    position: "absolute",
  },
  chageeItem: {
    top: 7,
    height: 68,
    width: 74,
    left: 8,
    position: "absolute",
  },
  vectorIcon: {
    height: "13.7%",
    top: "58.35%",
    right: "90.16%",
    bottom: "27.95%",
    left: "3.86%",
    width: "5.98%",
    maxHeight: "100%",
  },
  vectorIcon1: {
    height: "15.01%",
    top: "57.91%",
    right: "75.23%",
    bottom: "27.08%",
    left: "16.36%",
  },
  chagee1: {
    width: 66,
    height: 21,
    fontFamily: FontFamily.interRegular,
    color: Color.labelsLightPrimary,
    fontSize: FontSize.size_lg,
    left: 173,
    top: 5,
  },
  groupIcon: {
    height: "11.76%",
    top: "21.76%",
    right: "52.09%",
    bottom: "66.48%",
    left: "43.86%",
  },
  vectorIcon2: {
    height: "6.82%",
    top: "56.47%",
    right: "52.52%",
    bottom: "36.71%",
    left: "45.61%",
  },
  vectorIcon3: {
    height: "10.51%",
    top: "55.22%",
    right: "51.59%",
    bottom: "34.27%",
    left: "43.12%",
  },
  vectorIcon4: {
    height: "9.32%",
    top: "39.15%",
    right: "51.56%",
    bottom: "51.53%",
    left: "43.15%",
  },
  kamparPerak: {
    marginLeft: 7.4,
    top: 36,
    height: 19,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    transform: [
      {
        rotate: "0.44deg",
      },
    ],
    position: "absolute",
    fontFamily: FontFamily.interRegular,
  },
  teaBarista: {
    top: 61,
    left: 174,
    fontSize: FontSize.size_sm,
    width: 74,
  },
  dayWeek: {
    top: 87,
    width: 76,
    fontSize: FontSize.size_sm,
    left: 173,
  },
  rm2500: {
    top: 136,
    left: 67,
    width: 213,
    fontSize: FontSize.size_mini,
  },
  chagee: {
    top: 195,
    left: 20,
    height: 160,
    width: 321,
    position: "absolute",
  },
  pizzaHutChild: {
    left: 2,
  },
  pizzaHutItem: {
    width: 70,
    height: 65,
    top: 6,
    left: 8,
    position: "absolute",
  },
  pizzaHut1: {
    left: 161,
    width: 81,
    top: 6,
    fontSize: FontSize.size_lg,
  },
  vectorIcon5: {
    height: "11.88%",
    width: "5.95%",
    top: "53.81%",
    right: "90.44%",
    bottom: "34.31%",
    left: "3.61%",
  },
  vectorIcon6: {
    height: "13.13%",
    top: "53.38%",
    right: "75.48%",
    bottom: "33.5%",
    left: "16.11%",
  },
  groupIcon1: {
    height: "10.38%",
    top: "22.81%",
    right: "50.16%",
    bottom: "66.81%",
    left: "45.79%",
  },
  vectorIcon7: {
    height: "5.94%",
    top: "51.25%",
    right: "50.9%",
    bottom: "42.81%",
    left: "47.23%",
  },
  vectorIcon8: {
    height: "9.13%",
    top: "50.19%",
    right: "49.97%",
    bottom: "40.69%",
    left: "44.74%",
  },
  kamparPerak1: {
    marginLeft: 2.4,
    top: 37,
    width: 98,
    fontSize: FontSize.size_smi,
    left: "50%",
  },
  deliveryDriver: {
    top: 56,
    width: 96,
  },
  dayWeek1: {
    top: 78,
    width: 76,
  },
  rm2000Rm3600: {
    top: 133,
    left: 68,
    width: 196,
    fontSize: FontSize.size_mini,
  },
  vectorIcon9: {
    height: "8.06%",
    top: "36.25%",
    right: "49.91%",
    bottom: "55.69%",
    left: "44.8%",
  },
  pizzaHut: {
    top: 555,
    left: 20,
    height: 160,
    width: 321,
    position: "absolute",
  },
  sushiMentaiChild: {
    left: 1,
    height: 158,
  },
  sushiMentaiItem: {
    top: 14,
    height: 64,
    left: 11,
    width: 74,
    position: "absolute",
  },
  rm2500Rm4300: {
    top: 135,
    left: 60,
    width: 206,
    fontSize: FontSize.size_mini,
  },
  sushiMentai1: {
    marginLeft: -10.3,
    width: 170,
    height: 33,
    left: "50%",
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_lg,
    top: 5,
    transform: [
      {
        rotate: "0.44deg",
      },
    ],
    position: "absolute",
  },
  groupIcon2: {
    height: "11.13%",
    top: "27.69%",
    right: "51.12%",
    bottom: "61.19%",
    left: "44.83%",
  },
  vectorIcon10: {
    height: "8.75%",
    top: "44.06%",
    right: "50.59%",
    bottom: "47.19%",
    left: "44.11%",
  },
  vectorIcon11: {
    height: "9.88%",
    top: "59.19%",
    right: "50.65%",
    bottom: "30.94%",
    left: "44.05%",
  },
  vectorIcon12: {
    height: "6.44%",
    top: "60.56%",
    right: "51.99%",
    bottom: "33%",
    left: "46.14%",
  },
  kamparPerak2: {
    marginLeft: 5.3,
    top: 44,
    width: 98,
    fontSize: FontSize.size_smi,
    left: "50%",
  },
  chef: {
    top: 67,
    left: 172,
    width: 32,
    fontSize: FontSize.size_sm,
  },
  dayWeek2: {
    top: 92,
    left: 171,
    width: 76,
    fontSize: FontSize.size_sm,
  },
  vectorIcon13: {
    height: "14.19%",
    top: "61.5%",
    right: "75.86%",
    bottom: "24.31%",
    left: "15.73%",
  },
  vectorIcon14: {
    height: "12.88%",
    top: "61.88%",
    right: "90.78%",
    bottom: "25.25%",
    left: "3.24%",
    width: "5.98%",
    maxHeight: "100%",
  },
  sushiMentai: {
    top: 375,
    height: 160,
    width: 321,
  },
  job2Child: {
    top: 109,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorLightblue_100,
    width: 325,
    height: 49,
    transform: [
      {
        rotate: "0.44deg",
      },
    ],
  },
  vectorIcon15: {
    height: "3.02%",
    width: "7.5%",
    top: "4.49%",
    right: "1.5%",
    bottom: "92.49%",
    left: "91%",
  },
  vectorIcon16: {
    height: "2.77%",
    width: "5.33%",
    top: "4.56%",
    right: "14.81%",
    bottom: "92.67%",
    left: "79.86%",
  },
  vectorIcon17: {
    height: "2.18%",
    width: "4.81%",
    top: "15.43%",
    right: "86.58%",
    bottom: "82.38%",
    left: "8.61%",
  },
  icon: {
    height: "100%",
  },
  arrowLeftCircle: {
    top: 23,
    width: 24,
    left: 11,
  },
  fullTime: {
    top: 47,
    left: 129,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.alatsiRegular,
  },
  mainbarChild: {
    bottom: 0,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.colorDimgray_100,
    borderTopWidth: 2,
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
    height: 30,
    position: "absolute",
  },
  mainbar: {
    bottom: 1,
  },
  job2: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    flex: 1,
    height: 824,
    backgroundColor: "transparent",
  },
});

export default JOB2;
