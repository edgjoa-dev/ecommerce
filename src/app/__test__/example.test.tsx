import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import HomePage from '../page'


describe('Home', () => {
    // afterEach(() => {
    //     cleanup() // Limpia el DOM después de cada test
    // })

    //Renderizar el componente HomePage antes de cada test
    beforeEach(() => {
        render(<HomePage />)
    })

    test('renders the home page', () => {

        // debug document
        screen.debug()
        expect(true).toBe(true)
    })

    // Validar el renderizado de el h1 en la página

    test('renders the h1 in the page', () => {

        const head1 = screen.getByRole('heading', {
            level: 1,
            name: /Welcome to the Home Page/i,
        })

        expect(head1).toBeInTheDocument()
    })


    test('renders the main content area', () => {
        const subtitle = screen.getByRole('heading', {
            level: 3,
            name: /This is the main content of the home page/i
        })

        expect(subtitle).toBeInTheDocument()
    })

    test('should render the paragraph text', () => {
        const paragraph = screen.getByText('This is the home page of our application.')
        expect(paragraph).toBeInTheDocument()
        expect(paragraph.tagName).toBe('P') // Verifica que sea un elemento <p>
    })

})