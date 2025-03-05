document.getElementById("generate-btn").addEventListener("click", function() {
    // Get user inputs
    document.getElementById("r-name").innerText = document.getElementById("name").value;
    document.getElementById("r-title").innerText = document.getElementById("title").value;
    document.getElementById("r-summary").innerText = document.getElementById("summary").value;
    document.getElementById("r-experience").innerText = document.getElementById("experience").value;
    document.getElementById("r-education").innerText = document.getElementById("education").value;
    document.getElementById("r-skills").innerText = document.getElementById("skills").value;
    document.getElementById("r-projects").innerText = document.getElementById("projects").value;
    document.getElementById("r-contact").innerText = document.getElementById("contact").value;

    // Show resume preview and hide form
    document.getElementById("form-container").style.display = "none";
    document.getElementById("resume-container").style.display = "block";
});

document.getElementById("edit-btn").addEventListener("click", function() {
    document.getElementById("form-container").style.display = "block";
    document.getElementById("resume-container").style.display = "none";
});

// PDF Download Functionality
document.getElementById("download-btn").addEventListener("click", function() {
    const { jsPDF } = window.jspdf;
    let doc = new jsPDF();

    doc.text(`Name: ${document.getElementById("r-name").innerText}`, 10, 10);
    doc.text(`Title: ${document.getElementById("r-title").innerText}`, 10, 20);
    doc.text(`Summary: ${document.getElementById("r-summary").innerText}`, 10, 30);
    doc.text(`Work Experience: ${document.getElementById("r-experience").innerText}`, 10, 40);
    doc.text(`Education: ${document.getElementById("r-education").innerText}`, 10, 50);
    doc.text(`Skills: ${document.getElementById("r-skills").innerText}`, 10, 60);
    doc.text(`Projects: ${document.getElementById("r-projects").innerText}`, 10, 70);
    doc.text(`Contact: ${document.getElementById("r-contact").innerText}`, 10, 80);

    doc.save("resume.pdf");
});
