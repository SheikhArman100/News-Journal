import { Schema, model, models } from 'mongoose';

const cultureSchema = new Schema({
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

const Culture = models.culture || model('culture', cultureSchema); //create user database.if not created yet,then create new database called user

export default Culture;