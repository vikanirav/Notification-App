import React, { PureComponent } from "react";

//Components
import NotificationDataTable from "../Shared/CustomControls/CustomDataTable";
import Toast from "../Shared/CustomControls/CustomToast";

//Refrence
import { ApiRoute, Messages } from "../../utils/constants/index";
import { httpService } from "../../services/index";

export default class NotificationList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            fileNumber: 1,
            notifications: [],
        };
    }

    //Component life cycle
    async componentDidMount() {
        await this.getAllNotification();

        this.timeout = setTimeout(async () => {
            await this.getAllNotification();
        }, 5000);
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    //Methods
    //It it used to get all notification by file number.
    async getAllNotification() {
        const result = await httpService.Get(`${ApiRoute.NotificationFileRead}${this.state.fileNumber}`);

        if (result.status) {
            this.setState({ notifications: result.data, fileNumber: this.state.fileNumber + 1 });
        } else {
            this.showToastMessage(
                Messages.ErrorToastSeverity,
                Messages.ErrorMessageTitle,
                result.message
            );
        }
    }

    //It is used to show error/warning message.
    showToastMessage(toastSeverity, messageTitle, message) {
        this.refs.toast &&
            this.refs.toast.showToast(toastSeverity, messageTitle, message);
    }

    //Template
    actionBodyTemplate = (rowData) => {
        return (<span>{(new Date(rowData.inviteTime)).toLocaleString()}</span>);
    };

    renderNotificationTable() {
        const columns = [
            {
                field: "inviteId",
                header: "Invite Id",
                sortable: true,
                style: { width: "12%" },
            },
            {
                field: "invite",
                header: "Invite Description",
                style: { width: "40%" },
            },
            {
                field: "inviteTime",
                header: "Invite Time",
                body: this.actionBodyTemplate,
                style: { width: "33.3%" },
            },
            {
                field: "status",
                header: "Status",
                style: { width: "20%" },
            },
        ];

        return (
            <NotificationDataTable
                dataKey="inviteId"
                datasource={this.state.notifications}
                columns={columns}
                emptyMessage="No records found."
            ></NotificationDataTable>
        );
    }

    render() {
        return (
            <div>
                <Toast ref="toast" />
                <div className="row">{this.renderNotificationTable()}</div>
            </div>
        );
    }
}
