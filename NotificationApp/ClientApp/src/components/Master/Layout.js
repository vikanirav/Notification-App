import React, { PureComponent } from "react";
import { Container } from "reactstrap";
import TopNav from "./TopNav";

export default class Layout extends PureComponent {
    render() {
        return (
            <div>
                <TopNav></TopNav>
                <Container>{this.props.children}</Container>
            </div>
        );
    }
}
