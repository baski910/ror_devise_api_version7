// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Referrals from "./components/Referrals";
import Logout from "./components/Logout";
import CurrentUser from "./components/CurrentUser";
import MyReferrals  from "./components/MyReferrals";
import NavBar from "./components/Home";
import Page from "./components/Page";

const creds: any = {
    param1: "email",
    param2: "password"
}

const rcreds: any = {
    param1: "email",
    param2: "type your message",
    param3: 1
}

const App = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Page />} />
                <Route path="/me" element={<CurrentUser />} />
                <Route path="/signup" element={<Register creds={creds}/>} />
                <Route path="/login" element={<Login creds={creds}/>} />
                <Route path="/referrals/new" element={<Referrals rcreds={rcreds}/>} />
                <Route path="/referrals" element={<MyReferrals />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>
        </Router>
        
    )
}

document.addEventListener('DOMContentLoaded',()=>{
    const rootEl = document.getElementById('main');
    ReactDOM.render(<App />,rootEl);
})
