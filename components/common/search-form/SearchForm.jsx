import styles from "./SearchForm.module.css";
import Image from "next/image";
import searchIcon from "@/public/search-icon.png";
import { useRouter } from "next/router";
import { useState } from "react";

export default function SearchForm({ onSubmitSideEffect = () => {} }) {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        if (!searchQuery) return;
        router.push({
          pathname: "/search/[searchQuery]",
          query: { searchQuery: searchQuery },
        });
        e.target[0].value = ""; // clears input
        setSearchQuery("");
        onSubmitSideEffect();
      }}
    >
      <input
        aria-label="search"
        aria-details="search box"
        placeholder="Search..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button aria-label="button" aria-details="search button icon">
        <Image src={searchIcon} alt="search button icon" />
      </button>
    </form>
  );
}
