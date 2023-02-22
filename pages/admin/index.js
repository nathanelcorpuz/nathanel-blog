import AdminLayout from "@/components/layout/admin/AdminLayout";
import Layout from "@/components/layout/main/Layout";
import Dashboard from "@/components/pages/admin/home/dashboard/Dashboard";
import Login from "@/components/pages/admin/home/login/Login";
import { AdminAuthContext } from "@/contexts/AdminAuthContext";
import { useContext } from "react";

export default function Admin() {
  const { authenticated } = useContext(AdminAuthContext);
  if (authenticated) {
    return <Dashboard />;
  }
  return <Login />;
}

Admin.getLayout = function getLayout(page) {
  return (
    <Layout>
      <AdminLayout>{page}</AdminLayout>
    </Layout>
  );
};
