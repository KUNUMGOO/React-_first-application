import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";

function App() {
  const [users, setUsers] = useState([
    { name: "Akyl", lastName: "Muratov", age: "35", id: 1 },
    { name: "Asan", lastName: "Kasymov", age: "38", id: 2 },
    { name: "Arslan", lastName: "Usenov", age: "30", id: 3 },
    { name: "Kanat", lastName: "Samatov", age: "25", id: 4 },
    { name: "Bekjan", lastName: "Suranov", age: "27", id: 5 },
    { name: "Samat", lastName: "Utenov", age: "24", id: 5 },
    { name: "Kairat", lastName: "Omuraliev", age: "32", id: 5 },
  ]);
  return (
    <div className="App">
      <Header />
      <Section users={users} />

      <Footer />
    </div>
  );
}

export default App;
