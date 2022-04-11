import "./App.scss";
import { Hero } from "./components";
import MweatherContextProvider from "./Context/MWeatherContext";

function App() {
  return (
    <div className="App">
      <MweatherContextProvider>
        <Hero />
      </MweatherContextProvider>
    </div>
  );
}

export default App;
