import Abstract from "./view/abstract";
import dayjs from "dayjs";

export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  AFTEREND: `afterend`,
  BEFOREND: `beforend`

};

export const renderTemplate = (container, markup, place) => {
  container.insertAdjacentHTML(place, markup);
};

export const render = (container, element, place) => {
  if (container instanceof Abstract) {
    container = container.getElement();
  }
  if (element instanceof Abstract) {
    element = element.getElement();
  }
  switch (place) {
    case RenderPosition.AFTEREND:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREND:
      container.append(element);
      break;
    case RenderPosition.AFTERBEGIN:
      container.after(element);
      break;
  }
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstElementChild;
};

export const POINT_COUNT = 20;

export const replace = (newChild, oldChild) => {
  if (oldChild instanceof Abstract) {
    oldChild = oldChild.getElement();
  }

  if (newChild instanceof Abstract) {
    newChild = newChild.getElement();
  }

  const parent = oldChild.parentElement;

  if (parent === null || oldChild === null || newChild === null) {
    throw new Error(`Can't replace unexisting elements`);
  }

  parent.replaceChild(newChild, oldChild);
};

export const remove = (component) => {
  if (!(component instanceof Abstract)) {
    throw new Error(`Can remove only components`);
  }
  component.getElement().remove();
  component.removeElement();
};

export const updateItem = (items, update) => {
  const index = items.findIndex((item) => item.id === update.id);

  if (index === -1) {
    return items;
  }
  return [...items.slice(0, index), update, ...items.slice(index + 1)];
};

export const SortType = {
  DAY: `day`,
  TIME: `time`,
  PRICE: `price`
};

export const sortDate = (pointA, pointB) => {
  return dayjs(pointB.beginDate).diff(dayjs(pointA.beginDate));
};

export const sortPrice = (a, b) => {
  if (a.price < b.price) {
    return -1;
  } else if (a.price > b.price) {
    return 1;
  } else {
    return 0;
  }

};

export const TYPE_TRIP_POINTS = [`taxi`, `bus`, `train`, `ship`, `transport`, `drive`, `flight`, `check-in`, `sightseeng`, `restaurant`];