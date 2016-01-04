import AltContainer from 'alt-container';
import React from 'react';
import Notes from './Notes.jsx';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';
import LaneActions from '../actions/LaneActions';
import Editable from './Editable.jsx'

export default class Lane extends React.Component {
  constructor(props) {
    super(props);
    
    const id = props.lane.id;
    
    this.addNote = this.addNote.bind(this, id);
    this.deleteNote = this.deleteNote.bind(this, id);
  }
  
  render() {
    const {lane, ...props} = this.props;
    const id = lane.id;
    
    return (
      <div {...props}>
        <div className="lane-header">
          <Editable 
            className="lane-name" 
            editing={lane.editing} 
            value={lane.name} 
            onEdit={this.editName.bind(this, id)} 
            onValueClick={this.activateLaneEdit.bind(this, id)} />
        
          <div className="lane-add-note">
            <button onClick={this.addNote}>+</button>
          </div>
        </div>
        <AltContainer
          stores={[NoteStore]}
          inject={{
            items: ()=> NoteStore.get(lane.notes)
          }}
        >
          <Notes 
            onValueClick={this.activateLaneEdit}
            onEdit={this.editNote}
            onDelete={this.deleteNote} />
        </AltContainer>
      </div>        
    );
  }
  
  addNote(laneId) {
    NoteActions.create({task: 'New task'});
    LaneActions.attachToLane({laneId});
  }
  editNote(id, task) {
    NoteActions.update({id, task});
  }
  deleteNote(laneId, noteId) {
    LaneActions.detachFromLane({laneId, noteId});
    NoteActions.delete(noteId);
  }
  
  editName(id, name) {
    console.log('editing lane name', id, name);
  }
  
  activateLaneEdit(id) {
    console.log('edit lan name', id);
  }
  
  activateNoteEdit(id) {
    console.log('edit note task', id);
  }
}