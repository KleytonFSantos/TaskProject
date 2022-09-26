import { StyleSheet } from 'react-native'


export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    label: {
        width: "90%",
        marginTop:20,
        marginLeft:20,
        fontSize:16,
        color: "#f92e6a",
    },
    inputText: {
        width: "90%",
        marginTop:20,
        height: 50,
        padding: 10,
        marginLeft:20,
        borderBottomWidth: 1,
        borderBottomColor: "#f92e6a",
        fontSize:16,
    },
    buttonNewTask: {
        position: 'absolute',
        width: 60,
        height: 60,
        bottom: 30,
        left: 20,
        borderRadius: 50,
        backgroundColor: "#f92e6a",
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        color: "#fff",
        fontSize: 16,
        fontWeight: 'bold',
    },

})