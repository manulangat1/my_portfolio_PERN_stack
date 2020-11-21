import { combineReducers } from 'redux';
import home from './home';
import about from './about';
import projects from './projects';
export default combineReducers({
    home,
    about,
    projects
});