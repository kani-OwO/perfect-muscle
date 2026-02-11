'use strict'
const waistCircumferenceInput = document.getElementById('waist-circumference');
const waistButton = document.getElementById('waist-button');
const waistResultDivision = document.getElementById('waist-result-area');

waistButton.addEventListener(
  'click',
  () => {
    const waistCircumference = waistCircumferenceInput.value;
    if (waistCircumference.length === 0) {
      alert('数字を入力してください');
      return;
    }

    waistResultDivision.innerText = '';
    const header = document.createElement('h3');
    header.innerText = '黄金比の計算結果';
    waistResultDivision.appendChild(header);

    const paragraph = document.createElement('p');
    const result = WaistRatioCalculation(waistCircumference);
    paragraph.innerText = `胸囲: ${result.chestCircumference}cm
    ヒップ: ${result.hipCircumference}cm`;
    waistResultDivision.appendChild(paragraph);
  }
);

function WaistRatioCalculation(waistCircumference) {
  return {
    chestCircumference: waistCircumference * 1.26,
    hipCircumference: waistCircumference * 1.25,
  };
}





const waistWidthInput = document.getElementById('waist-width');
const waistWidthButton = document.getElementById('waist-width-button');
const waistWidthResultDivision = document.getElementById('waist-width-result-area');

waistWidthButton.addEventListener(
  'click',
  () => {
    const waistWidth = waistWidthInput.value;
    if (waistWidth.length === 0) {
      alert('数字を入力してください');
      return;
    }

    waistWidthResultDivision.innerText = '';

    const paragraph = document.createElement('p');
    const result = WaistWidthRatioCalculation(waistWidth);
    paragraph.innerText = `肩幅: ${result.shoulderWidth}cm
    胸幅: ${result.chestWidth}cm`;
    waistWidthResultDivision.appendChild(paragraph);
  }
);

function WaistWidthRatioCalculation(waistWidth) {
  return {
    shoulderWidth: waistWidth * 1.63,
    chestWidth: waistWidth * 1.5,
  };
}





const ankleCircumferenceInput = document.getElementById('ankle-circumference');
const ankleButton = document.getElementById('ankle-button');
const ankleResultDivision = document.getElementById('ankle-result-area');

ankleButton.addEventListener(
  'click',
  () => {
    const ankleCircumference = ankleCircumferenceInput.value;
    if (ankleCircumference.length === 0) {
      alert('数字を入力してください');
      return;
    }

    ankleResultDivision.innerText = '';

    const paragraph = document.createElement('p');
    const result = ankleRatioCalculation(ankleCircumference);
    paragraph.innerText = `太腿周囲: ${result.thighCircumference}cm
    ふくらはぎ周囲: ${result.calfCircumference}cm`;
    ankleResultDivision.appendChild(paragraph);
  }
);

function ankleRatioCalculation(ankleCircumference) {
  return {
    thighCircumference: ankleCircumference * 3,
    calfCircumference: ankleCircumference * 2,
  };
}





const shoulderCircumferenceInput = document.getElementById('shoulder-circumference');
const shoulderButton = document.getElementById('shoulder-button');
const shoulderResultDivision = document.getElementById('shoulder-result-area');

shoulderButton.addEventListener(
  'click',
  () => {
    const shoulderCircumference = shoulderCircumferenceInput.value;
    if (shoulderCircumference.length === 0) {
      alert('数字を入力してください');
      return;
    }

    shoulderResultDivision.innerText = '';

    const paragraph = document.createElement('p');
    const result = shoulderRatioCalculation(shoulderCircumference);
    paragraph.innerText = `上腕周囲: ${result.upperArmCircumference}cm
    首周囲: ${result.neckCircumference}cm`;
    shoulderResultDivision.appendChild(paragraph);
  }
);

function shoulderRatioCalculation(shoulderCircumference) {
  return {
    upperArmCircumference: shoulderCircumference * 1.33,
    neckCircumference: shoulderCircumference * 1.33,
  };
}