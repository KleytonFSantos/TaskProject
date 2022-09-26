import { Platform, StyleSheet } from 'react-native'

export const style = StyleSheet.create ({
   container: {
       flex: 1,
       backgroundColor: "#fff",
       justifyContent: "center",
       alignItems: "center",
       paddingTop: Platform.OS === "ios" ? 0 : 10,
    },
    title: {
        fontSize: 48,
        color: "#f92e6a",
        marginBottom: 30,
        fontWeight: "bold",
    },
    input: {
        width: 300,
        marginTop: 10,
        padding: 10,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#f92e6a",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 10,
        color: "#4d5156",
    },
    buttonRegister: {
        width: 200,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f92e6a",
        borderRadius: 50,
        marginTop: 30,
    },
    textButtonRegister: {
        color: "#fff",
    },
    alertContent: {
        marginTop: 20,
        flexDirection: "row",

    },
    warningAlert: {
        paddingLeft: 5,
        color: "#bdbdbd",
        fontSize: 16,
    },
    registration: {
        marginTop: 20, 
        color: "#4d5156",
    },
    linkSubscribe: {
        color: "#1857f2",
        fontSize: 16,
    }


})

