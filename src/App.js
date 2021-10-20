
import './App.css';
import Router from './Routes/Router';
import { Suspense } from "react";

function App() {
  return (
    <>
    <Suspense fallback="loading ...">
      <Router />
      </Suspense>
      
    </>
  );
}

export default App;
