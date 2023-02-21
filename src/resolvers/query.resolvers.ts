import {QueryResolvers} from '~/shared/types';
import {convertAuthor} from '~/shared/utils/convertAuthor';
import {convertNote} from '~/shared/utils/convertNote';

const queries: QueryResolvers = {
  author: async (_parent, args, db) => {
    const authorModel = await db.getAuthor(args.id);
    return convertAuthor(authorModel);
  },
  note: async (_parent, args, db) => {
    const noteModel = await db.getNote(args.id);
    return convertNote(noteModel);
  },
  notes: async (_parent, args, db) => {
    const authorModels = await db.getNotesByAuthor(args.authorId);
    return authorModels.map(convertNote);
  },
};

export default queries;
