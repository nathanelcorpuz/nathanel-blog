import AdminLayout from "@/components/layout/admin/AdminLayout";
import Layout from "@/components/layout/main/Layout";

export default function Admin() {
  return <h1>Admin page</h1>;
}

Admin.getLayout = function getLayout(page) {
  return (
    <Layout>
      <AdminLayout>{page}</AdminLayout>
    </Layout>
  );
};
