import React from 'react'
import { shallow } from 'enzyme'
import Header from '../../components/Header'

test('should header component render correctly', () => {
    const wrapper = shallow(<Header/>)
    expect(wrapper).toMatchSnapshot()
})