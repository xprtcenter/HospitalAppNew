import React from "react";
import "./formPage.styles.scss";
import FormSidebarMenu from "../../component/form-sidebar-menu/form-sidebar-menu.component";
import FormTopbarMenu from "../../component/form-topbar-menu/form-topbar-menu.component";
import ContractorMaster from "../../forms/sme-forms/contractor-master.component";
const FormPage = () => {
	return (
		<div className="form-page">
			<div className="leftside-menu-block">
				<FormSidebarMenu />
			</div>
			<div className="rightside-menu-form">
				<div className="topbar-menu-block">
					<FormTopbarMenu />
				</div>
				<div className="form-container">
					<ContractorMaster />
				</div>
			</div>
		</div>
	);
};

export default FormPage;
