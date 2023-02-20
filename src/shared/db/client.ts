import {randomUUID} from 'crypto';

import {NoteData} from '../types';
import AUTHORS, {AuthorRow} from './authors';
import NOTES, {NoteRow} from './notes';

const getNote = (id: string): NoteRow => {
  const note = NOTES[id];
  if (!note) {
    throw Error('Note could not be found!');
  }
  return note;
};

const getAuthor = (id: string): AuthorRow => {
  const author = AUTHORS[id];
  if (!author) {
    throw Error('Author could not be found!');
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

const DBClient = {getNote, getAuthor, getNotesByAuthor, addNote};

export type DBContext = typeof DBClient;

export default {getNote, getAuthor, getNotesByAuthor, addNote};
