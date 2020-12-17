import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import HomeScreen from './HomeScreen';

interface Props {
    navigation: any
}

interface State {
}

export default class HomeContainer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
        };
    }

    public render() {
        return (
            <HomeScreen
            navigation={this.props.navigation}
             />
        );
    }
}
