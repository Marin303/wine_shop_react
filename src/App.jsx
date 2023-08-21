import "./App.css";
import Header from "./Pages/Header";
import Main from "./Pages/Main";
import WineCollect from "./Pages/WineCollect";
import HandPicked from "./Pages/HandPicked";

function App() {
  return (
    <div className="App flex-col h-screen">
      <Header />
      <Main />
      <WineCollect />
      <HandPicked />
    </div>
  );
}

export default App;
