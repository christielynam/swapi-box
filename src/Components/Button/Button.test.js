import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import Button from './Button';
// import ButtonMock from './ButtonMock';

describe('Button', () => {
  let wrapper;
  const mockFn = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<Button buttonText={people} className={button} num={2} btnFn={mockFn} toggleAvtive={mockFn} />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })


})
