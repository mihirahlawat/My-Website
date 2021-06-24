import { v4 as uuidv4 } from 'uuid';
import Sentiment from '../images/sentiment.jpg';
import Dbms from '../images/dbms.jpg';
import Rainwater from '../images/rainwater.jpg';
import Predictor from '../images/predictor.jpg';
import Customer from '../images/customer.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Twitter Sentiment Analysis',
    desc:
      'A sentiment analysis of tweets using CNNs and LSTMs. Implementation of a SOTA paper of year 2017',
    img: Sentiment,
    link: 'https://github.com/mihirahlawat/Sentiment-Analysis',
  },
  {
    id: uuidv4(),
    name: 'Database Management Academic Project',
    desc:
      'A GUI application on Fire Station database management in python using PyQt for the front-end and MySql for the back-end with interface for both administrator and user',
    img: Dbms,
    link:
      'https://github.com/mihirahlawat/FireStation-Database_Management_System_Project',
  },

  {
    id: uuidv4(),
    name: 'RWHOptimiser',
    desc:
      'RWHOptimiser is an underground water tank location optimizer which makes use of transshipment model(and other Operation Research techniques) to find the optimal location(s) and capacity of water tank(s) to be placed in a city',
    img: Rainwater,
    link: 'https://github.com/aviral36/RWHOptimiser',
  },
  {
    id: uuidv4(),
    name: 'Adaptive Question Recommendation System',
    desc:
      'A statistical machine learning model using user based collaborative filtering and exploratory data analysis to build a real-time adaptive question recommendation engine',
    img: Predictor,
    link: 'https://github.com/mihirahlawat/RecommenderSystem',
  },
  {
    id: uuidv4(),
    name: 'Customer Predictor',
    desc:
      'A machine learning model in python using the leads generated from users’ online activities by rigorous data cleaning and extracting relevant features to predict future customers',
    img: Customer,
    link: 'https://github.com/mihirahlawat/CustomerPredictor',
  },
];

export default projects;
