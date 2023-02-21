import {AuthorResolvers} from '~/shared/types';
import {convertNote} from '~/shared/utils/convertNote';

const authorResolvers: AuthorResolvers = {
  notes: async (parent, _args, db) => {
    const noteModels = await db.getNotesByAuthor(parent.id);
    return noteModels.map(convertNote);
  },
};

export default authorResolvers;
