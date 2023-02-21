import {QueryResolvers} from '~/shared/types';

import convertUser from './utils/convertUser';
import convertNote from './utils/convertNote';

const queries: QueryResolvers = {
  author: async (_parent, args, db) => {
    const authorModel = await db.getUser(args.id);
    return convertUser(authorModel);
  },
  note: async (_parent, args, db) => {
    const noteModel = await db.getNote(args.id);
    return convertNote(noteModel);
  },
  notes: async (_parent, args, db) => {
    const authorModels = await db.getNotesByUser(args.authorId);
    return authorModels.map(convertNote);
  },
};

export default queries;
