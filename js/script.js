const bday_icon = document.querySelector('div._4bl9._zu9 > ul li > div > div._4bl7 > div > i.sx_ecb85f');
if (bday_icon) {
  const bday = bday_icon.parentNode.parentNode.parentNode.querySelector('div:nth-child(2) > span > div:nth-child(2)').textContent;

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
  const [full, month, day] = bday.match(rgx);

  let month_num = new Date(Date.parse(full)).getMonth() + 1;
  if (day > zodiac_signs[month_num][0]) { //if not part of that month's sign
    month_num = month_num == 12 ? 1 : month_num + 1; //be sure to loop to Jan if Dec
  }

  const sign = zodiac_signs[month_num][1];
}
