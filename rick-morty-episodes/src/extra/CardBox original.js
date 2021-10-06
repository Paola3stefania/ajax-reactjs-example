import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class CardBox extends Component {
	render() {
		return (
			<div>
				<Card style={{ width: "18rem" }}>
					<Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
						<Card.Link href="#">Card Link</Card.Link>
					</Card.Body>
				</Card>
			</div>
		);
	}
}
