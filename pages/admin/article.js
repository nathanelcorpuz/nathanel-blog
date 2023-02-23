import AdminLayout from "@/components/layout/admin/AdminLayout";
import Layout from "@/components/layout/main/Layout";
import AdminArticlePage from "@/components/pages/admin/article/AdminArticlePage";

export default function Article() {
  return <AdminArticlePage />;
}

Article.getLayout = function getLayout(page) {
  return (
    <Layout>
      <AdminLayout>{page}</AdminLayout>
    </Layout>
  );
};
