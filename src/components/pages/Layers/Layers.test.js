import { screen, render } from "@testing-library/react";
import Layers from "./Layers";

describe ("test Layers component" ,()=>{
  test ("testLayers",()=>{
    render(<Layers/>)
    const testNumOfKids = screen.getByTestId("CD")
    expect(testNumOfKids).toBeInTheDocument();
  })
  expect()
})
