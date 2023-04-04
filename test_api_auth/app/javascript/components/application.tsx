import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Register from "../components/Register";

const creds: any = {
    param1: "email",
    param2: "password"
}

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<Register creds={creds}/>} />
            </Routes>
        </Router>
        
    )
}

document.addEventListener('DOMContentLoaded',()=>{
    const rootEl = document.getElementById('main');
    ReactDOM.render(<App />,rootEl);
})