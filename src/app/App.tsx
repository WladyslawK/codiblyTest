import React from 'react';
import './App.css';
import {Header} from "../components/header/Header";
import ProductsTable from "../components/table/ProductsTable";
import {useAppSelector} from "../hooks/reduxHooks";
import {ErrorSnackBar} from "../components/errorSnackBar/ErrorSnackBar";


function App() {

  const appStatus = useAppSelector(state => state.appProducts.isInitialized)

  return (
    <div>
      <Header/>
      <ProductsTable/>
      {appStatus === 'failed' ? <ErrorSnackBar /> : '' }
    </div>
  )
}

export default App;
