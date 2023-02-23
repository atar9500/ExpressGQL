import {FilterQuery, HydratedDocument} from 'mongoose';

import {NoteData, UserRow, NoteRow} from '~/shared/types';

import User, {UserMethods} from './user.model';
import Note from './note.model';

type UserDoc = HydratedDocument<UserRow, UserMethods>;
type NoteDoc = HydratedDocument<NoteRow>;

const getNote = async (id: string): Promise<NoteDoc> => {
  const note = await Note.findById(id);
  if (!note) {
    throw Error(`Note id ${id} could not be found!`);
  }
  return note;
};

const getUser = async (
  queryParams: string | FilterQuery<UserRow>,
): Promise<UserDoc> => {
  let user: UserDoc | null;
  if (typeof queryParams === 'string') {
    user = await User.findById(queryParams);
  } else {
    user = await User.findOne(queryParams);
  }
  if (!user) {
    throw Error(`User could not be found, Query params: ${queryParams}`);
  }
  return user;
};

const getNotesByUser = async (authorId: string): Promise<NoteRow[]> => {
  return await Note.find({authorId});
};

const addNote = async (data: NoteData): Promise<NoteRow> => {
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
  getUser,
  getNotesByUser,
  addNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
};

export type DBContext = typeof DBClient;

export default DBClient;
