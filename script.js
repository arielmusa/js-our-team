const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

// get DOM elements
const cardRow = document.getElementById("card-row");

function generateCardElementHTML(name, role, email, img) {
  const cardElement = `
  <div class="col-md-6 col-lg-4">
            <div class="card d-flex flex-row">
              <div class="img">
                <img src="${img}" alt="${name}" />
              </div>
              <div class="card-content d-flex flex-column justify-content-center ps-3">
                <div class="member-name">${name}</div>
                <div class="member-role">${role}</div>
                <div class="member-email"><a href="mailto:${email}">${email}</a></div>
              </div>
            </div>
          </div>
  `;
  return cardElement;
}

let cardRowHTML = ``;

for (const member of teamMembers) {
  const { name, role, email, img } = member;
  cardRowHTML += generateCardElementHTML(name, role, email, img);
}

cardRow.innerHTML = cardRowHTML;
