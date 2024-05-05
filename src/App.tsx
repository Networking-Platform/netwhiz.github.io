import React, { useState } from "react";
import Home from "./Components/Home";
import LogIn from "./Components/LogIn";
import ContactUs from "./Components/ContactUs";
import AboutUs from "./Components/AboutUs";
import FAQ from "./Components/FAQ";
import Profile from "./Components/Profile";
import Inventory from "./Components/Inventory";
import SignUp from "./Components/SignUp";
import Progress from "./Components/Progress";

import "@fontsource/inter";
import "@fontsource/inter/700.css";

import { DarkModeProvider, useDarkMode } from './Components/utils/DarkMode';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import View from "./Components/View";
import LessonTemplate from "./Components/LessonTemplate";

function App() {
  const usePageNavigation = () => {
    const navigate = useNavigate();
    return (pageName: string) => navigate(`/${pageName.toLowerCase()}`);
  };

  const { darkMode } = useDarkMode();
  const setPage = usePageNavigation();

  const goToLogin = () => {
    setPage("login");
  };

  const backToHome = () => {
    setPage("");
  };

  const toContactPage = () => {
    setPage("contact");
  };

  const toAboutUsPage = () => {
    setPage("about");
  };

  const toFAQPage = () => {
    setPage("faq");
  };

  const toProfilePage = () => {
    setPage("profile");
  };

  const toInventoryPage = () => {
    setPage("inventory");
  };

  const toViewPage = () => {
    setPage("inventory/view");
  };

  const toProgressPage = () => {
    setPage("Progress");
  };

  const toSettingsPage = () => {
    setPage("Settings");
  };

  const toFirstLesson = () => {
    setPage("lesson/http_lesson");
  };

  const toSecondLesson = () => {
    setPage("lesson/tcp_lesson");
  };

  const toThirdLesson = () => {
    setPage("lesson/dns_lesson");
  };

  const toFourthLesson = () => {
    setPage("lesson/ip_lesson");
  };

  return (
    <div className={darkMode ? "dark-theme" : ""}>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              getStartedHandler={goToLogin}
              aboutUsHandler={toAboutUsPage}
              contactHandler={toContactPage}
              FAQHandler={toFAQPage}
              ProfileHandler={toProfilePage}
            />
          }
        />
        <Route
          path="/login"
          element={<LogIn backToHomeHandler={backToHome} />}
        />
        <Route
          path="/signUp"
          element={<SignUp backToLoginHandler={goToLogin} />}
        />
        <Route
          path="/contact"
          element={
            <ContactUs
              aboutUsHandler={toAboutUsPage}
              contactHandler={toContactPage}
              FAQHandler={toFAQPage}
            />
          }
        />
        <Route
          path="/about"
          element={
            <AboutUs
              aboutUsHandler={toAboutUsPage}
              contactHandler={toContactPage}
              FAQHandler={toFAQPage}
            />
          }
        />
        <Route
          path="/faq"
          element={
            <FAQ
              aboutUsHandler={toAboutUsPage}
              contactHandler={toContactPage}
              FAQHandler={toFAQPage}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <Profile
              ProfileHandler={toProfilePage}
              getStartedHandler={goToLogin}
              InventoryHandler={toInventoryPage}
              backToHomeHandler={backToHome}
              ProgressHandler={toProgressPage}
              SettingsHandler={toSettingsPage}
            />
          }
        />
        <Route
          path="/inventory"
          element={
            <Inventory
              ProfileHandler={toProfilePage}
              getStartedHandler={goToLogin}
              ViewHandler={toViewPage}
              InventoryHandler={toInventoryPage}
              backToHomeHandler={backToHome}
              ProgressHandler={toProgressPage}
              SettingsHandler={toSettingsPage}
            />
          }
        />
        <Route
          path="/inventory/view"
          element={
            <View
              ProfileHandler={toProfilePage}
              getStartedHandler={goToLogin}
              ViewHandler={toViewPage}
              InventoryHandler={toInventoryPage}
              backToHomeHandler={backToHome}
              ProgressHandler={toProgressPage}
              SettingsHandler={toSettingsPage}
            />
          }
        />
        <Route
          path="/progress"
          element={
            <Progress
              ProfileHandler={toProfilePage}
              getStartedHandler={goToLogin}
              InventoryHandler={toInventoryPage}
              ProgressHandler={toProgressPage}
              backToHomeHandler={backToHome}
              goToFirstLesson={toFirstLesson}
              goToSecondLesson={toSecondLesson}
              goToThirdLesson={toThirdLesson}
              goToFourthLesson={toFourthLesson}
              SettingsHandler={toSettingsPage}
            />
          }
        />
        <Route
          path="/lesson/:id"
          element={
            <LessonTemplate
              backToHomeHandler={backToHome}
              aboutUsHandler={toAboutUsPage}
              contactHandler={toContactPage}
              FAQHandler={toFAQPage}
              ProfileHandler={toProfilePage}
              ProgressHandler={toProgressPage}
            />
          }
        />
      </Routes>
    </div>
  );
}

const AppWithDarkModeProvider = () => (
  <DarkModeProvider>
    <App />
  </DarkModeProvider>
);


export default AppWithDarkModeProvider;