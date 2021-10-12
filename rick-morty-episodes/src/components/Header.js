import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
	render() {
		return (
			<Navbar bg="dark" variant="dark" sticky="top">
				<Container>
					<Nav className="me-auto">
						<Navbar.Brand href="/">
							<img
								alt="Rick&Morty Logo"
								src="https://toppng.com/uploads/preview/rick-and-morty-png-pic-rick-and-morty-portrait-11563650201fromcucwez.png"
								height="50"
								className="d-inline-block "
							/>{" "}
							React - Rick & Morty
						</Navbar.Brand>
						<Nav.Link>
							<NavLink className="characters-link" to="/characters-all">
								Characters
							</NavLink>
						</Nav.Link>
						<Nav.Link>
							{" "}
							<NavLink className="locations-link" to="/locations-all">
								Locations
							</NavLink>
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		);
	}
}
