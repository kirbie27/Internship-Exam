/*
    A button like component that is specifically for the tags.
    I made it a component since I want them to have the same max heights.
*/

function Tag(props){
    const tagStyle = {
        textTransform: "capitalize",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0.1rem 0.4rem 0.1rem 0.4rem",
        maxHeight: "0.8rem",
        backgroundColor: "rgb(243, 250, 251)",
        color: "rgb(122, 188, 210)",
        outline: "0.2px solid rgb(122, 188, 210)",
        fontSize: "0.7rem",
        borderRadius: "3px"

    };

    return (
        <div style = {tagStyle}>
            <p>{props.tagContent}</p>
        </div>
    );
}

export default Tag;