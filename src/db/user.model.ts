import crypto from 'crypto';

import mongoose, {Model, Schema} from 'mongoose';
import validator from 'mongoose-unique-validator';
import jwt from 'jsonwebtoken';

import {UserRow} from '~/shared/types';

export type UserMethods = {
  setPassword: (password: string) => void;
  authenticate: (password: string) => boolean;
  generateAccessToken: (password: string) => string;
};

type UserModel = Model<UserRow, object, UserMethods>;

const userSchema = new Schema<UserRow, UserModel, UserMethods>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      match: /^[a-zA-Z0-9]+$/,
      index: true,
    },
    email: {
      type: String,
      lowercase: true,
      required: true,
      unique: true,
      match: /\S+@\S+\.\S+/,
      index: true,
    },
    hash: String,
    salt: String,
    avatar: String,
    id: Schema.Types.ObjectId,
  },
  {_id: false},
);

userSchema.plugin(validator);

userSchema.methods.setPassword = function (password: string) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, 'sha512')
    .toString('hex');
};

userSchema.methods.authenticate = function (password: string) {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, 'sha512')
    .toString('hex');
  return this.hash === hash;
};

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      id: this.id,
      username: this.username,
      email: this.email,
    },
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    process.env.SECRET!,
    {algorithm: 'HS256', subject: this.id, expiresIn: '30d'},
  );
};

export default mongoose.model('User', userSchema);
