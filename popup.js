document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('_printReportLink').addEventListener('click', generateLink);
});

function generateLink() {
  var localhostPort = document.getElementById('localhost_port').value;
  var moduleName = document.getElementById('module_name').value;
  var reportActionId = document.getElementById('report_action_id').value;
  var recordId = document.getElementById('record_id').value;
  var errorMessage = document.getElementById('error_message');
  var generatedLink = document.getElementById('generatedLink');
  var reportLink = document.getElementById('report_link');

  if (!localhostPort || !moduleName || !reportActionId || !recordId) {
    errorMessage.style.display = 'block';
    generatedLink.style.display = 'none';
  } else {
    errorMessage.style.display = 'none';
    var link = `http://localhost:${localhostPort}/report/pdf/${moduleName}.${reportActionId}/${recordId}`;
    reportLink.href = link;
    reportLink.innerText = link;
    generatedLink.style.display = 'block';
    window.open(link, '_blank');
  }
}
