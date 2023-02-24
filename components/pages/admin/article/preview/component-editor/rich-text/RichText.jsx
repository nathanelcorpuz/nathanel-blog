import styles from "./RichText.module.css";

export default function RichText({ setValue, highlightedText }) {
  return (
    <div className={styles.div}>
      <button
        type="button"
        onClick={() => {
          setValue((value) => {
            const { start, text, end } = highlightedText;
            const newValue =
              value.slice(0, start) +
              "<strong>" +
              text +
              "</strong>" +
              value.slice(end);
            return newValue;
          });
        }}
      >
        B
      </button>
      <button
        type="button"
        onClick={() => {
          setValue((value) => {
            const { start, text, end } = highlightedText;
            const newValue =
              value.slice(0, start) +
              "<em>" +
              text +
              "</em>" +
              value.slice(end);
            return newValue;
          });
        }}
      >
        I
      </button>
    </div>
  );
}
