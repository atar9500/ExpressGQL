import {Note, User} from './generated';

export * from './generated';

export type NoteRow = Omit<Note, 'author'> & {
  authorId: string;
};

export type UserRow = Omit<User, 'notes'> & {
  salt: string;
  hash: string;
};
