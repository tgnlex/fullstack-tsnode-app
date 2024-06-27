import {BaseModel} from '../../interfaces/model.ts';

interface Post extends BaseModel {
  title: string;
  content: string;
  
}
