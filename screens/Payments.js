import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Payments = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.payments}
      locations={[0, 1]}
      colors={["#bcebff", "rgba(255, 255, 255, 0)"]}
      useAngle={true}
      angle={-0.33}
    >
      <View style={[styles.paymentOption, styles.creditCardLayout]}>
        <View style={styles.otherMethod}>
          <View style={styles.otherMethodChild} />
          <Text style={styles.otherMethods}>Other methods...</Text>
        </View>
        <View style={[styles.creditCard, styles.overviewChildPosition]}>
          <View style={[styles.activeTab, styles.activeTabShadowBox]}>
            <View style={[styles.creditCard1, styles.creditCard1FlexBox]}>
              <Image
                style={styles.creditCardIcon}
                resizeMode="cover"
                source={require("../assets/credit-card-icon.png")}
              />
              <Text style={[styles.creditCard2, styles.payForTheTypo]}>
                Credit card
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Text style={[styles.cardNumber, styles.cardNumberTypo]}>
        Card number
      </Text>
      <Image
        style={styles.paymentsChild}
        resizeMode="cover"
        source={require("../assets/rectangle-74.png")}
      />
      <Image
        style={styles.paymentsItem}
        resizeMode="cover"
        source={require("../assets/rectangle-75.png")}
      />
      <Text style={[styles.cardholderName, styles.cardNumberTypo]}>
        Cardholder name
      </Text>
      <Text style={[styles.expiryDate, styles.cvvCvcTypo]}>Expiry date</Text>
      <View style={styles.roundedRectangle} />
      <Text style={[styles.cvvCvc, styles.cvvCvcTypo]}>CVV / CVC</Text>
      <View style={styles.roundedRectangle1} />
      <Pressable
        style={[styles.paymentsInner, styles.roundedPosition]}
        onPress={() => navigation.navigate("SuccessScreen")}
      >
        <View style={styles.creditCard1FlexBox}>
          <Image
            style={styles.nounLock1911126Icon}
            resizeMode="cover"
            source={require("../assets/noun-lock-1911126.png")}
          />
          <Text style={[styles.payForThe, styles.payForTheTypo]}>
            Pay for the order
          </Text>
        </View>
      </Pressable>
      <Image
        style={styles.cardIcon}
        resizeMode="cover"
        source={require("../assets/card-icon.png")}
      />
      <Image
        style={styles.masterCardLogo}
        resizeMode="cover"
        source={require("../assets/master-card-logo.png")}
      />
      <View style={[styles.roundedRectangle2, styles.roundedPosition]} />
      <View style={[styles.roundedRectangle3, styles.roundedPosition]} />
      <Image
        style={[styles.arrowLeftCircleIcon, styles.vector1Layout]}
        resizeMode="cover"
        source={require("../assets/arrowleftcircle3.png")}
      />
      <View style={[styles.overview, styles.overviewChildPosition]}>
        <Image
          style={[styles.overviewChild, styles.overviewChildPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-16.png")}
        />
        <Text style={styles.electricityMonthlyOverview}>
          Electricity Monthly Overview
        </Text>
        <Text style={[styles.jan, styles.janTypo]}>Jan</Text>
        <Text style={[styles.feb, styles.janTypo]}>Feb</Text>
        <Text style={[styles.mar, styles.janTypo]}>Mar</Text>
        <Text style={[styles.apr, styles.janTypo]}>Apr</Text>
        <Text style={[styles.may, styles.mayTypo]}>May</Text>
        <Text style={[styles.jun, styles.janTypo]}>Jun</Text>
        <Text style={[styles.jul, styles.janTypo]}>Jul</Text>
        <Text style={[styles.aug, styles.mayTypo]}>Aug</Text>
        <Text style={[styles.sep, styles.janTypo]}>Sep</Text>
        <Text style={[styles.oct, styles.janTypo]}>Oct</Text>
        <Text style={[styles.nov, styles.janTypo]}>Nov</Text>
        <Text style={[styles.dec, styles.janTypo]}>Dec</Text>
        <View style={[styles.overviewItem, styles.overviewChildLayout1]} />
        <View style={[styles.overviewInner, styles.overviewLayout]} />
        <View style={[styles.rectangleView, styles.overviewChildLayout1]} />
        <View style={[styles.overviewChild1, styles.overviewChildLayout]} />
        <View style={[styles.overviewChild2, styles.overviewChildLayout1]} />
        <View style={[styles.overviewChild3, styles.overviewChildLayout]} />
        <View style={[styles.overviewChild4, styles.overviewLayout]} />
        <View style={[styles.overviewChild5, styles.overviewChildLayout1]} />
        <View style={[styles.overviewChild6, styles.overviewChildLayout1]} />
        <View style={[styles.overviewChild7, styles.overviewChildLayout1]} />
        <View style={[styles.vectorParent, styles.groupChildLayout]}>
          <Image
            style={[styles.groupChild, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-29.png")}
          />
          <View style={[styles.rm13520Wrapper, styles.rm13520Layout]}>
            <Text style={[styles.rm13520, styles.rm13520Layout]}>
              RM 135.20
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.mainbarPosition}>
        <View style={[styles.mainbarChild, styles.mainbarPosition]} />
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("Message")}
        >
          <Image
            style={styles.icon}
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
            style={styles.icon1}
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
            style={styles.icon2}
            resizeMode="cover"
            source={require("../assets/user1.png")}
          />
        </Pressable>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  creditCardLayout: {
    height: 39,
    position: "absolute",
  },
  overviewChildPosition: {
    left: 0,
    top: 0,
  },
  activeTabShadowBox: {
    alignItems: "center",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 0,
    },
    overflow: "hidden",
  },
  creditCard1FlexBox: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  payForTheTypo: {
    color: Color.white,
    textAlign: "left",
    fontSize: FontSize.size_lg,
  },
  cardNumberTypo: {
    color: Color.colorDarkslategray_400,
    letterSpacing: 0.3,
    fontSize: FontSize.size_base,
    left: 19,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  cvvCvcTypo: {
    top: 528,
    color: Color.colorDarkslategray_400,
    letterSpacing: 0.3,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  roundedPosition: {
    left: 13,
    right: 12,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  vector1Layout: {
    height: 24,
    position: "absolute",
  },
  janTypo: {
    height: 9,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  mayTypo: {
    width: 13,
    color: Color.colorDimgray_200,
    letterSpacing: -0.1,
    fontSize: FontSize.size_7xs,
    top: 258,
    textAlign: "left",
    position: "absolute",
  },
  overviewChildLayout1: {
    width: 14,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  overviewLayout: {
    height: 104,
    top: 151,
    width: 14,
    backgroundColor: Color.colorLavender_100,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  overviewChildLayout: {
    height: 96,
    top: 159,
    width: 14,
    backgroundColor: Color.colorLavender_100,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  groupChildLayout: {
    height: 17,
    position: "absolute",
  },
  rm13520Layout: {
    height: 14,
    width: 37,
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
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  otherMethodChild: {
    backgroundColor: Color.colorGainsboro_400,
    borderRadius: Border.br_base,
    left: 0,
    width: 200,
    top: 0,
    height: 39,
    position: "absolute",
  },
  otherMethods: {
    top: 8,
    left: 38,
    color: "#f5f5f5",
    width: 158,
    height: 23,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  otherMethod: {
    left: 100,
    width: 200,
    top: 0,
    height: 39,
    position: "absolute",
  },
  creditCardIcon: {
    height: 16,
    width: 24,
  },
  creditCard2: {
    fontFamily: FontFamily.interMedium,
    width: 96,
    marginLeft: 5,
    fontWeight: "500",
    color: Color.white,
  },
  creditCard1: {
    width: 132,
    height: 21,
  },
  activeTab: {
    backgroundColor: "rgba(28, 48, 222, 0.95)",
    shadowColor: "rgba(37, 212, 130, 0.2)",
    paddingLeft: 34,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_3xl,
    paddingBottom: 138,
    right: 0,
    alignItems: "center",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 0,
    },
    borderRadius: Border.br_base,
    left: 0,
    top: 0,
    height: 39,
    position: "absolute",
  },
  creditCard: {
    right: 171,
    height: 39,
    position: "absolute",
  },
  paymentOption: {
    top: 290,
    left: 26,
    width: 300,
  },
  cardNumber: {
    top: 342,
  },
  paymentsChild: {
    top: 383,
    left: 254,
    width: 34,
    height: 29,
    position: "absolute",
  },
  paymentsItem: {
    top: 389,
    left: 308,
    height: 19,
    width: 24,
    position: "absolute",
  },
  cardholderName: {
    top: 435,
  },
  expiryDate: {
    left: 22,
  },
  roundedRectangle: {
    right: 186,
    left: 18,
    backgroundColor: Color.colorWhitesmoke_100,
    bottom: 188,
    top: 556,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  cvvCvc: {
    left: 201,
  },
  roundedRectangle1: {
    right: 13,
    left: 196,
    backgroundColor: Color.colorWhitesmoke_100,
    bottom: 188,
    top: 556,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  nounLock1911126Icon: {
    width: 16,
    height: 21,
  },
  payForThe: {
    fontFamily: FontFamily.interBold,
    marginLeft: 16,
    fontWeight: "700",
  },
  paymentsInner: {
    bottom: 93,
    backgroundColor: "#256bd4",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: 18,
    alignItems: "center",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 0,
    },
    overflow: "hidden",
  },
  cardIcon: {
    width: 28,
    height: 23,
  },
  masterCardLogo: {
    top: 392,
    left: 271,
    width: 27,
    height: 16,
    position: "absolute",
  },
  roundedRectangle2: {
    top: 368,
    bottom: 376,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  roundedRectangle3: {
    top: 461,
    bottom: 283,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  arrowLeftCircleIcon: {
    top: 32,
    left: 10,
    width: 24,
    overflow: "hidden",
  },
  overviewChild: {
    width: 361,
    height: 342,
    position: "absolute",
  },
  electricityMonthlyOverview: {
    top: 57,
    left: 42,
    fontSize: FontSize.size_xl,
    letterSpacing: -0.2,
    width: 344,
    height: 42,
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  jan: {
    left: 33,
    width: 12,
    height: 9,
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.poppinsMedium,
    letterSpacing: -0.1,
    fontSize: FontSize.size_7xs,
    top: 258,
    textAlign: "left",
    position: "absolute",
  },
  feb: {
    left: 59,
    width: 12,
    height: 9,
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.poppinsMedium,
    letterSpacing: -0.1,
    fontSize: FontSize.size_7xs,
    top: 258,
    textAlign: "left",
    position: "absolute",
  },
  mar: {
    left: 86,
    width: 12,
    height: 9,
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.poppinsMedium,
    letterSpacing: -0.1,
    fontSize: FontSize.size_7xs,
    top: 258,
    textAlign: "left",
    position: "absolute",
  },
  apr: {
    left: 114,
    width: 12,
    height: 9,
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.poppinsMedium,
    letterSpacing: -0.1,
    fontSize: FontSize.size_7xs,
    top: 258,
    textAlign: "left",
    position: "absolute",
  },
  may: {
    left: 140,
    height: 9,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    width: 13,
  },
  jun: {
    left: 168,
    width: 12,
    height: 9,
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.poppinsMedium,
    letterSpacing: -0.1,
    fontSize: FontSize.size_7xs,
    top: 258,
    textAlign: "left",
    position: "absolute",
  },
  jul: {
    width: 10,
    color: Color.colorDimgray_200,
    top: 258,
    height: 9,
    fontFamily: FontFamily.poppinsMedium,
    letterSpacing: -0.1,
    fontSize: FontSize.size_7xs,
    left: 196,
    textAlign: "left",
    position: "absolute",
  },
  aug: {
    left: 221,
    fontFamily: FontFamily.poppinsBold,
    height: 11,
    fontWeight: "700",
  },
  sep: {
    left: 250,
    width: 12,
    height: 9,
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.poppinsMedium,
    letterSpacing: -0.1,
    fontSize: FontSize.size_7xs,
    top: 258,
    textAlign: "left",
    position: "absolute",
  },
  oct: {
    left: 278,
    width: 12,
    height: 9,
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.poppinsMedium,
    letterSpacing: -0.1,
    fontSize: FontSize.size_7xs,
    top: 258,
    textAlign: "left",
    position: "absolute",
  },
  nov: {
    left: 304,
    width: 12,
    height: 9,
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.poppinsMedium,
    letterSpacing: -0.1,
    fontSize: FontSize.size_7xs,
    top: 258,
    textAlign: "left",
    position: "absolute",
  },
  dec: {
    left: 327,
    width: 12,
    height: 9,
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.poppinsMedium,
    letterSpacing: -0.1,
    fontSize: FontSize.size_7xs,
    top: 258,
    textAlign: "left",
    position: "absolute",
  },
  overviewItem: {
    top: 178,
    left: 32,
    height: 79,
    backgroundColor: Color.colorLavender_100,
    width: 14,
    borderRadius: Border.br_5xs,
  },
  overviewInner: {
    left: 57,
  },
  rectangleView: {
    top: 126,
    left: 85,
    height: 129,
    backgroundColor: Color.colorLavender_100,
    width: 14,
    borderRadius: Border.br_5xs,
  },
  overviewChild1: {
    left: 112,
  },
  overviewChild2: {
    top: 186,
    height: 69,
    backgroundColor: Color.colorLavender_100,
    width: 14,
    borderRadius: Border.br_5xs,
    left: 140,
  },
  overviewChild3: {
    left: 168,
  },
  overviewChild4: {
    left: 195,
  },
  overviewChild5: {
    top: 104,
    left: 220,
    backgroundColor: "#5932ea",
    shadowColor: "rgba(135, 145, 233, 0.3)",
    shadowRadius: 12,
    elevation: 12,
    height: 151,
    width: 14,
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 4,
      height: 0,
    },
  },
  overviewChild6: {
    top: 123,
    left: 249,
    height: 132,
    backgroundColor: Color.colorLavender_100,
    width: 14,
    borderRadius: Border.br_5xs,
  },
  overviewChild7: {
    top: 144,
    height: 111,
    backgroundColor: Color.colorLavender_100,
    width: 14,
    borderRadius: Border.br_5xs,
    left: 278,
  },
  groupChild: {
    width: 36,
    left: 0,
    top: 0,
  },
  rm13520: {
    fontFamily: FontFamily.poppinsSemiBold,
    letterSpacing: -0.1,
    fontSize: FontSize.size_7xs,
    height: 14,
    color: Color.white,
    textAlign: "left",
    fontWeight: "600",
    left: 0,
    top: 0,
  },
  rm13520Wrapper: {
    top: 2,
    left: 4,
  },
  vectorParent: {
    top: 84,
    left: 211,
    width: 41,
  },
  overview: {
    width: 386,
    height: 272,
    position: "absolute",
  },
  mainbarChild: {
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.colorDimgray_100,
    borderTopWidth: 2,
  },
  icon: {
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
  icon1: {
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
    bottom: 8,
  },
  icon2: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  user: {
    right: 57,
    bottom: 23,
    width: 30,
    height: 30,
    position: "absolute",
  },
  payments: {
    flex: 1,
    height: 800,
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
  },
});

export default Payments;
