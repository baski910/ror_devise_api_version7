import * as React from "react";
import { Link } from "react-router-dom"

type CurUser = {
    id: number,
    email: string,
    jti: string,
    created_at: string,
    updated_at: string
}



class CurrentUser extends React.Component<{},{}> {
    
    currentuser: CurUser
    
    createCurrentUserRequest = (event: any) => {
        //let cur_user: any = {}
        let requestHeaders = {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token")
        }
        /*
        const cur_user = async (): Promise<CurUser> =>{
            const request = await fetch("http://localhost:3000/current_user")
            const data = await request.json()
            return data;
        }
        */
        
        fetch("http://localhost:3000/current_user",{
            method: "get",
            headers: requestHeaders,
        })
        .then((res)=> {
            //console.log(res.json())
            this.currentuser = res.json();
            console.log(this.currentuser.id)
            
        })
        
    }
    render(): React.ReactNode {
        return (
            <div>
                <Link to='#' onClick={this.createCurrentUserRequest}>Current User</Link>
            </div>
        )
    }
}

export default CurrentUser;