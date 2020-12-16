import RouteInformationView from "./view/information";
import MenuView from "./view/menu";
import FilterView from "./view/filter";
import SortForm from "./view/sort";
import ContentView from "./view/content";
import {createAddForm} from "./view/addForm";
import EditView from "./view/editForm";
import PointView from "./view/point";
import EmptyList from "./view/noPoints";
import {generateTripPoint} from "./mock/tripPoint";
import {RenderPosition, renderElement} from "./utils";

const POINT_COUNT = 20;

const points = new Array(POINT_COUNT).fill().map(generateTripPoint);

const mainElement = document.querySelector(`.page-main`);
const tripEventsElement = mainElement.querySelector(`.trip-events`);

/** Рендерим Маршрут и стоимость */
const headerElement = document.querySelector(`.page-header`);
const tripMainElement = headerElement.querySelector(`.trip-main`);



/** Рендерим Меню */
const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);

renderElement(tripControlsElement.firstElementChild, new MenuView().getElement(), RenderPosition.AFTERBEGIN);

/** Рендерим Фильтры */
renderElement(tripControlsElement.lastElementChild, new FilterView().getElement(), RenderPosition.AFTERBEGIN);

/** Рендерим Контент */
const content = new ContentView();
renderElement(tripEventsElement, content.getElement(), RenderPosition.BEFOREND);

/** Рендерим Форму создания */
const tripEventsListElement = tripEventsElement.querySelector(`.trip-events__list`);

// renderElement(tripEventsListElement, createAddForm(points[0]), `afterbegin`);

const renderPoint = (pointList , point) => {
  const pointElement = new PointView(point);
  const editForm = new EditView(point);
  
  const replacePointToForm = () => {
    pointList.replaceChild(editForm.getElement(),pointElement.getElement());
  }

  const replaceFormToPoint = () =>{
    pointList.replaceChild(pointElement.getElement(),editForm.getElement());
  } 

  const onEscapePress = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      replaceFormToPoint();
      document.removeEventListener(`keydown`, onEscapePress)
    }
  }

  pointElement.setClickHandler(() =>{
    replacePointToForm();
    document.addEventListener(`keydown`, onEscapePress)
  });

  editForm.setSumbitHandler(() =>{
    replaceFormToPoint();
    document.removeEventListener(`keydown`, onEscapePress)
  });

  editForm.setClickHandler(() => {
    replaceFormToPoint();
    document.removeEventListener(`keydown`, onEscapePress)
  });

  renderElement(pointList, pointElement.getElement(), RenderPosition.BEFOREND);
};

if(points.length){
  renderElement(tripEventsElement.firstElementChild, new SortForm().getElement(), RenderPosition.AFTERBEGIN);
  renderElement(tripMainElement, new RouteInformationView().getElement(), RenderPosition.AFTEREND);
  
  /** Рендерим Точка маршрута */
  for (let i = 0; i < POINT_COUNT; i++) {
    renderPoint(content.getElement(), points[i]);
  }
} else {
  renderElement(tripEventsElement, new EmptyList().getElement(), RenderPosition.BEFOREND);
}


