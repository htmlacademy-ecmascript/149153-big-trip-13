import PointEditView from '../view/editForm';
import PointView from '../view/point';
import {replace, render, RenderPosition, remove, isDatesEqual} from '../utils';
import {UserAction, UpdateType} from "../utils.js";

const Mode = {
  DEFAULT: `DEFAULT`,
  EDITING: `EDITING`
};

export default class Point {
  constructor(pointContainer, changeData, changeMode) {
    this._pointContainer = pointContainer;
    this._changeData = changeData;
    this._changeMode = changeMode;

    this._pointComponent = null;
    this._editComponent = null;
    this._mode = Mode.DEFAULT;

    this._handelEditClick = this._handelEditClick.bind(this);
    this._handelFormClick = this._handelFormClick.bind(this);
    this._handelFormSubmit = this._handelFormSubmit.bind(this);
    this._escapeKeyDownHandler = this._escapeKeyDownHandler.bind(this);
    this._handleDeleteClick = this._handleDeleteClick.bind(this);
    this._handleFavoriteClick = this._handleFavoriteClick.bind(this);
  }

  init(point) {
    this._point = point;

    const prevPointComponent = this._pointComponent;
    const prevEditComponent = this._editComponent;

    this._pointComponent = new PointView(point);
    this._editComponent = new PointEditView(point);

    this._pointComponent.setClickHandler(this._handelEditClick);
    this._pointComponent.setFavoriteClickHandler(this._handleFavoriteClick);
    this._editComponent.setClickHandler(this._handelFormClick);
    this._editComponent.setSumbitHandler(this._handelFormSubmit);
    this._editComponent.setDeleteClickHandler(this._handleDeleteClick);

    if (prevPointComponent === null || prevEditComponent === null) {
      render(this._pointContainer, this._pointComponent, RenderPosition.BEFOREND);
      return;
    }

    if (this._mode === Mode.DEFAULT) {
      replace(this._pointComponent, prevPointComponent);
    }

    if (this._mode === Mode.EDITING) {
      replace(this._editComponent, prevEditComponent);
    }

    remove(prevPointComponent);
    remove(prevEditComponent);

  }

  destroy() {
    remove(this._pointComponent);
    remove(this._editComponent);
  }

  resetView() {
    if (this._mode !== Mode.DEFAULT) {
      this._replaceFormToPoint();
    }
  }

  _replacePointToForm() {
    replace(this._editComponent, this._pointComponent);
    document.addEventListener(`keydown`, this._escapeKeyDownHandler);
    this._changeMode();
    this._mode = Mode.EDITING;
  }

  _replaceFormToPoint() {
    replace(this._pointComponent, this._editComponent);
    document.removeEventListener(`keydown`, this._escapeKeyDownHandler);
    this._mode = Mode.DEFAULT;
  }

  _escapeKeyDownHandler(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      this._editComponent.reset(this._point);
      this._replaceFormToPoint();
    }
  }

  _handelEditClick() {
    this._replacePointToForm();
  }

  _handelFormClick() {
    this._replaceFormToPoint();
  }

  _handelFormSubmit(update) {
    const isMinorUpdate = !isDatesEqual(this._point.beginDate, update.beginDate) || !isDatesEqual(this._point.endDate, update.endDate);
    this._changeData(
        UserAction.UPDATE_TASK,
        isMinorUpdate ? UpdateType.MINOR : UpdateType.PATCH,
        update);
    this._replaceFormToPoint();
  }

  _handleFavoriteClick() {
    this._changeData(
        UserAction.UPDATE_TASK,
        UpdateType.MINOR,
        Object.assign({}, this._point, {isFavorite: !this._point.isFavorite}));
  }

  _handleDeleteClick(point) {
    this._changeData(
        UserAction.DELETE_POINT,
        UpdateType.MINOR,
        point
    );
  }
}
