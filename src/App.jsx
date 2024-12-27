import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import { ThemeProvider } from "./context/ThemeContext";
import { Router } from "lucide-react";

//import Gallery from "./pages/gallery"; // Ensure the correct file path

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
