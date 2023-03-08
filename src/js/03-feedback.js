import throttle from "lodash.throttle";
import "../css/03-feedback.css";

const refsMessage = document.querySelector('.feedback-form');
const emailEl = document.querySelector('.feedback-form input');
const textEl = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = "feedback-form-state";

let valueInput ={};

refsMessage.addEventListener('input', throttle(ev => {
    valueInput[ev.target.name] = ev.target.value;
    const textMessage = JSON.stringify(valueInput);
    localStorage.setItem(STORAGE_KEY, textMessage);
}, 500));


refsMessage.addEventListener('submit', ev => {
    ev.preventDefault();
    console.log(valueInput);

    ev.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
});

populateMessage();

function populateMessage() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    const messageSave = JSON.parse(savedMessage);
    if (savedMessage) {
        emailEl.value = messageSave.email;
        textEl.value = messageSave.message;
    };
}