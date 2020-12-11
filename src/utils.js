
export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  AFTEREND: `afterend`,
  BEFOREND: `beforend`

};

export const renderTemplate = (container, markup, place) => {
  container.insertAdjacentHTML(place, markup);
};

export const renderElement = (container, element, place) => {
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
