import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Route";

const App: React.FC = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
