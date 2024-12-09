document.addEventListener('DOMContentLoaded', function() 
  {    const acertos = parseInt(localStorage.getItem('acertos')) || 0;
    const erros = parseInt(localStorage.getItem('erros')) || 0;

    console.log('Acertos:', acertos);
    console.log('Erros:', erros);
  
    const ctx = document.getElementById('graficoDesempenho').getContext('2d');
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Acertos', 'Erros'],
        datasets: [{
          data: [acertos, erros],
          backgroundColor: ['#38B2AC', '#F56565']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  });
  
