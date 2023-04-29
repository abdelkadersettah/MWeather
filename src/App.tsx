import './App.scss';
import MweatherContextProvider from './Context/MWeatherContext';
import { Home } from './pages';

function App() {
  return (
    <div className="App">
      <MweatherContextProvider>
        <Home />
      </MweatherContextProvider>
    </div>
  );
}

export default App;
