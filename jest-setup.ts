import 'jest-preset-angular/setup-jest';
import 'jest-localstorage-mock';

window.requestAnimationFrame = fn => {
  fn(16);

  return 16;
};

Object.defineProperty(window, 'getComputedStyle', {
  value: jest.fn().mockImplementation(() => ({
    getPropertyValue: () => ''
  }))
});

HTMLCanvasElement.prototype.getContext = (): any => {};
