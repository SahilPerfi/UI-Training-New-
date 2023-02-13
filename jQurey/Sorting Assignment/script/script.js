/* Facility Name */
$('#bioTable th:eq(0)').addClass("control-label pointer");
/* Phone # */
$('#bioTable th:eq(1)').addClass("not-allowed");
/* City */
$('#bioTable th:eq(2)').addClass("control-label pointer");
/* Specialty */
$('#bioTable th:eq(3)').addClass("not-allowed");


var collection = [{
  "FacilityName": "MinION",
  "Phone": "999-8888",
  "City": "France",
  "Specialty": "Genetic Prediction"
}, {
  "FacilityName": "GridION X5",
  "Phone": "999-8812",
  "City": "Singapore",
  "Specialty": "DNA Assembly"
}, {
  "FacilityName": "PromethION",
  "Phone": "929-8888",
  "City": "San Francisco",
  "Specialty": "DNA Testing"
}, {
  "FacilityName": "iSeq 100 System",
  "Phone": "999-8008",
  "City": "Christchurch",
  "Specialty": "gDNA-mRNA sequencing"
}]

$tbody = $("#bioTable").append('<tbody></tbody>');

for (var i = 0; i < collection.length; i++) {
  $tbody = $tbody.append('<tr class="item"><td>' + collection[i]["FacilityName"] + '</td><td>' + collection[i]["Phone"] + '</td><td>' + collection[i]["City"] + '</td><td>' + collection[i]["Specialty"] + '</td></tr>');
}
