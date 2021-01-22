import FilterView from "../view/filter.js";
import {render, RenderPosition, replace, remove, filter, FilterType, UpdateType} from "../utils";

export default class Filter {
  constructor(filterContainer, filterModel, pointModel) {
    this._filterContainer = filterContainer;
    this._filterModel = filterModel;
    this._pointModel = pointModel;
    this._currentFilter = null;

    this._filterComponent = null;

    this._handleModelEvent = this._handleModelEvent.bind(this);
    this._handleFilterTypeChange = this._handleFilterTypeChange.bind(this);

    this._pointModel.addObserver(this._handleModelEvent);
    this._filterModel.addObserver(this._handleModelEvent);
  }

  init() {
    this._currentFilter = this._filterModel.getFilter();

    const filters = this._getFilters();
    const prevFilterComponent = this._filterComponent;

    this._filterComponent = new FilterView(filters, this._currentFilter);
    this._filterComponent.setFilterTypeChangeHandler(this._handleFilterTypeChange);

    if (prevFilterComponent === null) {
      render(this._filterContainer, this._filterComponent, RenderPosition.AFTERBEGIN);
      return;
    }

    replace(this._filterComponent, prevFilterComponent);
    remove(prevFilterComponent);
  }

  _handleModelEvent() {
    this.init();
  }

  _handleFilterTypeChange(filterType) {
    if (this._currentFilter === filterType) {
      return;
    }

    this._filterModel.setFilter(UpdateType.MAJOR, filterType);
  }

  _getFilters() {
    const points = this._pointModel.getPoints();

    return [
      {
        type: FilterType.ALL,
        name: `everything`,
        count: filter[FilterType.ALL](points).length
      },
      {
        type: FilterType.PAST,
        name: `past`,
        count: filter[FilterType.PAST](points).length
      },
      {
        type: FilterType.FUTURE,
        name: `future`,
        count: filter[FilterType.FUTURE](points).length
      },
    ];
  }
}
