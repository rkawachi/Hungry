$(document).ready(function() {
    $('#fileInput').on('change', function() {
        var filename = $(this).val().split('\\').pop();
        $('#filenameDisplay').val(filename);

        document.getElementById('uploadIcon').outerHTML = '<span class="spinner-border"></span>';
        document.getElementById('fileButton').disabled = true;
        document.getElementById('fileButton').className = "btn btn-secondary";
        document.getElementById('fileButton').innerHTML = "判定中";
    });
});