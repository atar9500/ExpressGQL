import {AuthorResolvers} from '~/shared/types';
import {convertNote} from '~/shared/utils/convertNote';

const authorResolvers: AuthorResolvers = {
  notes: (parent, _args, context) =>
    context.getNotesByAuthor(parent.id).map(convertNote),
};

export default authorResolvers;
