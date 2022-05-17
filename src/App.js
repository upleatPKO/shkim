import { useState } from 'react';
import './App.css';

function App() {

  let blogTitle = 'React Blog' ;
  let [postTitleArr,    setPostTitle      ] = useState(['20년전 오늘', '요즘 할만한 게임', '디아블로 곧 출시']) ;
  let [likeValueArr,    setLikeValue      ] = useState([0, 0, 0]) ;
  let [modal,           setModal          ] = useState(true) ;
  let [selectedPostIdx, setSelectedPostIdx] = useState(0) ;

  
  function changePostTitle() {
    let tempArr = [...postTitleArr] ;
    tempArr[0] = '30년전 오늘' ;
    setPostTitle(tempArr) ;
  }
  function sortPostTitle() {
    let tempArr = [...postTitleArr] ;
    tempArr.sort() ;
    setPostTitle(tempArr) ;
  }
  function likeValueUp( idx ) {
    let tempArr = [...likeValueArr] ;
    tempArr[idx] = tempArr[idx] + 1 ;
    setLikeValue( tempArr ) ;
  }
  function showHideModal() {
    let isView = modal ? false : true ;
    setModal(isView) ;
  }
  function selectedPost( idx ) {
    setSelectedPostIdx(idx) ;
  }

  return (
    <div>
      <div className='black-nav'>
        <h4>{ blogTitle }</h4>
      </div>
      <button onClick={ ()=> { changePostTitle();} }>제목 변경</button>
      <button onClick={ ()=> { sortPostTitle();  } }>정렬</button>
      <button onClick={ ()=> { showHideModal();  } }>Modal</button>

      {/* <div className='list'>
        <h4>{postTitleArr[0]} | {likeValueArr[0]}</h4>
        <button onClick={()=>{ likeValueUp(0)}}>Like</button>
        <p>5월 13일 발행</p>
      </div>
      <div className='list'>
        <h4>{postTitleArr[1]} | {likeValueArr[1]}</h4>
        <button onClick={()=>{ likeValueUp(1)}}>Like</button>
        <p>5월 9일 발행</p>
      </div>
      <div className='list'>
        <h4>{postTitleArr[2]} | {likeValueArr[2]}</h4>
        <button onClick={()=>{ likeValueUp(2)}}>Like</button>
        <p>5월 2일 발행</p>
      </div> */}
      {
        postTitleArr.map( function(e, i) {
          return (
            <div className='list' key={ i }>
              <h4 onClick={ ()=> { setModal(true); selectedPost(i); } }>{ postTitleArr[i] } | { likeValueArr[i] }</h4>
              <button onClick={ ()=> { likeValueUp(i); } }>Like</button>
              <p>5월 2일 발행</p>
            </div>
          )
        })
      }
      {
        modal === true ? <Modal postTitle={postTitleArr} postIdx={selectedPostIdx} /> : null
      } 
    </div>
  );
}
function Modal(props){
  return (
    <div className="modal">
      <h4>{ props.postTitle[props.postIdx] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
export default App;
