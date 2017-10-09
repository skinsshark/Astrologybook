const bday_icon = document.querySelector('._36d div._4bl9._zu9 > ul li > div > div._4bl7 > div > i.sx_ecb85f');

if (bday_icon) {
  const bday = bday_icon.parentNode.parentNode.parentNode.querySelector('div:nth-child(2) > span > div:nth-child(2)');

  const zodiac_signs = {
    1: [19, 'Capricorn'],
    2: [18, 'Aquarius'],
    3: [20, 'Pieces'],
    4: [19, 'Aries'],
    5: [20, 'Taurus'],
    6: [20, 'Gemini'],
    7: [22, 'Cancer'],
    8: [22, 'Leo'],
    9: [22, 'Virgo'],
    10: [22, 'Libra'],
    11: [21, 'Scorpio'],
    12: [21, 'Saggitarius']
  };

  const rgx = /([JFMASOND].*[a-z]) (\d{0,2})/;
  const [full, month, day] = bday.textContent.match(rgx);

  let month_num = new Date(Date.parse(full)).getMonth() + 1;
  if (day > zodiac_signs[month_num][0]) { //if not part of that month's sign
    month_num = month_num == 12 ? 1 : month_num + 1; //be sure to loop to Jan if Dec
  }

  const sign = zodiac_signs[month_num][1];
  const overview_items = document.querySelector('._36d div._4bl9._zu9 > ul').querySelectorAll('li._4tnv._2pif');

  const zodiac_html = `
    <li class="_4tnv _2pif">
      <div class="clearfix _ikh">
        <div class="_4bl7">
          <div class="_5pmc">
            <i class="img sp_zR425wRe-ty_2x sx_ecb85f" id="zodiac_icon"></i>
          </div>
        </div>
        <div class="_4bl9 _2pis _2dbl">
          <span class="_c24 _50f3">
            <div><span class="accessible_elem">Zodiac Sign</span></div>
            <div>${sign}</div>
          </span>
        </div>
      </div>
    </li>
  `;

  let zodiac_item = document.createElement('li');
  zodiac_item.className = '_4tnv _2pif';
  zodiac_item.innerHTML = zodiac_html;

  const last_item = document.querySelector(`div._4bl9._zu9 > ul > li:nth-child(${overview_items.length})`);
  last_item.appendChild(zodiac_item);
  document.getElementById('zodiac_icon').style.backgroundImage = `url("https://raw.githubusercontent.com/skinsshark/Astrologybook/master/signs/${sign}.png")`;
}
