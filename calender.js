let table = document.getElementById('table')
let year = new Date().getFullYear()
let month = new Date().getMonth()

function calendar() {
  let td = ''
  let lastDate = parseInt(new Date(year, month + 1, 0).getDate())
  table.innerHTML = ''
  document.getElementById('nowMonth').innerText = new Date(year, month).getMonth() + 1 + '월'
  document.getElementById('year').innerText = new Date(year, month).getFullYear() + '년'

  for (i = 1; i <= lastDate; i++) {
    if (i === 1) {
      let spaceLength = parseInt(new Date(year, month, i).getDay())
      for (j = 0; j < spaceLength; j++) {
        let startDate = new Date(year, month, -spaceLength + 1).getDate() + j
        td += '<td class="startTd">' + startDate + '</td>'
      }
    }
    else if (new Date(year, month, i).getDay() === 0) {
      table.innerHTML += '<tr>' + td + '</tr>'
      td = ''
    }
    td += '<td>' + i + '</td>'
    if (i === lastDate) {
      let spaceLength2 = parseInt(new Date(year, month, i).getDay())
      let forNum = ((6 - document.querySelectorAll('tbody>tr').length) * 7) - spaceLength2
      for (k = 1; k < forNum; k++) {
        if (new Date(year, month, i + k).getDay() === 0) {
          table.innerHTML += '<tr>' + td + '</tr>'
          td = ''
        }
        td += '<td class="endTd">' + new Date(year, month, i + k).getDate() + '</td>'
      }
      table.innerHTML += '<tr>' + td + '</tr>'
      //반드시 6행짜리 달력을 출력하는 코드 (남은칸은 모두 전월,다음월 날짜로 채움)
    }
  }
}
calendar();

function next() { month += 1; calendar(); }
function prev() { month -= 1; calendar(); }