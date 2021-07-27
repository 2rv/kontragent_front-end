export const AutoSize = (element, minHeight) => {
  if (element) {
    const target = element.target ? element.target : element;
    target.style.height = `${minHeight}px`;
    target.style.height = `${target.scrollHeight}px`;
  }
};
