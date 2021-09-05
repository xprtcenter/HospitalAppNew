import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import SME from "./pages/sme/sme-reg.component";
import Example from "./pages/examplepage/example";
import AdmissionForm from "./pages/student/AdmissionForm";
import FormPage from "./pages/formPage/formPage.component";
import PayrollEmpRegPage from "./pages/payrollPages/payroll-Emp-Reg-page";

import Header from "./component/header/header.component";
import Footer from "./component/footer/footer.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.action";
import { selectCurrentUser } from "./redux/user/user.selectors";

class App extends Component {
	unsubscriveFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unsubscriveFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			console.log(userAuth);
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data(),
					});
				});
			}
			setCurrentUser(userAuth);
		});
	}

	componentWillUnmount() {
		this.unsubscriveFromAuth();
	}

	render() {
		return (
			<div>
				<Header />

				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/sme" component={SME} />
					<Route path="/example" component={Example} />
					<Route path="/student" component={AdmissionForm} />
					<Route path="/form" component={FormPage} />
					<Route path="/payroll" component={PayrollEmpRegPage} />

					<Route path="/checkout" component={CheckoutPage} />
					<Route
						exact
						path="/signin"
						render={() =>
							this.props.currentUser ? (
								<Redirect to="/" />
							) : (
								<SignInAndSignUpPage />
							)
						}
					/>
				</Switch>
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
