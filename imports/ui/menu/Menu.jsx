import React, { Component } from 'react';
import { Icon, Menu } from 'semantic-ui-react';


export default class TopMenu extends Component {
    state = { sidebarToogled: false };

    toogleSidebar = () => { this.setState({ sidebarToogled: !this.state.sidebarToogled }); }

    render() {
        const { sidebarToogled } = this.state;

        return (
            <Menu secondary>
                <Menu.Item name='toogle-sidebar'>
                    <Icon name='sidebar' />
                </Menu.Item>
            </Menu>
        );
    }
}