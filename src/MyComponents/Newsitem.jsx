import React from 'react'

const Newsitem =({title,desc,imageUrl,newsurl}) =>{
  return (
    <div>
       <div>
                <div class="card">
                    <img src={imageUrl} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{title}...</h5>
                        <p class="card-text">{desc}...</p>
                        <a rel="noreferrer"href={newsurl} target="_blank" class="btn btn-dark">Read more</a>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Newsitem
