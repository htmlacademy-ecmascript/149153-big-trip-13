import NoPointsView from '../view/noPoints';
import ContentView from '../view/content';
import PointSortView from '../view/sort';
import {render, RenderPosition, POINT_COUNT, updateItem, SortType, sortDate, sortPrice} from '../utils';
import PointPresenter from '../presenter/point';


export default class Trip {
  constructor(routeContainer) {
    this._routeContainer = routeContainer;
    this._pointPresenter = {};
    this._currentSortType = SortType.DAY;

    this._noPointsComponent = new NoPointsView();
    this._contentComponent = new ContentView();
    this._pointSortComponent = new PointSortView();

    this._handlePointChange = this._handlePointChange.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);
    this._handlerSortTypeChange = this._handlerSortTypeChange.bind(this);
  }
  init(points) {
    this._routePoints = points;
    this._sourcePoints = points;

    render(this._routeContainer, this._contentComponent, RenderPosition.BEFOREND);
    if (points.length) {
      this._renderRoute();
    } else {
      this._renderNoPoints();
    }
  }
  _renderSort() {
    render(this._routeContainer.firstElementChild, this._pointSortComponent, RenderPosition.AFTERBEGIN);
    this._pointSortComponent.setSortTypeChangeHandler(this._handlerSortTypeChange);
  }
  _renderPoint(point) {
    const pointPresenter = new PointPresenter(this._contentComponent, this._handlePointChange, this._handleModeChange);
    pointPresenter.init(point);
    this._pointPresenter[point.id] = pointPresenter;
  }
  _renderNoPoints() {
    render(this._routeContainer, this._contentComponent, RenderPosition.BEFOREND);
  }
  _renderRoute() {
    this._renderSort();
    for (let i = 0; i < POINT_COUNT; i++) {
      this._renderPoint(this._routePoints[i]);
    }
  }
  _clearPointList() {
    Object.values(this._pointPresenter).forEach((presenter) => presenter.destroy());
    this._pointPresenter = {};
  }

  _handlePointChange(updatedPoint) {
    this._routePoints = updateItem(this._routePoints, updatedPoint);
    this._pointPresenter[updatedPoint.id].init(updatedPoint);
  }

  _handleModeChange() {
    Object
      .values(this._pointPresenter)
      .forEach((presenter) => presenter.resetView());
  }

  _sortPoints(sortType) {
    switch (sortType) {
      case SortType.TIME:
        this._routePoints.sort();
        break;
      case SortType.PRICE:
        this._routePoints.sort(sortPrice);
        break;
      case SortType.DAY:
        this._routePoints.sort(sortDate);
        break;
      default:
        this._routePoints = this._sourcePoints;
    }
    this._currentSortType = sortType;
  }

  _handlerSortTypeChange(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }

    this._sortPoints(sortType);
    this._clearPointList();
    this._renderRoute();
  }
}
