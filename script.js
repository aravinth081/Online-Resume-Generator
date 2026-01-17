  const toggleBtn = document.getElementById("themeToggle");
const pdfBtn = document.getElementById("pdfBtn");

/* THEME TOGGLE */
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});

/* GENERATE RESUME */
function generateResume() {
  const resume = document.getElementById("resume");

  resume.innerHTML = `
    <h2>${val("name")}</h2>
    <p><b>${val("mobile")}</b> | ${val("email")}</p>
    <p>${val("location")}</p>
    <p>${val("linkedin")} | ${val("github")}</p>

    <div class="section-title">Career Objective</div>
    <p>${val("objective")}</p>

    <div class="section-title">Skills</div>
    <p>Technical: ${val("techSkills")}</p>
    <p>Tools: ${val("tools")}</p>
    <p>Soft Skills: ${val("softSkills")}</p>

    <div class="section-title">Experience</div>
    <p>${val("experienceType")}</p>
    <p>${val("jobTitle")} – ${val("company")}</p>
    <p>${val("duration")}</p>
    <p>${val("workDetails")}</p>

    <div class="section-title">Education</div>
    <p>${val("degree")}</p>
    <p>${val("college")}</p>
    <p>${val("year")} | ${val("cgpa")}</p>

    <div class="section-title">Projects</div>
    <p>${val("projects")}</p>

    <div class="section-title">Certifications</div>
    <p>${val("certifications")}</p>

    <div class="section-title">Achievements</div>
    <p>${val("achievements")}</p>

    <div class="section-title">Languages</div>
    <p>${val("languages")}</p>
  `;

  pdfBtn.disabled = false;
}

/* SAFE VALUE */
function val(id) {
  return document.getElementById(id).value || "";
}

/* DOWNLOAD PDF */
function downloadPDF() {
  const resume = document.getElementById("resume");

  if (!resume.innerText.trim()) {
    alert("Generate resume first!");
    return;
  }

  html2pdf().set({
    margin: 0,
    filename: "Resume.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 3 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
  }).from(resume).save();
}
