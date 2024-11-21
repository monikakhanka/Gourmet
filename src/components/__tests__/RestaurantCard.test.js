import RestaurantCard from "../RestaurantCard";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resCardMock.json";


it("Should render RestaurantCard component with prop data", ()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>);

    const name = screen.getByText("KFC")

    expect(name).toBeInTheDocument();
})