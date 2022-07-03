import {useState } from 'react';
import ClosedMail from "./closedMail.js";
import ExpandedMail from "./expandedMail.js";

/*
    The parent function for the whole male record/row.
*/

function Mail(props) {
    let [isExpanded, setExpanded] = useState(false);
    let cbfunction = props.cbFunction;
    let cb = <input onChange = {cbfunction} type="checkbox" className = {props.emailSet.id}></input>
    const ExpandMail = () => {
        isExpanded = !isExpanded;
        setExpanded(isExpanded);

    }

    if (isExpanded) {
        return (
            <ExpandedMail mailCheckBox = {cb} emailSetC={props.emailSet}
                expandFunctionC={ExpandMail} />
        );
    }
    else {
        return (
            <ClosedMail mailCheckBox = {cb} emailSetC={props.emailSet}
                expandFunctionC={ExpandMail} />
        );
    }

}

export default Mail;