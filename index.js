// --------------------------------------------
// createElement() Function Start

const createElement = (tagName, className, textContent) => {
  const element = document.createElement(tagName);
  element.className = className;

  if (textContent) {
    element.appendChild(document.createTextNode(textContent));
  }

  return element;
};

// createElement() Function End
// --------------------------------------------
// containerCard_3(): Language's Function Start

const containerCard_3 = (src, alt, title, text, link) => {
  const containerItem = createElement(`div`, `container-item`);
  const figure = createElement(`figure`, `figure`);

  // --------------------------------------------
  // Figure Image
  const figureImg = createElement(`img`, `figure-img`);
  figureImg.src = src;
  figureImg.alt = alt;
  figureImg.title = alt;

  // --------------------------------------------
  // Card Body Elements
  const rhombus = createElement(`div`, `rhombus-shape`);
  const containerBody = createElement(`div`, `container-body`);
  const containerBox = createElement(`div`, `container-box`);
  const containerLanguage = createElement(`h4`, `container-language`, title);
  const containerText = createElement(`span`, `container-text`, text);
  const containerLink = createElement(`a`, `container-link`, `>`);
  containerLink.href = `https://q3schools.com/${link}/`;

  // --------------------------------------------
  // Append elements
  const container = document.getElementById(`container-3`);

  container.append(containerItem);
  containerItem.append(figure, containerBody);
  figure.append(figureImg, rhombus);
  containerBody.append(containerBox, containerLink);
  containerBox.append(containerLanguage, containerText);

  return containerItem;
};

containerCard_3(
  `src/language/C.png`,
  `c-programming language`,
  `C`,
  `A Programming Language`,
  `c-programming-tutorial`
);
containerCard_3(
  `src/language/C++.png`,
  `c-plus-plus prgramming language`,
  `C++`,
  `A Programming Language`,
  `c-plus-plus-tutorial`
);
containerCard_3(
  `src/language/Csharp.png`,
  `c-sharp prgramming language`,
  `C#`,
  `A Programming Language`,
  `c-sharp`
);
containerCard_3(
  `src/language/Python.png`,
  `python prgramming language`,
  `Python`,
  `A Programming Language`,
  `python-tutorial`
);
containerCard_3(
  `src/language/Java.png`,
  `java prgramming language`,
  `Java`,
  `A Programming Language`,
  `java-tutorial`
);
containerCard_3(
  `src/language/Kotlin.png`,
  `kotlin prgramming language`,
  `Kotlin`,
  `A Programming Language`,
  `kotlin`
);
containerCard_3(
  `src/language/HTML5.png`,
  `html markup language`,
  `HTML`,
  `A Markup Language`,
  `html`
);
containerCard_3(
  `src/language/CSS.png`,
  `css stylesheet language`,
  `CSS`,
  `A Stylesheet Language`,
  `css`
);
containerCard_3(
  `src/language/JavaScript.png`,
  `javascript scripting language`,
  `JavaScript`,
  `A Scripting Language`,
  `javascript`
);
containerCard_3(
  `src/language/SQL.png`,
  `sql domain-specific language`,
  `SQL`,
  `A Domain-specific Language`,
  `sql`
);
containerCard_3(
  `src/language/Wordpress.png`,
  `wordpress cms tool`,
  `Wordpress`,
  `A CMS Tool`,
  `wordpress`
);
containerCard_3(
  `src/language/ASP.Net.png`,
  `asp.net web-application framework`,
  `ASP.Net`,
  `A Web-application framework`,
  `asp-net`
);

// containerCard_3(): Language's Function End
// --------------------------------------------
// containerCompiler_4(): Compilers Function Start

const containerCompiler_4 = (title, link, src, alt) => {
  const containerItem = createElement(`div`, `container-item`);
  const rhombusShape = createElement(`div`, `rhombus-shape`);
  const containerText = createElement(`span`, `container-text`, title);
  const containerItemLink = createElement(`a`, `container-link`);
  const figure = createElement(`figure`, `figure`);
  const figureImg = createElement(`img`, `figure-img`);

  // --------------------------------------------
  // Link and Image
  containerItemLink.href = `https://q3schools.com/online-${link}`;
  figureImg.src = src;
  figureImg.alt = alt;
  figureImg.title = alt;

  // --------------------------------------------
  // Append elements
  const container4 = document.getElementById(`container-4`);
  containerItem.append(rhombusShape, containerText, containerItemLink);
  containerItemLink.appendChild(figure);
  figure.appendChild(figureImg);
  container4.append(containerItem);

  return containerItem;
};

containerCompiler_4(
  `HTML`,
  `html-css-compiler`,
  `src/language/HTML5.png`,
  `HTML CSS Compiler`
);
containerCompiler_4(
  `JavaScript`,
  `javascript-compiler`,
  `src/language/JavaScript.png`,
  `JavaScript Compiler`
);
containerCompiler_4(
  `Python`,
  `python-compiler-programiz`,
  `src/language/Python.png`,
  `Python Compiler`
);
containerCompiler_4(
  `Java`,
  `java-compiler`,
  `src/language/Java.png`,
  `Java Compiler`
);
containerCompiler_4(
  `C`,
  `c-language-compiler`,
  `src/language/C.png`,
  `C Compiler`
);
containerCompiler_4(
  `C++`,
  `c-plus-plus-compiler`,
  `src/language/C++.png`,
  `C++ Compiler`
);
containerCompiler_4(`C#`, `c-sharp-compiler`, `src/language/Csharp.png`, `C# Compiler`);

// containerCompiler_4(): Compilers Function End
// --------------------------------------------
// containerCompiler_5(): Projects Function Start

const containerCompiler_5 = (src, iconSrc, title) => {
  const containerItem = createElement(`div`, `container-item`);
  const figure = createElement(`figure`, `figure`);
  const figureImg = createElement(`img`, `figure-img`);
  const containerInner = createElement(`div`, `container-inner`);
  const containerItemLink = createElement(`a`, `container-link`);
  const containerIcon = createElement(`img`, `container-icon`);
  const containerText = createElement(`span`, `container-text`, title);

  // --------------------------------------------
  // Link and Image
  containerItemLink.href = `#`;
  figureImg.src = src;
  figureImg.alt = `${title} Project`;
  figureImg.title = `${title} Project`;

  // --------------------------------------------
  // Container-icon
  containerIcon.src = iconSrc;
  containerIcon.alt = title;

  // --------------------------------------------
  // Append elements
  const container5 = document.getElementById(`container-5`);
  containerItem.append(figure, containerInner);
  figure.appendChild(figureImg);

  containerInner.appendChild(containerItemLink);
  containerItemLink.append(containerIcon, containerText);
  container5.append(containerItem);

  return containerItem;
};

containerCompiler_5(
  `src/project/Project 1.png`,
  `src/language/Python.png`,
  `Python`
);
containerCompiler_5(
  `src/project/Project 2.png`,
  `src/language/Java.png`,
  `Java`
);
containerCompiler_5(
  `src/project/Project 3.jpg`,
  `src/language/JavaScript.png`,
  `JavaScript`
);
containerCompiler_5(`src/project/Project 4.jpg`, `src/language/C.png`, `C`);
containerCompiler_5(`src/project/Project 5.jpg`, `src/language/C++.png`, `C++`);
containerCompiler_5(`src/project/Project 6.jpg`, `src/language/Csharp.png`, `C#`);

// containerCompiler_5(): Projects Function End
// --------------------------------------------
// randomColor() Function Start

const randomColor = () => {
  const red = Math.floor(Math.random() * 255) + 1;
  const green = Math.floor(Math.random() * 255) + 1;
  const blue = Math.floor(Math.random() * 255) + 1;
  const color = `rgb(${red}, ${green}, ${blue})`;

  return color;
};

// randomColor() Function End
// --------------------------------------------
// containerTag_6(): Tags Function Start

const containerTag_6 = (title) => {
  const containerTag = createElement(`li`, `container-tag`, title);
  containerTag.style.backgroundColor = randomColor();

  // --------------------------------------------
  // Append elements
  const container6 = document.getElementById(`container-6`);
  container6.appendChild(containerTag);

  return containerTag;
};

containerTag_6("C Language");
containerTag_6("C++");
containerTag_6("Java");
containerTag_6("Python");
containerTag_6("SQL");
containerTag_6("HTML");
containerTag_6("CSS");
containerTag_6("JavaScript");
containerTag_6("C#");
containerTag_6("Kotlin");
containerTag_6("WordPress");
containerTag_6("ASP.Net");
containerTag_6("Website Development");
containerTag_6("Android Development");
containerTag_6("Software Development");
containerTag_6("Data Science");
containerTag_6("AWS");
containerTag_6("Google Cloud");
containerTag_6("Ethical Hacking");
containerTag_6("Front End Developer");
containerTag_6("Back End Developer");
containerTag_6("Full Stack Developer");
containerTag_6("React.JS");
containerTag_6("Native Application");
containerTag_6("Hybrid Application");
containerTag_6("Web Application");
containerTag_6("Data Structure");

// containerTag_6(): Tags Function End
// --------------------------------------------
// currentYear Start
// Display the Current Year

const currentYear = new Date().getFullYear();
const yearElement = document.getElementById(`currentYear`);
yearElement.appendChild(document.createTextNode(currentYear));

// currentYear End
// --------------------------------------------
