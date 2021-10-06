import React, { Component } from "react";
import { Card, Container, Col, Row } from "react-bootstrap";

export default class CardList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		this.setState({ ...this.props });
	}

	// hacer que para cada prop contruya un elmento diferente.

	render() {
		return (
			// this state desctructuring e ir imprimiendo lo que se le pase por app con un routing
			<>
				<Container fluid>
					<Row>
						<Col sm>
							<Card style={{ width: "18rem" }}>
								<Card.Body>
									<Card.Link href="#">Card Link</Card.Link>
									<Card.Title>Card Title</Card.Title>
									<Card.Subtitle className="mb-2 text-muted">
										Card Subtitle
									</Card.Subtitle>
									<Card.Text>
										Some quick example text to build on the card title and make
										up the bulk of the card's content.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</>
		);
	}
}
