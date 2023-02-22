import Link from "next/link";

export default function Unauthenticated() {
  return (
    <div style={{ position: "fixed", padding: 20 }}>
      <Link href="/">Back to blog</Link>
    </div>
  );
}
