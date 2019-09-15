import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NotePreview from './Notes/NotePreview';

class Notes extends Component {
  render() {

      return this.props.notes.map((note) => {
          const editing = note.id === this.props.editingNoteId;
          return  <NotePreview key={note.id} editing={editing} note={note} onPreviewClick={this.props.onPreviewClick}/>
      })
  }
}

Notes.propTypes = {
    notes: PropTypes.array.isRequired,
    onPreviewClick: PropTypes.func.isRequired,
    editingNoteId: PropTypes.number.isRequired
};


export default Notes;
