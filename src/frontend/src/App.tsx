import { Layout } from "./components/Layout";
import LandingPage from "./pages/LandingPage";

function scrollToOrder() {
  document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
}

export default function App() {
  return (
    <Layout onOrderClick={scrollToOrder}>
      <LandingPage />
    </Layout>
  );
}
