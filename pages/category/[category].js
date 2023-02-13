import CategoryPage from "@/components/pages/category/CategoryPage";
import { useRouter } from "next/router";

export default function Category() {
  const router = useRouter();
  return <CategoryPage category={router.query.category} />;
}
