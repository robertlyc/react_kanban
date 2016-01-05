import React from 'react';
import {DragSource} from 'react-dnd';
import ItemType from '../constants/itemTypes';

const noteSource = {
  beginDrage(props) {
    console.log('begin dragging note', props);
    
    return {};
  }
};

@DragSource(ItemType.NOTE, noteSource, (connect) => ({
  connectDragSource: connect.dragSource()
}))

export default class Note extends React.Component {
  render() {
    return <li {...this.props}>{this.props.children}</li>;
  }
}