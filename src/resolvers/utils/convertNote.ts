import {Note, NoteRow} from '~/shared/types';

const convertNote = (note: NoteRow): Note => ({
  ...note,
  author: {id: note.authorId, email: '', name: '', notes: []},
});

export default convertNote;
