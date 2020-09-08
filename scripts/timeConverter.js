function timeConverter(time, timezone){
  console.log(time)
  if (!time){
    return ""
  }
  var date = new Date((time+timezone-10800)*1000);
  var hours = JSON.stringify(date.getHours())
  var minutes = JSON.stringify(date.getMinutes())
  var seconds = JSON.stringify(date.getSeconds())
  return hours+":"+minutes+":"+seconds;
}
export default timeConverter;
