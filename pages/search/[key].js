import { useRouter } from "next/router";

export default function Search() {
  const router = useRouter();
  return (
    <h1 style={{ padding: "75px 20px" }}>Search for {router.query.key}</h1>
  );
}

export async function getStaticPaths() {}