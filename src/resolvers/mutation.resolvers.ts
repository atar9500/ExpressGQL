import {MutationResolvers} from '~/shared/types';
import {convertNote} from '~/shared/utils/convertNote';

const mutations: MutationResolvers = {
  addNote: (_parent, args, context) => convertNote(context.addNote(args.data)),
};

export default mutations;
