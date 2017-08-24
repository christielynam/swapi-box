import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import CardMock from './CardMock';
import Card from './Card';

describe('Card', () => {
  let wrapper;
  const mockFn = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<Card cardData={CardMock} setFavorite={mockFn} toggleActive={mockFn} />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it.skip('should render 5 items to a card', () => {

    const card = wrapper.find('.card')

    expect(card.length).toEqual(5)
  })

  it('should render a favorite button on each of the cards', () => {

    const button = wrapper.find('.favorite-btn')

    expect(button.length).toBe(1)
  })

})
