import './style.css';
import PopoverController from './PopoverController';

const button = document.querySelector('.btn-popover');
if (!button) throw new Error('Element .btn-popover not found');

const controller = new PopoverController(button, {
  title: 'Popover title',
  content: "And here's some amazing content. It's very engaging. Right?",
});

controller.init();
