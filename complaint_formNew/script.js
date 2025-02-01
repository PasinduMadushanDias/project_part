document.getElementById("imageUpload").addEventListener("change", function(event) {
    const file = event.target.files[0];
    const preview = document.getElementById("previewImage");

    if (file) {
        preview.src = URL.createObjectURL(file);
        preview.style.display = "block";
    } else {
        preview.style.display = "none";
    }
});
