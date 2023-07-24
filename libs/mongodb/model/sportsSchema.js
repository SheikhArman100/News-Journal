import { Schema, model, models } from 'mongoose';

const sportsSchema = new Schema({
    title: {
    type: String,
    
  },
  link: {
    type: String,
    
  },
  image: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Sports= models.sports || model('sports', sportsSchema); //create user database.if not created yet,then create new database called user

export default Sports;