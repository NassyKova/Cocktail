import React from 'react'

export default function Product() {
  const item = {
    id: 1,
    title: "Bag",
    image: "www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita/preview"
  }
  return (
    <div>
<img src={item.image}></img>
    </div>
  )
}
