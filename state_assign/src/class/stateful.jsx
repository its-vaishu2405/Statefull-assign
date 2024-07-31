import React from "react";
class stateful extends React.Component
{
    constructor()
    {
        super();
        this.state ={
            fullname:"Vaishnavi Mahajan",
        };
    }
    render()
    {
        return(
            <div>
                <h1>This is class component</h1>
                <h1>My name is{this.state.fullname}</h1>
            </div>
        );
    }
}
export default stateful;