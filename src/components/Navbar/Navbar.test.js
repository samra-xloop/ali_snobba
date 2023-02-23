import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./Navbar";

describe("Navbar component", () => {
    test("Navbar renders correctly", () => {
        // Arrange
        render(<Navbar />);
        
        // Act
        const logoImage = screen.getByRole("img", { name: "logo" });
        const heading = screen.getByRole("heading", { name: /Ali Snobba/i });
      
        // Assert
        expect(logoImage).toBeInTheDocument();
        expect(heading).toBeInTheDocument();
      });
   
});
