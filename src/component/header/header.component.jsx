import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CartIcon from "../card-icon/card-icon.component";
import logo from "../../assets/swami2.png";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import DirectoryHeader from "../directory-header/directory-header.component";

import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import HeaderDateTime from "./Timer.component";

import { auth } from "../../firebase/firebase.utils";
import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => (
	<>
		<div className="header1">
			<h4>VIVEKANANDA KENDRA BORL HOSPITAL</h4>
			<h4>
				<HeaderDateTime />
			</h4>
		</div>
		<div className="header">
			<Link to="/">
				<div className="logo-container">
					<img
						//src="https://drive.google.com/uc?id=1UbpcKa1awglrUZn9oVy31k78YX0QCjgx"
						src={logo}
						alt="swamiji"
					/>

					<span className="text">HOME</span>
				</div>
			</Link>

			<div className="options">
				{currentUser ? (
					<>
						<DirectoryHeader />
						<div className="option" onClick={() => auth.signOut()}>
							SIGN OUT<span>( {auth.currentUser.email} )</span>
						</div>
					</>
				) : (
					<Link className="option" to="/signin">
						SIGN IN
					</Link>
				)}
				<CartIcon />
			</div>
			{hidden ? null : <CartDropdown />}
		</div>
	</>
);
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
