import {NoteResolvers} from '~/shared/types';
import {convertAuthor} from '~/shared/utils/convertAuthor';

const noteResolvers: NoteResolvers = {
  author: async (parent, _args, db) => {
    const author = await db.getAuthor(parent.author.id);
    return convertAuthor(author);
  },
};

export default noteResolvers;
