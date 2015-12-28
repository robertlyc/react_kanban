import AltContainer from 'alt-container';
import React from 'react';
import Notes from './Notes.jsx';
import Lanes from './Lanes.jsx'
import NoteActions from '../actions/NoteActions';
import LaneActions from '../actions/LaneActions';
import NoteStore from '../stores/NoteStore';
import LaneStore from '../stores/LaneStore';

export default class App extends React.Component {
  render() {
    return (
      // <div>
//         <button className="add-note" onClick={this.addNote}>+</button>
//         <AltContainer
//           stores={[NoteStore]}
//           inject={{
//             items: () => NoteStore.getState().notes
//           }}
//         >
//           <Notes onEdit={this.editNote}
//                  onDelete={this.deleteNote} />
//         </AltContainer>
//       </div>
      <div>
        <button className="add-lane" onClick={this.addItem}>+</button>
        <AltContainer
          stores={[LaneStore]}
          inject={{
            items: ()=> LaneStore.getState().lanes || []
          }}
        >
          <Lanes />
        </AltContainer>
      </div>
    );
  }
  
  addItem() {
    LaneActions.create({name: 'New lane'});
  }

  
  // addNote() {
  //   NoteActions.create({task: 'New task'});
  // }
  //
  // editNote(id, task) {
  //   NoteActions.update({id, task});
  // }
  //
  // deleteNote(id) {
  //   NoteActions.delete(id);
  // }
}