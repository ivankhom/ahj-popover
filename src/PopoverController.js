import Popover from './Popover';

export default class PopoverController {
  constructor(button, options) {
    this.button = button;
    this.options = options;
    this.popover = null;
    this.onToggle = this.onToggle.bind(this);
  }

  init() {
    this.button.addEventListener('click', this.onToggle);
  }

  onToggle() {
    if (this.popover) {
      this.popover.destroy();
      this.popover = null;
    } else {
      this.popover = new Popover({
        title: this.options.title,
        content: this.options.content,
        anchor: this.button,
      });
      this.popover.render();
    }
  }

  destroy() {
    this.button.removeEventListener('click', this.onToggle);
    if (this.popover) {
      this.popover.destroy();
    }
  }
}
