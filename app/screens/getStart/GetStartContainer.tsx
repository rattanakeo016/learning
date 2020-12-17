import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import GetStartScreen from './GetStartScreen';

interface Props {
  route: any,
  navigation: any
}

interface State {

}

export default class GetStartContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }


  public render() {
    return (
      <GetStartScreen
        route={this.props.route}

      />
    );
  }
}
