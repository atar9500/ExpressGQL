import {NoteResolvers} from '~/shared/types';

import convertUser from './utils/convertUser';

const noteResolvers: NoteResolvers = {
  author: async (parent, _args, db) => {
    const author = await db.getUser(parent.author.id);
    return convertUser(author);
  },
};

export default noteResolvers;
