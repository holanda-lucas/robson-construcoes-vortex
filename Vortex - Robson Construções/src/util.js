import Job from "./Classes/Job.js"
import Employee from "./Classes/Employee.js"
import { jobs, employees } from "./index.js";
import { addJobToChart, addEmployeeToChart } from "./chart.js";


const employeesTable = document.getElementById('employees-table-body');
const selectJobForm = document.getElementById('select-job');


export function registerJob(ev){
    ev.preventDefault();

    const jobNameInput = document.getElementById('job-name-input');
    const jobWageInput = document.getElementById('job-wage-input');
    const code = jobs.length;

    const insertedWage = matchWage(jobWageInput.value)

    const trimName = jobNameInput.value.trim();

    if (trimName !== '' && insertedWage){
        const newJob = new Job(trimName, insertedWage, code);
        jobs.push(newJob);
    
        insertJobInSelect(newJob);
        
        addJobToChart(trimName);
        console.log(jobs)
    } else {
        alert('Nome ou salário inválido!')
    }

    jobNameInput.value = ''
    jobWageInput.value = ''
}

export function registerEmployee(ev){
    ev.preventDefault();

    const employeeNameInput = document.getElementById('employee-name-input');
    const selectJob = document.getElementById('select-job');
    const code = employees.length;

    const trimName = employeeNameInput.value.trim();

    // Verificação para impedir o cadastro caso um nome não seja inserido
    if (trimName !== ""){
        const newEmployee = new Employee(code, trimName, selectJob.value);
        employees.push(newEmployee);
        const job = jobs[selectJob.value]
    
        insertEmployeeInTable(newEmployee);

        addEmployeeToChart(job.wage, job.code)
    
        console.log(employees);
    } else {
        alert("Insira um nome para cadastrar o funcionário!");
    }

    employeeNameInput.value = ''
}

function insertEmployeeInTable(employee){
    // Acessar cargo do funcionáriio pelo seu jobCode
    const job = jobs[employee.jobCode]

    const tr = document.createElement('tr');
    
    const thName = document.createElement('th');
    thName.scope = 'row';
    thName.innerText = employee.name;
    
    const tdJob = document.createElement('td');
    tdJob.innerText = job.name;

    const tdWage = document.createElement('td');
    tdWage.innerText = formatWage(job.wage);

    const tdJobCode = document.createElement('td');
    tdJobCode.innerText = employee.jobCode;


    tr.append(thName, tdJob, tdWage, tdJobCode);
    employeesTable.append(tr)
}

function insertJobInSelect(job){
    const option = document.createElement('option')
    option.innerText = job.name;
    option.value = job.code;

    selectJobForm.append(option)
}

// Checa padrão
function matchWage(insertedValue){
    const pattern = /\d+(.|,){1}\d{2}/m
    let numericalValue = insertedValue.match(pattern)?.[0];

    // Retorna negativo caso o padrão não bata
    if(!numericalValue){
        return false;
    }

    // Formatando
    if (numericalValue.includes(',')){
        numericalValue = numericalValue.replace(',', '.');
    }

    numericalValue = parseFloat(numericalValue)

    return numericalValue;
}

// Formata a string
function formatWage(insertedValue){
    let formattedValue = insertedValue.toString()
    if (formattedValue.includes('.')){
        formattedValue = formattedValue.replace('.', ',');

        const commaIndex = formattedValue.indexOf(',')
        const afterComma = formattedValue.slice(commaIndex + 1)

        if (afterComma.length === 1){
            formattedValue = formattedValue + '0'
        }

    } else{
        formattedValue = formattedValue + ',00';
    }

    formattedValue = 'R$ ' + formattedValue;


    return formattedValue;
}