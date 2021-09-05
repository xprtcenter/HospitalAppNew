import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
	constructor() {
		super();

		this.state = {
			sections: [
				{
					title: "ADMIN",
					imageUrl:
						"https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWRtaW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
					id: 1,
					linkUrl: "shop/hats",
				},
				{
					title: "DOCTORS",
					imageUrl:
						"	https://images.unsplash.com/photo-1587691592099-24045742c181?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXJsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=300",
					id: 2,
					linkUrl: "shop/jackets",
				},
				{
					title: "RECEPTION",
					imageUrl:
						"https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zcGl0YWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
					id: 3,
					linkUrl: "shop/sneakers",
				},
				{
					title: "PATHOLOGY",
					imageUrl:
						"https://images.unsplash.com/photo-1578761617802-284a782be740?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFib3JhdG9yaWVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
					size: "large",
					id: 4,
					linkUrl: "shop/womens",
				},
				{
					title: "X-RAY",
					imageUrl:
						"https://images.unsplash.com/photo-1516069677018-378515003435?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8eHJheXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
					size: "large",
					id: 5,
					linkUrl: "shop/mens",
				},
			],
		};
	}

	render() {
		return (
			<div className="directory-menu">
				{this.state.sections.map(({ id, ...otherSectionProps }) => (
					<MenuItem key={id} {...otherSectionProps} />
				))}
			</div>
		);
	}
}

export default Directory;
