import * as React from "react";
import { Link } from "react-router-dom";
/*
type CounterProps = {
    creds: {
        param1: string,
        param2: string
    }
}

type CounterState = {
    email: string,
    password: string
}
*/
class Logout extends React.Component<{},{}> {
   
    
    createLogoutRequest = (event: any) => {
        console.log("this state", this.state)
        let requestHeaders: any = {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token")
        }
        fetch('http://localhost:3000/logout',{
            
            method: "delete",
            headers: requestHeaders
        })
        .then((res) => {
            if (res.ok) {
              localStorage.removeItem("current_user")
              window.location.href="/"
              //return res.json();
            } else {
              return res.json().then((json) => Promise.reject(json));
            }
          })
          .then((json) => {
            console.dir(json);
          })
          .catch((err) => console.error(err));

    }
    render(): React.ReactNode {
        return (
            <div
            style={{
                position: 'absolute', 
                left: '50%', 
                top: '50%',
                transform: 'translate(-50%, -50%)'
                }}
            >
                <div>
                <Link to="#" onClick={this.createLogoutRequest}>Home</Link>
                </div>
            </div>
        )
    }
}

export default Logout;