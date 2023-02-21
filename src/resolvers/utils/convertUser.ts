import {User, UserModel} from '~/shared/types';

const convertUser = (author: UserModel): User => ({
  ...author,
  notes: [],
});

export default convertUser;
