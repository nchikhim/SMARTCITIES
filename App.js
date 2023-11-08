const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import JOB3 from "./screens/JOB3";
import HistoryFrame from "./components/HistoryFrame";
import JOB2 from "./screens/JOB2";
import JOB1 from "./screens/JOB1";
import SuccessScreen from "./screens/SuccessScreen";
import Advertise2 from "./screens/Advertise2";
import AdvertiseS1 from "./screens/AdvertiseS1";
import HelpCentre from "./screens/HelpCentre";
import ShoppingCart from "./screens/ShoppingCart";
import Payments from "./screens/Payments";
import Unavailable from "./components/Unavailable";
import UtilityBill from "./screens/UtilityBill";
import Shopping from "./screens/Shopping";
import LockSmith from "./screens/LockSmith";
import Appointmnet from "./screens/Appointmnet";
import DoctorList from "./screens/DoctorList";
import Healthcare from "./screens/Healthcare";
import AdvertiseS2 from "./screens/AdvertiseS2";
import Profile from "./screens/Profile";
import Keyboard1 from "./components/Keyboard1";
import SettingGeneral from "./screens/SettingGeneral";
import SettingEM from "./screens/SettingEM";
import SettingAbout from "./screens/SettingAbout";
import SettingAS from "./screens/SettingAS";
import Setting from "./screens/Setting";
import Message from "./screens/Message";
import CancelAppointment from "./components/CancelAppointment";
import AppoinemntHistory from "./screens/AppoinemntHistory";
import Ambulance from "./screens/Ambulance";
import EmergencyCall from "./screens/EmergencyCall";
import BurnsScald from "./screens/BurnsScald";
import Save from "./components/Save";
import FirstAid from "./screens/FirstAid";
import LockSmithContact2 from "./components/LockSmithContact2";
import LockSmithContact4 from "./components/LockSmithContact4";
import LockSmithContact3 from "./components/LockSmithContact3";
import LockSmithContact1 from "./components/LockSmithContact1";
import Favourites from "./components/Favourites";
import PickUp from "./components/PickUp";
import Delievery from "./screens/Delievery";
import Complaint4 from "./screens/Complaint4";
import HomeRepairServices from "./screens/HomeRepairServices";
import HomeRepairServices1 from "./screens/HomeRepairServices1";
import HomeRepairServices2 from "./screens/HomeRepairServices2";
import Home4 from "./components/Home4";
import Home41 from "./components/Home41";
import Home42 from "./components/Home42";
import Home3 from "./screens/Home3";
import AdDoneSubmit from "./screens/AdDoneSubmit";
import Logout from "./screens/Logout";
import BMI from "./screens/BMI";
import HealthReport from "./screens/HealthReport";
import GrocerySelectionPage from "./screens/GrocerySelectionPage";
import FoodSelectionPage from "./screens/FoodSelectionPage";
import EnableLocation from "./components/EnableLocation";
import LocationDetection from "./components/LocationDetection";
import BookedSuccessfully from "./screens/BookedSuccessfully";
import SuccessInfo from "./screens/SuccessInfo";
import Interview from "./components/Interview";
import Filter from "./components/Filter";
import HomeNanny from "./components/HomeNanny";
import Care3 from "./screens/Care3";
import Care2 from "./components/Care2";
import Care1 from "./screens/Care1";
import Notice1 from "./screens/Notice1";
import Ad1 from "./screens/Ad1";
import Notice from "./screens/Notice";
import Advertise from "./screens/Advertise";
import AccountRegistered from "./screens/AccountRegistered";
import PasswordChanged from "./screens/PasswordChanged";
import ResetPassword from "./screens/ResetPassword";
import OTPVerification from "./screens/OTPVerification";
import ForgotPassword from "./screens/ForgotPassword";
import Register from "./screens/Register";
import Login from "./screens/Login";
import LoginPage from "./screens/LoginPage";
import HealthcareMainPage from "./screens/HealthcareMainPage";
import Menu from "./screens/Menu";
import Search from "./screens/Search";
import Complaint3 from "./screens/Complaint3";
import Complaint2 from "./screens/Complaint2";
import CommunityComplaint from "./screens/CommunityComplaint";
import Home2 from "./screens/Home2";
import HomeRepairServices3 from "./components/HomeRepairServices3";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="JOB3"
              component={JOB3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HistoryFrame"
              component={HistoryFrame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="JOB2"
              component={JOB2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="JOB1"
              component={JOB1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SuccessScreen"
              component={SuccessScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Advertise2"
              component={Advertise2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdvertiseS1"
              component={AdvertiseS1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HelpCentre"
              component={HelpCentre}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ShoppingCart"
              component={ShoppingCart}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Payments"
              component={Payments}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Unavailable"
              component={Unavailable}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UtilityBill"
              component={UtilityBill}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Shopping"
              component={Shopping}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LockSmith"
              component={LockSmith}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Appointmnet"
              component={Appointmnet}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DoctorList"
              component={DoctorList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Healthcare"
              component={Healthcare}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdvertiseS2"
              component={AdvertiseS2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Keyboard1"
              component={Keyboard1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SettingGeneral"
              component={SettingGeneral}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SettingEM"
              component={SettingEM}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SettingAbout"
              component={SettingAbout}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SettingAS"
              component={SettingAS}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Setting"
              component={Setting}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Message"
              component={Message}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AppoinemntHistory"
              component={AppoinemntHistory}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Ambulance"
              component={Ambulance}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EmergencyCall"
              component={EmergencyCall}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BurnsScald"
              component={BurnsScald}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Save"
              component={Save}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FirstAid"
              component={FirstAid}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LockSmithContact2"
              component={LockSmithContact2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LockSmithContact4"
              component={LockSmithContact4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LockSmithContact3"
              component={LockSmithContact3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LockSmithContact1"
              component={LockSmithContact1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Favourites"
              component={Favourites}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PickUp"
              component={PickUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Delievery"
              component={Delievery}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Complaint4"
              component={Complaint4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeRepairServices"
              component={HomeRepairServices}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeRepairServices1"
              component={HomeRepairServices1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeRepairServices2"
              component={HomeRepairServices2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home41"
              component={Home41}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home42"
              component={Home42}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home3"
              component={Home3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdDoneSubmit"
              component={AdDoneSubmit}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Logout"
              component={Logout}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BMI"
              component={BMI}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HealthReport"
              component={HealthReport}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GrocerySelectionPage"
              component={GrocerySelectionPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FoodSelectionPage"
              component={FoodSelectionPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EnableLocation"
              component={EnableLocation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LocationDetection"
              component={LocationDetection}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BookedSuccessfully"
              component={BookedSuccessfully}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SuccessInfo"
              component={SuccessInfo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeNanny"
              component={HomeNanny}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Care3"
              component={Care3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Care2"
              component={Care2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Care1"
              component={Care1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notice1"
              component={Notice1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Ad1"
              component={Ad1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notice"
              component={Notice}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Advertise"
              component={Advertise}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AccountRegistered"
              component={AccountRegistered}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PasswordChanged"
              component={PasswordChanged}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ResetPassword"
              component={ResetPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OTPVerification"
              component={OTPVerification}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginPage"
              component={LoginPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HealthcareMainPage"
              component={HealthcareMainPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Menu"
              component={Menu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Complaint3"
              component={Complaint3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Complaint2"
              component={Complaint2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CommunityComplaint"
              component={CommunityComplaint}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home2"
              component={Home2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeRepairServices3"
              component={HomeRepairServices3}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
