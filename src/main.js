import {createRouteInformation} from "./view/information";
import {createMenu} from "./view/menu";
import {createFilters} from "./view/filter";
import {createSortForm} from "./view/sort";
import {createContent} from "./view/content";
import {createAddForm} from "./view/addForm";
import {createPoint} from "./view/point";
import {generateTripPoint} from "./mock/tripPoint";

const POINT_COUNT = 20;

const points = new Array(POINT_COUNT).fill().map(generateTripPoint);

const render = (container, markup, place) => {
  container.insertAdjacentHTML(place, markup);
};

/** Рендерим Маршрут и стоимость */
const headerElement = document.querySelector(`.page-header`);
const tripMainElement = headerElement.querySelector(`.trip-main`);

render(tripMainElement, createRouteInformation(), `afterbegin`);

/** Рендерим Меню */
const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);
const menuElement = tripControlsElement.querySelector(`h2:first-child`);

render(menuElement, createMenu(), `afterend`);

/** Рендерим Фильтры */
const filtersElement = tripControlsElement.querySelector(`h2:last-child`);

render(filtersElement, createFilters(), `afterend`);

/** Рендерим Сортировку */
const mainElement = document.querySelector(`.page-main`);
const tripEventsElement = mainElement.querySelector(`.trip-events`);
const sortElement = tripEventsElement.querySelector(`h2:first-child`);

render(sortElement, createSortForm(), `afterend`);

/** Рендерим Контент */

render(tripEventsElement, createContent(), `beforeend`);

/** Рендерим Форму создания */
const tripEventsListElement = tripEventsElement.querySelector(`.trip-events__list`);

render(tripEventsListElement, createAddForm(points[0]), `afterbegin`);

/** Рендерим Точка маршрута */
for (let i = 1; i < POINT_COUNT; i++) {
  render(tripEventsListElement, createPoint(points[i]), `beforeend`);
}

