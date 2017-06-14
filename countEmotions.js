var happyCount = 0;
var sadCount = 0;
var indiffernetCount = 0;

//loop through array
function countEmotions() {

  for (i = 0; i < jumoData.length; i++) {
    if (jumoData[i].happy == true) {
      happyCount++
    } else if (jumoData[i].sad == true) {
      sadCount++
      // console.log(sadCount)
    } else if (jumoData[i].indifferent == true) {
      indiffernetCount++
      // console.log(indiffernetCount)
    }
  }
};
