import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'

const New=(props)=> {
   const [articles, setArticles] = useState([])
   const [page, setPage] = useState(1)
   const [totalResults, setTotalResults] = useState(0)
  
   const updateNews = async() => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=74cf266124494b21814776ba99bfd05f&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(parseData.articles)
    setTotalResults(parseData.totalResults)

  }
 
   useEffect(() => {
    updateNews();
   })
  const handlePrevClick = async () =>{
   setPage(page-1)
   updateNews();
  }
  const handleNextClick = async () =>{
    setPage(page+1)
    updateNews();
  }

    return (
      <div className="container my-3">
        <h2 className='text-center' style={{margin: '35px 0px'}}>Top Headlines</h2>
        <div className="row mt-6">
        {(articles || []).map((element)=>{
            return <div className="col-md-4" key= {element.url}>
             <Newsitem  title={element.title?element.title.slice(0,45):""} desc = {element.description?element.description.slice(0,88):""} imageUrl = {element.urlToImage} newsurl = {element.url}/>
             </div>
          })} 
        </div>
        <div className = "container d-flex justify-content-between">
         <button disabled = {page<=1} type="button" className = "btn btn-dark" onClick={handlePrevClick}> &larr; Previous</button>
         <button disabled = {page + 1 > Math.ceil(totalResults/20)} type="button" className = "btn btn-dark" onClick={handleNextClick}> Next &rarr;</button>
        </div>
      </div>
    )
        }    
New.defaultProps = {
  category: 'general',
}

New.propType={
category: PropTypes.string,
}
export default New
 