import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import CardContainer from './CardContainer';
import CardContainerMock from './CardContainerMock';

describe('CardContainer', () => {
  let wrapper;
  const mockFn = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<CardContainer cardType={CardContainerMock} setFavorite={mockFn} />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should render cards to the page', () => {

    expect(wrapper.find('Card').length).toEqual(10)
  })

  it.skip('should render a message to the page if the user clicks the view favorites button and there are no favorited cards', () => {

    //simulate click of View Favorites button
    let wrapper = []

    const message = wrapper.find('.select-favs')

    expect(wrapper.find('Card').length).toEqual(0)

    expect(message.text()).toEqual('Please select favorites...')
  })


})
