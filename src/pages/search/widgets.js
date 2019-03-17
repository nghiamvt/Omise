import { APIGetCreator, APIPostCreator } from 'src/common/api';
import { URL } from 'src/common/constant';

// API Actions
export const loadAnswers = APIGetCreator({
  type: 'LOAD_ANSWERS',
});

export const loadRestaurants = APIGetCreator({
  type: 'LOAD_RESTAURANTS',
});

export const fullSearch = APIPostCreator({
  type: 'FULLSEARCH',
  url: URL.FULLSEARCH,
});

// GET /answers?term={value}
// GET /restaurants?term={value}
// GET /fullSearch?term={value}
