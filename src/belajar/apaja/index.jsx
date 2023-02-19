import React from "react";
import ClassComponent from "./Komponen";
import  FunctionalComponent  from "./Functional";

export default class Komponen extends React.Component {
    render(){
        return (
            <div>
                <ClassComponent nama='raiqi'/>
                <FunctionalComponent />
            </div>
        )
    }
} 