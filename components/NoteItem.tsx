import {StyleSheet, Text, View} from "react-native";

const NoteItem = ({note}:{note:any}) => {
    return(
        <View style={styles.noteItem}>
            <Text style={styles.noteItem}>
                {note.text}
            </Text>
        </View>
    )
}

export default NoteItem;


const styles = StyleSheet.create({

    noteItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor:"#f5f5f5",
        padding:15,
        borderRadius:5,
        marginVertical:5,
    },
    noteItemText: {
        fontSize: 18,
    },

})