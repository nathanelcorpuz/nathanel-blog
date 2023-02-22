import styles from "./AdminLayout.module.css";
import { AdminAuthContext } from "@/contexts/AdminAuthContext";
import { useContext } from "react";
import Unauthenticated from "./unauthenticated/Unauthenticated";
import Link from "next/link";

export default function AdminLayout({ children }) {
  const { authenticated, logout } = useContext(AdminAuthContext);
  if (!authenticated) {
    return (
      <div>
        <Unauthenticated />
        {children}
      </div>
    );
  }

  return (
    <div className={styles.layout}>
      <nav>
        <menu>
          <li>
            <Link href="/admin">Home</Link>
          </li>
          <li>
            <Link href="/admin/new">New</Link>
          </li>
          <li>
            <Link href="/admin/drafts">Drafts</Link>
          </li>
          <li>
            <Link href="/admin/publish">Publish</Link>
          </li>
        </menu>
        <menu>
          <li>
            <p
              style={{ borderTop: "1px solid rgb(45, 45, 45)", color: "red" }}
              onClick={logout}
            >
              Logout
            </p>
          </li>
          <li>
            <Link href="/">Back to blog</Link>
          </li>
        </menu>
      </nav>
      <header>
        <p>Hi, Nathanel. What should we do today?</p>
        <p>
          <time>Feb 23, 2023 - 12:30 PM</time>
        </p>
      </header>
      <main>{children}</main>
    </div>
  );
}
