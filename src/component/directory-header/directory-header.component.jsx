import React from "react";
import HeaderMenuItem from "./header-menu-item.component";

class DirectoryHeader extends React.Component {
	constructor() {
		super();

		this.state = {
			sections: [
				{
					title: "ADMIN",
					imageUrl:
						"https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWRtaW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
					id: 1,
					linkUrl: "/sme",
				},
				{
					title: "SME",
					imageUrl:
						"	https://images.unsplash.com/photo-1587691592099-24045742c181?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXJsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=300",
					id: 2,
					linkUrl: "/form",
				},
				{
					title: "RECEPTION",
					imageUrl:
						"https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zcGl0YWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
					id: 3,
					linkUrl: "/reception",
				},
				{
					title: "PATHOLOGY",
					imageUrl:
						"https://images.unsplash.com/photo-1578761617802-284a782be740?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFib3JhdG9yaWVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
					size: "large",
					id: 4,
					linkUrl: "/pathology",
				},
				{
					title: "X-RAY",
					imageUrl:
						"https://images.unsplash.com/photo-1516069677018-378515003435?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8eHJheXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
					size: "large",
					id: 5,
					linkUrl: "/xray",
				},
				{
					title: "INVENTORY",
					imageUrl:
						"https://images.unsplash.com/photo-1516069677018-378515003435?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8eHJheXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
					size: "",
					id: 6,
					linkUrl: "/inventory",
				},
				{
					title: "PAYROLL",
					imageUrl:
						"https://images.unsplash.com/photo-1516069677018-378515003435?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8eHJheXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
					size: "",
					id: 7,
					linkUrl: "/payroll",
				},
			],
		};
	}

	render() {
		return (
			<>
				{this.state.sections.map(({ id, ...otherSectionProps }) => (
					<HeaderMenuItem key={id} {...otherSectionProps} />
				))}
			</>
		);
	}
}

export default DirectoryHeader;
