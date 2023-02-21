import mongoose, {Schema} from 'mongoose';

import {UserModel} from '~/shared/types';

const authorSchema = new Schema<UserModel>(
  {
    name: String,
    email: String,
    avatar: String,
    id: Schema.Types.ObjectId,
  },
  {_id: false},
);

export default mongoose.model('User', authorSchema);
