import React from "react";

function ContentsView( props ) {
    return (
        <div className="modal">
            <h4>{ props.postTitle[props.postIdx] }</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}
export default ContentsView ;