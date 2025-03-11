import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

const NoteItem = ({note, onDelete}:{note:any}) => {
    return(
        <View style={styles.noteItem}>
            <Text style={styles.noteItem}>
                {note.text}
            </Text>

            <TouchableOpacity onPress={()=> onDelete(note.$id)}>
                <Text style={styles.delete}>X</Text>
            </TouchableOpacity>
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

    delete:{
        display: 'flex',
        fontSize: 20,
        fontWeight: 'bold',
        color:"red",
   marginTop:15,

    }
})