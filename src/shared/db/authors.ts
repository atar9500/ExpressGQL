import {randomUUID} from 'crypto';

import {Author} from '../types';

export type AuthorRow = Omit<Author, 'notes'>;

const AUTHOR_ID_1 = randomUUID();
const AUTHOR_ID_2 = randomUUID();
const AUTHOR_ID_3 = randomUUID();
const AUTHOR_ID_4 = randomUUID();

export const AUTHOR_IDS = [AUTHOR_ID_1, AUTHOR_ID_2, AUTHOR_ID_3, AUTHOR_ID_4];

const AUTHORS: Record<string, AuthorRow> = {
  [AUTHOR_ID_1]: {
    id: AUTHOR_ID_1,
    name: 'Atar Avraham',
    email: 'atar.avraham@itechart-group.com',
  },
  [AUTHOR_ID_2]: {
    id: AUTHOR_ID_2,
    name: 'John Smith',
    email: 'john.smith@itechart-group.com',
  },
  [AUTHOR_ID_3]: {
    id: AUTHOR_ID_3,
    name: 'Atar Avraham',
    email: 'atar.avraham@itechart-group.com',
  },
  [AUTHOR_ID_4]: {
    id: AUTHOR_ID_4,
    name: 'Atar Avraham',
    email: 'atar.avraham@itechart-group.com',
  },
};

export default AUTHORS;
