import {randomUUID} from 'crypto';

import {Note} from '../types';
import {AUTHOR_IDS} from './authors';

export type NoteRow = Omit<Note, 'author'> & {
  authorId: string;
};

const NOTE_ID_1 = randomUUID();
const NOTE_ID_2 = randomUUID();
const NOTE_ID_3 = randomUUID();
const NOTE_ID_4 = randomUUID();
const NOTE_ID_5 = randomUUID();
const NOTE_ID_6 = randomUUID();
const NOTE_ID_7 = randomUUID();
const NOTE_ID_8 = randomUUID();

export const NOTE_IDS = [
  NOTE_ID_1,
  NOTE_ID_2,
  NOTE_ID_3,
  NOTE_ID_4,
  NOTE_ID_5,
  NOTE_ID_6,
  NOTE_ID_7,
  NOTE_ID_8,
];

const NOTES: Record<string, NoteRow> = {
  [NOTE_ID_1]: {
    id: NOTE_ID_1,
    title: 'This is note number 1',
    description:
      'Aute consectetur amet do exercitation. Adipisicing ullamco eu fugiat culpa anim Lorem reprehenderit cupidatat ipsum nisi proident. Enim consequat magna do duis.',
    color: '#90caf9',
    authorId: AUTHOR_IDS[0],
  },
  [NOTE_ID_2]: {
    id: NOTE_ID_2,
    title: 'This is note number 2',
    description:
      'Anim ex excepteur duis excepteur in ad in mollit nostrud eiusmod mollit. Anim ea sint nulla ad dolore laboris et cillum. Nulla mollit amet in anim id ea culpa esse aute adipisicing. Exercitation exercitation commodo sunt qui pariatur laboris et consectetur. Aliqua reprehenderit anim ut dolore deserunt cillum elit officia laborum sint adipisicing tempor magna sint.',
    color: '#a5d6a7',
    authorId: AUTHOR_IDS[1],
  },
  [NOTE_ID_3]: {
    id: NOTE_ID_3,
    title: 'This is note number 3',
    description:
      'Incididunt tempor dolore cupidatat eiusmod reprehenderit officia aliquip nostrud pariatur irure nisi ea Lorem. Adipisicing officia voluptate ea in cillum. Deserunt laborum sint et proident deserunt. Do ut ut irure esse mollit non ea. Duis cillum ea mollit irure sit eiusmod. Eu mollit aliqua consectetur culpa.',
    color: '#f48fb1',
    authorId: AUTHOR_IDS[2],
  },
  [NOTE_ID_4]: {
    id: NOTE_ID_4,
    title: 'This is note number 4',
    description:
      'Occaecat aute do nulla anim Lorem. Quis amet deserunt laborum sit eu qui eiusmod consequat aute irure sit sint. Et id mollit consequat amet ea est id enim non. Lorem esse nostrud enim ex ex.',
    color: '#ffab91',
    authorId: AUTHOR_IDS[3],
  },
  [NOTE_ID_5]: {
    id: NOTE_ID_5,
    title: 'This is note number 5',
    description:
      'Aute consectetur amet do exercitation. Adipisicing ullamco eu fugiat culpa anim Lorem reprehenderit cupidatat ipsum nisi proident. Enim consequat magna do duis.',
    color: '#90caf9',
    authorId: AUTHOR_IDS[0],
  },
  [NOTE_ID_6]: {
    id: NOTE_ID_6,
    title: 'This is note number 6',
    description:
      'Quis ea et deserunt nostrud velit laboris tempor excepteur cillum esse quis. Proident laboris reprehenderit incididunt eiusmod. Fugiat deserunt deserunt ea excepteur tempor aliquip ad. Ad velit amet consequat qui excepteur veniam ea exercitation in aliquip proident tempor elit commodo. In culpa ullamco veniam officia duis proident. Est magna dolor minim aute sit cillum ea magna qui elit commodo.',
    color: '#a5d6a7',
    authorId: AUTHOR_IDS[1],
  },
  [NOTE_ID_7]: {
    id: NOTE_ID_7,
    title: 'This is note number 7',
    description:
      'Nostrud incididunt commodo laboris tempor eiusmod excepteur. Quis Lorem reprehenderit anim ullamco sunt anim sint ipsum nulla ex sunt nisi sit ipsum. Est velit exercitation ullamco veniam do magna magna reprehenderit ut eiusmod dolore. Fugiat ullamco deserunt eiusmod non aliqua occaecat. Pariatur deserunt in velit et laborum laboris sunt cupidatat ipsum anim ex Lorem sunt voluptate. Non mollit cupidatat veniam voluptate. Incididunt voluptate magna qui in magna consequat Lorem deserunt quis consequat anim id.',
    color: '#f48fb1',
    authorId: AUTHOR_IDS[2],
  },
  [NOTE_ID_8]: {
    id: NOTE_ID_8,
    title: 'This is note number 8',
    description:
      'Aliquip mollit esse quis irure sunt sint eiusmod commodo do. Do laboris dolor adipisicing non. Occaecat aliquip quis ipsum dolor laborum nisi laborum non exercitation. Do labore ipsum incididunt minim enim nostrud sit veniam. Aliqua aliqua tempor aute occaecat ad ut exercitation ea nostrud ipsum proident dolor elit sit. Labore ullamco et id ex nulla proident ut ad elit fugiat officia anim. Qui deserunt nulla ea dolor aute est non non occaecat proident tempor cillum nulla.',
    color: '#ffab91',
    authorId: AUTHOR_IDS[3],
  },
};

export default NOTES;
