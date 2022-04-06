import React from 'react' 
import {render, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ContactForm from '..'
// import { validateEmail } from '../../utils/helpers';

afterEach(cleanup)

describe('Contact Component', ()=> {
    it('renders', ()=> {
        const {getByTestId} = render(<ContactForm/>)
        expect(getByTestId('contact')).toHaveTextContent('Contact Me')
        expect(getByTestId('submit')).toHaveTextContent('Submit')
    })
    it('matched snapshot DOM node structure', ()=> {
        const {asFragment}= render(<ContactForm/>)
        expect(asFragment()).toMatchSnapshot()
    })
   
})