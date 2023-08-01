import { Schema, model, models } from 'mongoose';

const headlineSchema = new Schema({
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

const Headline = models.headline || model('headline', headlineSchema); //create user database.if not created yet,then create new database called user

export default Headline;