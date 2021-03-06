import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  let wrapper;
  const mockFn = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<Button buttonText={'people'} className={'button'} num={2} btnFn={mockFn} toggleAvtive={mockFn} />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should pass through all the correct props', () => {
    expect(wrapper.props()).toHaveProperty('children', 'people')
    expect(wrapper.props()).toHaveProperty('className', 'button')
    expect(wrapper.props()).toHaveProperty('onClick')
  })
})
