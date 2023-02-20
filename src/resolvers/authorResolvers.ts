import {AuthorDetails, AuthorResolvers, MangoContext} from '~/shared/types';
const authorResolvers: AuthorResolvers<MangoContext, AuthorDetails> = {
  notes: (parent, _args, context) =>
    context.data.notes.filter(({authorId}) => parent.id === authorId),
};

export default authorResolvers;
