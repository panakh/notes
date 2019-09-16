import React, {Component} from 'react';
import PropTypes from 'prop-types';

class NotePreview extends Component {

    makePreview = () => 
        this.props.note.text.split("\n")
            .filter((line) => line.trim() !== '')
            .filter((line, index) => [0,1].includes(index))
            .map((line, index) => {
                return <p style={
                    {
                        fontSize: index === 0 ? 'inherit': 'smaller',
                        color: index === 0 ? 'inherit': '#999',
                        padding : '0 10px 0 0'
                    }
                } key={index}>{line}</p>
            });

    makeStyle = () => {
        return {
            borderBottom: '1px #c0c0c0 dotted',
            background: this.props.editing ? '#fbf286': '#fff',
            padding: '20px 10px',
            display: 'block',
            width: '100%',
            cursor: 'pointer'
        }
    }
    
    render() {
        const {id} = this.props.note;
        return (  
            <div style={this.makeStyle()} onClick={this.props.onPreviewClick.bind(this, id)}> {this.makePreview()}</div>
        );
    }
}

NotePreview.propTypes = {
    note: PropTypes.object.isRequired,
    onPreviewClick: PropTypes.func.isRequired,
    editing: PropTypes.bool.isRequired
}

    
export default NotePreview;
