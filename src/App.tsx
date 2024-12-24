import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppContext } from "./contexts/AppContext";
import { Header, Footer } from "./components/index";
import _Routes from "./_Routes";
import styles from "./app.module.css";

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <div className={styles.app}>
          <Header />

          <_Routes />

          <Footer />
        </div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
