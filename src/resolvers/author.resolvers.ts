import {UserResolvers} from '~/shared/types';

import convertNote from './utils/convertNote';

const authorResolvers: UserResolvers = {
  notes: async (parent, _args, db) => {
    const noteModels = await db.getNotesByUser(parent.id);
    return noteModels.map(convertNote);
  },
};

export default authorResolvers;
