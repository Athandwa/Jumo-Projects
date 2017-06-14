// view relationship quantities
function jumoChart() {
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Emotion Index'],
      datasets: [{
        label: 'Happy',
        data: [happyCount],
        backgroundColor: "yellow"
      }, {
        label: 'Sad',
        data: [sadCount],
        backgroundColor: "blue"
      }, {
        label: 'indifferent',
        data: [indiffernetCount],
        backgroundColor: "darkgrey"
      }]
    }
  });
};

function jumoRadarChart(){
  var ctx = document.getElementById("myRadarChart").getContext('2d');
  var myRadarChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: ["Nyanga", "Khayelitsha", "Bontiheuwel","Langa"],
      datasets: [{
        backgroundColor: [
         "#4dff4d",
          "#80aaff",
          "#d580ff",
          "#ff3333",
        ],
        data: [averageIncomeNyanga,averageIncomeKhaye,averageIncomeBonti,averageIncomeLanga]
      }]
    }
  });
}
