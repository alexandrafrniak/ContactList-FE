import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "./Page/Page";

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
