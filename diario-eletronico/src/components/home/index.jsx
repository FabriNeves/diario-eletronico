import React from "react";
import Header from "../header";
import Menu from "../header/header-menu";
import FormHeader from "../header/header-form";

export default props => {
    return(
        <div>
            <Header/>
            <Menu/>
            <FormHeader/>
            
        </div>
    )
}