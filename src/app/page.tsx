"use client";
import React from "react";
import HomeLandingComponent from "./client/global-components/home-landing-comp";

export default function Home() {
  const [logged, isLogged] = React.useState<boolean>(true);

  return <HomeLandingComponent />;
}
