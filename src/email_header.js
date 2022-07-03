import './EmailHeader.css';
import Pagination from "./paginations.js";
import Button from './buttons.js';
import {FaSave, FaTrash} from "react-icons/fa";
import {FiFilter} from "react-icons/fi";

/*
    function for the header part of the application
*/

function EmailHeader(props){
    let Delete = props.deleteFunction;
    
    return (
        <header>
            <input type = "checkbox" id = "headerCB"></input>
            <div className = "placeHolderButtons">
                <Button name = "save" 
                        icon = {<FaSave/>}
                        outline = "0.2px solid rgb(106, 177, 121)"
                        bg = "rgb(237, 248, 245)"
                        iconColor = "rgb(106, 177, 121)"
                        contentColor = "rgb(106, 177, 121)"/>
                <Button name = "manage filters" icon = {<FiFilter/>}
                        outline = "0.2px solid rgb(224, 224, 223)"
                        bg = "rgb(248, 248, 249)"
                        iconColor = "rgb(78, 78, 78)"
                        contentColor = "rgb(78, 78, 78)"/>
            </div>
            <div className = "line">
            
            </div>
            <div className = "workingButtons">
                <Button name = "delete" icon = {<FaTrash/>}
                        outline = "0.2px solid rgb(221, 69, 61)"
                        bg = "rgb(252, 241, 241)"
                        iconColor = "rgb(221, 69, 61)"
                        contentColor = "rgb(221, 69, 61)"
                        deleteFunction = {Delete}/>
            </div>
            <Pagination/>
        </header>
    ); 
}

export default EmailHeader;