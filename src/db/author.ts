import mongoose, {Schema} from 'mongoose';

import {Author} from '~/shared/types';

export type AuthorModel = Omit<Author, 'notes'>;

const authorSchema = new Schema<AuthorModel>(
  {
    name: String,
    email: String,
    avatar: String,
    id: Schema.Types.ObjectId,
  },
  {_id: false},
);

export default mongoose.model('Author', authorSchema);
