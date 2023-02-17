import {AuthorDetails, AuthorResolvers, MangoContext} from '~/shared/types';
import getAuthorById from '~/shared/utils/getAuthorById';

export const authorResolvers: AuthorResolvers<MangoContext, AuthorDetails> = {
  notes: (parent, _args, context) =>
    context.data.notes.filter(({authorId}) => parent.id === authorId),
};
