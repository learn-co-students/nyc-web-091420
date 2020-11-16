import React from 'react';
import { render } from '@testing-library/react'
import NotesContainer from '../Containers/NotesContainer';


describe("Notes Container", () => {
    test("Mounts to the DOM", () => {
        let { container } = render(<NotesContainer />);
        expect(container.querySelector('ul')).toBeTruthy();
    });

    test("Mounts Notes to DOM", () => {
        let { container } = render(<NotesContainer />);
        expect(container.querySelectorAll('li').length).toBe(4);
    });
});