import Layout from "@/components/layout/main/Layout";
import VisitorLayout from "@/components/layout/visitor/VisitorLayout";

export default function Custom404() {
  return (
    <h1 style={{ textAlign: "center" }}>Sorry, that page doesn't exist.</h1>
  );
}

Custom404.getLayout = function getLayout(page) {
  return (
    <Layout>
      <VisitorLayout>{page}</VisitorLayout>
    </Layout>
  );
};
