export default function ScreenObserver() {
  const observers: HTMLElement[] = [];

  function handleScroll(event: WheelEvent) {}

  window.addEventListener("scroll", handleScroll);

  function registerObserver(htmlElement: HTMLElement) {
    observers.push(htmlElement);
  }

  function removeObserver(htmlElement: HTMLElement) {
    observers.filter((observer) => observer !== htmlElement);
  }

  function notifyObservers() {
    observers.forEach((observer) => observer);
  }

  return { registerObserver, removeObserver, notifyObservers };
}
