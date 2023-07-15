import "./App.css";
import StoreGrid from "./StoreGrid";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div className="navbar__container">
          <h1 className="title">We Buy!</h1>
          <div>
            <StoreGrid />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
