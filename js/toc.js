const tocContainer = document.getElementById("toc");

// Create button
const btn = document.createElement("button");
btn.id = "toc-btn";
btn.className = "toc-btn";
btn.innerHTML = `<span></span><span></span><span></span>`;

// Create menu
const menu = document.createElement("div");
menu.className = "toc-menu";

// Get headings from rendered markdown
const headings = ["mahadev", "gsoc", "docs engine"];
// const headings = document.querySelectorAll("#app h1, #app h2");

const ul = document.createElement("ul");

  const li1 = document.createElement("li");
  li1.textContent = "Table of Contents";
  li1.style.fontWeight = "bold";
  li1.style.cursor = "default";
  
  ul.appendChild(li1);
console.log(headings);
headings.forEach((heading, index) => {
  const id = "heading-" + index;

  const li = document.createElement("li");
  li.textContent = heading;

  li.onclick = () => {
    // document.getElementById(id).scrollIntoView({
    //   behavior: "smooth"
    // });
  };

  ul.appendChild(li);
});

menu.appendChild(ul);
tocContainer.appendChild(btn);
tocContainer.appendChild(menu);

/* Default expand */
btn.classList.add("active");
menu.classList.add("show");
// Toggle
btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  menu.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  requestAnimationFrame(() => {
    const isClickInside =
      btn.contains(e.target) || menu.contains(e.target);

    if (!isClickInside) {
      btn.classList.remove("active");
      menu.classList.remove("show");
    }
  });
});