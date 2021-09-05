import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

//import { withRouter } from "react-router-dom";

const HeaderMenuItem = ({
	title,
	imageUrl,
	size,
	history,
	linkUrl,
	match,
	currentUser,
}) => (
	<>
		{auth.currentUser ? (
			<>
				<Link className="option" to={linkUrl}>
					{title}
				</Link>
			</>
		) : null}
	</>
);

//export default withRouter(HeaderMenuItem);
export default HeaderMenuItem;
