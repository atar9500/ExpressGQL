import {NoteRow} from '../db';
import {Note} from '../types';

export const convertNote = (note: NoteRow): Note => ({
  ...note,
  author: {id: note.authorId, email: '', name: '', notes: []},
});
