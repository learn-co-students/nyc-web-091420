import React from 'react';
import { render, screen } from '@testing-library/react'
import Header from '../Components/Header';
import App from '../App';


describe("Header", () => {
    test("Mounts to the DOM", () => {
        let { container } = render(<App />);
        expect(container.querySelector('h1')).toBeTruthy();
    });

    test("Renders props to DOM", () => {
        render(<Header text="Hello World" />);
        expect(screen.getByText("Hello World")).toBeTruthy();

    });
});
