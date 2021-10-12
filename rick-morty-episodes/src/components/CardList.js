import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import WithData from "../utils/WithData";
class CardList extends Component {
	render() {
		const { single, all, next, pages, relpath, params, image, name } =
			this.props;

		console.log(`Obteniendo ${pages} paginas , next is ${next}, y el pathURI es ${relpath},
		y params son ${params} y ala name ${name}`);

		all.push(single);
		console.log("soy todo lo q hay q renerizar", all);

		return (
			<>
				{
					<div key="card_container_single" className="d-flex flex-wrap">
						{all.map((obj) => (
							<Card style={{ width: "18rem" }} key={`single_card_${obj["id"]}`}>
								{image && <Card.Img variant="top" src={`${obj["image"]}`} />}
								<Card.Body>
									<Card.Title>
										<NavLink
											className="card-link"
											to={`${relpath}/${obj["id"]}`}
										>
											{obj["name"]}
										</NavLink>
									</Card.Title>
									{Object.keys(obj)
										.filter((key) => (params.includes(key) ? key : null))
										.map((key) => (
											<>
												<Card.Text key={key}>
													{key}:
													{typeof obj[key] !== "object"
														? obj[key]
														: Object.values(obj[key]).map((newKey) => newKey)}
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
