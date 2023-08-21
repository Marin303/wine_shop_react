import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import WineCollect from "./Components/WineCollect";

function App() {
  return (
    <div className="App flex-col h-screen">
      <Header />
      <Main />
      <WineCollect/>
    </div>
  );
}

export default App;
