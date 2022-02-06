import React from "react";
import { AppRoutes as Routes } from "./routes";
import { BlogListProvider } from "./context";

function App() {
  return (
    <>
      <BlogListProvider>
        <Routes />
      </BlogListProvider>
    </>
  );
}

export default App;
