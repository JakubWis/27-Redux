const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';
const THUMB_UP = 'THUMB_UP';
const THUMB_DOWN = 'THUMB_DOWN';

{
  type: 'ADD_COMMENT',
  text: 'Hello world!',
  id: uuid.v4()
}

{
  type: 'EDIT_COMMENT',
  id: 04,//przykladowy
  text: 'Hello new world!'
}

{
  type: 'DELETE_COMMENT',
  id: 04,//przykladowy
}
  
{
  type: 'THUMB_UP',
  id: 04,//przykladowy
  howManyLikesHas: howManyLikesHas + 1
}
  
{
  type: 'THUMB_DOWN',
  id: 04,//przykladowy
  howManyDislikesHas: howManyDislikesHas + 1
}
  
function addComment(text) {
  return {
    type: 'ADD_COMMENT',
    text,
    id: uuid.v4()
  }
}
  
function editComment(id, newText) {
  return {
    type: 'EDIT_COMMENT',
    id, 
    text: newText
  }
}
  
function deleteComment(id) {
  return {
    type: 'DELETE_COMMENT',
    id
  }
}
  
function rateUp(id) {
  return {
    type: 'THUMB_DOWN',
    id,
    howManyLikesHas: howManyLikesHas + 1
  }
}

function rateDown(id) {
  return {
    type: 'THUMB_DOWN',
    id,
    howManyDislikesHas: howManyDislikesHas + 1
  }
}

const boundAddComment = text => dispatch(addComment(text));
const boundEditComment = (id,text) => dispatch(editComment(id,text));
const boundDeleteComment = id => dispatch(deleteComment(id));
const boundRateUp = id => dispatch(rateUp(id));
const boundRateDown = id => dispatch(rateDown(id));
