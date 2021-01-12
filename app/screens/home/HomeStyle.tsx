import { StyleSheet } from 'react-native'
import modules from '../../modules';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: modules.PRIMARY
    },
    containerScroll: {
        flex: 1,
        backgroundColor: modules.WHITE,
        borderTopLeftRadius: modules.RADIUS * 3,
        borderTopRightRadius: modules.RADIUS * 3,
        paddingHorizontal: modules.PADDING
    },
    image: {
        width: 300,
        height: 300,
    }
});

export default styles