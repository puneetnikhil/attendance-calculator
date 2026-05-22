function calculateAttendance(){

  let attended =
  document.getElementById("attended").value;

  let total =
  document.getElementById("total").value;

  let percentage =
  (attended / total) * 100;

  document.getElementById("result").innerHTML =
  "Attendance: " + percentage.toFixed(2) + "%";
}
