import axios from 'axios';
import {
  SET_SEARCH_TERM,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_ERROR
} from './constants';

export const setSearchTerm = (text) => ({
  type: SET_SEARCH_TERM,
  payload: text,
});

export const requestRobots = (dispatch) => {
 dispatch({ type: REQUEST_ROBOTS_PENDING });

 axios.get('http://jsonplaceholder.typicode.com/users')
   .then(response => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: response.data }))
   .catch(error => dispatch({ type: REQUEST_ROBOTS_ERROR, payload: error }));
}
