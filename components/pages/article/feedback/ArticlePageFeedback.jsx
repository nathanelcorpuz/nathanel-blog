import Image from "next/image";
import styles from "../ArticlePage.module.css";
import ArticlePageSection from "../ArticlePageSection";
import smiley from "@/public/smiley.png";
import straighty from "@/public/straighty.png";

export default function ArticlePageFeedback() {
  return (
    <ArticlePageSection style={{ width: "100%" }}>
      {/* <p>How did you feel about this article?</p> */}
      <form className={styles.feedback_form}>
        <button>
          <p>5</p>
          <Image src={smiley} alt="smiley face icon" />
        </button>
        <button>
          <p>5</p>
          <Image src={straighty} alt="straight face icon" />
        </button>
      </form>
    </ArticlePageSection>
  );
}
