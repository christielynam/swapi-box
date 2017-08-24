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

  it('should render a message to the page if there are no favorited cards', () => {
    wrapper = mount(<CardContainer cardType={[]} setFavorite={mockFn} />)

    const message = wrapper.find('.select-favs')

    expect(wrapper.find('Card').length).toEqual(0)

    expect(message.text()).toEqual('There are currently no favorites...')
  })

  it('should pass through all the correct props', () => {
    wrapper = mount(<CardContainer cardType={CardContainerMock} setFavorite={mockFn} />)

    expect(wrapper.node.props.cardType).toEqual(CardContainerMock);
    expect(wrapper.node.props.setFavorite).toEqual(mockFn);
  })
})
