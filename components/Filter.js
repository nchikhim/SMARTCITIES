import * as React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Filter = ({ onClose }) => {
  return (
    <View style={styles.filter}>
      <View style={styles.filterChild} />
      <View style={styles.filterItem} />
      <Text style={[styles.searchFilter, styles.resetTypo]}>Search Filter</Text>
      <Text style={[styles.age, styles.ageTypo]}>Age</Text>
      <Text style={[styles.gender, styles.ageTypo]}>Gender</Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector53.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector54.png")}
      />
      <Text style={[styles.workExperience, styles.ageTypo]}>
        Work experience
      </Text>
      <Text style={[styles.approximateSalary31, styles.ageTypo]}>
        Approximate salary /31 days
      </Text>
      <View style={[styles.filterInner, styles.filterLayout]} />
      <Text style={[styles.text, styles.textTypo]}>-</Text>
      <Image
        style={[styles.vectorIcon2, styles.vectorIconPosition4]}
        resizeMode="cover"
        source={require("../assets/vector55.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconPosition4]}
        resizeMode="cover"
        source={require("../assets/vector56.png")}
      />
      <View style={[styles.rectangleView, styles.filterLayout]} />
      <Text style={[styles.text1, styles.textTypo]}>-</Text>
      <Image
        style={[styles.vectorIcon4, styles.vectorIconPosition3]}
        resizeMode="cover"
        source={require("../assets/vector55.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconPosition3]}
        resizeMode="cover"
        source={require("../assets/vector56.png")}
      />
      <View style={[styles.filterChild1, styles.filterLayout]} />
      <Text style={[styles.text2, styles.textTypo]}>-</Text>
      <Image
        style={[styles.vectorIcon6, styles.vectorIconPosition2]}
        resizeMode="cover"
        source={require("../assets/vector55.png")}
      />
      <Image
        style={[styles.vectorIcon7, styles.vectorIconPosition2]}
        resizeMode="cover"
        source={require("../assets/vector56.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.reset, styles.resetTypo]}>Reset</Text>
      </View>
      <Image
        style={styles.vectorIcon8}
        resizeMode="cover"
        source={require("../assets/vector57.png")}
      />
      <Text style={[styles.rating, styles.ageTypo]}>Rating</Text>
      <Image
        style={[styles.vectorIcon9, styles.vectorIconPosition1]}
        resizeMode="cover"
        source={require("../assets/vector58.png")}
      />
      <Image
        style={[styles.vectorIcon10, styles.vectorIconPosition1]}
        resizeMode="cover"
        source={require("../assets/vector59.png")}
      />
      <Image
        style={[styles.vectorIcon11, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector60.png")}
      />
      <Image
        style={[styles.vectorIcon12, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector61.png")}
      />
      <Image
        style={styles.vectorIcon13}
        resizeMode="cover"
        source={require("../assets/vector62.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  resetTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  ageTypo: {
    left: 22,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  vectorIconLayout: {
    height: 33,
    width: 97,
    top: 192,
    position: "absolute",
  },
  filterLayout: {
    width: 253,
    backgroundColor: Color.colorGainsboro_400,
    left: 22,
    height: 50,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_5xl,
    left: 141,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  vectorIconPosition4: {
    top: 96,
    height: 33,
    width: 97,
    position: "absolute",
  },
  vectorIconPosition3: {
    top: 288,
    height: 33,
    width: 97,
    position: "absolute",
  },
  vectorIconPosition2: {
    top: 384,
    height: 33,
    width: 97,
    position: "absolute",
  },
  groupChildLayout: {
    height: 48,
    width: 109,
    position: "absolute",
  },
  vectorIconPosition1: {
    top: 479,
    width: 109,
    height: 33,
    position: "absolute",
  },
  vectorIconPosition: {
    top: 523,
    width: 109,
    height: 33,
    position: "absolute",
  },
  filterChild: {
    backgroundColor: Color.white,
    left: 0,
    top: 0,
    position: "absolute",
    height: 800,
    width: 298,
  },
  filterItem: {
    backgroundColor: "rgba(217, 217, 217, 0.9)",
    borderColor: Color.labelsLightPrimary,
    borderBottomWidth: 1,
    height: 50,
    borderStyle: "solid",
    left: 0,
    top: 0,
    position: "absolute",
    width: 298,
  },
  searchFilter: {
    top: 16,
    left: 20,
    color: Color.labelsLightPrimary,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
  },
  age: {
    top: 68,
  },
  gender: {
    top: 164,
  },
  vectorIcon: {
    left: 35,
  },
  vectorIcon1: {
    left: 164,
  },
  workExperience: {
    top: 260,
  },
  approximateSalary31: {
    top: 355,
  },
  filterInner: {
    top: 88,
  },
  text: {
    top: 98,
  },
  vectorIcon2: {
    left: 33,
  },
  vectorIcon3: {
    left: 166,
  },
  rectangleView: {
    top: 280,
  },
  text1: {
    top: 290,
  },
  vectorIcon4: {
    left: 33,
  },
  vectorIcon5: {
    left: 166,
  },
  filterChild1: {
    top: 376,
  },
  text2: {
    top: 386,
  },
  vectorIcon6: {
    left: 33,
  },
  vectorIcon7: {
    left: 166,
  },
  groupChild: {
    borderColor: Color.colorForestgreen,
    borderWidth: 2.5,
    borderStyle: "solid",
    height: 48,
    backgroundColor: Color.white,
    left: 0,
    top: 0,
  },
  reset: {
    top: 15,
    left: 34,
    color: Color.colorDarkgreen,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
  },
  rectangleParent: {
    left: 27,
    top: 677,
  },
  vectorIcon8: {
    width: 110,
    height: 49,
    left: 158,
    top: 677,
    position: "absolute",
  },
  rating: {
    top: 451,
  },
  vectorIcon9: {
    left: 27,
  },
  vectorIcon10: {
    left: 158,
  },
  vectorIcon11: {
    left: 27,
  },
  vectorIcon12: {
    left: 158,
  },
  vectorIcon13: {
    top: 567,
    width: 109,
    left: 27,
    height: 33,
    position: "absolute",
  },
  filter: {
    maxWidth: "100%",
    maxHeight: "100%",
    height: 800,
    width: 298,
  },
});

export default Filter;
