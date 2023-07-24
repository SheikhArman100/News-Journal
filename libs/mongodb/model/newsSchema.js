import { Schema, model, models } from 'mongoose';

const newsSchema = new Schema({
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

const News = models.news || model('news', newsSchema); //create user database.if not created yet,then create new database called user

export default News;