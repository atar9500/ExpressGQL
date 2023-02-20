import {Author, Note, QueryResolvers} from '~/shared/types';
import {convertAuthor} from '~/shared/utils/convertAuthor';
import {convertNote} from '~/shared/utils/convertNote';

const queries: QueryResolvers = {
  author: (_parent, args, context) => convertAuthor(context.getAuthor(args.id)),
  note: (_parent, args, context) => convertNote(context.getNote(args.id)),
  notes: (_parent, args, context) =>
    context.getNotesByAuthor(args.authorId).map(convertNote),
};

export default queries;
