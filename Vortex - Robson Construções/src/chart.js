var data = {
    labels: [],
    datasets: [{
      label: "Custo em R$",
      data: [],
      backgroundColor: 'rgba(13,110,253,255',
      borderColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 1
    }]
  };
  
  // Fazer o gráfico começar no zero
  var options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
  
  // Criação do gráfico
  var ctx = document.getElementById('expensesChart').getContext('2d');
  var expensesChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });


// Adicionar novo cargo
export function addJobToChart(name){
    expensesChart.data.labels.push(name);
    expensesChart.data.datasets[0].data.push(0);

    expensesChart.update();
}

export function addEmployeeToChart(wage, jobCode){
    expensesChart.data.datasets[0].data[jobCode] += wage;

    expensesChart.update();
}
  