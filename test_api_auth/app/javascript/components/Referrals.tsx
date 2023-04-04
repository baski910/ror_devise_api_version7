import * as React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

type CounterProps = {
    rcreds: {
        param1: string,
        param2: string,
        param3: number
    }
}
type CounterState = {
    email: string,
    content: string
    user_id: number
}

type CurUser = {
    id: number,
    email: string,
    jti: string,
    created_at: string,
    updated_at: string
}

class Referrals extends React.Component<CounterProps, CounterState>{
    state: CounterState = {
        email: "Email",
        content: "Type your text here",
        user_id: 0
    }

    currentuser: CurUser

    componentDidMount = () => {
        this.setState((state) =>({
            email: this.props.rcreds.param1,
            content: this.props.rcreds.param2,
            user_id: this.props.rcreds.param3
        }))
        window.addEventListener('load',this.getCurrentUser)
    }

    getCurrentUser = async (event: any) => {
        let requestHeaders: any = {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token")
        }
        const response = await axios.get<CurUser>("http://localhost:3000/current_user",{
            method: "get",
            headers: requestHeaders,
        })

        this.currentuser = response.data
        console.log(this.currentuser.id)
        this.setState({
            user_id: this.currentuser.id
        })
        /*
        .then((res)=> {
            //console.log(res.json())
            this.currentuser = res.json() as CurUser;
            console.log(this.currentuser.id)
            
        })
        */
    }

    handleEmailChange = (event: any) => {
        const { value } = event.target
        this.setState({
            email: value
        })
    }
    handleContentChange = (event: any) => {
        const { value } = event.target
        this.setState({
            content: value
        })
    }
    createReferralRequest = (event: any) => {
        
        let requestHeaders: any = {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token")
        }

        //const api = async () =>{
        fetch("http://localhost:3000/referrals/new",{
            method: "post",
            headers: requestHeaders,
            body: JSON.stringify(this.state)
        })
        .then((res)=> {
            console.log(res.json())
        })
        
        
        //}
    }
    render(): React.ReactNode {
        const { email, content,user_id } = this.state
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
                <TextField
                id="email"
                name="email"
                label="Type Referral Email..."
                value={email}
                onChange={this.handleEmailChange}
                />
                </div>
                <div>
                <TextField
                id="content"
                name="content"
                label="Type your message..."
                value={content}
                onChange={this.handleContentChange}
                />
                </div>
                <div>
                <TextField
                id="user_id"
                name="user_id"
                type="hidden"
                value={user_id}
                />
                </div>
                <div>
                    <Button onClick={this.createReferralRequest}>Create</Button>
                </div>
            </div>
        )
    }
}

export default Referrals;