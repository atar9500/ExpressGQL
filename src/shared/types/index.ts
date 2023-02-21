import {Note, User} from './generated';

export * from './generated';

export type NoteModel = Omit<Note, 'author'> & {
  authorId: string;
};

export type UserModel = Omit<User, 'notes'>;
