import './EmailDetails.css';

/*
    This function pertains to the big text that can be easily found
    on the middle part of the mail row.
*/

function EmailDetails(props) {
    let details = props.emailDetails;
    const EDStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        textAlign: "left"
    };

    return(
        <div className = "emailDetails" style = {EDStyle}>
            <p className = "emailSubject">{details.subject+" "+details.id}</p>
            <div style = {{
                display: "flex",
                flexDirection: "row",
                gap: "0.2rem",
                flexWrap: "wrap"
            }}>
                <p className = "sendDetails">{details.sender}</p>
                <p className = "sendDetails">|</p>
                <p className = "sendDetails">{details.date}</p>
            </div>
        </div>
    
    );
}
        
export default EmailDetails;