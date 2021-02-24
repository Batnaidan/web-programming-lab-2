const calendar2021 = {
  jan: { 1: 'Сайхан амарна' },
  feb: {
    1: 'Сагсны тэмцээнтэй',
    3: 'Шагнал гардуулна даа',
    17: 'Жавхлан багшийн лаб 2-ыг хийнэ',
  },
  mar: {
    2: 'Энэ лабынхаа хугацааг сунгах уу яах вэ гэдэгээ шийднэ',
    6: 'Энд юу бичье дээ байз',
    8: 'Эмэгтэйчүүддээ баяр хүргэнэ дээ',
  },
  apr: { 1: 'Бүгдээрээ худлаа ярьцаагаагаарай' },
  may: { 10: 'Энэ сард ч ёстой юу ч болдоггүй сар даа' },
  jun: { 6: 'Жавхлан багшийн төрсөн өдөр' },
  jul: { 4: 'Хичээл амарсаан ураа' },
  aug: { 1: 'Хөдөө явдаг цаг даа', 25: 'Хичээл сонголт эхэллээ' },
  sep: { 1: '9-н сарын нэгэн боллоо ерөөсөө бидний баяр даа' },
  oct: { 13: 'Сур сур бас дахин сур' },
  nov: { 2: 'Сурсаар л бай' },
  dec: {
    20: 'Өвлийн семистер хаагдах нь дээ',
    30: 'Дүн гаргаж дууслаа баярлалаа баяртай',
  },
};
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const date = new Date();

function printCalendar() {
  let dayOfPrevMonth = new Date(date.getFullYear(), date.getMonth(), 0);

  let dayofCurrentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  let lastDayOfCurrentMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 2,
    0
  );
  console.log(dayofCurrentMonth.getDay());
  document.querySelector('.month h1').innerHTML = monthNames[date.getMonth()];

  let days = '';

  for (let i = 1; i <= dayOfPrevMonth.getDay(); i++) {
    days += `<div>${
      dayOfPrevMonth.getDate() - dayOfPrevMonth.getDay() + i
    }</div>`;
  }

  for (let i = 1; i <= dayofCurrentMonth.getDate(); i++) {
    days += `<div class="currentMonth">${i}</div>`;
  }

  for (let i = 1; i <= 7 - dayofCurrentMonth.getDay(); i++) {
    days += `<div>${i}</div>`;
  }
  document.querySelector('.days').innerHTML = days;
  for (let i = 0; i < calendar2021.length; i++) {}
}
printCalendar();
function printNextMonth() {
  date.setMonth(date.getMonth() + 1);
  printCalendar();
}
function printPrevMonth() {
  date.setMonth(date.getMonth() - 1);
  printCalendar();
}
