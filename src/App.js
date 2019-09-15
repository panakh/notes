import React, {Component} from 'react';
import Notes from './components/Notes';
import Note from './components/Notes/Note';

class  App extends Component {
  state = {
    notes: [
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam porttitor posuere felis eget cursus. Morbi vehicula massa id elit pharetra sagittis. Donec mi quam, consequat vitae massa id, ultrices consequat ligula. Nulla facilisi. In a dolor eget erat commodo facilisis quis quis tortor. Donec nulla turpis, fringilla vitae vehicula a, bibendum vel turpis. Sed tincidunt, neque ut pharetra consequat, nulla sapien commodo sapien, eget condimentum tellus tortor ut nunc. Fusce facilisis mauris quis tincidunt lacinia. Vestibulum vitae leo in turpis hendrerit luctus.'
      },
      {
        id: 2,
        text: 'second ipsum'
      },
      {
        id: 3,
        text: 'lorem ipsum'
      }
    ],
    editingNoteId: 1,
  }
  
  onNoteChange = (text) => {
    this.setState({...this.state, notes: [...this.state.notes.map((note) => {
      return note.id === this.state.editingNoteId ? {         
          ...note,
          text
        } : note;
      
    })]});
  }

  makeEditArea = () => {
    const editingNote = this.state.notes.find((note) => note.id === this.state.editingNoteId);
    return this.state.editingNoteId ? (<Note note={editingNote} onChange={this.onNoteChange}/>):null;
  }

  onPreviewClick = (id) => {
    this.setState({...this.state, editingNoteId: id});
  }

  render() {
    return (
      <div style={notesContainerStyle}>
        <div style={previewContainerStyle}>
          <Notes notes={this.state.notes} editingNoteId={this.state.editingNoteId} onPreviewClick={this.onPreviewClick}/>
        </div>    
        {this.makeEditArea()}
      </div>
);
    }
}

const notesContainerStyle = {
  width: '100%',
  display: 'flex',
  height: '100%'
};

const previewContainerStyle = {
  width: '30%',
  height: '100%'
};

export default App;
