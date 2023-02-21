import {randomUUID} from 'crypto';

import {NoteData} from '../types';
import AUTHORS, {AuthorRow} from './authors';
import NOTES, {NoteRow} from './notes';

const _findNote = (id: string): NoteRow => {
  const note = NOTES[id];
  if (!note) {
    throw Error(`Note id ${id} could not be found!`);
  }
  return note;
};

const getNote = (id: string): NoteRow => _findNote(id);

const getAuthor = (id: string): AuthorRow => {
  const author = AUTHORS[id];
  if (!author) {
    throw Error(`Author id ${id} could not be found!`);
  }
  return author;
};

const getNotesByAuthor = (authorId: string): NoteRow[] =>
  Object.keys(NOTES).reduce<NoteRow[]>((memo, id) => {
    if (NOTES[id].authorId === authorId) {
      memo.push(NOTES[id]);
    }
    return memo;
  }, []);

const addNote = (note: NoteData): NoteRow => {
  const id = randomUUID();
  const noteRow: NoteRow = {...note, id};
  NOTES[id] = noteRow;
  return noteRow;
};

const deleteNote = (id: string) => {
  if (!NOTES[id]) {
    throw Error(`Note id ${id} could not be found!`);
  }
  delete NOTES[id];
};

const archiveNote = (id: string) => {
  const note = _findNote(id);
  note.archived = true;
};

const unarchiveNote = (id: string) => {
  const note = _findNote(id);
  note.archived = false;
};

const DBClient = {
  getNote,
  getAuthor,
  getNotesByAuthor,
  addNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
};

export type DBContext = typeof DBClient;

export default DBClient;
