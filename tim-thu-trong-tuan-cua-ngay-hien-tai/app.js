let arrays = ["chủ nhật", "thứ hai", "thứ ba", "thứ tư", "thứ năm", "thứ sáu", "thứ bảy"];
function getDay(str) {

    let date = new Date(str);
   // let data = 'thu trong tuan'+ date.getDay();
   //  let value;
   console.log(arrays[date.getDay()])

}
getDay('2022-07-05');