import { earth } from "./earth";
import { pokergpt } from "./pokergpt";
import { linkedin } from "./linkedin";
import type { Section } from "../types";
import { onePassword } from "./1password";

export const projectContent: Record<string, Section[]> = {
  earth,
  pokergpt,
  "1password": onePassword,
  linkedin,
  RBC: [],
  chattin: [],
} as const;
