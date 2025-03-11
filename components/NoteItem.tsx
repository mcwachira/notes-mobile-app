import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useRef, useState} from "react";

const NoteItem = ({note, onDelete, onEdit}:{note:any}) => {

    const [isEditing, setIsEditing] = useState(false);

    const [editedText, setEditedText] = useState(note.text);

    const inputRef = useRef(null);

    const handleSave=() => {
if(editedText.trim() === "") return;
onEdit(note.$id,editedText ) ;
setIsEditing(false)
    }
    return(


        <View style={styles.noteItem}>

            {isEditing ? (
                <TextInput ref={inputRef}
                           style={styles.input}
                           value={editedText}
                           onChangeText={setEditedText}
                           autoFocus
                           onSubmitEditing={handleSave}
                           returnKeyType="done"
                           />
            ):(
                <Text style={styles.noteItem}>
                    {note.text}
                </Text>

            )}


            <View style={styles.actions}>
                {isEditing ? (
                    <TouchableOpacity
                        onPress={() => {
                            handleSave();
                            inputRef.current?.blur();
                        }}
                    >
                        <Text style={styles.edit}>💾</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={() => setIsEditing(true)}>
                        <Text style={styles.edit}>✏️</Text>
                    </TouchableOpacity>
                )}

                <TouchableOpacity onPress={() => onDelete(note.$id)}>
                    <Text style={styles.delete}>❌</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default NoteItem;


const styles = StyleSheet.create({

    noteItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 8,
        marginVertical: 5,
    },
    noteItemText: {
        fontSize: 18,
    },

    delete: {
        fontSize: 18,
        color: 'red',
    },
    actions: {
        flexDirection: 'row',
    },
    edit: {
        fontSize: 18,
        marginRight: 10,
        color: 'blue',
    },
})