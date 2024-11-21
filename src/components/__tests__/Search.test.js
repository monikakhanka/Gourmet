import Body from "../Body";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resListMock.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";


// mocking the fetch function
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }})
});

it("Should search res list for lunch text input", async ()=>{

    await act(async() => render(<BrowserRouter><Body/></BrowserRouter>));

    const cardsBeforeSeacrh = screen.getAllByTestId("resCard");

    expect(cardsBeforeSeacrh.length).toBe(8);

    const searchBtn = screen.getByRole("button", {name: "Search"});

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, {target: {value: "lunch"}});

    fireEvent.click(searchBtn);

    const cardsAfterSearch = screen.getAllByTestId("resCard");
    
    expect(cardsAfterSearch.length).toBe(1); 
});

it("Should filter top rated restaurants", async ()=>{

    await act(aysnc => render(<BrowserRouter><Body/></BrowserRouter>));

    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(8);

    const topRatedButton = screen.getByRole("button", {name: "Top Rated Restaurants"});

    fireEvent.click(topRatedButton);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(5);



});