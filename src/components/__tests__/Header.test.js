import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
it("Should test if header component loaded with Login button", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                 <Header/>
            </Provider>     
        </BrowserRouter>
   
    );

    const login = screen.getByText("Login");

    expect(login).toBeInTheDocument();

});

it("Should render cart with 0 items in header component", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                 <Header/>
            </Provider>     
        </BrowserRouter>
   
    );

    const cartItems = screen.getByText("Cart-(0 Items)");

    expect(cartItems).toBeInTheDocument();

});

it("Should change login button to logout on click", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                 <Header/>
            </Provider>     
        </BrowserRouter>
   
    );

    const loginButton = screen.getByRole("button",{name: "Login"})
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button",{name: "logout"})


    expect(logoutButton).toBeInTheDocument();

});