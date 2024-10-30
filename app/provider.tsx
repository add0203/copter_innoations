"use client";

import { ReactNode, useState } from "react";

import { Provider } from "react-redux";
import { store } from "../redux/store"; // Import the Redux store

export default function AppProvider({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
