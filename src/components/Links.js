import react from "react";

function Links(props){
    return(
        <div id="links">
        <h3>Links</h3>
        <a href= {props.github}>Github</a>
        <a href= {props.linkedin}>Linkedin</a>
        </div>
    )
}
export default Links;