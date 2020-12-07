import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from "react-dom/test-utils";
import { apiResponse } from '../api';
import DogsList from '../Containers/DogsList';

let container = null;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});
afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe("Dogs List", () => {
    it('renders list of dogs', () => {
        act(() => { render(<DogsList />, container) });
        expect(container.lastChild.childNodes.length).toBe(apiResponse.length);
    });
    it('renders list of dogs dynamically', () => {
        act(() => { render(<DogsList />, container) });
        let dog = {
            id: 5,
            name: "Bilbo Waggins",
            img:
                "https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074__340.jpg",
            breed: "Mix"
        };
        apiResponse.push(dog)
        expect(container.lastChild.childNodes.length).toBe(apiResponse.length - 1);
    });
})
