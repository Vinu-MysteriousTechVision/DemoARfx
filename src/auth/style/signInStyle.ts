import { Dimensions, Platform, StyleSheet } from 'react-native'
import { Utils } from '../../utils/utils'

const windowWidth = Dimensions.get('window').width // full width
const windowHeight = Dimensions.get('window').height // full height

export const SignInStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    signInFormContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: (64 - Utils.getStatusBarHeight()),
        marginHorizontal: 48
    },
    signInWithContainer: {
        width: (windowWidth - 128)
    },
    signInWithTitle: {
        alignSelf: 'center',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 12,
        marginTop: 34,
        color: '#444444'
    },
    socialLoginContainer: {
        marginTop: 48,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFF'
    },
    soicalLoginIconContainer: {
        height: 65,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    socialLoginIcon: {
        height: 37,
        width: 37
    },
    socialLoginName: {
        marginTop: 16,
        fontSize: 12,
        fontFamily: 'Unica One',
        color: '#444444'
    },
    signUpActionContainer: {
        flexDirection: 'row',
        marginTop: 72,
        height: 56,
        backgroundColor: '#727fad',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    textInput: {
        height: 17,
        width: (windowWidth - (2 * 48)),
        textAlign: 'center'
    },
    textInputUnderline: {
        height: 1,
        width: (windowWidth - (2 * 48)),
        backgroundColor: '#CFCFCF'
    }
})
