import {User, UserRow} from '~/shared/types';

const convertUser = <T extends UserRow = UserRow>(user: T): User => ({
  ...user,
  notes: [],
});

export default convertUser;
