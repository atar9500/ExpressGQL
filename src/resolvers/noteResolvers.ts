import {MangoContext, NoteData, NoteResolvers} from '~/shared/types';
import getAuthorById from '~/shared/utils/getAuthorById';

const noteResolvers: NoteResolvers<MangoContext, NoteData> = {
  author: (parent, _args, context) => getAuthorById(context, parent.authorId),
};

export default noteResolvers;
