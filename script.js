 function generateResume() {

  let objectiveText = document.getElementById("objective").value;
  if (objectiveText.toLowerCase() === "you write") {
    objectiveText =
      "Motivated graduate seeking an entry-level position to apply technical skills and grow with the organization.";
  }

  document.getElementById("resume").innerHTML = `
    <h2>${document.getElementById("name").value}</h2>
    <p><b>${document.getElementById("mobile").value}</b> |
       ${document.getElementById("email").value}</p>
    <p>${document.getElementById("location").value}</p>
    <p>${document.getElementById("linkedin").value} |
       ${document.getElementById("github").value}</p>

    <div class="section">
      <h4>Career Objective</h4>
      <p>${objectiveText}</p>
    </div>

    <div class="section">
      <h4>Skills</h4>
      <p><b>Technical:</b> ${techSkills.value}</p>
      <p><b>Tools:</b> ${tools.value}</p>
      <p><b>Soft Skills:</b> ${softSkills.value}</p>
    </div>

    <div class="section">
      <h4>Experience</h4>
      <p>${experienceType.value}</p>
      <p>${jobTitle.value} – ${company.value}</p>
      <p>${duration.value}</p>
      <p>${workDetails.value}</p>
    </div>

    <div class="section">
      <h4>Education</h4>
      <p>${degree.value}</p>
      <p>${college.value}</p>
      <p>${year.value} | ${cgpa.value}</p>
    </div>

    <div class="section">
      <h4>Projects</h4>
      <p>${projects.value}</p>
    </div>

    <div class="section">
      <h4>Certifications</h4>
      <p>${certifications.value}</p>
    </div>

    <div class="section">
      <h4>Achievements</h4>
      <p>${achievements.value}</p>
    </div>

    <div class="section">
      <h4>Languages</h4>
      <p>${languages.value}</p>
    </div>
  `;
}

function downloadPDF() {
  const element = document.getElementById("resume");

  const options = {
    margin: 0,
    filename: "Resume.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 2, scrollY: 0 },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait"
    },
    pagebreak: { mode: ["avoid-all"] }
  };

  html2pdf().set(options).from(element).save();
}
