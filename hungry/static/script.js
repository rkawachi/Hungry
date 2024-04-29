document.getElementById('fileInput').addEventListener('change', function () {
    var icon = document.getElementById('uploadIcon');
    if (icon) {
        icon.outerHTML = '<span class="spinner-border"></span>';
        document.getElementById("fileButton").disabled = true;
        document.getElementById("fileButton").className = "btn btn-secondary";
        document.getElementById("fileButton").innerHTML = "判定中";
    }
});