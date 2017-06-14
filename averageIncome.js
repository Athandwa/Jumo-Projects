function pushLangaArray() {
  for (i = 0; i < jumoData.length; i++) {
    if (jumoData[i].area == 'Langa') {
      langaArray.push(jumoData[i].income)
    }
  }
  return langaArray
};

function pushNyangaArray() {
  for (i = 0; i < jumoData.length; i++) {
    if (jumoData[i].area == 'Nyanga') {
      nyangaArray.push(jumoData[i].income)
    }
  }
  return nyangaArray
};

function pushKhayeArray() {
  for (i = 0; i < jumoData.length; i++) {
    if (jumoData[i].area == 'Khayelitsha') {
      khayeArray.push(jumoData[i].income)
    }
  }
  return khayeArray
};

function pushBontiArray() {
  for (i = 0; i < jumoData.length; i++) {
    if (jumoData[i].area == 'Bontehuewel') {
      bontiArray.push(jumoData[i].income)
    }
  }
  return bontiArray
};

function sumLanga() {
  for (var i = 0; i < langaArray.length; i++) {
    totalIncomeLanga += Number(langaArray[i]);
  }
  return totalIncomeLanga;
};

function averageLanga() {
  averageIncomeLanga = Number(totalIncomeLanga / langaArray.length)
  return averageIncomeLanga;
};

function sumNyanga() {
  for (var i = 0; i < nyangaArray.length; i++) {
    totalIncomeNyanga += Number(nyangaArray[i]);
  }
  return totalIncomeNyanga;
};

function averageNyanga() {
  averageIncomeNyanga = Number(totalIncomeNyanga / nyangaArray.length)
  return averageIncomeNyanga;
};

function sumKhaye() {
  for (var i = 0; i < khayeArray.length; i++) {
    totalIncomeKhaye += Number(khayeArray[i]);
  }
  return totalIncomeKhaye;
};

function averageKhaye() {
  averageIncomeKhaye = Number(totalIncomeKhaye / khayeArray.length)
  return averageIncomeKhaye;
};

function sumBonti() {
  for (var i = 0; i < bontiArray.length; i++) {
    totalIncomeBonti += Number(bontiArray[i]);
  }
  return totalIncomeBonti;
};

function averageBonti() {
  averageIncomeBonti = Number(totalIncomeBonti / bontiArray.length)
  return averageIncomeBonti;
};
