import {Author, AuthorDetails, NoteDetails} from './generated';

export type NoteData = NoteDetails & {
  authorId: string;
};

export type MangoContext = {
  data: {
    authors: AuthorDetails[];
    notes: NoteData[];
  };
};

export * from './generated';
