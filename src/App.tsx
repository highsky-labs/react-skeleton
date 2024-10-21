import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppContext } from "./contexts/AppContext";
import { Header, Footer } from "./components/index";
import _Routes from "./_Routes";
import "./App.css";

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="App">
          <Header />

          <_Routes />

          <Footer />
        </div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
