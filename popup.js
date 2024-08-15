document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btnLocalhost').addEventListener('click', function() {
    toggleFields('localhost');
  });

  document.getElementById('btnLiveServer').addEventListener('click', function() {
    toggleFields('live');
  });

  document.getElementById('_printReportLink').addEventListener('click', generateLink);
});

function toggleFields(selection) {
  var localhostField = document.getElementById('localhost_field');
  var liveField = document.getElementById('live_field');
  var localhostInput = document.getElementById('localhost_port');
  var liveServerInput = document.getElementById('live_server_url');
  var btnLocalhost = document.getElementById('btnLocalhost');
  var btnLiveServer = document.getElementById('btnLiveServer');

  if (selection === 'localhost') {
    localhostField.style.display = 'block';
    liveField.style.display = 'none';
    localhostInput.required = true;
    liveServerInput.required = false;
    btnLocalhost.style.backgroundColor = '#714B67';
    btnLocalhost.style.color = 'white';
    btnLiveServer.style.backgroundColor = '#ccc';
    btnLiveServer.style.color = '#714B67';
  } else if (selection === 'live') {
    localhostField.style.display = 'none';
    liveField.style.display = 'block';
    localhostInput.required = false;
    liveServerInput.required = true;
    btnLocalhost.style.backgroundColor = '#ccc';
    btnLocalhost.style.color = '#714B67';
    btnLiveServer.style.backgroundColor = '#714B67';
    btnLiveServer.style.color = 'white';
  }
}

function generateLink() {
  var isLocalhost = document.getElementById('localhost_field').style.display === 'block';
  var localhostPort = document.getElementById('localhost_port').value;
  var liveServerUrl = document.getElementById('live_server_url').value;
  var moduleName = document.getElementById('module_name').value;
  var reportActionId = document.getElementById('report_action_id').value;
  var recordId = document.getElementById('record_id').value;
  var errorMessage = document.getElementById('error_message');
  var generatedLink = document.getElementById('generatedLink');
  var reportLink = document.getElementById('report_link');

  console.log("Localhost Field Display: ", isLocalhost);
  console.log("Localhost Port: ", localhostPort);
  console.log("Live Server URL: ", liveServerUrl);
  console.log("Module Name: ", moduleName);
  console.log("Report Action ID: ", reportActionId);
  console.log("Record ID: ", recordId);

  if ((isLocalhost && !localhostPort) || (!isLocalhost && !liveServerUrl) || !moduleName || !reportActionId || !recordId) {
    errorMessage.style.display = 'block';
    generatedLink.style.display = 'none';
  } else {
    errorMessage.style.display = 'none';

    // Generate the correct URL
    var link = isLocalhost
      ? `http://localhost:${localhostPort}/report/pdf/${moduleName}.${reportActionId}/${recordId}`
      : `${liveServerUrl}/report/pdf/${moduleName}.${reportActionId}/${recordId}`;

    // Set the link in the anchor element
    reportLink.href = link;
    reportLink.innerText = link;
    generatedLink.style.display = 'block';

    // Open the link in a new tab
    window.open(link, '_blank');
  }
}
