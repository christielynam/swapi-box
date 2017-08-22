import React from 'react';

const Scroll = ({data}) => {
  const randomIndex = Math.floor(Math.random() * (7 - 0 + 1))
  const text = data[randomIndex].opening_crawl
  return (
    <div className='scroll'>
      <p>{text}</p>
    </div>
  )
}

export default Scroll;
