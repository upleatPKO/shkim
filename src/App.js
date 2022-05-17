import { useState } from 'react';
import './App.css';

function App() {

  let blogTitle = 'React Blog' ;
  let [postTitleArr,    setPostTitle      ] = useState(['20년전 오늘', '요즘 할만한 게임', '디아블로 곧 출시']) ;
  let [likeValueArr,    setLikeValue      ] = useState([0, 0, 0]) ;
  let [modal,           setModal          ] = useState(false) ;
  let [selectedPostIdx, setSelectedPostIdx] = useState(0) ;

  let inputValue = '';

  
  function changePostTitle() {  // 글 제목 변경
    let tempArr = [...postTitleArr] ;
    tempArr[0] = '30년전 오늘' ;
    setPostTitle(tempArr) ;
  }
  function sortPostTitle() { // 제목 정렬
    let tempArr = [...postTitleArr] ;
    tempArr.sort() ;
    setPostTitle(tempArr) ;
  }
  function likeValueUp( idx ) { // 좋아요 +1
    let tempArr = [...likeValueArr] ;
    tempArr[idx] = tempArr[idx] + 1 ;
    setLikeValue( tempArr ) ;
  }
  function showHideModal() { // 모달(?) 보여줄까? 말까?
    let isView = modal ? false : true ;
    setModal(isView) ;
  }
  function selectedPost( idx ) { // 글 선택
    setSelectedPostIdx(idx) ;
  }

  function addPost() { // 글 추가
    // 글추가
    let tempArr = [...postTitleArr] ;
    tempArr.unshift(inputValue) ;

    // 라이크 수 추가
    let likeTempArr = [...likeValueArr] ;
    likeTempArr.unshift(0) ;

    setPostTitle(tempArr) ;
    setLikeValue(likeTempArr) ;
  }

  function deletePost( idx ) { // 글 삭제
    let tempPostArr = controlArr( postTitleArr, idx ) ;
    let tempLikeArr = controlArr( likeValueArr, idx ) ;
    setPostTitle(tempPostArr) ;
    setLikeValue(tempLikeArr) ;
    
  }
  function controlArr( arr, idx ) { // 선택 항목 제외한 나머지 항목 재배열 -> 배열 삭제 함수 존재 하네 -> 레퍼런스 보자 -> tempArr.splice(인덱스, 삭제할 개수)
    let tempArr = [...arr] ; // 배열 복제
    let rtnArr  = [] ;       // 리턴 배열
    
    for ( let i = 0 ; i < tempArr.length ; i ++ ) {
      if ( i !== idx ) {
        rtnArr.push(tempArr[i]) ;
      }
    }
    return rtnArr ;
  }

  return (
    <div>
      <div className='black-nav'>
        <h4>{ blogTitle }</h4>
      </div>
      <button onClick={ ()=> { changePostTitle();} }>제목 변경</button>
      <button onClick={ ()=> { sortPostTitle();  } }>정렬 - 라이크 수 맞출려면 2차배열 필요 할듯</button>
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
              <button onClick={ ()=> { deletePost(i); } }>delete</button>
              <p>5월 2일 발행</p>
            </div>
          )
        })
      }

      <input onChange={ (e)=>{ inputValue = e.target.value } }></input><button onClick={ ()=> { addPost() ;} }>글추가</button>

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
