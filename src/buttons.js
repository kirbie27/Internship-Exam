//a predefined function for the buttons that will be used
//in the application, also contains props values that can be modified
//and used.

function Button(props){
    let outline = props.outline;
    let bg = props.bg;
    let iconColor = props.iconColor;
    let contentColor = props.contentColor;
    let br = props.borderRadius;
    let mh = props.maxHeight;
    let Delete = props.deleteFunction === undefined ? null : props.deleteFunction;
    const buttonStyle = {
        textTransform: "uppercase",
        maxHeight: props.maxHeight === undefined ? "0.9rem" : mh,
        borderRadius: props.borderRadius === undefined ? "3px" : br,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.4rem",
        padding: "0.3rem 0.6rem 0.3rem 0.6rem",
        fontSize: "1rem",
        outline: props.outline === undefined ? "0.2px solid black" : outline,
        backgroundColor: props.bg === undefined ? "transparent" : bg
    };

    const iconStyle = {
        color: props.bg === undefined ? "black" : iconColor
    }

    const contentStyle = {
        color: props.bg === undefined ? "black" : contentColor
    }

    return(
        <div onClick = {Delete} style = {buttonStyle} className = "buttons">
            <p style = {contentStyle}>
                {props.name}
            </p>
            <p className = "buttonIcon" style = {iconStyle}>
                {props.icon}
            </p>
        </div>
    );
}

export default Button;