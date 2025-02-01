document.addEventListener("DOMContentLoaded", function () {
    const imageUpload = document.getElementById("imageUpload");
    const previewImage = document.getElementById("previewImage");
    const svgIcon = document.querySelector(".image-upload svg");

    imageUpload.addEventListener("change", function (event) {
        const file = event.target.files[0];

        if (file) {
            const url = URL.createObjectURL(file);
            previewImage.src = url;
            previewImage.style.display = "block";
            svgIcon.style.display = "none";
        } else {
            previewImage.style.display = "none";
            svgIcon.style.display = "block";
        }
    });

    // Form Validation
    document.getElementById("pdcForm").addEventListener("submit", function (event) {
        const name = document.getElementById("name").value.trim();
        const employeeNo = document.getElementById("employeeNo").value.trim();
        const position = document.getElementById("position").value;
        const email = document.getElementById("email").value.trim();
        const contact = document.getElementById("contact").value.trim();

        if (!name || !employeeNo || !position || !email || !contact) {
            alert("All fields are required.");
            event.preventDefault();
        }
    });
});
