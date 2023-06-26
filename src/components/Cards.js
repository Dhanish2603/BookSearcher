import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

function Cards(item) {
const titleData = useSelector(state=>state.book.items)
function checkMate() {
  console.log(titleData);
}
  return (<Fragment>
    {/* <div>{titleData}</div>   */}
    <button onClick={checkMate}></button>   
    {/* <div>image of book: <img height="100px" width = "100px" src={item.cover_img} alt='notfound'></img></div>
    <div>author section:{item.author}</div>
    <div>cover_id section:{item.cover_id}</div>
    <div>edition_count section:{item.edition_count}</div>
    <div>first_publish_year section:{item.first_publish_year}</div>
    <div>title section:{item.title}</div> */}
    <div></div>
    </Fragment>
  )
}

export default Cards;