import Link from "next/link";
import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import MegaMenu from "./MegaMenu";
import styles from "./Navbar.module.scss"

const headerLinks = [
  {
    title: "Shop",
    link: "/",
  },
  {
    title: "Mats",
    link: "",
    children:[1,2,3],
  },
  {
    title: "Exclusive Models",
    link: "",
    children: [1,2,3],
  },
  {
    title: "Why FI Mats",
    link: "/why-f1mats",
  },
  {
    title: "How to Install",
    link: "/how-to-install",
  },
  {
    title: "Help Center",
    link: "",
    children: [1,2,3],
  },
  {
    title: "Blog",
    link: "/blog",
  },
];

const Navbar = () => {
  return (
    <div className={styles.navWrapper}>
      <ul className={styles.listContainer}>
        {headerLinks.map((link) => {
          if(link.children) {
            return (
              <li className={`${styles.listItem} under-line`} key={link.title} >
                <div className={styles.listBlock} >
                  <p>
                  <span>{link.title}</span>
                  <RiArrowDownSLine />
                  </p>
                  <MegaMenu menu={link.children}/>
                </div>

              </li>
            );
          }
          return (
            <li className={`${styles.listItem} under-line`} key={link.title}>
              <Link href={link.link}>{link.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
