import React, { Component } from "react";
import Pagination from "react-bootstrap/Pagination";

export default class MainPag extends Component {
	render() {
		return (
			<nav className="d-flex justify-content-center">
				<Pagination>
					<Pagination.First disabled />
					<Pagination.Prev disabled />
					<Pagination.Item active>{1}</Pagination.Item>
					<Pagination.Ellipsis />

					<Pagination.Item>{10}</Pagination.Item>
					<Pagination.Item>{11}</Pagination.Item>
					<Pagination.Item>{12}</Pagination.Item>
					<Pagination.Item>{13}</Pagination.Item>
					<Pagination.Item>{14}</Pagination.Item>

					<Pagination.Ellipsis />
					<Pagination.Item>{20}</Pagination.Item>
					<Pagination.Next />
					<Pagination.Last />
				</Pagination>
			</nav>
		);
	}
}
