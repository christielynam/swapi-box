import React from 'react';
import PropTypes from 'prop-types';
import './Scroll.css';
import Button from '../Button/Button';
import './Scroll.css';

const Scroll = ({ data, opening, btnFn, toggleActive, numFav, errorStatus }) => {
  const text = data[opening].Opening
  const filmTitle = data[opening].Title
  const releaseDate = data[opening].Release

  return (
    <div>
      <div className='crawl-container'>
        <div className='fade'>
          <h1 className='title'>SWAPI-BOX</h1>
          <Button className={' button favorite'} toggleActive={toggleActive} buttonText={'View Favorites ' +   numFav} btnFn={btnFn} />
        </div>
        <h2 className='error'>{errorStatus}</h2>
        <div className='star-wars'>
          <div className='crawl'>
            <p className='crawl-text'>{text}</p>
            <p className='film-title'>{filmTitle}</p>
            <p className='release-date'>{releaseDate}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

Scroll.propTypes = {
  data: PropTypes.array.isRequired,
  opening: PropTypes.number.isRequired,
  btnFn: PropTypes.func,
  toggleActive: PropTypes.func,
  numFav: PropTypes.number
}

export default Scroll;
