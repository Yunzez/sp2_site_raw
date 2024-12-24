// Helper function to create publication HTML element
const createPublicationElement = (pub) => {
    // Create the card structure
    const card = document.createElement("div");
    card.classList.add("card");
  
    // Container div to hold left and right sections
    const container = document.createElement("div");
    container.classList.add("container");
  
    // Right section with publication details and buttons
    const right = document.createElement("div");
    right.classList.add("right");
  
    // Text wrap for title and details
    const textWrap = document.createElement("div");
    textWrap.classList.add("text-wrap");
  
    // Title link
    const titleLink = document.createElement("a");
    titleLink.href = pub.link;
    titleLink.target = "_blank";
    titleLink.classList.add("text-link");
    titleLink.innerText = pub.title;
    
    // Authors and conference details
    const detailsText = document.createElement("p");
    detailsText.classList.add("text-content");
    detailsText.innerText = `${pub.authors}. ${pub.conference}.`;
    
    // Append title link and details to text wrap
    textWrap.appendChild(titleLink);
    textWrap.appendChild(document.createElement("br"));
    textWrap.appendChild(detailsText);

  
    // Button wrap for actions (view link and mark as read)
    const buttonWrap = document.createElement("div");
    buttonWrap.classList.add("button-wrap");
  
    const viewButton = document.createElement("button");
    viewButton.classList.add("primary-cta");
    viewButton.innerText = "View Publication";
    viewButton.onclick = () => window.open(pub.link, "_blank");
  
  
    buttonWrap.appendChild(viewButton);
  
    // Append all sections to the right container
    right.appendChild(textWrap);
    right.appendChild(buttonWrap);

    container.appendChild(right);
  
    // Append container to card
    card.appendChild(container);
  
    return card;
  };
  
  const loadPublication = async (tag) => {
    const container = document.getElementById(
      tag === "all" ? "all-publications" : tag.replace(/\s+/g, "-").toLowerCase()
    );
    container.innerHTML = ""; // Clear existing content
  
    if (tag === "all") {
      Object.keys(publications).forEach((key) => {
        publications[key].forEach((pub) => {
          container.appendChild(createPublicationElement(pub));
        });
      });
    } else {
      publications[tag].forEach((pub) => {
        container.appendChild(createPublicationElement(pub));
      });
    }
  };
  
  const filterPublications = () => {
    const searchInput = document.getElementById("search-bar").value.toLowerCase();
    const container = document.getElementById("all-publications");
    container.innerHTML = ""; // Clear current list
  
    // Filter and display publications based on search input
    Object.keys(publications).forEach((key) => {
      publications[key].forEach((pub) => {
        if (pub.title.toLowerCase().includes(searchInput)) {
          container.appendChild(createPublicationElement(pub));
        }
      });
    });
  };
  