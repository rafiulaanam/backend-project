import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";
import bcrypt from 'bcrypt';
import config from '../../config';



const userSchema = new Schema<TUser>(
    {
      id: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      needsPasswordChange: {
        type: Boolean,
        default: true,
      },
      role: {
        type: String,
        enum: ['student', 'faculty', 'admin'],
      },
      status: {
        type: String,
        enum: ['in-progress', 'blocked'],
        default: 'in-progress',
      },
      isDeleted: {
        type: Boolean,
        default: false,
      },
    },
    {
      timestamps: true,
    },
  );

userSchema.pre('save', async function () {
    this.password = await bcrypt.hash(
      this.password,
      Number(config.bcrypt_salt_rounds),
    );
  });

userSchema.post('save', function (doc, next) {
    doc.password = ''
  next()
  });

  export const UserModel = model<TUser>('User', userSchema);