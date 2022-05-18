import React from "react";

function ContentView( props ) {
    return (
        <div className="modal">
            <h4>{ props.postTitle[props.postIdx] }</h4>
            <p>날짜다</p>
            <p>상세내용</p>
        </div>
    )
}
export default ContentView ;