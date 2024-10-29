import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Counter } from "./components/Counter";

const App = () => {
  return (
    <>
      <Header />
      <div>
        <h1
          style={{
            padding: "10px",
            textAlign: "center",
          }}
        >
          App 2
        </h1>
        <Counter/>
      </div>
      <Footer />
    </>
  );
};

export default App;
