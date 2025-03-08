import {View, Text, StyleSheet, FlatList, TouchableOpacity, Modal,TextInput} from "react-native";
import {useState} from "react";
import NoteList from "@/components/NoteList";
import AddNoteModal from "@/components/AddNoteModal";

const NoteScreen = () => {

    const [notes, setNotes] = useState([
        {id:"1", text:"Hello Notes"},
        {id:"2", text:"Hello Notes2"},
        {id:"3", text:"Hello Notes3"},
        {id:"4", text:"Hello Notes4"},
        {id:"5", text:"Hello Notes5"},
        {id:"6", text:"Hello Notes6"},
    ])

    const [modalVisible, setModalVisible] = useState<boolean>(false)
    const [newNote, setNewNote] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    //add new note
    const addNote = () => {
        if(newNote.trim() === "" )return;

        setNotes((prevNotes) => [
            ...prevNotes,
            {id:Date.now.toString(), text:newNote}
        ]);
        setNewNote('');
        setModalVisible(false)

    }
    return(
        <View style={styles.container}>

 {/*           Notes List      */}
 <NoteList notes={notes}/>

            <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.addButtonText}>
                    + Add Note
                </Text>
            </TouchableOpacity>

        {/*    Modal */}


<AddNoteModal modalVisible={modalVisible} setModalVisible={setModalVisible} newNote={newNote} setNewNote={setNewNote} addNote={addNote}  />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:20,
        backgroundColor:'#fff',
        color:"#333",
    },
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
    addButton: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },

})

export default NoteScreen;