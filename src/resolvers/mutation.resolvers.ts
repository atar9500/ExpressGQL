import {MutationResolvers} from '~/shared/types';
import {convertNote} from '~/shared/utils/convertNote';

const mutations: MutationResolvers = {
  addNote: (_parent, args, context) => convertNote(context.addNote(args.data)),
  deleteNote: (_parent, args, context) => {
    context.deleteNote(args.id);
    return {id: args.id};
  },
  archiveNote: (_parent, args, context) => {
    context.archiveNote(args.id);
    return {id: args.id};
  },
  unarchiveNote: (_parent, args, context) => {
    context.unarchiveNote(args.id);
    return {id: args.id};
  },
};

export default mutations;
