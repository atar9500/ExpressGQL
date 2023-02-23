import mongoose, {Schema} from 'mongoose';
import validator from 'mongoose-unique-validator';

import {Note} from '~/shared/types';

export type NoteRow = Omit<Note, 'author'> & {
  authorId: string;
};

const noteSchema = new Schema<NoteRow>(
  {
    title: {type: String, required: true},
    description: String,
    color: {type: String, required: true},
    archived: {type: Boolean, default: false},
    authorId: {type: String, required: true},
    id: Schema.Types.ObjectId,
  },
  {_id: false},
);

noteSchema.plugin(validator);

export default mongoose.model('Note', noteSchema);
