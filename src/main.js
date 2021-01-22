import RouteInformationView from "./view/information";
import MenuView from "./view/menu";
import FilterPresenter from "./presenter/filter";
import {generateTripPoint} from "./mock/tripPoint";
import {RenderPosition, render, POINT_COUNT} from "./utils";
import TripPresenter from './presenter/trip';
import PointModel from './model/point';
import FilterModel from './model/filter';

const points = new Array(POINT_COUNT).fill().map(generateTripPoint);

const pointModel = new PointModel();
pointModel.setPoints(points);

const mainElement = document.querySelector(`.page-main`);
const tripEventsElement = mainElement.querySelector(`.trip-events`);

/** Рендерим Маршрут и стоимость */
const headerElement = document.querySelector(`.page-header`);
const tripMainElement = headerElement.querySelector(`.trip-main`);

const filterModel = new FilterModel();

/** Рендерим Меню */
const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);

render(tripControlsElement.firstElementChild, new MenuView().getElement(), RenderPosition.AFTERBEGIN);

/** Рендерим Контент */
const tripPresenter = new TripPresenter(tripEventsElement, pointModel, filterModel);
const filterPresenter = new FilterPresenter(tripControlsElement.lastElementChild, filterModel, pointModel);
/** Рендерим Форму создания */
// const tripEventsListElement = tripEventsElement.querySelector(`.trip-events__list`);

// renderElement(tripEventsListElement, createAddForm(points[0]), `afterbegin`);

if (points.length) {
  render(tripMainElement, new RouteInformationView().getElement(), RenderPosition.AFTEREND);
}

tripPresenter.init();
filterPresenter.init();

document.querySelector(`.trip-main__event-add-btn`).addEventListener(`click`, (evt) => {
  evt.preventDefault();
  tripPresenter.createPoint();
});
