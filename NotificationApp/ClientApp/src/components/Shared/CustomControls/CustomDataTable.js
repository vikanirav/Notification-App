import React, { PureComponent } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default class CustomDataTable extends PureComponent {

    setDynamicColumn() {
        return this.props.columns.map((col, index) => {
            return (
                <Column
                    key={index}
                    field={col.field}
                    style={col.style}
                    header={col.header}
                    sortable={col.sortable}
                    body={
                        col.body
                            ? (e) => this.bodyDataTemplate(e, col.body, col.header)
                            : (e) => this.bodyTemplate(e, col.field, col.header)
                    }
                    selectionMode={col.selectionMode}
                />
            );
        });
    }

    bodyTemplate = (rowData, key) => {
        return <React.Fragment>{rowData[`${key}`]}</React.Fragment>;
    };

    bodyDataTemplate = (rowData, bodyData) => {
        return <React.Fragment>{bodyData(rowData)}</React.Fragment>;
    };

    render() {
        return (
            <>
                <DataTable
                    className="p-datatable-responsive"
                    dataKey={this.props.dataKey}
                    value={this.props.datasource}
                    emptyMessage={this.props.emptyMessage}
                    onRowSelect={this.props.rowSelect}
                    selectionMode={this.props.selectionMode}
                >
                    {this.setDynamicColumn()}
                </DataTable>
            </>
        );
    }
}
