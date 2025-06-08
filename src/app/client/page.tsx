"use client"

import React, { useEffect } from "react";

const Client = () => {
  useEffect(() => {
    window.location.href = "http://localhost:3000/client/chat-service";
  }, []);

  return null;
};

export default Client;
