import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Modal,
    TextInput,
    Alert,
    ActivityIndicator
} from "react-native";
import {useEffect, useState} from "react";
import NoteList from "@/components/NoteList";
import AddNoteModal from "@/components/AddNoteModal";
import noteService from "@/services/noteService";

const NoteScreen = () => {

    const [notes, setNotes] = useState([])

    const [modalVisible, setModalVisible] = useState<boolean>(false)
    const [newNote, setNewNote] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetchNotes();
    },[])

    const fetchNotes = async() => {
        setLoading(true);
        const response = await noteService.getNotes()

        if(response.error){
            setError(response.error);
        Alert.alert("Error",response.error)
        }else {
            setNotes(response.data);
            setError(null);

        }
        setLoading(false);
    }
    //add new note
    const addNote = async() => {
        if(newNote.trim() === "" )return;

        console.log("test")
        const response = await noteService.addNote(newNote)

        if(response.error){
            Alert.alert("Error",response.error);

        }else {
            setNotes([...notes, response.data]);
        }
        setNewNote('');
        setModalVisible(false)

    }

    const deleteNote = async(id:striing) => {
        Alert.alert("Delete Note","Are you sure you want to delete this note?,",
            [
                {
                    text:"Cancel",
                    style:"cancel"

                },
                {
                    text:"Delete",
                    style:"destructive",
                    onPress: async()=>{
                        const response = await noteService.deleteNote(id);

                        if(response.error){
                            Alert.alert('Error', response.error);
                        }else {
                            setNotes(notes.filter((note) => note.$id !== id));
                        }
                    }
                }

            ]
        );
    }

    // Edit Note
    const editNote = async (id, newText) => {
        if (!newText.trim()) {
            Alert.alert('Error', 'Note text cannot be empty');
            return;
        }

        const response = await noteService.updateNote(id, newText);
        if (response.error) {
            Alert.alert('Error', response.error);
        } else {
            setNotes((prevNotes) =>
                prevNotes.map((note) =>
                    note.$id === id ? { ...note, text: response.data.text } : note
                )
            );
        }
    };

    return(
        <View style={styles.container}>

            {loading ? (
                <ActivityIndicator size="large" color="#007bff"/>
            ) : (
                <>
                {error && <Text style={styles.errorText}>{error}</Text>}

                    <NoteList notes={notes} onDelete={deleteNote} onEdit={editNote}/>
                </>

            )}


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
    errorText:{
        color:'red',
        textAlign:'center',
        marginBottom:10,
        fontSize:16
    }

})

export default NoteScreen;