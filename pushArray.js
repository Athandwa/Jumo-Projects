var areaInput = document.getElementById("areaInput");
var incomeInput = document.getElementById("incomeInput");
var rentExpense = document.getElementById("rentExpense");
var elecExpense = document.getElementById("elecExpense");
var waterExpense = document.getElementById("waterExpense");
var foodExpense = document.getElementById("foodExpense");
var clothingExpense = document.getElementById("clothingExpense");
var petrolExpense = document.getElementById("petrolExpense");
var taxiExpense = document.getElementById("taxiExpense");
var trainExpense = document.getElementById("trainExpense");
var busExpense = document.getElementById("busExpense");
var schoolFeesExpense = document.getElementById("schoolFeesExpense");
var universityFeesExpense = document.getElementById("universityFeesExpense");
var booksExpense = document.getElementById("booksExpense");
var uniformExpense = document.getElementById("uniformExpense");
var moviesExpense = document.getElementById("moviesExpense");
var restuarantsExpense = document.getElementById("restuarantsExpense");
var musicExpense = document.getElementById("musicExpense");
var sportExpense = document.getElementById("sportExpense");
var happyEmoji = document.getElementById("happy");
var indifferentEmoji = document.getElementById("indifferent");
var sadEmoji = document.getElementById("sad");
var total = document.querySelector('.total');

var firstImage = document.querySelector('.happiness');
var secondImage = document.querySelector('.indifferences');
var thirdImage = document.querySelector('.sadness');

var allAmounts = function(className){
  var amountFields = document.querySelectorAll(className || '.amount');
  var total = 0;
  amountFields.forEach(function(field){
     total += Number(field.value);
  });
  return total;
}

function totalIncome(){
  return Number(incomeInput.value)
}

function showNetAmount(netAmount){
  document.getElementById("totalOutput").innerHTML = netAmount;
}

total.addEventListener('click', function(){
  var netAmount = totalIncome() - allAmounts('.amount')
  showNetAmount(netAmount);

});

var happy = false;
var indifferent = false;
var sad = false;

if (document.querySelector(".happiness").onclick = function() {
console.log("happy-true")
  happy = true;
})

if(document.querySelector(".indifferences").onclick = function() {
  console.log("indifferent-true")
    indifferent = true;

})

if(document.querySelector(".sadness").onclick = function() {
  console.log("sad-true")
    sad = true;

})


document.getElementById("acceptInfoBtn").addEventListener("click", pushArray);
function pushArray() {

  jumoData.push({
    area: areaInput.value,
    income: incomeInput.value,
    householdExpense: {
      rent: rentExpense.value,
      electricity: elecExpense.value,
    },
    transportExpense: {
      petrol: petrolExpense.value,
      taxi: taxiExpense.value,
    },
    eductaionExpense: {
      schoolFees: schoolFeesExpense.value,
      universityFees: universityFeesExpense.value,
    },
    entertainment: {
      movies: moviesExpense.value,
      restuarants: restuarantsExpense.value,
    },
    happy:happy,
    sad:sad,
    indifferent:indifferent,
  });
  localStorage.setItem("jumoData", JSON.stringify(jumoData));
  storedData = JSON.parse(localStorage.getItem("jumoData"));
};

document.getElementById("total").addEventListener("click", jumoChartClients);
function jumoChartClients() {
document.getElementById('jumoImage').style.visibility="hidden";
document.querySelector('.smileys').style.visibility="visible";

  var ctx = document.getElementById('myChartClients').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Expenses'],
      datasets: [{
        label: 'Rent',
        data: [rentExpense.value],
        backgroundColor: "yellow"
      }, {
        label: 'Electricity',
        data: [elecExpense.value],
        backgroundColor: "blue"
      },
         {
        label: 'Petrol',
        data: [petrolExpense.value],
        backgroundColor: "darkgrey"
      }, {
        label: 'Taxi',
        data: [taxiExpense.value],
        backgroundColor: "darkgrey"
      },{
        label: 'School Fees',
        data: [schoolFeesExpense.value],
        backgroundColor: "darkgrey"
      }, {
        label: 'University Fees',
        data: [universityFeesExpense.value],
        backgroundColor: "darkgrey"
      }, {
        label: 'Movies',
        data: [moviesExpense.value],
        backgroundColor: "darkgrey"
      }, {
        label: 'Restuarants',
        data: [restuarantsExpense.value],
        backgroundColor: "darkgrey"
      }]
    }
  });
};

firstImage.addEventListener('click',  function(){
   console.log(firstImage.dataset.pictureId);

   if (firstImage.dataset.pictureId == 'happy') {
     // container.classList.remove('hide_content');
   $( "#firstContent").dialog({
   width: 500,
   height: 200
 });
 }
 })

 secondImage.addEventListener('click',  function(){
   console.log(secondImage.dataset.pictureId);

   if (secondImage.dataset.pictureId == 'indifferent') {
     // container.classList.remove('hide_content');
   $( "#secondContent").dialog({
   width: 500,
   height: 200
 });
}
 })

 thirdImage.addEventListener('click',  function(){
   console.log(thirdImage.dataset.pictureId);

   if (thirdImage.dataset.pictureId == 'sad') {
     // container.classList.remove('hide_content');
   $( "#thirdContent").dialog({
   width: 500,
   height: 200
 });
 }
 })
