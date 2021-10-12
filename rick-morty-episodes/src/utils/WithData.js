import axios from "axios";
import React, { Component } from "react";

function WithData(ComponenteNuevo) {
	class NewComponent extends Component {
		constructor(props) {
			super(props);
			this.state = {
				single: {},
				all: [],
				pages: 0,
				next: null,
				hasloaded: false,
			};
		}

		getData = async () => {
			try {
				const { baseURL, relpath } = this.props;

				const client = axios.create({
					baseURL: baseURL,
				});

				const response = await client.get(relpath); //obj
				console.log("soy la respuesta", response);

				response.data.results
					? this.setState({
							all: response.data.results,
							pages: response.data.info.pages,
							next: response.data.info.next,
							hasloaded: true,
					  })
					: this.setState({
							single: response.data,
							hasloaded: true,
					  });
			} catch (error) {
				console.log(error);
			}
		};

		render() {
			console.log("renderizo with data");
			const { single, all, pages, next, hasloaded } = this.state;
			if (!hasloaded) {
				this.getData();
			}

			console.log(this.props, this.state, "soy el HOC");
			return (
				<ComponenteNuevo
					{...this.props}
					single={single}
					all={all}
					pages={pages}
					next={next}
				/>
			);
		}
	}
	return NewComponent;
}

export default WithData;
