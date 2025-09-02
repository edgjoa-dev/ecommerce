import { render, screen } from '@testing-library/react'
import HomePage from '../page';

describe('Test en HomePage.tsx', () => {
    test('should show title in the document', () => {
        render(<HomePage />)
        screen.debug()

        const title = screen.getByText('Titulo')

        expect(title).toBeInTheDocument()

    })
});