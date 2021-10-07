import React, { Component } from "react";
import { Card } from "react-bootstrap";
// lllama a la funcion de obtener data
// procesa los datos segun donde se ecuentre
// necesita el nombre de la pagina
import getData from "../utils/getData";

//*TODO hacer que par cada campo coincida y haga un match:
// del estilo: si la key matchea con nombre que me de el value y asi para
// vonstruir las cards

//*TODO ver si es modelist={modelist} o no
export default class CardBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			single: {},
			all: [],
			pages: 0,
			next: null,
		};
	}
	async componentDidMount() {
		const { relPath } = this.props;
		const result = await getData(relPath);

		this.setState({
			single: result.single,
			all: result.all,
			next: result.next,
			pages: result.pages,
		});
	}

	render() {
		const { single, all, next, pages } = this.state;
		const { modelist } = this.props;
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
						<Card.Link href="#">Card Link</Card.Link> //va al episodio. Usar de
						titulo.
					</Card.Body>
				</Card>
				<h3>
					Obteniendo {pages} paginas , next is {next}
				</h3>
				{single && (
					<ul>
						<h2>Single Object</h2>
						{Object.keys(single).map((key) => (
							<li key={key}>
								{key} : {single[key]}
							</li>
						))}
					</ul>
				)}
				{all.length > 0 && (
					<div>
						<h1>List Of Objects</h1>
						{all.map((obj) => (
							<ul key={`single_${obj["id"]}`}>
								Single Obj from List
								{Object.keys(obj).map((key) => (
									<li key={key}>
										{key} :
										{typeof obj[key] !== "object"
											? obj[key]
											: Object.values(obj[key]).map((newKey) => newKey)}
									</li>
								))}
							</ul>
						))}
					</div>
				)}
			</div>
		);
	}
}
