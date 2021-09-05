const colourStyles = {
	option: (styles, { data, isDisabled, isFocused, isSelected }) => {
		// const color = chroma(data.color);
		console.log({ data, isDisabled, isFocused, isSelected });
		return {
			...styles,
			backgroundColor: isFocused ? "#00A3BE" : "",

			color: isFocused ? "#F9FAFC" : "#191D2F",
			display: "flex",
			paddingLeft: 0,

			"& .left": {
				display: "flex",
				justifyContent: "center",
				width: 60,
				marginTop: 3,
			},
			"& .right": {
				width: "100%",
			},

			"& .right > .title": {
				display: "block",
				margin: "5px 0",
			},
		};
	},
};

export default colourStyles;
