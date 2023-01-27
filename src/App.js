import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            currentNote: ""
        }
    }

    componentDidMount() {
        // Retrieve notes from local storage
        let storedNotes = localStorage.getItem("notes");
        if (storedNotes) {
            this.setState({ notes: JSON.parse(storedNotes) });
        }
    }

    handleEditorChange = (event, editor) => {
        this.setState({ currentNote: editor.getData() });
    }

    handleSaveNote = () => {
        // Add the current note to the notes array
        let newNotes = [...this.state.notes, this.state.currentNote];
        this.setState({ notes: newNotes });

        // Save the notes array to local storage
        localStorage.setItem("notes", JSON.stringify(newNotes));

        // Clear the current note
        this.setState({ currentNote: "" });
    }

    render() {
      return (
        <div className="App">
            <h2>Note Application</h2>
            <CKEditor
                editor={ ClassicEditor }
                data={this.state.currentNote}
                onChange={ this.handleEditorChange }
        
            />
            <button onClick={this.handleSaveNote}>Save Note</button>
            <h3>Saved Notes:</h3>
            <div className="notes-container">
                {this.state.notes.map((note, index) => {
                    return <div key={index} className="note" dangerouslySetInnerHTML={{__html: note}} />
                })}
            </div>
        </div>
    );
    }
}

export default App;
