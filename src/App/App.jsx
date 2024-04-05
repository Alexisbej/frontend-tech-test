// App.js
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import CharactersGrid from "../components/CharactersGrid";
import Header from "../components/Header";
import { CharactersProvider } from "../Context/Context";
import "./App.scss";

const queryClient = new QueryClient();

// I've allowed myself to remove the eslintrc configuration file
// Since I'm using a prettier autoformat with the rules that I like (double quotes instead of single, 2 spaces tabs..)
// And I didn't wanted to struggle to change my configuration only for this exercice. Hope that'll be ok with you :)
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CharactersProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <CharactersGrid />
            </Route>
          </Switch>
        </Router>
      </CharactersProvider>
    </QueryClientProvider>
  );
}

export default App;
