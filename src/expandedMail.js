import { FaGripVertical, FaAngleDown } from "react-icons/fa";
import TimeStamp from "./timeStamp.js";
import EmailDetails from "./emailDetails.js";
import Tags from "./tags.js";

/*
    Since I don't know how to properly animate expanding rows,
    I did a brute force method of creating 2 mail componenents, 1 closed
    and 1 expanded. 
*/

function ExpandedMail(props) {
    let details = props.emailSetC;
    let ExpandFunction = props.expandFunctionC;
    let cb = props.mailCheckBox;

    const mailHeadStyle = {
        outline: "none",
        borderBottom: "2px dotted rgb(227, 227, 227)",
        minHeight: "5rem",
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        alignItems: "center",
        width: "100%"
    };
    return (
        <div className="Mail">
            <div style = {mailHeadStyle}>
                <p className="grip">
                    <FaGripVertical />
                </p>
                {cb}
                <div style={{
                    backgroundColor: 'rgb(106, 177, 121)',
                    height: "1rem",
                    width: "1rem",
                    borderRadius: "50%"
                }}>
                </div>

                <div style={{
                    backgroundColor: 'rgb(248, 248, 249)',
                    outline: '2px solid rgb(243, 243, 244)',
                    height: "2.5rem",
                    width: "2.5rem",
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0.3rem"
                }}>
                    <p style={{
                        height: "0.2rem",
                        margin: "3px",
                        fontWeight: "800"
                    }}>07</p>
                    <p style={{
                        height: "0.2rem",
                        fontSize: "0.65rem",
                    }}>JUL</p>
                </div>

                <div style={{
                    backgroundColor: 'rgb(119, 119, 119)',
                    height: "1.5rem",
                    width: "1.5rem",
                    borderRadius: "50%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0.3rem"
                }}>
                    <p style={{
                        display: "flex",
                        alignItems: "center",
                        height: "0.2rem",
                        fontSize: "0.8rem",
                        color: "white"
                    }}>KW</p>
                </div>
                <EmailDetails emailDetails={details} />
                
                <TimeStamp />
                <button onClick={ExpandFunction} className="expander" style={{
                    outline: "none",
                    backgroundColor: "transparent",
                    border: "none",
                    fontSize: "1rem",
                    color: "rgb(144,144,144)",
                    display: "flex",
                    alignItems: "center"
                }}>
                    <FaAngleDown/>
                </button>
            </div>
            <div style = {{
                display: "flex",
                flexDirection: "row",
                justifyContent: "left",
                gap: "0.2rem",
                width: "100%",
                padding: "0.5rem"
            }}>
                <div className = "EmailContent" style = {{
                    minHeight: "100%",
                    display: "flex",
                    flexDirection: "column",
                    flex: "1",
                    textAlign: "left"
                }}>
                    <p className= "mailName">
                        Sender Full Name (Placeholder)
                    </p>
                    <p>
                        {details.date}
                    </p>
                    <br/>
                    <p className= "mailContent">{details.content}</p>
                    <p>From: <p style = {{
                        display: "inline"
                    }}className= "mailName">{details.sender}</p></p>
                    <p className= "mailDate">Date: {details.date}</p>
                    <p className= "mailSubject">Subject: {details.subject}</p>
                    <p className= "mailReceiver">To: {details.receiver}</p>
                </div>
                <Tags tagsWidth = "none" emailTags={details.tags} />
            </div>

        </div>
    );

}

export default ExpandedMail;