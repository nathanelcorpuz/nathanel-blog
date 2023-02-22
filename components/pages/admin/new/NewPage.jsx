import ComponentEditor from "./component-editor/ComponentEditor";
import styles from "./NewPage.module.css";

export default function NewPage() {
  return (
    <div className={styles.new_page}>
      <ComponentEditor id="heading" />
      <ComponentEditor id="author" />
      <ComponentEditor id="date" />
      <ComponentEditor id="subheading" />
    </div>
  );
}
