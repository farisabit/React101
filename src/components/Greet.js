import React from "react"

// function Greet() {
//     return <h1>Hello Berlin</h1> 
// }

const Greet = (props) => {
    const {name, nickName} = props
    return (
        <div>
        <h1>Hello {name} a.k.a {nickName}</h1>
        {props.children}
        </div>
    )
    

}
export default Greet