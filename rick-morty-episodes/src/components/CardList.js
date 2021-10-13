import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import WithData from "./WithData";

class CardList extends Component {
	render() {
		const { single, all, relpath, params, image, title, baseURL } = this.props;
		all.push(single);

		return (
			<>
				{
					<div className="d-flex flex-wrap">
						{all.map((obj) => (
							<Card style={{ width: "18rem" }} key={`single_card_${obj["id"]}`}>
								{image && <Card.Img variant="top" src={`${obj["image"]}`} />}
								<Card.Body key={`card_body_${obj["id"]}`}>
									{title && (
										<Card.Title>
											{params.includes("linkeable") ? (
												<NavLink
													key={`navlink_card_${obj["id"]}`}
													className="card-link"
													to={`${relpath}/${obj["id"]}`}
												>
													{" "}
													{obj["name"]}
												</NavLink>
											) : (
												obj["name"]
											)}
										</Card.Title>
									)}
									{Object.keys(obj)
										.filter((key) => (params.includes(key) ? key : null))
										.map((key) => (
											<>
												<Card.Text key={key}>
													{key}:
													{typeof obj[key] !== "object"
														? obj[key]
														: Object.values(obj[key]).map((newKey) =>
																params.includes("linkeable") ? (
																	<Link
																		key={`navlink_card_${newKey}`}
																		className="card-link"
																		to={newKey.split(baseURL)[1]}
																	>
																		{newKey.split(baseURL)[1]}
																	</Link>
																) : (
																	newKey
																)
														  )}
												</Card.Text>
											</>
										))}
								</Card.Body>
							</Card>
						))}
					</div>
				}
			</>
		);
	}
}

export default WithData(CardList);
