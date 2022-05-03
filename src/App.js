import React from "react";
import { CurrencyTrackPage } from "./containers/CurrencyTrackPage";
import { QueryClientProvider, QueryClient } from "react-query";
import "./sass/module.scss";

const queryClient = new QueryClient();
const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CurrencyTrackPage />
      </QueryClientProvider>
    </>
  );
};

export default App;
