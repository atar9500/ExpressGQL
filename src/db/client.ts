import {HydratedDocument} from 'mongoose';

import {NoteData} from '~/shared/types';

import Author, {AuthorModel} from './author';
import Note, {NoteModel} from './note';

const getNote = async (id: string): Promise<HydratedDocument<NoteModel>> => {
  const note = await Note.findById(id);
  if (!note) {
    throw Error(`Note id ${id} could not be found!`);
  }
  return note;
};

const getAuthor = async (
  id: string,
): Promise<HydratedDocument<AuthorModel>> => {
  const author = await Author.findById(id);
  if (!author) {
    throw Error(`Author id ${id} could not be found!`);
  }
  return author;
};

const getNotesByAuthor = async (authorId: string): Promise<NoteModel[]> => {
  return await Note.find({authorId});
};

const addNote = async (data: NoteData): Promise<NoteModel> => {
  const note = new Note(data);
  return await note.save();
};

const deleteNote = async (id: string): Promise<string> => {
  await Note.deleteOne({id});
  return id;
};

const archiveNote = async (id: string): Promise<string> => {
  const note = await getNote(id);
  note.archived = true;
  note.save();
  return id;
};

const unarchiveNote = async (id: string): Promise<string> => {
  const note = await getNote(id);
  note.archived = false;
  note.save();
  return id;
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
