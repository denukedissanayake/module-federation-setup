import React, { Suspense } from "react";

import { Header } from "app2/Header";
import { Footer } from "app2/Footer";
import { Counter } from "app2/Counter";

const App = () => {
  return (
    <div>
      <Header />
      <div
        style={{
          padding: "10px",
          textAlign: "center",
          backgroundColor: "yellow",
        }}
      >
        <h1>User Web</h1>
        <div>
          <Counter/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
