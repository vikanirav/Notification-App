import React, { PureComponent } from "react";
import { Link, NavLink } from "react-router-dom";
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, } from "reactstrap";

//Reference
import { PageRoute } from "../../utils/constants/index";

export default class TopNav extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: true,
        };
    }

    hanldeNavbarToggler = () => {
        this.setState({ collapsed: !this.state.collapsed });
    };

    render() {
        return (
            <header>
                <Navbar
                    className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
                    light
                >
                    <Container>
                        <NavbarBrand tag={Link} to={PageRoute.HomePage}>
                            Notification App
            </NavbarBrand>
                        <NavbarToggler onClick={this.hanldeNavbarToggler}></NavbarToggler>
                        <Collapse
                            className="d-sm-inline-flex flex-sm-row-reverse"
                            isOpen={!this.state.collapsed}
                            navbar
                        >
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink
                                        tag={Link}
                                        to={PageRoute.HomePage}
                                        className="text-dark"
                                    >
                                        Home
                  </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink
                                        tag={Link}
                                        to={PageRoute.NotificationListPage}
                                        className="text-dark ml10">
                                        Notification
                  </NavLink>
                                </NavItem>
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}
