import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 20,
    },
    tasks:{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop:5,
    },
    deleteTask:{
        justifyContent: "center",
        paddingLeft:20,
    },
    descriptionTask:{
        width: "75%",
        alignContent: "flex-start",
        backgroundColor: "#f5f5f5cf",
        padding: 12,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginBottom: 5,
        marginRight: 30,
        color: "#282b2b",
    },
    buttonNewTasks:{
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
    iconButton: {
        color: "#fff",
        fontSize: 20,
        fontWeight: 'bold',
    },
});


