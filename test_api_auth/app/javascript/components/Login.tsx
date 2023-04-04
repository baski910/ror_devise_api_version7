import * as React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Box } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';


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

class Login extends React.Component<CounterProps,CounterState> {
    state: CounterState = {
        email: "Email",
        password: "Password"
    }
    componentDidMount(){
        this.setState((state) => ({
            email: this.props.creds.param1,
            password: this.props.creds.param2
            
        }))
    }
    handleChangeEmail = (event: any) => {
        const { value } = event.target
        this.setState({email: value})
        
    }
    handleChangePassword = (event: any) => {
        const { value } = event.target
        this.setState({password: value})
    }
    createLoginRequest = (event: any) => {
        console.log("this state", this.state)
        fetch('http://localhost:3000/login',{
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: this.state
            
            })
        })
        .then((res)=>{
            if (res.ok){
                console.log(res.headers.get("Authorization"))
                localStorage.setItem("token",res.headers.get("Authorization"))
                localStorage.setItem("current_user",this.state.email)
                window.location.href="/referrals"
                //return res.json()
            } else {
                return res.text().then((text) => Promise.reject(text))
            }
        })
        .then((json) => console.dir(json))
        .catch((err) => console.error(err))

    }
    render(): React.ReactNode {
        const { email, password } = this.state
        return (
            <React.Fragment>
            <div
            style={{
                position: 'absolute', 
                left: '50%', 
                top: '50%',
                transform: 'translate(-50%, -50%)'
                }}
            >
            <div>
              <TextField
                id="email"
                name="email"
                label="Type Email..."
                value={email}
                onChange={this.handleChangeEmail}
              />
              </div>
              <div>
              <TextField
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={this.handleChangePassword}
              />
              
              </div>
               
              {/* Material Button */}
               <div>
              <Button  variant="contained" color="primary" style={{ marginLeft: 10 }} onClick={this.createLoginRequest}>
                Login
              </Button>
              </div>
            </div>
            </React.Fragment>
          );
      
        /*
        return (
            <div>
                <div>
                    <label>Email</label>
                    <input 
                    type="text"
                    name="email"
                    value={email}
                    onChange={this.handleChangeEmail}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input 
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChangePassword}
                    />
                </div>
                <div>
                    <button onClick={this.createLoginRequest}>Login</button>
                </div>
            </div>
        )
    */
    }
}

export default Login;