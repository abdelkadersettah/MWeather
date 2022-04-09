import "./App.scss";
import Hero from "./components/Hero/Hero";
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
