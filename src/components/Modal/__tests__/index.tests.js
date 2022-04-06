import React from 'react' 
import {render, cleanup, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from '..'

afterEach(cleanup)

const mockToggleModal = jest.fn()
const currentPhoto= {name: 'park bench', category: 'landscape', description: 'lorem', index: 1}

describe('Modal component', ()=> {
    it('renders', ()=> {
        render(<Modal
        currentPhoto={currentPhoto}
        onClose={mockToggleModal}/>)
    })
    it('matches snapshot DOM node structure', ()=> {
        const {asFragment} = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}/>)
        expect(asFragment()).toMatchSnapshot()
    })

    describe('Click Event', ()=> {
        it('calls onClose handler', ()=> {
            const { getByText } = render(<Modal
                onClose={mockToggleModal}
                currentPhoto={currentPhoto}
              />);
              fireEvent.click(getByText('Close this modal'))
          
              expect(mockToggleModal).toHaveBeenCalledTimes(1);
        })
    })
})