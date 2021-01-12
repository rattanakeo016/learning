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
        transform: [{ scale: 1 / 1.1 }],
        borderRadius: 5,
        // useNativeDriver: true,
    },
    textName: {
        color: modules.TEXT,
        fontSize: modules.FONT_H3
    },
    textDate:{
        color: modules.TEXT,
        fontSize: 15,
    },
    containText: {
        padding: modules.PADDING
    },
    textDescription: {
        fontSize: modules.FONT_H4,
        fontFamily: "Cochin"
    },
    backgroundDes: {
        //     width:modules.VIEW_PORT_WIDTH,
        //     height:modules.VIEW_PORT_HEIGHT,
        // backgroundColor: modules.BLUE,
        transform: [{ translateY: 20 }],
    }

});

export default styles