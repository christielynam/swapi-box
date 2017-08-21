import React from 'react';

const Scroll = ({ retrieveData }) => {
  const scrollText = retrieveData('films')

  return (
    <div className='scroll'>
      <marquee>{scrollText}</marquee>
    </div>
  )
}

export default Scroll;
