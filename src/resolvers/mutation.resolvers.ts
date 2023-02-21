import {MutationResolvers} from '~/shared/types';
import {convertNote} from '~/shared/utils/convertNote';

const mutations: MutationResolvers = {
  addNote: async (_parent, args, db) => {
    const noteModel = await db.addNote(args.data);
    return convertNote(noteModel);
  },
  deleteNote: async (_parent, args, db) => {
    const id = await db.deleteNote(args.id);
    return {id};
  },
  archiveNote: async (_parent, args, db) => {
    const id = await db.archiveNote(args.id);
    return {id};
  },
  unarchiveNote: async (_parent, args, db) => {
    const id = await db.unarchiveNote(args.id);
    return {id};
  },
};

export default mutations;
