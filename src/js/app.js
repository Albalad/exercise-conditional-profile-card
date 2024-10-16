import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should show the cover image
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "right", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); // print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  let posicionIconos = `<ul class="position-right">`;
  if (variables.socialMediaPosition == "position-left") {
    posicionIconos = `<ul class="position-left">`;
  }

  let nombre = variables.name;
  if (variables.name == null) {
    nombre = "&nbsp;";
  }

  let apellido = variables.lastName;
  if (variables.lastName == null) {
    apellido = "&nbsp;";
  }

  let twit = `"https://twitter.com/${variables.twitter}"`;
  if (variables.twitter == null) {
    twit = "https://twitter.com";
  }

  let git = `"https://github.com/${variables.github}`;
  if (variables.github == null) {
    git = "https://github.com";
  }

  let lkndn = `"https://linkedin.com/${variables.linkedin}"`;
  if (variables.linkedin == null) {
    lkndn = "https://linkedin.com";
  }

  let insta = `"https://instagram.com/${variables.instagram}"`;
  if (variables.instagram == null) {
    insta = "https://instagram.com";
  }

  let rol = variables.role;
  if (variables.role == "Web Developer") {
    rol = "Web Developer";
  } else if (variables.role == "Floor Planner") {
    rol = "Floor Planner";
  } else if (variables.role == "Technical Writter") {
    rol = "Technical Writter";
  } else rol = "&nbsp;";

  let ciudad = variables.city;
  if (variables.city == "Miami") {
    ciudad = "Miami";
  } else if (variables.city == "Munich") {
    ciudad = "Munich";
  } else if (variables.city == "Caracas") {
    ciudad = "Caracas";
  } else if (variables.city == "Toronto") {
    ciudad = "Toronto";
  } else ciudad = "&nbsp;";

  let pais = variables.country;
  if (variables.country == "USA") {
    pais = "USA";
  } else if (variables.country == "Germany") {
    pais = "Germany";
  } else if (variables.country == "Canada") {
    pais = "Canada";
  } else if (variables.country == "Venezuela") {
    pais = "Venezuela";
  } else pais = "&nbsp;";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${nombre + " " + apellido}</h1>
          <h2>${rol}</h2>
          <h3>${ciudad}, ${pais}</h3>
          ${posicionIconos}
            <li><a href=${twit}><i class="fab fa-twitter"></i></a></li>
            <li><a href=${git}<i class="fab fa-github"></i></a></li>
            <li><a href=${lkndn}<i class="fab fa-linkedin"></i></a></li>
            <li><a href=${insta}<i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should show the cover image
    includeCover: true,
    // this is the image's url that will be used as a background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); // render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
};
