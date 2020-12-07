import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { apiResponse } from '../api'
import DogCard from '../Components/DogCard';

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe("Dog Card", () => {
    it("renders with dog's name", () => {
        act(() => {
            render(<DogCard dog={apiResponse[0]} />, container);
        });
        expect(container.querySelector("h2").textContent).toBeTruthy();
    });
    it("renders with dog's image", () => {
        act(() => {
            render(<DogCard dog={apiResponse[0]} />, container);
        });
        expect(container.querySelector("img").src).toBeTruthy();
    });
    it("toggles bark when clicked", () => {
        act(() => {
            render(<DogCard dog={apiResponse[0]} />, container);
        });
        let button = container.querySelector("button");
        button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        expect(container.querySelector("h3")).toBeTruthy();
        button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        expect(container.querySelector("h3")).toBeFalsy();
    });
})

