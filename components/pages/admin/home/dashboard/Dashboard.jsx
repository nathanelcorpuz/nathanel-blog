import styles from "./Dashboard.module.css";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <section>
        <h1>Published articles</h1>
        <ul>
          <li>
            <Link href="/admin/published/test-article-1">
              How SEO helps your business
            </Link>
          </li>
          <li>
            <Link href="/admin/published/test-article-2">
              How domains and hosting work
            </Link>
          </li>
          <li>
            <Link href="/admin/published/test-article-3">
              Why you need a website portfolio as a virtual assistant
            </Link>
          </li>
        </ul>
      </section>
      <section>
        <h1>Draft articles</h1>
        <ul>
          <li>
            <Link href="/admin/published/test-article-1">
              Test article title 1 Test article title 1
            </Link>
          </li>
          <li>
            <Link href="/admin/published/test-article-2">
              Test article title 2
            </Link>
          </li>
          <li>
            <Link href="/admin/published/test-article-3">
              Test article title 3 Test article
            </Link>
          </li>
          <li>
            <Link href="/admin/published/test-article-4">
              Test article title 4 Test article title 4 Test articletitle 4 Test article
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
