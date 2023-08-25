import "./App.css";
import Header from "./Pages/Header";
import Main from "./Pages/Main";
import WineCollect from "./Pages/WineCollect";
import HandPicked from "./Pages/HandPicked";
import FeaturedProjects from "./Pages/FeaturedProjects";
import CustomerReview from "./Pages/CustomerReview";
import LatestBlog from "./Pages/LatestBlog";
import Newsletter from './Pages/Newsletter'
import Footer from './Pages/Footer'

function App() {
  return (
    <div className="App flex-col h-screen">
      <Header />
      <Main />
      <WineCollect />
      <HandPicked />
      <FeaturedProjects />
      <CustomerReview/>
      <LatestBlog/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
