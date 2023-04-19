import "./App.css";
import Layout from "./components/Layout/Layout";
import useAlan from "./hooks/useAlan";

function App() {
  useAlan()
  return <Layout />;
}

export default App;
