import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    // width: 100%;
    gap: 4px;

    select {
        height: 50px;
        // width: 100%;
        border-radius: 4px;
        font-family: 'Gilroy-Medium';
        font-size: 10.2375px;
        line-height: 12px;
        color: #373737;
        padding: 3px;
        background-color: #ffffff;
        border: 1px solid #e5e5e5;
        outline: none;
        cursor: pointer;
    }
`;

interface SelectProps {
    title?: string;
    name: string;
    options: string[];
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>)=>void;

}

const Select = (props: SelectProps) => {
    const { title, options, name, value, handleChange} =
        props;
    return (
        <Container className='form-group'>
            <label htmlFor={name}>
                {title}
            </label>
            <select
                value={value}
                onChange={handleChange}
                className='form-select'
            >
                {options.map((value) => {
                    return (
                        <option key={value} value={value} label={value}>
                            {value}
                        </option>
                    );
                })}
            </select>
        </Container>
    );
};

export default Select;
