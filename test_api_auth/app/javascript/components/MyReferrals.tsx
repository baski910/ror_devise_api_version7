import * as React from "react";
import axios from "axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

type Referral = {
    id: number
    email: string
    content: string
    user_id: number
}
type arr = {
    items: Referral[]
}


class MyReferrals extends React.Component<{},{}>{
    state: arr = {
        items: []
    }

    curItems: Referral[]

    componentDidMount(){
        window.addEventListener('load',this.getMyReferrals)
    }
    getMyReferrals = async (event: any) => {
        let requestHeaders = {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token")
        }
        const response = await axios.get<Referral[]>("http://localhost:3000/myreferrals",{
            method: "get",
            headers: requestHeaders
        })

        this.curItems = response.data
        console.log(this.curItems)
        this.setState((state)=>({
            items: this.curItems
        }))
        /*
        .then((res)=>res.json())
        .then(res =>{
            return res as Referral[]
        })
        */
    }
    /*
    updateReferrals = () => {
        this.setState((state) => ({
            items: this.getMyReferrals()
        }))
        console.log(this.state)
    }
    */
    render(): React.ReactNode {
        const { items } = this.state
        return (
                                 
    <TableContainer component={Paper}>
     <Table aria-label="simple table">
       <TableHead>
         <TableRow>
           <TableCell>S.No</TableCell>
           <TableCell align="left">Email</TableCell>
           <TableCell align="left">Content</TableCell>
           
         </TableRow>
       </TableHead>
       <TableBody>
         {items.map(({id,email,content,user_id}) => (
           <TableRow key={id}>
             <TableCell component="th" scope="row">
               {id}
             </TableCell>
             <TableCell align="left">{email}</TableCell>
             <TableCell align="left">{content}</TableCell>
            </TableRow>
         ))}
       </TableBody>
     </Table>
   </TableContainer>
                
            
        )
    }
}

export default MyReferrals;