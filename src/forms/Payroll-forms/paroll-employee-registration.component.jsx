import React from "react";
import FormInput from "../../component/form-input/form-input.component";
import CustomButton from "../../component/custom-button/custom-button.component";
import ParollEmpRegService from "./payroll-emp-reg-service";

class PayrollEmpRegMaster extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			displayName: "",
			email: "",

			companyName: "",
			supervisorName: "",
			supervisorContact: "",
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();

		let sData = {
			displayName: this.state.displayName,
			email: this.state.email,

			companyName: this.state.companyName,
			supervisorName: this.state.supervisorName,
			supervisorContact: this.state.supervisorContact,
		};

		ParollEmpRegService.create(sData)
			.then(() => {
				console.log("Created new item successfully!");
				this.setState({
					displayName: "",
					email: "",

					companyName: "",
					supervisorName: "",
					supervisorContact: "",
				});
			})
			.catch((e) => {
				console.log(e);
			});
	};

	handleChange = (event) => {
		const { name, value } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		const {
			displayName,
			email,

			companyName,
			supervisorName,
			supervisorContact,
		} = this.state;

		return (
			<div className="form-main-container">
				<h2 className="title">Employee Registration form</h2>
				<span>Register your Employee for Payroll.</span>

				<form
					className="contractor-registration-form"
					onSubmit={this.handleSubmit}
				>
					<FormInput
						type="text"
						name="displayName"
						value={displayName}
						onChange={this.handleChange}
						label="Display Name"
						required
					/>

					<FormInput
						type="email"
						name="email"
						value={email}
						onChange={this.handleChange}
						label="Email"
						required
					/>

					<FormInput
						type="text"
						name="companyName"
						value={companyName}
						onChange={this.handleChange}
						label="Company Name"
						required
					/>

					<FormInput
						type="text"
						name="supervisorName"
						value={supervisorName}
						onChange={this.handleChange}
						label="Supervisor Name"
						required
					/>
					<FormInput
						type="text"
						name="supervisorContact"
						value={supervisorContact}
						onChange={this.handleChange}
						label="Supervisor Contact No."
						required
					/>

					<CustomButton type="submit">SUBMIT</CustomButton>
				</form>
			</div>
		);
	}
}
export default PayrollEmpRegMaster;
