import React from "react";
import Select, { components } from "react-select";
import colourOptions from "./sample/colour-options";
import colourStyles from "./sample/colour-styles";

const Option = (props) => {
	return (
		<components.Option {...props}>
			<div className="left">{props.isSelected ? "✔" : ""}</div>
			<div className="right">
				<strong className="title">{props.data.label}</strong>
				<div>{props.data.description}</div>
			</div>
		</components.Option>
	);
};

const FormDropDown = ({ handleChange, label, options, ...otherProps }) => (
	<div className="group form-dropdown">
		<div backgroundColor="#191D2F">
			<Select
				defaultValue={colourOptions[-1]}
				label="HC Type"
				options={colourOptions}
				styles={colourStyles}
				components={{
					Option,
				}}
			/>
		</div>
	</div>
);
export default FormDropDown;
