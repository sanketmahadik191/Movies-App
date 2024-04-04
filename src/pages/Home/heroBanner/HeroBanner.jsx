import { useState } from "react"


function HeroBanner() {
   
  const [background,setBackground] =useState("");
  const [query,setQuery] =useState("");
  
  const searchQueryHandler =(e) => {
     if(e.key === "Enter" && query.length >0 ){
      
     }
  }

  return (
    <div className="heroBanner">
      <div className="wrapper">
         <div className="heroBannerContent">
            <span className="title">Welcome</span>
            <span className="subTitle">Millons Of Tv Shoes here</span>

            <div className="searchInput">
               <input 
                  type="text"
                  placeholder="Search...."
                  onKeyDown={searchQueryHandler}
                  />
                  <button>Search</button>
            </div>
         </div>
      </div>
      
    </div>
  )
}

export default HeroBanner
