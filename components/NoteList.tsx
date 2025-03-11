
import {FlatList, StyleSheet, Text, View} from "react-native";
import NoteItem from "@/components/NoteItem";

const NoteList = ({notes, onDelete, onEdit}:{notes:[]}) => {
    return(
        <FlatList data={notes}
                  keyExtractor={(item) => item.$id}
                  renderItem ={({item}) => (
<NoteItem note={item}

onDelete={onDelete}
onEdit={onEdit}/>
                  )}
        />
    )
}

export default NoteList;
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
    modalOverlay:{
        flex:1,
        backgroundColor:'rgba(0,0,0,0.5)',
        justifyContent:"center",
        alignItems:"center",
    },
    modalContent:{
        backgroundColor:"#fff",
        padding:20,
        borderRadius:10,
        width:"80%",
    },

    ModalTitle:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10,
        textAlign:"center",
    },
    input:{
        borderWidth:1,
        borderColor:'#ccc',
        borderRadius:8,
        padding:10,
        fontSize:16,
        marginBottom:15,
    },
    modalButtons:{
        flexDirection:"row",
        justifyContent:'space-between',


    },
    cancelButton:{
        backgroundColor:'#ccc',
        padding:10,
        borderRadius:5,
        flex:1,
        marginRight:10,
        alignItems:"center"
    },

    cancelButtonText:{
        fontSize:16,
        color:"#333"
    },
    saveButton:{
        backgroundColor:'#007bff',
        padding:10,
        borderRadius:5,
        flex:1,
        alignItems:"center"
    },
    saveButtonText:{
        fontSize:16,
        color:"#fff"
    }
})