"use client";
import React from "react";
import HomeLandingComponentWithUser from "./global-components/home-landing-WU";

export default function Home() {
  const [logged, isLogged] = React.useState<boolean>(true);

  return <HomeLandingComponentWithUser />;
}
