
// document.getElementById('profileForm').addEventListener('submit', function (e) {
//     e.preventDefault();

//     // Simulate saving changes
//     alert('Changes saved successfully!');
// });

// document.getElementById('imageUpload').addEventListener('change', function (e) {
//     const file = e.target.files[0];
//     if (file) {
//         const reader = new FileReader();
//         reader.onload = function (event) {
//             document.getElementById('profileImage').src = event.target.result;
//         };
//         reader.readAsDataURL(file);
//     }
// });
document.getElementById('profileImage').addEventListener('click', function () {
    document.getElementById('imageUpload').click();
});

document.getElementById('imageUpload').addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            document.getElementById('profileImage').src = event.target.result;
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('profileForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Simulate saving changes
    alert('Changes saved successfully!');
});
