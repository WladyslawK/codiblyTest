import React from 'react';
import './App.css';
import {Header} from "../components/header/Header";
import ProductsTable from "../components/table/ProductsTable";


function App() {
  return (
    <div>
      <Header/>
      <ProductsTable/>
    </div>
  )
}

export default App;
