import {Note, NoteModel} from '~/shared/types';

const convertNote = (note: NoteModel): Note => ({
  ...note,
  author: {id: note.authorId, email: '', name: '', notes: []},
});

export default convertNote;
