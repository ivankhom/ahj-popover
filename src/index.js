import './style.css';
import PopoverController from './PopoverController';

const button = document.querySelector('.btn-popover');
if (!button) throw new Error('Element .btn-popover not found');

const controller = new PopoverController(button, {
  title: button.dataset.title,
  content: button.dataset.content,
});

controller.init();
