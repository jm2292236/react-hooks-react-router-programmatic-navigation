import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Navbar from "./Navbar";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");

    return (
        <div>
            <Navbar setIsLoggedIn={setIsLoggedIn} userName={userName} setUserName={setUserName} />
            
            <Switch>
                <Route exact path="/about">
                    <About />
                </Route>

                <Route exact path="/login">
                    <Login setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} />
                </Route>

                <Route exact path="/">
                    <Home isLoggedIn={isLoggedIn} />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
