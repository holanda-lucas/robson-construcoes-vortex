import { registerEmployee, registerJob } from "./util.js"

export const jobs = []
export const employees = []

const registerEmployeeButton = document.getElementById('register-employee');
const registerJobButton = document.getElementById('register-job');

registerJobButton.addEventListener('click', registerJob);
registerEmployeeButton.addEventListener('click', registerEmployee);