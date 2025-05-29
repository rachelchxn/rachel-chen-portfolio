import { earth } from "./earth";
import { pokergpt } from "./pokergpt";
import { linkedin } from "./linkedin";
import type { Section } from "../types";

export const projectContent: Record<string, Section[]> = {
  earth,
  pokergpt,
  "1password": [],
  linkedin,
  RBC: [],
  chattin: [],
} as const;
