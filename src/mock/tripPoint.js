import dayjs from 'dayjs';
import {generateId} from '../utils';

const TYPE_TRIP_POINTS = [`taxi`, `bus`, `train`, `ship`, `transport`, `drive`, `flight`, `check-in`, `sightseeng`, `restaurant`];
const CITY_NAMES = [`Moscow`, `Ufa`, `Tomsk`, `Paris`, `New York`, `London`, `Salavat`];
const MOCK_TEXT_DESCRIPTION = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. 
Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.
Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc
ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus
sit amet tempus.`;
const MAX_TEXT_SIZE = 5;
const MAX_DAY_GAP = 7;
const MIN_PRICE = 1000;
const MAX_PRICE = 10000;
const MIN_PRICE_OFFER = 10;
const MAX_PRICE_OFFER = 100;
const TITLE_TEXT = [`Add luggage`, `Switch to comfort class`, `Add meal`, `Choose seats`, `Travel by train`];
const MAX_OFFERS_COUNT = 5;

const getRandomValue = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const generateText = () => {
  const splitText = MOCK_TEXT_DESCRIPTION.split(`.`);
  const randomLength = Math.ceil(Math.random() * MAX_TEXT_SIZE);
  let text = ``;

  for (let i = 0; i < randomLength; i++) {
    text += splitText[i];
  }

  return text;
};

const getRandomInteger = (min, max) => {
  return Math.floor(min + Math.random() * (max - min + 1));
};

const generateDate = () => {
  const dayGap = getRandomInteger(-MAX_DAY_GAP, MAX_DAY_GAP);

  return dayjs().add(dayGap, `day`).toDate();
};

const generateOffer = () => {
  const randomSizeOffer = getRandomInteger(1, MAX_OFFERS_COUNT);
  let offers = [];

  for (let i = 0; i < randomSizeOffer; i++) {
    offers.push({
      price: getRandomInteger(MIN_PRICE_OFFER, MAX_PRICE_OFFER),
      title: TITLE_TEXT[i]
    });
  }

  return offers;
};

export const generateTripPoint = () => {
  return {
    id: generateId(),
    type: getRandomValue(TYPE_TRIP_POINTS),
    city: getRandomValue(CITY_NAMES),
    beginDate: generateDate(),
    endDate: generateDate(),
    isFavorite: false,
    price: getRandomInteger(MIN_PRICE, MAX_PRICE),
    offers: generateOffer(),
    destination: {
      description: generateText(),
      foto: `http://picsum.photos/248/152?r=${Math.floor(Math.random() * 10)}`
    }
  };
};
