import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routers/Routes';
function App() {
  return (
    <BrowserRouter>
  
        <AppRoutes/>
    </BrowserRouter>
  );
}

export default App;
