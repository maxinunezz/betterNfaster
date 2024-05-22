import React from "react";
import Plans from "./components/plans";
import FAQs from "./components/faqs";
import Navbar from "./components/navbar/index.jsx";

//Comienza a correr la app renderizando componentes como Navbar, Plans, Features y FAQs

function App() {
  return (
    <>
      <div className="App">
        <main>
          <Navbar />
          <Plans />
          <FAQs />
        </main>
      </div>
    </>
  );
}

export default App;
