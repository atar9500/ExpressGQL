import {Author, Note, NoteDetails, QueryResolvers} from '~/shared/types';
import getAuthorById from '~/shared/utils/getAuthorById';

const queries: QueryResolvers = {
  author: (_parent, args, context) => {
    return getAuthorById(context, args.id) as Author;
  },
  note: (_parent, args, context) => {
    const data = context.data.notes.find(({id}) => id === args.id);
    if (!data) {
      throw Error('Note does not exist!');
    }
    const {authorId, ...note} = data;
    return note as Note;
  },
  notes: (_parent, args, context) =>
    context.data.notes.reduce<NoteDetails[]>((memo, {authorId, ...item}) => {
      if (authorId === args.authorId) {
        memo.push(item);
      }
      return memo;
    }, []) as Note[],
};

export default queries;
