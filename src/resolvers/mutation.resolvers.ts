import {MutationResolvers, UserWithToken} from '~/shared/types';

import convertUser from './utils/convertUser';
import convertNote from './utils/convertNote';

const mutations: MutationResolvers = {
  login: async (_parent, args, db) => {
    const user = await db.getUser({email: args.email});
    const authenticated = user.authenticate(args.password);
    if (!authenticated) {
      throw Error('Could not authenticated user!');
    }
    const token = user.generateAccessToken(args.password);
    return {...convertUser(user), token} as UserWithToken;
  },
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
