import { AppContextProvider } from "./contexts/AppContext";
import { Home } from "./pages/Home";

function App() {

  return (
    <AppContextProvider>
      <Home />
    </AppContextProvider>
  );
}

export default App
