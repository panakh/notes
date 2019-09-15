import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Note extends Component {


    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
        this.props.onChange(e.target.value)
    }

    render() {
        return (  
            <textarea style={noteStyle} value={this.props.note.text} onChange={this.onChange}/>
        );
    }
}

Note.propTypes = {
    note: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
}

const noteStyle = {
    padding: '5px 10px',
    margin: 0,
    display: 'block',
    width: '100%',
    height: '100%',
    borderWidth: '0 0 0 1px',
    borderStyle: 'solid',
    borderColor: '#999',
    outline: 'none'
};

export default Note;
