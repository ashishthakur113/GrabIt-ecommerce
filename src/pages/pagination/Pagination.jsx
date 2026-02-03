import React from 'react'

export default function Pagination({totalProd , prodPerPage , setCurrPage,currPage}) {
  
   let pages =[];

   for(let i =1 ;i<=Math.ceil(totalProd/prodPerPage); i++){
    pages.push(i)
   }
  
    return (
    <div style={{display:"flex" ,justifyContent:"center" , gap:"10px" }}>
        {
            pages.map((page,index)=>{
                return <button key={index} style={{padding:"6px  20px" ,cursor:"pointer" , borderRadius:"4px" , backgroundColor: page === currPage ? "yellow" :"white" }} onClick={()=>setCurrPage(page)}>
                    {page}
                </button>
            })
        }
        
    </div>
  )
}
