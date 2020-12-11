import {createElement} from "../utils";

const createContentContainer = () => {
  return `<ul class="trip-events__list"></ul>`;
};

export default class ContentContainer {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createContentContainer();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
