import { earth } from "./earth";
import { pokergpt } from "./pokergpt";
import { linkedin } from "./linkedin";
import type { Section } from "../types";
import { onePassword } from "./1password";
import { rbc } from "./rbc";

export const projectContent: Record<string, Section[]> = {
  earth,
  pokergpt,
  "1password": onePassword,
  linkedin,
  rbc: rbc,
} as const;
