import React from 'react';
import { render, screen } from '@testing-library/react'
import Note from '../Components/Note';


describe("Note", () => {
    test("Mounts to DOM and renders note", () => {
        render(<Note note={{ id: 1, content: "First Note" }} />);
        expect(screen.getByText("First Note")).toBeTruthy();
    });
});