import React, { PureComponent } from "react";

import { Toast } from "primereact/toast";

export default class CustomToast extends PureComponent {
    constructor(props) {
        super(props);
        this.showToast = this.showToast.bind(this);
    }
    showToast(severity, summary, detail) {
        this.toast.show({
            severity: severity,
            summary: summary,
            detail: detail,
            life: 5000,
        });
    }
    render() {
        return (
            <div>
                <Toast ref={(el) => (this.toast = el)} />
            </div>
        );
    }
}
