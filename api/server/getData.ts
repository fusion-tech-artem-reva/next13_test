// import 'server-only';
import axios from 'axios';
import { UserType } from '../../models/user.model';




export const getData = async () => {
  return axios.get<UserType>('https://jsonplaceholder.typicode.com/users/1')
}