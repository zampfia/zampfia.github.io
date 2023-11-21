"use client";

import { createContext } from "react";
import { Forms } from "@/functions/db";

export const IndexContext = createContext(0);
export const FormContext = createContext(Forms.CONTACTING);
