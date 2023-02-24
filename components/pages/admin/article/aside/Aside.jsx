import styles from "./Aside.module.css";

export default function Aside() {
  return (
    <aside className={styles.aside}>
      <select defaultValue="empty">
        <option value="empty">Select an article</option>
        <option>Article 2</option>
        <option>Article 3</option>
      </select>
      <menu>
        <li>
          <button>New</button>
        </li>
        <li>
          <button>Publish</button>
        </li>
        <li>
          <button>Delete</button>
        </li>
      </menu>
    </aside>
  );
}
