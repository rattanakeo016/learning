import { StyleSheet } from 'react-native'
import modules from '../../modules';
import _styles from './GetStartScreen'


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageProfile: {
        width: modules.VIEW_PORT_WIDTH,
        height: modules.VIEW_PORT_WIDTH / 1.2,
    },
    textName: {
        color: modules.TEXT,
        fontSize: modules.FONT_H3
    },
    containText: {
        padding: modules.PADDING
    },
    textDescription: {
        fontSize: modules.FONT_H6
    }

});

export default styles