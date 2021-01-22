import PointAddView from "../view/addForm";
import {generateId} from '../utils';
import {remove, render, RenderPosition, UserAction, UpdateType} from "../utils";

export default class PointNew {
  constructor(pointListContainer, changeData) {
    this._pointListContainer = pointListContainer;
    this._changeData = changeData;

    this._pointAddComponent = null;

    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._handleDeleteClick = this._handleDeleteClick.bind(this);
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);
  }

  init() {
    if (this._pointAddComponent !== null) {
      return;
    }

    this._pointAddComponent = new PointAddView();
    this._pointAddComponent.setSumbitHandler(this._handleFormSubmit);
    this._pointAddComponent.setDeleteClickHandler(this._handleDeleteClick);
    render(this._pointListContainer, this._pointAddComponent, RenderPosition.BEFOREBEGIN);

    document.addEventListener(`keydown`, this._escKeyDownHandler);
  }

  destroy() {
    if (this._pointAddComponent === null) {
      return;
    }

    remove(this._pointAddComponent);
    this._pointAddComponent = null;

    document.removeEventListener(`keydown`, this._escKeyDownHandler);
  }

  _handleFormSubmit(point) {
    this._changeData(
        UserAction.ADD_POINT,
        UpdateType.MINOR,
        // Пока у нас нет сервера, который бы после сохранения
        // выдывал честный id задачи, нам нужно позаботиться об этом самим
        Object.assign({id: generateId()}, point)
    );
    this.destroy();
  }

  _handleDeleteClick() {
    this.destroy();
  }

  _escKeyDownHandler(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      this.destroy();
    }
  }
}
