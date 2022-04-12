import React from "react";
import { Routes, Route } from 'react-router-dom';

import { Dashboard } from "./views/Dashboard";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>

  );
}

export default App;
