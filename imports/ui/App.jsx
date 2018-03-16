import React, { Component } from 'react';
import { Button, Container, Header, List } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import TopMenu from './menu/Menu';

export default class Application extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };

    }

    // Use arrow functions to auto bind this    
    incrementCounter = () => {
        this.setState({ counter: this.state.counter + 1 });
    }

    render() {
        return (
            <div className='ui one column centered grid'>
                <TopMenu />
                <div className='column'>
                    <div className='row'>
                        <Header as='h1'>Welcome to Meteor!</Header>
                        <Button onClick={this.incrementCounter}>Click Me</Button>
                        <p>You've pressed the button {this.state.counter} times.</p>
                    </div>
                    <div className='row'>
                        <Header as='h2'>Learn Meteor!</Header>
                        <List>
                            <List.Item>
                                <a href="https://www.meteor.com/try" target="_blank">Do the Tutorial</a>
                            </List.Item>
                            <List.Item>
                                <a href="https://guide.meteor.com" target="_blank">Follow the Guide</a>
                            </List.Item>
                            <List.Item>
                                <a href="https://docs.meteor.com" target="_blank">Read the Docs</a>
                            </List.Item>
                            <List.Item>
                                <a href="https://forums.meteor.com" target="_blank">Discussions</a>
                            </List.Item>
                        </List>
                    </div>
                </div>
            </div>
        );
    }
}