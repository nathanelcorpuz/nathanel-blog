import AdminLayout from "@/components/layout/admin/AdminLayout";
import Layout from "@/components/layout/main/Layout";
import NewPage from "@/components/pages/admin/new/NewPage";

export default function New() {
  return <NewPage />;
}

New.getLayout = function getLayout(page) {
  return (
    <Layout>
      <AdminLayout>{page}</AdminLayout>
    </Layout>
  );
};
