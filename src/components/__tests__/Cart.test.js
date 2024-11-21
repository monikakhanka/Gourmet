import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA from "../mocks/resMenuMock.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("Should load restaurant menu component", async() =>{

    await act(async() => render(
    <Provider store={appStore}>
        <BrowserRouter>
            <Header/>
            <RestaurantMenu/>
            <Cart/>
        </BrowserRouter>
    </Provider>));

    const accordionHeader = screen.getByText("Recommended (20)");
    fireEvent.click(accordionHeader);

    const resItems = screen.getAllByTestId("resItems");
    expect(resItems.length).toBe(20);

    const addBtns = screen.getAllByRole("button", {name: "ADD+"});
    fireEvent.click(addBtns[0]);

    const cart = screen.getByText("Cart-(1 Items)");
    expect(cart).toBeInTheDocument();

    fireEvent.click(addBtns[1]);
    expect(screen.getByText("Cart-(2 Items)")).toBeInTheDocument();

    const clearCartBtn = screen.getByRole("button", {name: "Clear Cart"});
    fireEvent.click(clearCartBtn);

    expect(screen.getByText("Cart-(0 Items)"));
    expect(screen.getByText("Your cart is empty. Please add items to the cart")).toBeInTheDocument();
    

});
