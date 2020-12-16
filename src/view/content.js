import AbstractView from "./abstract";

const createContentContainer = () => {
  return `<ul class="trip-events__list"></ul>`;
};

export default class ContentContainer extends AbstractView {

  getTemplate() {
    return createContentContainer();
  }

}
