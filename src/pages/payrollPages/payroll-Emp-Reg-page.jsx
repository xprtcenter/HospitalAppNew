import React from "react";
import "./payroll-form-page.styles.scss";
import FormSidebarMenu from "../../component/form-sidebar-menu/form-sidebar-menu.component";
import FormTopbarMenu from "../../component/form-topbar-menu/form-topbar-menu.component";
import PayrollEmpRegMaster from "../../forms/Payroll-forms/paroll-employee-registration.component";
const PayrollEmpRegPage = () => {
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
					<PayrollEmpRegMaster />
				</div>
			</div>
		</div>
	);
};

export default PayrollEmpRegPage;
