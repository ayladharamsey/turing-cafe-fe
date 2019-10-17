import React from 'react';
import { shallow } from 'enzyme'
import Form from './Form';
import { isJSXEmptyExpression } from '@babel/types';

describe('Form', () => {
    let wrapper, mockEvent;

    beforeEach(() => {
        wrapper = shallow(<Form addBooking = {jest.fn} />)
        mockEvent = {target: { name: 'name', value: 'Ayla'}}
    })

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should have a default state', () => {
        expect(wrapper.state()).toEqual({
            name: '',
            date: '',
            time: '',
            number: 0,
        });
    });

    it('should call handleChange upon change', () => {
        wrapper.instance().handleChange = jest.fn();
        wrapper.instance().forceUpdate();
        wrapper.find('.name').simulate('change', mockEvent);
        expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockEvent);
    });

    it('should update state upon change', () => {
        expect(wrapper.state('name')).toEqual('');
        wrapper.instance().handleChange(mockEvent);
        expect(wrapper.state('name')).toEqual('Ayla')
    });

    it('should call handleSubmit upon click', () => {
        wrapper.instance().handleSubmit = jest.fn();
        wrapper.instance().forceUpdate();
        wrapper.find('button').simulate('click', mockEvent);
        expect(wrapper.instance().handleSubmit).toHaveBeenCalledWith(mockEvent);
    });

})