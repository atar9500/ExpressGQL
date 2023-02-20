import {AuthorRow} from '../db';
import {Author} from '../types';

export const convertAuthor = (author: AuthorRow): Author => ({
  ...author,
  notes: [],
});
