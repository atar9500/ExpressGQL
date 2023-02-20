import {NoteResolvers} from '~/shared/types';
import {convertAuthor} from '~/shared/utils/convertAuthor';

const noteResolvers: NoteResolvers = {
  author: (parent, _args, context) =>
    convertAuthor(context.getAuthor(parent.author.id)),
};

export default noteResolvers;
