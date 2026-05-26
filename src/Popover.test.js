import Popover from './Popover';
import PopoverController from './PopoverController';

describe('Popover', () => {
  let anchor;

  beforeEach(() => {
    anchor = document.createElement('button');
    anchor.textContent = 'Toggle';
    document.body.append(anchor);

    anchor.getBoundingClientRect = () => ({
      top: 200,
      left: 100,
      width: 120,
      height: 40,
      bottom: 240,
      right: 220,
    });
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('render creates popover element in DOM', () => {
    const popover = new Popover({ title: 'Title', content: 'Content', anchor });
    popover.render();
    expect(document.querySelector('.popover')).not.toBeNull();
  });

  test('popover contains correct title', () => {
    const popover = new Popover({ title: 'My Title', content: 'Text', anchor });
    popover.render();
    expect(document.querySelector('.popover-title').textContent).toBe('My Title');
  });

  test('popover contains correct content', () => {
    const popover = new Popover({ title: 'T', content: 'My content', anchor });
    popover.render();
    expect(document.querySelector('.popover-content').textContent).toBe('My content');
  });

  test('destroy removes popover from DOM', () => {
    const popover = new Popover({ title: 'T', content: 'C', anchor });
    popover.render();
    popover.destroy();
    expect(document.querySelector('.popover')).toBeNull();
  });

  test('destroy sets element to null', () => {
    const popover = new Popover({ title: 'T', content: 'C', anchor });
    popover.render();
    popover.destroy();
    expect(popover.element).toBeNull();
  });
});

describe('PopoverController', () => {
  let button;
  let controller;

  beforeEach(() => {
    button = document.createElement('button');
    document.body.append(button);
    button.getBoundingClientRect = () => ({
      top: 200, left: 100, width: 120, height: 40, bottom: 240, right: 220,
    });
    controller = new PopoverController(button, {
      title: 'Test title',
      content: 'Test content',
    });
    controller.init();
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('click shows popover', () => {
    button.click();
    expect(document.querySelector('.popover')).not.toBeNull();
  });

  test('second click hides popover', () => {
    button.click();
    button.click();
    expect(document.querySelector('.popover')).toBeNull();
  });

  test('third click shows popover again', () => {
    button.click();
    button.click();
    button.click();
    expect(document.querySelector('.popover')).not.toBeNull();
  });

  test('popover has correct title from options', () => {
    button.click();
    expect(document.querySelector('.popover-title').textContent).toBe('Test title');
  });
});
