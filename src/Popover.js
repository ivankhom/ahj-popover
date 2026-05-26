export default class Popover {
  constructor({ title, content, anchor }) {
    this.title = title;
    this.content = content;
    this.anchor = anchor;
    this.element = null;
  }

  render() {
    const el = document.createElement('div');
    el.classList.add('popover');
    el.innerHTML = `
      <div class="popover-title">${this.title}</div>
      <div class="popover-content">${this.content}</div>
      <div class="popover-arrow"></div>
    `;
    this.element = el;
    document.body.append(el);
    this.reposition();
  }

  reposition() {
    const anchorRect = this.anchor.getBoundingClientRect();
    const popoverRect = this.element.getBoundingClientRect();

    const top = anchorRect.top + window.scrollY - popoverRect.height - 10;
    const left = anchorRect.left + window.scrollX
      + anchorRect.width / 2
      - popoverRect.width / 2;

    this.element.style.top = `${top}px`;
    this.element.style.left = `${left}px`;
  }

  destroy() {
    if (this.element) {
      this.element.remove();
      this.element = null;
    }
  }
}
