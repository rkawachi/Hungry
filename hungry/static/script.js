document.addEventListener("DOMContentLoaded", function () {
    var dropZone = document.getElementById('uploadIcon');

    dropZone.addEventListener('dragover', function (e) {
        e.preventDefault();
        e.stopPropagation();
        dropZone.classList.add('drop-zone-hover');
    });

    dropZone.addEventListener('dragleave', function (e) {
        e.preventDefault();
        e.stopPropagation();
        dropZone.classList.remove('drop-zone-hover');
    });

    dropZone.addEventListener('drop', function (e) {
        e.preventDefault();
        e.stopPropagation();
        dropZone.classList.remove('drop-zone-hover');

        var files = e.dataTransfer.files;
        if (files.length > 0) {
            handleFileSelect(files[0]);
        }
    });

    var fileInput = document.getElementById('fileInput');
    fileInput.addEventListener('change', function () {
        if (this.files.length > 0) {
            handleFileSelect(this.files[0]);
        }
    });

    function handleFileSelect(file) {
        document.getElementById('filenameDisplay').value = file.name;

        document.getElementById('uploadIcon').outerHTML = '<span class="spinner-border"></span>';
        document.getElementById('fileButton').disabled = true;
        document.getElementById('fileButton').className = "btn btn-secondary";
        document.getElementById('fileButton').innerHTML = "判定中";
    }
});