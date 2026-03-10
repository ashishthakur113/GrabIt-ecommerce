import React, { useEffect, useRef, useState } from 'react'
import Products from '../product'
import Pagination from './Pagination'
import SEO from '../../Components/SEO'

export default function Product_Main({ enableSEO = true }) {
  const [products, setProducts] = useState([])
  const [currPage, setCurrPage] = useState(1)
  const [prodPerPage] = useState(12)

  const productRef = useRef(null)

  useEffect(() => {
    const fetchProd = async () => {
      const resp = await fetch("/data.json")
      const data = await resp.json()
      setProducts(data.products)
    }
    fetchProd()
  }, [])

  useEffect(() => {
    productRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }, [currPage])

  const lastProdIndex = currPage * prodPerPage
  const firstProdIndex = lastProdIndex - prodPerPage
  const currProd = products.slice(firstProdIndex, lastProdIndex)

  return (
    <div ref={productRef} className='m-5'>
      {enableSEO && (
        <SEO 
          title="Products | Grabit"
          description="Browse trending products on Grabit. Explore categories, discover top-rated items, and find the best deals across our product collection."
        />
      )}
      <Products products={currProd} />
      <Pagination
        totalProd={products.length}
        prodPerPage={prodPerPage}
        currPage={currPage}
        setCurrPage={setCurrPage}
      />
    </div>
  )
}