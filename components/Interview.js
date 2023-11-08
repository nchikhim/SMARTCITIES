import * as React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const Interview = ({ onClose }) => {
  return (
    <View style={styles.interview}>
      <View style={styles.interviewChild} />
      <Text
        style={styles.chooseInterviewDate}
      >{`Choose interview date: `}</Text>
      <Image
        style={styles.image9Icon}
        resizeMode="cover"
        source={require("../assets/image-9.png")}
      />
      <Text style={[styles.time, styles.timeTypo]}>TIME</Text>
      <Text style={[styles.text, styles.timeTypo]}>10 : 50</Text>
      <Text style={[styles.amPm, styles.timeTypo]}>AM PM</Text>
      <Image
        style={styles.interviewItem}
        resizeMode="cover"
        source={require("../assets/rectangle-30.png")}
      />
      <View style={[styles.interviewInner, styles.rectangleViewLayout]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View style={[styles.calender, styles.calenderShadowBox]}>
        <View style={styles.calenderInner}>
          <View style={styles.component1Parent}>
            <View style={[styles.component1, styles.componentLayout]}>
              <Text style={[styles.text1, styles.textTypo]}>Sun</Text>
            </View>
            <View style={[styles.component2, styles.componentLayout]}>
              <Text style={[styles.text1, styles.textTypo]}>Mon</Text>
            </View>
            <View style={[styles.component3, styles.componentLayout]}>
              <Text style={[styles.text1, styles.textTypo]}>Tue</Text>
            </View>
            <View style={[styles.component4, styles.componentLayout]}>
              <Text style={[styles.text1, styles.textTypo]}>Wed</Text>
            </View>
            <View style={[styles.component5, styles.componentLayout]}>
              <Text style={[styles.text1, styles.textTypo]}>Thu</Text>
            </View>
            <View style={[styles.component6, styles.componentLayout]}>
              <Text style={[styles.text1, styles.textTypo]}>Fri</Text>
            </View>
            <View style={[styles.component7, styles.componentLayout]}>
              <Text style={[styles.text1, styles.textTypo]}>Sat</Text>
            </View>
            <View style={[styles.component8, styles.componentPosition4]}>
              <Text style={[styles.text1, styles.textTypo]}>28</Text>
            </View>
            <View style={[styles.component15, styles.componentPosition3]}>
              <Text style={[styles.text9, styles.textTypo]}>04</Text>
            </View>
            <View style={[styles.component22, styles.componentPosition2]}>
              <Text style={[styles.text9, styles.textTypo]}>11</Text>
            </View>
            <View style={[styles.component29, styles.componentPosition1]}>
              <Text style={[styles.text9, styles.textTypo]}>18</Text>
            </View>
            <View style={[styles.component36, styles.componentPosition]}>
              <Text style={[styles.text9, styles.textTypo]}>25</Text>
            </View>
            <View style={[styles.component9, styles.componentPosition4]}>
              <Text style={[styles.text1, styles.textTypo]}>29</Text>
            </View>
            <View style={[styles.component16, styles.componentPosition3]}>
              <Text style={[styles.text9, styles.textTypo]}>05</Text>
            </View>
            <View style={[styles.component23, styles.componentPosition2]}>
              <Text style={[styles.text9, styles.textTypo]}>12</Text>
            </View>
            <View style={[styles.component30, styles.componentPosition1]}>
              <Text style={[styles.text9, styles.textTypo]}>19</Text>
            </View>
            <View style={[styles.component37, styles.componentPosition]}>
              <Text style={[styles.text9, styles.textTypo]}>26</Text>
            </View>
            <View style={[styles.component10, styles.componentPosition4]}>
              <Text style={[styles.text1, styles.textTypo]}>30</Text>
            </View>
            <View style={[styles.component17, styles.componentPosition3]}>
              <Text style={[styles.text9, styles.textTypo]}>06</Text>
            </View>
            <View style={[styles.component24, styles.componentPosition2]}>
              <Text style={[styles.text9, styles.textTypo]}>13</Text>
            </View>
            <View style={[styles.component31, styles.componentPosition1]}>
              <Text style={[styles.text9, styles.textTypo]}>20</Text>
            </View>
            <View style={[styles.component38, styles.componentPosition]}>
              <Text style={[styles.text9, styles.textTypo]}>27</Text>
            </View>
            <View style={[styles.component11, styles.componentPosition4]}>
              <Text style={[styles.text1, styles.textTypo]}>31</Text>
            </View>
            <View style={[styles.component18, styles.componentPosition3]}>
              <Text style={[styles.text9, styles.textTypo]}>07</Text>
            </View>
            <View style={[styles.component25, styles.componentPosition2]}>
              <Text style={[styles.text9, styles.textTypo]}>14</Text>
            </View>
            <View style={[styles.component32, styles.componentPosition1]}>
              <Text style={[styles.text9, styles.textTypo]}>21</Text>
            </View>
            <View style={[styles.component39, styles.componentPosition]}>
              <Text style={[styles.text9, styles.textTypo]}>28</Text>
            </View>
            <View style={[styles.component12, styles.componentPosition4]}>
              <Text style={[styles.text9, styles.textTypo]}>01</Text>
            </View>
            <View style={[styles.component19, styles.componentPosition3]}>
              <Text style={[styles.text9, styles.textTypo]}>08</Text>
            </View>
            <View style={[styles.component26, styles.componentPosition2]}>
              <Text style={[styles.text9, styles.textTypo]}>15</Text>
            </View>
            <View style={[styles.component33, styles.componentPosition1]}>
              <Text style={[styles.text9, styles.textTypo]}>22</Text>
            </View>
            <View style={[styles.component40, styles.componentPosition]}>
              <Text style={[styles.text9, styles.textTypo]}>29</Text>
            </View>
            <View style={[styles.component13, styles.componentPosition4]}>
              <Text style={[styles.text9, styles.textTypo]}>02</Text>
            </View>
            <View style={[styles.component20, styles.componentPosition3]}>
              <Text style={[styles.text9, styles.textTypo]}>09</Text>
            </View>
            <View style={[styles.component27, styles.componentPosition2]}>
              <Text style={[styles.text9, styles.textTypo]}>16</Text>
            </View>
            <View style={[styles.component34, styles.componentPosition1]}>
              <Text style={[styles.text9, styles.textTypo]}>23</Text>
            </View>
            <View style={[styles.component41, styles.componentPosition]}>
              <Text style={[styles.text9, styles.textTypo]}>30</Text>
            </View>
            <View style={[styles.component14, styles.componentPosition4]}>
              <Text style={[styles.text9, styles.textTypo]}>03</Text>
            </View>
            <View style={[styles.component21, styles.componentPosition3]}>
              <Text style={[styles.text9, styles.textTypo]}>10</Text>
            </View>
            <View style={[styles.component28, styles.componentPosition2]}>
              <Text style={[styles.text9, styles.textTypo]}>17</Text>
            </View>
            <View style={[styles.component35, styles.componentPosition1]}>
              <Text style={[styles.text9, styles.textTypo]}>24</Text>
            </View>
            <View style={[styles.component42, styles.componentPosition]}>
              <Text style={[styles.text1, styles.textTypo]}>01</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.interviewChild1, styles.calenderShadowBox]} />
      <Text style={[styles.done, styles.textTypo]}>Done</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timeTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.labelsLightPrimary,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  rectangleViewLayout: {
    borderRadius: Border.br_21xl,
    opacity: 0.4,
    position: "absolute",
  },
  calenderShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    position: "absolute",
  },
  componentLayout: {
    padding: Padding.p_3xs,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
  },
  componentPosition4: {
    top: 40,
    padding: Padding.p_3xs,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  componentPosition3: {
    top: 80,
    padding: Padding.p_3xs,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  componentPosition2: {
    top: 120,
    padding: Padding.p_3xs,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  componentPosition1: {
    top: 160,
    padding: Padding.p_3xs,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  componentPosition: {
    top: 200,
    padding: Padding.p_3xs,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  interviewChild: {
    backgroundColor: "#64c98c",
    left: 0,
    top: 0,
    position: "absolute",
    height: 528,
    width: 394,
  },
  chooseInterviewDate: {
    top: 20,
    left: 17,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  image9Icon: {
    top: 317,
    left: 206,
    width: 129,
    height: 133,
    position: "absolute",
  },
  time: {
    top: 333,
    width: 35,
    height: 19,
    left: 57,
    fontSize: FontSize.size_sm,
  },
  text: {
    top: 356,
    width: 140,
    height: 28,
    left: 57,
    fontSize: FontSize.size_sm,
  },
  amPm: {
    top: 355,
    width: 53,
    height: 29,
    left: 124,
  },
  interviewItem: {
    left: 49,
    borderRadius: Border.br_11xl,
    width: 62,
    height: 27,
    opacity: 0.4,
    top: 352,
    position: "absolute",
  },
  interviewInner: {
    left: 114,
    backgroundColor: Color.colorGainsboro_400,
    width: 67,
    height: 25,
    top: 352,
    borderRadius: Border.br_21xl,
  },
  rectangleView: {
    top: 354,
    backgroundColor: Color.colorGray_1800,
    width: 26,
    height: 22,
    left: 124,
  },
  text1: {
    color: Color.colorDarkgray_100,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
  },
  component1: {
    left: 0,
  },
  component2: {
    left: 40,
  },
  component3: {
    left: 80,
  },
  component4: {
    left: 120,
  },
  component5: {
    left: 160,
  },
  component6: {
    left: 200,
  },
  component7: {
    left: 240,
  },
  component8: {
    left: 0,
  },
  text9: {
    color: Color.colorGray_800,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
  },
  component15: {
    left: 0,
  },
  component22: {
    left: 0,
  },
  component29: {
    left: 0,
  },
  component36: {
    left: 0,
  },
  component9: {
    left: 40,
  },
  component16: {
    left: 40,
  },
  component23: {
    left: 40,
  },
  component30: {
    left: 40,
  },
  component37: {
    left: 40,
  },
  component10: {
    left: 80,
  },
  component17: {
    left: 80,
  },
  component24: {
    left: 80,
  },
  component31: {
    left: 80,
  },
  component38: {
    left: 80,
  },
  component11: {
    left: 120,
  },
  component18: {
    left: 120,
  },
  component25: {
    left: 120,
  },
  component32: {
    left: 120,
  },
  component39: {
    left: 120,
  },
  component12: {
    left: 160,
  },
  component19: {
    left: 160,
  },
  component26: {
    left: 160,
  },
  component33: {
    left: 160,
  },
  component40: {
    left: 160,
  },
  component13: {
    left: 200,
  },
  component20: {
    left: 200,
  },
  component27: {
    left: 200,
  },
  component34: {
    left: 200,
  },
  component41: {
    left: 200,
  },
  component14: {
    left: 240,
  },
  component21: {
    left: 240,
  },
  component28: {
    left: 240,
  },
  component35: {
    left: 240,
  },
  component42: {
    left: 240,
  },
  component1Parent: {
    width: 280,
    height: 240,
  },
  calenderInner: {
    width: 266,
    height: 220,
    justifyContent: "center",
    alignItems: "center",
  },
  calender: {
    top: 58,
    left: 50,
    backgroundColor: Color.white,
    shadowColor: "rgba(153, 229, 245, 0.67)",
    shadowRadius: 40,
    elevation: 40,
    width: 281,
    paddingLeft: Padding.p_5xs,
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_xl,
    paddingBottom: Padding.p_xl,
    height: 240,
  },
  interviewChild1: {
    top: 469,
    borderRadius: Border.br_lg,
    backgroundColor: "#ffef5f",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    borderStyle: "solid",
    borderColor: "#aaa",
    borderWidth: 2,
    width: 142,
    height: 47,
    left: 120,
  },
  done: {
    top: 478,
    left: 164,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.labelsLightPrimary,
    position: "absolute",
  },
  interview: {
    maxWidth: "100%",
    maxHeight: "100%",
    height: 528,
    width: 394,
  },
});

export default Interview;
