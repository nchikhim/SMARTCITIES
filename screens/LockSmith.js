import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Image, Pressable, Modal } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import LockSmithContact1 from "../components/LockSmithContact1";
import LockSmithContact2 from "../components/LockSmithContact2";
import LockSmithContact3 from "../components/LockSmithContact3";
import LockSmithContact4 from "../components/LockSmithContact4";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const LockSmith = () => {
  const [lockSmith1ContainerVisible, setLockSmith1ContainerVisible] =
    useState(false);
  const [lockSmith2ContainerVisible, setLockSmith2ContainerVisible] =
    useState(false);
  const [lockSmith3ContainerVisible, setLockSmith3ContainerVisible] =
    useState(false);
  const [lockSmith4ContainerVisible, setLockSmith4ContainerVisible] =
    useState(false);
  const navigation = useNavigation();

  const openLockSmith1Container = useCallback(() => {
    setLockSmith1ContainerVisible(true);
  }, []);

  const closeLockSmith1Container = useCallback(() => {
    setLockSmith1ContainerVisible(false);
  }, []);

  const openLockSmith2Container = useCallback(() => {
    setLockSmith2ContainerVisible(true);
  }, []);

  const closeLockSmith2Container = useCallback(() => {
    setLockSmith2ContainerVisible(false);
  }, []);

  const openLockSmith3Container = useCallback(() => {
    setLockSmith3ContainerVisible(true);
  }, []);

  const closeLockSmith3Container = useCallback(() => {
    setLockSmith3ContainerVisible(false);
  }, []);

  const openLockSmith4Container = useCallback(() => {
    setLockSmith4ContainerVisible(true);
  }, []);

  const closeLockSmith4Container = useCallback(() => {
    setLockSmith4ContainerVisible(false);
  }, []);

  return (
    <>
      <View style={[styles.locksmith, styles.iconLayout]}>
        <Pressable
          style={[styles.locksmith1, styles.locksmithShadowBox]}
          onPress={openLockSmith1Container}
        >
          <LinearGradient
            style={[styles.locksmith1Child, styles.childLayout]}
            locations={[0, 1]}
            colors={["#f4d37e", "rgba(244, 211, 126, 0)"]}
            useAngle={true}
            angle={180}
          />
          <Text
            style={[styles.eagle24HoursContainer, styles.containerPosition]}
          >
            <Text style={styles.eagle24Hours}>{`Eagle 24 Hours Unlock Services
`}</Text>
            <Text style={styles.contactNo0113344567}>
              Contact No: 011-3344567
            </Text>
          </Text>
          <Text
            style={[styles.hoursOpens100m, styles.hoursLayout]}
          >{`24 hours opens
100m+`}</Text>
          <Image
            style={[styles.locksmith1Item, styles.itemLayout1]}
            resizeMode="cover"
            source={require("../assets/group-7.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.locksmith2, styles.locksmithShadowBox]}
          onPress={openLockSmith2Container}
        >
          <LinearGradient
            style={[styles.locksmith1Child, styles.childLayout]}
            locations={[0, 1]}
            colors={["#f4d37e", "rgba(244, 211, 126, 0)"]}
            useAngle={true}
            angle={180}
          />
          <Text
            style={[
              styles.mastersLocksmithServiceContainer,
              styles.containerPosition,
            ]}
          >
            <Text style={styles.eagle24Hours}>{`Masters Locksmith Service Centre
`}</Text>
            <Text style={styles.contactNo0113344567}>
              Contact No: 018-1686688
            </Text>
          </Text>
          <Text
            style={[styles.opens100m, styles.opens100mTypo]}
          >{`0800-1600 opens 
100m+`}</Text>
          <Image
            style={[styles.locksmith2Item, styles.itemLayout]}
            resizeMode="cover"
            source={require("../assets/group-2.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.locksmith3, styles.locksmithShadowBox]}
          onPress={openLockSmith3Container}
        >
          <LinearGradient
            style={[styles.locksmith1Child, styles.childLayout]}
            locations={[0, 1]}
            colors={["#f4d37e", "rgba(244, 211, 126, 0)"]}
            useAngle={true}
            angle={180}
          />
          <Text
            style={[
              styles.sengHuatExpertiseContainer,
              styles.tamanMelatiKeyPosition,
            ]}
          >
            <Text
              style={styles.eagle24Hours}
            >{`Seng Huat expertise Unlock Services
`}</Text>
            <Text style={styles.contactNo0113344567}>
              Contact No: 010-11002238
            </Text>
          </Text>
          <Text
            style={[styles.hoursOpens300m, styles.opens100mTypo]}
          >{`12 hours opens
300m+`}</Text>
          <Image
            style={[styles.locksmith3Item, styles.itemLayout]}
            resizeMode="cover"
            source={require("../assets/group-1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.locksmith4, styles.locksmithShadowBox]}
          onPress={openLockSmith4Container}
        >
          <LinearGradient
            style={[styles.locksmith1Child, styles.childLayout]}
            locations={[0, 1]}
            colors={["#f4d37e", "rgba(244, 211, 126, 0)"]}
            useAngle={true}
            angle={180}
          />
          <Text style={[styles.tamanMelatiKey, styles.tamanMelatiKeyPosition]}>
            Taman Melati Key and Lock 24 Hours Services
          </Text>
          <Text
            style={[styles.hoursOpens1km, styles.hoursLayout]}
          >{`24 hours opens
1km+`}</Text>
          <Image
            style={[styles.locksmith4Item, styles.itemLayout1]}
            resizeMode="cover"
            source={require("../assets/group-15.png")}
          />
          <Image
            style={[styles.locksmith4Inner, styles.itemLayout1]}
            resizeMode="cover"
            source={require("../assets/group-8.png")}
          />
        </Pressable>
        <Text style={[styles.more, styles.moreTypo]}>More...</Text>
        <Image
          style={[styles.locksmithChild, styles.childLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-54.png")}
        />
        <Image
          style={[styles.locksmithItem, styles.itemLayout1]}
          resizeMode="cover"
          source={require("../assets/group-151.png")}
        />
        <Text style={[styles.locksmithService, styles.moreTypo]}>
          LockSmith Service
        </Text>
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
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/user1.png")}
            />
          </Pressable>
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={lockSmith1ContainerVisible}
      >
        <View style={styles.lockSmith1ContainerOverlay}>
          <Pressable
            style={styles.lockSmith1ContainerBg}
            onPress={closeLockSmith1Container}
          />
          <LockSmithContact1 onClose={closeLockSmith1Container} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={lockSmith2ContainerVisible}
      >
        <View style={styles.lockSmith2ContainerOverlay}>
          <Pressable
            style={styles.lockSmith2ContainerBg}
            onPress={closeLockSmith2Container}
          />
          <LockSmithContact2 onClose={closeLockSmith2Container} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={lockSmith3ContainerVisible}
      >
        <View style={styles.lockSmith3ContainerOverlay}>
          <Pressable
            style={styles.lockSmith3ContainerBg}
            onPress={closeLockSmith3Container}
          />
          <LockSmithContact3 onClose={closeLockSmith3Container} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={lockSmith4ContainerVisible}
      >
        <View style={styles.lockSmith4ContainerOverlay}>
          <Pressable
            style={styles.lockSmith4ContainerBg}
            onPress={closeLockSmith4Container}
          />
          <LockSmithContact4 onClose={closeLockSmith4Container} />
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
  locksmithShadowBox: {
    height: 110,
    width: 300,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 31,
    position: "absolute",
  },
  childLayout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  containerPosition: {
    textAlign: "left",
    color: Color.colorSaddlebrown,
    fontFamily: FontFamily.kameron,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  hoursLayout: {
    height: 28,
    width: 102,
    left: 192,
  },
  itemLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  opens100mTypo: {
    top: 76,
    textAlign: "right",
    color: Color.colorGray_400,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.kameron,
    position: "absolute",
  },
  itemLayout: {
    width: "17.97%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  tamanMelatiKeyPosition: {
    width: 295,
    textAlign: "left",
    color: Color.colorSaddlebrown,
    fontFamily: FontFamily.kameron,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  moreTypo: {
    fontFamily: FontFamily.interRegular,
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
    color: Color.labelsLightPrimary,
    bottom: 8,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  lockSmith1ContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  lockSmith1ContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  locksmith1Child: {
    top: 0,
    backgroundColor: "transparent",
    left: 0,
    borderRadius: Border.br_3xs,
    height: 110,
    width: 300,
  },
  eagle24Hours: {
    fontSize: FontSize.size_xl,
  },
  contactNo0113344567: {
    fontSize: FontSize.size_xs,
  },
  eagle24HoursContainer: {
    marginTop: -44,
    width: 291,
    height: 49,
    marginLeft: -145,
  },
  hoursOpens100m: {
    top: 77,
    textAlign: "right",
    color: Color.colorGray_400,
    fontSize: FontSize.size_sm,
    width: 102,
    left: 192,
    fontFamily: FontFamily.kameron,
    position: "absolute",
  },
  locksmith1Item: {
    right: "67.57%",
    bottom: "3.73%",
    left: "19.33%",
    top: "60%",
    maxHeight: "100%",
    width: "13.1%",
    height: "36.27%",
  },
  locksmith1: {
    top: 172,
  },
  lockSmith2ContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  lockSmith2ContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  mastersLocksmithServiceContainer: {
    marginLeft: -144,
    width: 294,
    height: 59,
    marginTop: -43,
  },
  opens100m: {
    left: 177,
    width: 119,
    height: 34,
  },
  locksmith2Item: {
    height: "31.55%",
    top: "64.55%",
    right: "80.7%",
    bottom: "3.91%",
    left: "1.33%",
  },
  locksmith2: {
    top: 312,
  },
  lockSmith3ContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  lockSmith3ContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  sengHuatExpertiseContainer: {
    height: 58,
    marginTop: -43,
    marginLeft: -145,
  },
  hoursOpens300m: {
    height: 28,
    width: 102,
    left: 192,
    top: 76,
  },
  locksmith3Item: {
    height: "30%",
    top: "66.36%",
    right: "80.37%",
    bottom: "3.64%",
    left: "1.67%",
  },
  locksmith3: {
    top: 452,
  },
  lockSmith4ContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  lockSmith4ContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  tamanMelatiKey: {
    marginTop: -40.9,
    marginLeft: -147.1,
    height: 37,
    fontSize: FontSize.size_xl,
  },
  hoursOpens1km: {
    top: 78,
    textAlign: "right",
    color: Color.colorGray_400,
    fontSize: FontSize.size_sm,
    width: 102,
    left: 192,
    fontFamily: FontFamily.kameron,
    position: "absolute",
  },
  locksmith4Item: {
    height: "38.09%",
    width: "13.97%",
    right: "85.37%",
    bottom: "1.91%",
    left: "0.67%",
    top: "60%",
    maxHeight: "100%",
  },
  locksmith4Inner: {
    top: "62.73%",
    right: "71.23%",
    bottom: "1%",
    left: "15.67%",
    width: "13.1%",
    height: "36.27%",
  },
  locksmith4: {
    top: 592,
  },
  more: {
    top: 711,
    left: 159,
    fontSize: FontSize.size_mini,
    color: Color.colorGray_700,
    width: 56,
  },
  locksmithChild: {
    top: 59,
    left: 209,
    width: 126,
    height: 98,
  },
  locksmithItem: {
    height: "5.24%",
    width: "11.64%",
    top: "29.63%",
    right: "77.53%",
    bottom: "65.14%",
    left: "10.83%",
  },
  locksmithService: {
    left: 24,
    fontSize: FontSize.size_12xl_5,
    color: Color.colorGray_900,
    width: 248,
    top: 78,
    height: 59,
  },
  icon: {
    height: "100%",
  },
  arrowLeftCircle: {
    left: 11,
    top: 26,
    width: 24,
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
  locksmith: {
    flex: 1,
    height: 800,
    backgroundColor: Color.white,
  },
});

export default LockSmith;
