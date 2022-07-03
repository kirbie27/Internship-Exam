import { FaRegClock } from "react-icons/fa";
/*
    A placehollder component for the time seen on the mails.
*/

function TimeStamp(props){
    const stampStyle = {
        textTransform: "capitalize",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0.15rem 0.3rem 0.15rem 0.3rem",
        maxHeight: "0.6rem",
        backgroundColor: "rgb(253, 249, 238)",
        color: "rgb(245, 205, 103)",
        outline: "0.2px solid transparent",
        fontSize: "0.6rem",
        borderRadius: "3px",
        lineHeight: "1",
        gap: "0.2rem"

    };

    return (
        <div style = {stampStyle}>
            <p><FaRegClock/></p>
            <p>1 min</p>
        </div>
    );
}

export default TimeStamp;