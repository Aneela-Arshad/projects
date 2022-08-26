//component
// function Comp()
// {
//     return(
//         <h1>User Component</h1>

//     )
// }
// export default Comp;

//Class component
import React,{Component} from 'react'
export default class User extends Component{
    render()
    {
        return(
            <h1>Hello class component</h1>
        )
    }
}