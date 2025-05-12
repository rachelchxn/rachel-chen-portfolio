import { earth } from "./earth";
import { pokergpt } from "./pokergpt";
import type { Section } from "../types";

export const projectContent: Record<string, Section[]> = {
  earth,
  pokergpt,
  "1password": [],
  RBC: [],
  linkedin: [],
  chattin: [],
} as const;
