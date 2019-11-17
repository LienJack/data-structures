import axios from 'axios'
axios.get('https://apptest.61draw.com/v1/student/dm/getUserWechatShareDraw?roomUserScheduleId=268757')
  .then(res => {
    console.log(res)
  })