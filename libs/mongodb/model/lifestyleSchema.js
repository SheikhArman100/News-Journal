import { Schema, model, models } from 'mongoose';

const lifestyleSchema = new Schema({
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

const Lifestyle = models.lifestyle || model('lifestyle', lifestyleSchema); //create user database.if not created yet,then create new database called user

export default Lifestyle;