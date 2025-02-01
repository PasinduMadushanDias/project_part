document.addEventListener("DOMContentLoaded", function () {
    // Sidebar toggle
    const sidebar = document.querySelector(".sidebar");
    const mainContent = document.querySelector(".main-content");
    const toggleButton = document.querySelector(".toggle-sidebar");

    toggleButton.addEventListener("click", function () {
        if (sidebar.style.width === "60px") {
            sidebar.style.width = "250px";
            mainContent.style.marginLeft = "0";
        } else {
            sidebar.style.width = "60px";
            mainContent.style.marginLeft = "-190px";
        }
    });

    // Simulated Data Fetching
    setTimeout(() => {
        document.getElementById("userCount").textContent = "1,245";
        document.getElementById("reportCount").textContent = "37";
        document.getElementById("notifCount").textContent = "89";
    }, 1000);

    // Chart Setup
    const ctx = document.getElementById("dashboardChart").getContext("2d");
    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [
                {
                    label: "Users",
                    data: [120, 150, 180, 140, 170, 190, 210],
                    borderColor: "#4b56cc",
                    backgroundColor: "rgba(75, 86, 204, 0.1)",
                    borderWidth: 2,
                },
                {
                    label: "Reports",
                    data: [50, 80, 100, 60, 110, 90, 120],
                    borderColor: "#13b691",
                    backgroundColor: "rgba(19, 182, 145, 0.1)",
                    borderWidth: 2,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        },
    });
});
