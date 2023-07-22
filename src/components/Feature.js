import React from 'react'
import './styles/feature.css'
const Feature = ({url,title,text,btnText}) => {
  return (
    <div className='feature'>
      <img src={url} alt='image' />
      <article>
        <h2>{title}</h2>
        <p>{text}</p>
        <button className='btn'>{btnText}</button>
      </article>
    </div>
  )
}

export default Feature
