import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page Test cases",  () => {
    it("should load contact us component on DOM", () => {
        // render component to jsdom
        render(<Contact/>);
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    
    });
    
    
    
    it("should load button inside contact component on DOM", () => {
        // render component to jsdom
        render(<Contact/>);
    
        const button = screen.getByText("Submit");
    
        expect(button).toBeInTheDocument();
    
    })
    
    it("should load the input in page", ()=>{
        render(<Contact/>);
    
        const input = screen.getAllByPlaceholderText("name");
    
        expect(input).toBeInTheDocument;
    
    });
    
    it("should load 2 input boxes on the contact component", ()=>{
        render(<Contact/>);
    
        const inputs = screen.getAllByRole("textbox");
    
        expect(inputs.length).toBe(2);
    });
})
