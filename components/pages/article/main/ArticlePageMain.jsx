import styles from "./ArticlePageMain.module.css";
import placeholder3 from "@/public/placeholder/placeholder-3.jpg";
import placeholder4 from "@/public/placeholder/placeholder-4.jpg";
import placeholder5 from "@/public/placeholder/placeholder-5.jpg";
import placeholder6 from "@/public/placeholder/placeholder-6.jpg";
import Image from "next/image";
import ArticlePageSection from "../ArticlePageSection";

export default function ArticlePageMain() {
  return (
    <div className={styles.div}>
      <ArticlePageSection>
        <h3>Sed nisi mi, venenatis sed iaculis eget.</h3>
        <p>
          Etiam eu lacus at metus feugiat facilisis. Phasellus tincidunt orci
          quis ante iaculis tincidunt. Quisque quis sollicitudin felis, sit amet
          porta tortor.
        </p>
        <Image src={placeholder3} alt="test image" />
        <p>
          Aenean ac hendrerit purus, quis varius orci. Quisque imperdiet ex id
          ipsum imperdiet, nec egestas lacus lobortis.
        </p>
      </ArticlePageSection>
      <ArticlePageSection>
        <h3>Morbi scelerisque pellentesque purus quis accumsan</h3>
        <p>
          Nulla non sagittis neque. Duis luctus faucibus nunc, eu pharetra arcu
          luctus sed. Aenean pharetra lorem quis sapien vulputate, in ornare
          augue efficitur. Nunc ac turpis accumsan leo tempor rutrum.
        </p>
        <p>
          Ut vestibulum orci sollicitudin bibendum placerat. Fusce convallis,
          eros a tristique varius, odio nunc fermentum felis, vitae rutrum arcu
          elit sit amet elit.
        </p>
        <ol
          style={{
            padding: "0 20px",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <li>
            <p>Suspendisse quis gravida enim.</p>
          </li>
          <li>
            <p>Cras a neque vulputate, vehicula odio aliquam, varius justo.</p>
          </li>
          <li>
            <p>Nunc ut pulvinar neque.</p>
          </li>
        </ol>
      </ArticlePageSection>
      <ArticlePageSection>
        <ol className={styles.ordered_list_section}>
          <li>
            <h3>1. Suspendisse quis gravida enim.</h3>
            <Image src={placeholder4} alt="test image" />
            <p>
              Donec ac nibh ac neque rhoncus pulvinar ut non eros. Suspendisse
              nec malesuada augue.
            </p>
          </li>
          <li>
            <h3>
              2. Cras a neque vulputate, vehicula odio aliquam, varius justo.
            </h3>
            <Image src={placeholder5} alt="test image" />
            <p>
              Morbi sagittis congue nisi vel lacinia. Nunc viverra magna eu
              tempor gravida.
            </p>
          </li>
          <li>
            <h3>3. Nunc ut pulvinar neque.</h3>
            <Image src={placeholder6} alt="test image" />
            <p>
              Nulla vestibulum dictum risus non faucibus. Praesent sed mauris
              efficitur mauris scelerisque mattis. Nunc id metus arcu.
            </p>
          </li>
        </ol>
      </ArticlePageSection>
    </div>
  );
}
