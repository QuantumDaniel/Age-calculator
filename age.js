  import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';


  setInterval(() => {
    const today = dayjs();
    const dateDisplay = today.format('ddd, MMMM D');
    const timeDisplay = today.format('h:mm:ss A');
    document.querySelector('.js-date').innerHTML = `Date:${dateDisplay} \n Time: ${timeDisplay}`;
  }, 1000);

  /*
        document.querySelector('.js-date').innerHTML=`Date:${dateDisplay} Time: ${currentTime}`;

        const currentTime = dayjs();
        console.log(currentTime.format('h:mm:ss A'));
  */

  let year = '';
  let day = '';

  let month = '';
  let picture = '';
  let showYear = document.querySelector('.show-year');
  let viewAge = document.querySelector('.js-view-age');
  let monthMain = document.querySelector('.js-month-main');
  let dayMain = document.querySelector('.js-day-main');
  
  function checkInput() {
    showYear.value === '' || monthMain.value === '' || dayMain.value === '' ? viewAge.disabled = true : viewAge.disabled = false;
    showYear.value <= 1900 || showYear.value >= 2025 ? viewAge.disabled = true : viewAge.disabled = false;
  }
  checkInput();

  document.querySelector('.js-show-year').addEventListener("keyup", (event) => {
    event.key === 'Enter' && document.querySelector('.js-view-age').click();
    checkInput();
  });

  const monthName = {
    first: 'JANUARY', second: 'FEBRUARY', third: 'MARCH', fourth: 'APRIL', fifth: 'MAY', sixth: 'JUNE', seventh: 'JULY', eigth: 'AUGUST', ninth: 'SEPTEMBER', tenth: 'OCTOBER', eleventh: 'NOVEMBER', twelve: 'DECEMBER'

  }

  document.querySelector('.js-view-age').addEventListener('click', () => {

    document.querySelector('.js-details').classList.add('js-details2');


    document.querySelector('.js-display2-age').innerHTML = 'You are:';
    document.querySelector('.js-display-summary').innerHTML = 'SUMMARY:'
    let myAge = document.querySelector('.js-show-year');
    document.querySelector('.js-display-age').innerHTML = eval(`  2025-${myAge.value}`) + ` Years old`;

    day = document.querySelector('.js-day-main');
    month = document.querySelector('.js-month-main');
    picture = document.querySelector('.js-picture1');

    const object = [{
      year: `${myAge.value}`,
      day: `${day.value}`,
      month: `${month.value}`,
      age: eval(`2025-${myAge.value}`)

    }];





    object.forEach((value) => {
      let image = `<img  src="${object.picture}" class="js-picture"  alt="upload-image" width="200" height="200">`;

      document.querySelector('.js-year-of-birth').innerHTML = `YEAR OF BIRTH:` + `${value.year}`;


      if (value.month === '1') {
        value.month = monthName.first;
        document.querySelector('.js-month-of-birth').innerHTML = `MONTH OF BIRTH:` + `${value.month}`;
      }

      else if (value.month === '2') {
        value.month = monthName.second;
        document.querySelector('.js-month-of-birth').innerHTML = `MONTH OF BIRTH:` + `${value.month}`;
      }
      else if (value.month === '3') {
        value.month = monthName.third;
        document.querySelector('.js-month-of-birth').innerHTML = `MONTH OF BIRTH:` + `${value.month}`;
      }
      else if (value.month === '4') {
        value.month = monthName.fourth;
        document.querySelector('.js-month-of-birth').innerHTML = `MONTH OF BIRTH:` + `${value.month}`;
      }
      else if (value.month === '5') {
        value.month = monthName.fifth;
        document.querySelector('.js-month-of-birth').innerHTML = `MONTH OF BIRTH:` + `${value.month}`;
      }
      else if (value.month === '6') {
        value.month = monthName.sixth;
        document.querySelector('.js-month-of-birth').innerHTML = `MONTH OF BIRTH:` + `${value.month}`;
      }
      else if (value.month === '7') {
        value.month = monthName.seventh;
        document.querySelector('.js-month-of-birth').innerHTML = `MONTH OF BIRTH:` + `${value.month}`;
      }
      else if (value.month === '8') {
        value.month = monthName.eigth;
        document.querySelector('.js-month-of-birth').innerHTML = `MONTH OF BIRTH:` + `${value.month}`;
      }
      else if (value.month === '9') {
        value.month = monthName.ninth;
        document.querySelector('.js-month-of-birth').innerHTML = `MONTH OF BIRTH:` + `${value.month}`;
      }
      else if (value.month === '10') {
        value.month = monthName.tenth;
        document.querySelector('.js-month-of-birth').innerHTML = `MONTH OF BIRTH:` + `${value.month}`;
      }
      else if (value.month === '11') {
        value.month = monthName.eleventh;
        document.querySelector('.js-month-of-birth').innerHTML = `MONTH OF BIRTH:` + `${value.month}`;
      }
      else if (value.month === '12') {
        value.month = monthName.twelve;
        document.querySelector('.js-month-of-birth').innerHTML = `MONTH OF BIRTH:` + `${value.month}`;
      }

      document.querySelector('.js-day-of-birth').innerHTML = `DAY OF BIRTH: ` + `${value.day}`;

    });
  });

  document.querySelector('.js-reset-button').addEventListener('click', () => {
    document.querySelector('.js-details').classList.remove('js-details2');
    document.querySelector('.js-display-age').innerHTML = '';
    document.querySelector('.js-display2-age').innerHTML = '';
    document.querySelector('.js-display-summary').innerHTML = '';
    document.querySelector('.js-year-of-birth').innerHTML = '';
    document.querySelector('.js-month-of-birth').innerHTML = '';
    document.querySelector('.js-year-of-birth').innerHTML = '';
    document.querySelector('.js-day-of-birth').innerHTML = '';
    document.querySelector('.js-show-year').value = '';
    document.querySelector('.js-month-main').value = '';
    document.querySelector('.js-day-main').value = '';

  });

  document.querySelector('.js-upload-button').addEventListener('click', () => {
    let picture = document.querySelector('.js-picture1').value;
    document.querySelector('.js-display-picture').innerHTML = `<div class="click-picture"><img src="${picture}"></div>`;

  });






