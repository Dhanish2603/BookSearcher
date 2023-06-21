import React, { Fragment } from 'react'

function Cards(item) {

  return (<Fragment>
    
    <div>image of book: <img height="100px" width = "100px" src={item.cover_img}></img></div>
    <div>author section:{item.author}</div>
    <div>cover_id section:{item.cover_id}</div>
    <div>edition_count section:{item.edition_count}</div>
    <div>first_publish_year section:{item.first_publish_year}</div>
    <div>title section:{item.title}</div>
    </Fragment>
  )
}

export default Cards