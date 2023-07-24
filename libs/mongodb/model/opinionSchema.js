import { Schema, model, models } from 'mongoose';

const opinionSchema = new Schema({
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

const Opinion = models.opinion || model('opinion', opinionSchema); //create user database.if not created yet,then create new database called user

export default Opinion;