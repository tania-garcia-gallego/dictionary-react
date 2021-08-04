
import './App.css';
import DictionarySearch from "./DictionarySearch.js";
import Footer from "./Footer.js";

//https://www.canva.com/colors/color-palettes/mountain-haze/

function App() {
  return (
    <div className="App">
      <header className="App-header">
      📖 React Dictionary
      </header>
      <DictionarySearch />
      <Footer />
    </div>
  );
}

export default App;
