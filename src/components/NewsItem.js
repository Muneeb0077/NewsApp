import React from 'react'

const NewsItem =(props)=>{
  
    let { title, description, imageUrl, newsUrl, author, date,source } = props;
    return (
      <div className="my-3">
        <div className="card" >
          <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:'0'}}>
        <span className="badge rounded-pill bg-danger">
              {source}
            </span>
            </div>
          <img src={imageUrl ? imageUrl : "https://images.hindustantimes.com/tech/img/2023/07/21/1600x900/Windows-11_1689917138764_1689917138998.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  
}

export default NewsItem
