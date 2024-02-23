"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "./navigation.module.scss";
import Link from "next/link";
import { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <>
      <div className={styles.nav}>
        <Link href={"/"}>
          <div className={pathname === "/" ? styles.logoCurrent : styles.logo}>
            <p>Rachel</p>
            <img
              src="main-arrow.svg"
              alt={"Rachel Chen"}
              className={styles.arrow}
            />
            <p>Chen</p>
          </div>
        </Link>

        <div className={styles.navLinks}>
          <Link href={"/design"}>
            <p
              className={
                pathname.startsWith("/design")
                  ? styles.buttonTextCurrent
                  : styles.buttonText
              }
            >
              Design Work
            </p>
          </Link>
          <Link href={"/dev"}>
            <p
              className={
                pathname.startsWith("/dev")
                  ? styles.buttonTextCurrent
                  : styles.buttonText
              }
            >
              Dev Work
            </p>
          </Link>
          <Link
            href="/RachelChen_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="sm-btn">My Resume</button>
          </Link>
        </div>
        <DrawerExample />
      </div>
    </>
  );
}

function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pathname = usePathname();

  return (
    <>
      <img
        onClick={isOpen ? onClose : onOpen}
        className={styles.menuButton}
        src={isOpen ? "/close.svg" : "/menu.svg"}
      />
      <Drawer isOpen={isOpen} onClose={onClose} size={"xs"} placement={"top"}>
        <DrawerOverlay onClick={onClose} bgColor={"#00000020"} />
        <DrawerContent
          h={"fit-content"}
          p={"56px 16px 16px"}
          bgColor={"var(--primary-white)"}
          borderBottom={"1px solid var(--light-grey)"}
          zIndex={100}
        >
          <DrawerBody>
            <VStack gap={"16px"} alignItems={"flex-start"}>
              <Link href={"/design"} onClick={onClose}>
                <p
                  className={
                    pathname.startsWith("/design")
                      ? styles.buttonTextCurrent
                      : styles.buttonText
                  }
                >
                  Design Work
                </p>
              </Link>
              <Link href={"/dev"} onClick={onClose}>
                <p
                  className={
                    pathname.startsWith("/dev")
                      ? styles.buttonTextCurrent
                      : styles.buttonText
                  }
                >
                  Dev Work
                </p>
              </Link>

              <Link
                href="/RachelChen_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="sm-btn">My Resume</button>
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
