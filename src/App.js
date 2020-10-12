import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Planets from "./components/Planets";
import Sun from "./components/Sun";
import Moon from "./components/Moon";
import Mercury from "./components/Mercury";
import Venus from "./components/Venus";
import Earth from "./components/Earth";
import Mars from "./components/Mars";
import Jupiter from "./components/Jupiter";
import Saturn from "./components/Saturn";
import Uranus from "./components/Uranus";
import Neptune from "./components/Neptune";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="container-fluid">
            <div>
                <BrowserRouter>
                    <Menu/>
                    <div>
                        <Route path="/home" component={Home}/>
                        <Route path="/planets" component={Planets}/>
                        <Route path="/sun" component={Sun}/>
                        <Route path="/moon" component={Moon}/>
                        <Route path="/mercury" component={Mercury}/>
                        <Route path="/venus" component={Venus}/>
                        <Route path="/earth" component={Earth}/>
                        <Route path="/mars" component={Mars}/>
                        <Route path="/jupiter" component={Jupiter}/>
                        <Route path="/saturn" component={Saturn}/>
                        <Route path="/uranus" component={Uranus}/>
                        <Route path="/neptune" component={Neptune}/>
                    </div>
                </BrowserRouter>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
