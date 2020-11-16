import React from 'react';
import Note from '../Components/Note'

class NotesContainer extends React.Component {

    apiResponse = () => {
        return [{ id: 1, content: "First Note" }, { id: 2, content: "Second Note" }, { id: 3, content: "Third Note" }, { id: 4, content: "Fourth Note" }]
    }

    renderNotes = () => {
        return this.apiResponse().map(noteObj => <Note key={noteObj.id} note={noteObj} />)
    }

    render() {
        console.log(this.renderNotes())
        let notesArray = this.apiResponse().map(el => <Note />)
        return (
            <ul>
                {/* {this.apiResponse().map(el => <Note />)} */}
                {/* {notesArray} */}
                {this.renderNotes()}
            </ul>
        )
    }

}


export default NotesContainer;

