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
				const { baseURL, relpath, match } = this.props;

				const client = axios.create({
					baseURL: baseURL,
				});

				let fullrelpath;
				console.log(match.params.id);

				match.params.id
					? (fullrelpath = `${relpath}${match.params.id}`)
					: (fullrelpath = relpath);

				const response = await client.get(fullrelpath); //obj

				response.data.results
					? this.setState({
							all: response.data.results,
							pages: response.data.info.pages,
							next: response.data.info.next,
							single: {},
							hasloaded: true,
					  })
					: this.setState({
							single: response.data,
							all: [],
							pages: 0,
							next: null,
							hasloaded: true,
					  });
			} catch (error) {
				console.log(error.response, "error");
			}
		};

		render() {
			const { single, all, pages, next, hasloaded } = this.state;
			if (!hasloaded) {
				this.getData();
			}

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
