import React from "react";
import NavBar from "./Components/Navigation/navBar";
import MainPage from "./Components/Pages/mainPage";
import { Route, Switch, Redirect } from "react-router-dom";
import QuizPage from "./Components/Pages/quizPage";
import EducationPage from "./Components/Pages/educationPage";
function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/education" component={EducationPage} />
        <Route path="/:Id" component={QuizPage} />
        <Route path="/" component={MainPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
