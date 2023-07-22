import React from 'react'
import './styles/apartmentInfo.css'
const ApartmentInfo = (props) =>
 {
    const {title,subTitle} = props;
  return (
    <div className='aptInfo'>
      <h1>{title}</h1>
      <h3>{subTitle}</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam unde hic quaerat autem, accusantium libero cupiditate, <span>sunt excepturi</span> distinctio delectus optio soluta nulla qui enim. Amet eligendi ut delectus, ab, alias reiciendis fugit possimus minima aspernatur vitae ducimus quae nostrum. Iusto, debitis ad architecto voluptatibus velit ducimus quos labore voluptatem?</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum eum, harum at aut facilis quod quis recusandae ipsum, facere ex eligendi numquam deleniti doloribus ea, labore aliquam! <span>Exercitationem</span> consequatur nulla velit sunt molestias? <span>Maiores assumenda</span>, doloribus quae nobis inventore tempora dolor saepe, atque ipsam iusto corporis iure accusantium dolorem numquam quisquam necessitatibus est facilis harum porro fugit quis ipsa itaque ab suscipit! Magni deleniti veniam expedita voluptates? Odio incidunt assumenda harum a fugiat suscipit libero eius saepe consectetur dolor amet aspernatur accusantium voluptatum, sequi possimus cumque modi illo, voluptas fuga ipsum officiis? Corrupti, ullam? Dolorum inventore incidunt suscipit excepturi alias.</p>
    </div>
  )
}

export default ApartmentInfo
