"use client";
import React from "react";
import ScrollToTop from "react-scroll-to-top";
import STTArrow from "./STTArrowUp";

const ScrollToTopContainer = () => {
  return <ScrollToTop smooth component={<STTArrow />} />;
};

export default ScrollToTopContainer;
