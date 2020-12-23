import RouteInformationView from "./view/information";
import MenuView from "./view/menu";
import FilterView from "./view/filter";
import {generateTripPoint} from "./mock/tripPoint";
import {RenderPosition, render, POINT_COUNT} from "./utils";
import TripPresenter from './presenter/trip';

const points = new Array(POINT_COUNT).fill().map(generateTripPoint);

const mainElement = document.querySelector(`.page-main`);
const tripEventsElement = mainElement.querySelector(`.trip-events`);

/** Рендерим Маршрут и стоимость */
const headerElement = document.querySelector(`.page-header`);
const tripMainElement = headerElement.querySelector(`.trip-main`);



/** Рендерим Меню */
const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);

render(tripControlsElement.firstElementChild, new MenuView().getElement(), RenderPosition.AFTERBEGIN);

/** Рендерим Фильтры */
render(tripControlsElement.lastElementChild, new FilterView().getElement(), RenderPosition.AFTERBEGIN);

/** Рендерим Контент */
const tripPresenter = new TripPresenter(tripEventsElement);

/** Рендерим Форму создания */
const tripEventsListElement = tripEventsElement.querySelector(`.trip-events__list`);

// renderElement(tripEventsListElement, createAddForm(points[0]), `afterbegin`);

if(points.length){
  render(tripMainElement, new RouteInformationView().getElement(), RenderPosition.AFTEREND);
}

tripPresenter.init(points);
