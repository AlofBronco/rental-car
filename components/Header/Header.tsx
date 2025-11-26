"use client";

import Link from "next/link";
import css from "./Header.module.css";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={css.header}>
      <div className={css.logo}>
        <svg className={css.logoIcon} width="102" height="16">
          <use href="sprite.svg#icon-logo"></use>
        </svg>
      </div>
      <nav>
        <ul className={css.list}>
          <li
            className={`${css.listItem} ${
              pathname === "/" ? css.listItemActive : ""
            }`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`${css.listItem} ${
              pathname === "/catalog" ? css.listItemActive : ""
            }`}
          >
            <Link href="/catalog">Catalog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
