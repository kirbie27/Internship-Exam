import Tag from './tag.js';

/*
  A contiainer for the tags.
*/

function Tags(props) {
    let tags = props.emailTags;
    let mw = props.tagsWidth;
    let grow = props.emailGrow;
    const tagsStyle = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "flex-start",
        gap: "0.5rem",
        flex: grow === undefined ? "1": grow,
        maxWidth: mw === undefined ? "10rem": mw,
        justifyContent: "right"
    };

    return(
        <div style = {tagsStyle}>
        {tags.map ( tag => {
          return(
            <Tag tagContent = {tag}/>
          )
        })}
        </div>
    );
}

export default Tags;