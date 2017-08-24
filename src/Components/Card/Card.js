import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ cardData, setFavorite, toggleActive, toggleFavorite }) => {
  const cardKeys = Object.keys(cardData)
  const cards = cardKeys.map((prop, i) => {
    const card = cardData[prop]

    return (
          <div key={i}>
            <h3>{prop}</h3>
            <p>{prop === 'Residents' ? returnResidents(card) : card}</p>
          </div>
    )
  })

  function returnResidents() {
    let Residents = cardData.Residents.slice()
     return Residents.map(resident => resident.name + ' ')
  }

  return (
    <article className='card'>
      <button className='favorite-btn' onClick={(e) => (setFavorite(cardData), toggleFavorite(e.currentTarget))}>Favorite</button>
      { cards }
    </article>
  )
}

Card.propTypes = {
  cardData: PropTypes.object.isRequired,
  setFavorite: PropTypes.func,
  toggleActive: PropTypes.func
}

export default Card;
