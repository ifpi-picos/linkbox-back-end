// UserModel.ts
import mongoose, { Schema, Document } from 'mongoose';
import {IDashboard, dashboardSchema } from './Dashboard';

interface IUser extends Document {
  email: String;
  password: String;
  dashboards: [IDashboard];
}

const userSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  dashboards: {
    type: [dashboardSchema],
    required: true
  }, 
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;