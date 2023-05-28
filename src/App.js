import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Trending from "./components/Trending";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Categories />
        <News />
        <Trending/>
      </div>
    </div>
  );
}

export default App;
