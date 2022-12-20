import "./App.css";

import NavBar from "./components/Nav_Bar/Nav_Bar";
import BreadCrumb from "./components/BreadCrumb/BreadCrumb";
import Search from "./components/Search/Search";
import ResultText from "./components/ResultText/ResultText";

import Combine from "./components/Hero/combine";
function App() {
  return (
    <div className="App">
      <NavBar />
      <BreadCrumb />
      <Search />
      <ResultText />
      <Combine />
    </div>
  );
}

export default App;
