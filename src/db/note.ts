import mongoose, {Schema} from 'mongoose';

import {Note} from '~/shared/types';

export type NoteModel = Omit<Note, 'author'> & {
  authorId: string;
};

const noteSchema = new Schema<NoteModel>(
  {
    title: String,
    description: String,
    color: String,
    archived: Boolean,
    authorId: String,
    id: Schema.Types.ObjectId,
  },
  {_id: false},
);

export default mongoose.model('Note', noteSchema);
