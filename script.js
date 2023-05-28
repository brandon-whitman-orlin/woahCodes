// Expand the nav menu
document.addEventListener('DOMContentLoaded', (event) => {
    var nav = document.getElementById("nav");
    if (nav) {
        var navOpen = document.getElementById("navOpen");
        var hamburgerSVG = document.getElementById("hamburgerSVG");
        var closeSVG = document.getElementById("closeSVG");
        var expandedDiv = document.getElementById("expanded");
        var menuItems = document.querySelectorAll('.menuItem:not(.menuIcon)');
        var pageTitle = document.getElementById("pageTitle");

        hamburgerSVG.style.opacity = 1;
        closeSVG.style.opacity = 0;
        if (navOpen && hamburgerSVG && closeSVG && expandedDiv && menuItems && pageTitle) {
            navOpen.addEventListener("click", function() {
                if (nav.dataset.state == "closed") {
                    menuItems.forEach((menuItem) => {
                        menuItem.style.pointerEvents = 'all';
                    });

                    // Create the first link
                    const aboutLink = document.createElement('a');
                    aboutLink.href = '#aboutSection';
                    aboutLink.id = 'aboutButton';
                    aboutLink.classList.add('aboutLink', 'menuItem', 'pSection');
                    const aboutButton = document.createElement('button');
                    aboutButton.textContent = 'About';
                    aboutLink.appendChild(aboutButton);
                    if (expandedDiv.children.length <= 4) {
                        expandedDiv.appendChild(aboutLink);
                    }

                    // Create the second link
                    const projectsLink = document.createElement('a');
                    projectsLink.href = '#projectsSection';
                    projectsLink.id = 'projectsButton';
                    projectsLink.classList.add('projectsLink', 'menuItem', 'pSection');
                    const projectsButton = document.createElement('button');
                    projectsButton.textContent = 'Projects';
                    projectsLink.appendChild(projectsButton);
                    if (expandedDiv.children.length <= 4) {
                        expandedDiv.appendChild(projectsLink);
                    }

                    // Create the third link
                    const contactsLink = document.createElement('a');
                    contactsLink.href = '#contactsSection';
                    contactsLink.id = 'contactButton';
                    contactsLink.classList.add('contactsLink', 'menuItem', 'pSection');
                    const contactsButton = document.createElement('button');
                    contactsButton.textContent = 'Contact Me';
                    contactsLink.appendChild(contactsButton);
                    if (expandedDiv.children.length <= 4) {
                        expandedDiv.appendChild(contactsLink);
                    }

                    // Create the fourth link
                    const resumeLink = document.createElement('a');
                    resumeLink.href = 'https://drive.google.com/file/d/1tfa9k9S5VwiFvHnWl7ctE-eZrp7f_ZTm/view?usp=sharing';
                    resumeLink.target = '_blank';
                    resumeLink.id = 'resumeButton';
                    resumeLink.classList.add('resumeLink', 'menuItem');
                    const resumeButton = document.createElement('button');
                    resumeButton.textContent = 'Resume';
                    resumeLink.appendChild(resumeButton);
                    if (expandedDiv.children.length <= 4) {
                        expandedDiv.appendChild(resumeLink);
                    }

                    navOpen.style.top = "0";
                    expandedDiv.style.top = "0";
                    expandedDiv.style.maxWidth = "100vw";
                    expandedDiv.style.maxHeight = "100vh";
                    nav.dataset.state = "open";
                    closeSVG.style.opacity = 1;
                    closeSVG.style.zIndex = 2;
                    hamburgerSVG.style.opacity = 0;
                    hamburgerSVG.style.zIndex = 1;
                    // nav.style.filter = "drop-shadow(2px 2px 6px black)";
                } else {
                    menuItems.forEach((menuItem) => {
                        menuItem.style.pointerEvents = 'none';
                    });

                    // Get a reference to each of the child divs
                    const aboutDiv = document.getElementById('aboutButton')
                    const projectsDiv = document.getElementById('projectsButton')
                    const contactsDiv = document.getElementById('contactButton')
                    const resumeDiv = document.getElementById('resumeButton')

                    // Define a function to remove a child element with a delay
                    function removeChildWithDelay(parent, child, delay) {
                        setTimeout(function() {
                            if (parent.child) {
                                parent.removeChild(child);
                            }
                        }, delay);
                    }

                    // Remove each child div from the parent div with a 400ms delay between each one
                    if (aboutDiv) {
                        removeChildWithDelay(expandedDiv, aboutDiv, 200);
                    }
                    if (projectsDiv) {
                        removeChildWithDelay(expandedDiv, projectsDiv, 400);
                    }
                    if (contactsDiv) {
                        removeChildWithDelay(expandedDiv, contactsDiv, 600);
                    }
                    if (resumeDiv) {
                        removeChildWithDelay(expandedDiv, resumeDiv, 800);
                    }

                    navOpen.style.top = "-1rem";
                    expandedDiv.style.top = "0.75rem";
                    expandedDiv.style.maxWidth = "3.5rem";
                    expandedDiv.style.maxHeight = "3.5rem";
                    nav.dataset.state = "closed";
                    setTimeout(() => {
                        closeSVG.style.opacity = 0;
                        closeSVG.style.zIndex = 1;
                        hamburgerSVG.style.opacity = 1;
                        hamburgerSVG.style.zIndex = 2;
                        nav.style.filter = "none";
                    }, 400);
                }
            });
        }
    }
});

// Adjust the icon padding for the nav menu
document.addEventListener('DOMContentLoaded', (event) => {
    var expandedDiv = document.getElementById("expanded");
    var nav = document.getElementById("nav");

    ///
    function addClickListener() {
        const buttons = document.querySelectorAll('.pSection');
        if (buttons.length > 0) {
            buttons.forEach(button => {
                button.addEventListener('click', () => {
                    // Get a reference to each of the child divs
                    const aboutDiv = document.getElementById('aboutButton')
                    const projectsDiv = document.getElementById('projectsButton')
                    const contactsDiv = document.getElementById('contactButton')
                    const resumeDiv = document.getElementById('resumeButton')

                    // Define a function to remove a child element with a delay
                    function removeChildWithDelay(parent, child, delay) {
                        setTimeout(function() {
                            if (parent.child) {
                                parent.removeChild(child);
                            }
                        }, delay);
                    }

                    // Remove each child div from the parent div with a 400ms delay between each one
                    if (aboutDiv) {
                        removeChildWithDelay(expandedDiv, aboutDiv, 200);
                    }
                    if (projectsDiv) {
                        removeChildWithDelay(expandedDiv, projectsDiv, 400);
                    }
                    if (contactsDiv) {
                        removeChildWithDelay(expandedDiv, contactsDiv, 600);
                    }
                    if (resumeDiv) {
                        removeChildWithDelay(expandedDiv, resumeDiv, 800);
                    }

                    navOpen.style.top = "-1rem";
                    expandedDiv.style.top = "0.75rem";
                    expandedDiv.style.maxWidth = "3.5rem";
                    expandedDiv.style.maxHeight = "3.5rem";
                    nav.dataset.state = "closed";
                    setTimeout(() => {
                        closeSVG.style.opacity = 0;
                        hamburgerSVG.style.opacity = 1;
                    }, 400);
                });
            });
        }
    }

    const intervalId = setInterval(() => {
        addClickListener();
    }, 200);
    ///


    document.addEventListener('click', function(event) {
        var targetElement = event.target;

        if (!nav.contains(targetElement) && nav.dataset.state == "open") {

            // Get a reference to each of the child divs
            const aboutDiv = document.getElementById('aboutButton')
            const projectsDiv = document.getElementById('projectsButton')
            const contactsDiv = document.getElementById('contactButton')
            const resumeDiv = document.getElementById('resumeButton')

            // Define a function to remove a child element with a delay
            function removeChildWithDelay(parent, child, delay) {
                setTimeout(function() {
                    if (parent.child) {
                        parent.removeChild(child);
                    }
                }, delay);
            }

            // Remove each child div from the parent div with a 400ms delay between each one
            removeChildWithDelay(expandedDiv, aboutDiv, 200);
            removeChildWithDelay(expandedDiv, projectsDiv, 400);
            removeChildWithDelay(expandedDiv, contactsDiv, 600);
            removeChildWithDelay(expandedDiv, resumeDiv, 800);

            navOpen.style.top = "-1rem";
            expandedDiv.style.top = "0.75rem";
            expandedDiv.style.maxWidth = "3.5rem";
            expandedDiv.style.maxHeight = "3.5rem";
            nav.dataset.state = "closed";
            setTimeout(() => {
                closeSVG.style.opacity = 0;
                hamburgerSVG.style.opacity = 1;
            }, 400);
        }
    });
});

// Set aboutText and aboutImage
document.addEventListener('DOMContentLoaded', (event) => {
    const aboutTexts = ["Hey there, how's it going? My name is Brandon, and I'm  graduating this year with my Computer Science degree from Penn State Abington! Welcome to woahCodes, my personal portfolio website!", "I love using computers to solve problems, and I'm excited for every new challenge! I'm an aspiring Full-Stack developer, and in addition to programming I have experience in project management and consulting.", "I have a deep passion for computer programming and its technical aspects, and I truly enjoy the opportunity to showcase my creativity through the work I produce. In my opinion, programming is not only a science but also an art form that deserves recognition and celebration!", "I'm also passionate about nature, animals, and the environment. It's a priority for me to balance time in front of my screen with time in the great outdoors!", "I'm passionate about teaching and sharing my knowledge, but I'm always open to learning from others, which is essential for tackling new challenges and expanding my skills. Collaboration is one of my strong suits!", "Please explore the rest of my website to learn about some of my projects and see my contact info. Let's collaborate!"];
    const imageList = ['imacowboy2.png', 'programmer.png', 'painting.png', 'plant.png', 'teaching.png', 'teamwork.png'];
    var textLabel = document.getElementById("aboutText");
    var aboutImage = document.getElementById("aboutImage");
    const leftArrow = document.getElementById("aboutLeftArrow");
    const rightArrow = document.getElementById("aboutRightArrow");
    var idx = textLabel.getAttribute("data-currentIndex") - 1;

    if (textLabel && aboutImage) {
        textLabel.innerHTML = aboutTexts[idx];
    }

    if (leftArrow && rightArrow) {
        leftArrow.addEventListener("click", function() {
            if (idx - 1 < 0) {
                idx = aboutTexts.length - 1;
            } else {
                idx = idx - 1;
            }
            textLabel.style.opacity = 0;
            aboutImage.style.transform = "translateY(15rem)";
            // aboutImage.style.transform = "translateY(0rem)";
            setTimeout(() => {
                textLabel.innerHTML = aboutTexts[idx];
                textLabel.setAttribute("data-currentIndex", idx + 1);

            }, 500);
            setTimeout(() => {
                if (idx + 1 != 1) {
                    aboutImage.style.width = "10rem";
                } else {
                    aboutImage.style.width = "20rem";
                }
                aboutImage.src = imageList[idx];
                textLabel.style.opacity = 1;
                if (idx + 1 != 1) {
                    aboutImage.style.transform = "translateY(-2rem)";
                } else {
                    aboutImage.style.transform = "translateY(0rem)";
                }
            }, 500);
        });
        rightArrow.addEventListener("click", function() {
            if (idx + 1 >= aboutTexts.length) {
                idx = 0;
            } else {
                idx = idx + 1;
            }
            textLabel.style.opacity = 0;
            aboutImage.style.transform = "translateY(15rem)";

            // aboutImage.style.transform = "translateY(0rem)";
            setTimeout(() => {
                textLabel.innerHTML = aboutTexts[idx];
                textLabel.setAttribute("data-currentIndex", idx + 1);
            }, 500);
            setTimeout(() => {
                if (idx + 1 != 1) {
                    aboutImage.style.width = "10rem";
                } else {
                    aboutImage.style.width = "20rem";
                }
                aboutImage.src = imageList[idx];
                textLabel.style.opacity = 1;
                if (idx + 1 != 1) {
                    aboutImage.style.transform = "translateY(-2rem)";
                } else {
                    aboutImage.style.transform = "translateY(0rem)";
                }
            }, 500);
        });
    }
});

// Set projectText and projectImage
document.addEventListener('DOMContentLoaded', (event) => {
    const projectTitleList = ['infoBot', 'PARAM', 'Project Grover', 'Couch Counseling', 'Fundament', 'ChopShop'];
    const projectImageList = ['infoBotImage.png', 'ParamImage.png', 'ProjectGroverImage.png', 'CouchCounselingImage.png', 'FundamentImage.png', 'ChopShopImage.png'];
    const projectImageAltList = ['Image of the infoBot Discord Management Bot in use.', 'Image of the PARAM Chat Bot in use.', 'Image of the LiDAR scan generated by the rovers utilized in Project Grover.', 'Image of the CouchCounseling video simulation in use.', 'Image of the Fundament Programming Language Interpreter.', 'Image of the ChopShop webpage in use.'];
    const projectLanguageList = ['Python, JavaScript', 'Python, JavaScript, HTML, CSS', 'Python, JavaScript, HTML, CSS', 'JavaScript, HTML, CSS', 'Python', 'Python'];
    const projectDescriptionList = ['InfoBot is a comprehensive Discord Server management bot that empowers even novice users to efficiently manage large communities with minimal effort.', 'A ChatBot powered by AI developed for PSU Abington\'s Computer Science department. PARAM helps students learn more about their classes, professors, and campus!', 'Sponsored by Lockheed Martin, my Computer Science Capstone Project cretated a connected fleet of ground-based rovers that use swarm intelligence to explore an area and securely communicate mission data.', 'Developed for PSU\'s Human Services Department, this simulation sponsored by the RHS Director, enables students to assume the role of a behavioral health case manager conducting a home visit.', 'Fundament (bigF), is a programming language I developed in collaboration with my classmates. It\'s designed to be more readable and understandable than modern industry standards such as Python.', 'ChopShop is an app that streamlines grocery shopping by enabling users to enter their grocery list and immediately generating the quickest and most convenient route to follow in the store.'];
    var projectCardWrapper = document.getElementById("projectCardWrapper");
    var projectTitle = document.getElementById("projectTitle");
    var projectLanguage = document.getElementById("projectLanguage");
    var projectDescription = document.getElementById("projectDescription");
    var projectImage = document.getElementById("projectImage");
    const leftArrow = document.getElementById("leftIndicatorArrow");
    const rightArrow = document.getElementById("rightIndicatorArrow");
    var idx = projectCardWrapper.getAttribute("data-currentIndex") - 1;
    var preload = new Image();


    const dotHolder = document.getElementById("dotHolder");
    if (dotHolder) {
        for (let i = 0; i < projectTitleList.length - 1; i++) {
            const indicatorCircle = document.getElementById("indicatorCircle")
            if (indicatorCircle) {
                const clone = indicatorCircle.cloneNode(true);
                dotHolder.appendChild(clone);
            }
        };
    }

    for (let i = 0; i < dotHolder.children.length; i++) {
        dotHolder.children[i].style.height = 100 / (dotHolder.children.length - 3) + "%";
    };

    for (let i = 0; i < dotHolder.children.length; i++) {
        if (i == idx) {
            dotHolder.children[i].style.backgroundColor = "hsl(171, 55%, 40%)";
        } else {
            dotHolder.children[i].style.backgroundColor = "rgba(0, 0, 0, 50%)";
        }
    };

    if (projectCardWrapper && projectImage) {
        projectTitle.innerHTML = projectTitleList[idx];
        projectLanguage.innerHTML = projectLanguageList[idx];
        projectDescription.innerHTML = projectDescriptionList[idx];
        projectImage.src = projectImageList[idx];
        projectImage.alt = projectImageAltList[idx];
    }

    if (leftArrow && rightArrow) {
        leftArrow.addEventListener("click", function() {
            if (idx - 1 < 0) {
                idx = projectTitleList.length - 1;
            } else {
                idx = idx - 1;
            }

            projectTitle.style.opacity = 0;
            projectLanguage.style.opacity = 0;
            projectDescription.style.opacity = 0;
            projectImage.style.opacity = 0;
            setTimeout(() => {
                projectTitle.innerHTML = projectTitleList[idx];
                projectLanguage.innerHTML = projectLanguageList[idx];
                projectDescription.innerHTML = projectDescriptionList[idx];
                projectImage.src = projectImageList[idx];
                projectImage.alt = projectImageAltList[idx];
                projectCardWrapper.setAttribute("data-currentIndex", idx + 1);

                for (let i = 0; i < dotHolder.children.length; i++) {
                    if (i == idx) {
                        dotHolder.children[i].style.backgroundColor = "hsl(171, 55%, 40%)";
                    } else {
                        dotHolder.children[i].style.backgroundColor = "rgba(0, 0, 0, 50%)";
                    }
                };
                projectTitle.style.opacity = 1;
                projectLanguage.style.opacity = 1;
                projectDescription.style.opacity = 1;
                projectImage.style.opacity = 1;
            }, 450);
        });
        rightArrow.addEventListener("click", function() {
            if (idx + 1 >= projectTitleList.length) {
                idx = 0;
            } else {
                idx = idx + 1;
            }

            projectTitle.style.opacity = 0;
            projectLanguage.style.opacity = 0;
            projectDescription.style.opacity = 0;
            projectImage.style.opacity = 0;
            setTimeout(() => {
                projectTitle.innerHTML = projectTitleList[idx];
                projectLanguage.innerHTML = projectLanguageList[idx];
                projectDescription.innerHTML = projectDescriptionList[idx];
                projectImage.src = projectImageList[idx];
                projectImage.alt = projectImageAltList[idx];
                projectCardWrapper.setAttribute("data-currentIndex", idx + 1);

                for (let i = 0; i < dotHolder.children.length; i++) {
                    if (i == idx) {
                        dotHolder.children[i].style.backgroundColor = "hsl(171, 55%, 40%)";
                    } else {
                        dotHolder.children[i].style.backgroundColor = "rgba(0, 0, 0, 50%)";
                    }
                };
                projectTitle.style.opacity = 1;
                projectLanguage.style.opacity = 1;
                projectDescription.style.opacity = 1;
                projectImage.style.opacity = 1;
            }, 450);
        });
    }
});

// Contact information
document.addEventListener('DOMContentLoaded', (event) => {
    const gmailContact = document.getElementById('Gmail');
    const phoneContact = document.getElementById('Phone');
    const instagramContact = document.getElementById('Instagram');
    const githubContact = document.getElementById('GitHub');
    const discordContact = document.getElementById('Discord');
    const linkedinContact = document.getElementById('LinkedIn');

    if (gmailContact && phoneContact && instagramContact && githubContact && discordContact && linkedinContact) {
        gmailContact.addEventListener("click", function() {
            var aux = document.createElement("input");
            aux.setAttribute("value", "brandonwhitmanorlin@gmail.com");
            document.body.appendChild(aux);
            aux.select();
            document.execCommand("copy");
            document.body.removeChild(aux);
            alert("Email copied to clipboard.");
        });
        phoneContact.addEventListener("click", function() {
            var aux = document.createElement("input");
            aux.setAttribute("value", "267-597-5212");
            document.body.appendChild(aux);
            aux.select();
            document.execCommand("copy");
            document.body.removeChild(aux);
            alert("Phone Number copied to clipboard.");
        });
        instagramContact.addEventListener("click", function() {
            window.open("https://www.instagram.com/brandon_woah/", "_blank");
        });
        githubContact.addEventListener("click", function() {
            window.open("https://github.com/brandon-whitman-orlin/", "_blank");
        });
        discordContact.addEventListener("click", function() {
            var aux = document.createElement("input");
            aux.setAttribute("value", "Zug#8785");
            document.body.appendChild(aux);
            aux.select();
            document.execCommand("copy");
            document.body.removeChild(aux);
            alert("Discord Tag copied to clipboard.");
        });
        linkedinContact.addEventListener("click", function() {
            window.open("https://www.linkedin.com/in/brandon-whitman-orlin/", "_blank");
        });
    }
});

// Konami code
document.addEventListener('DOMContentLoaded', (event) => {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
  
    let last10KeyPresses = [];
  
    document.addEventListener('keydown', (event) => {

        last10KeyPresses.push(event.code);
  
      if (last10KeyPresses.length > 10) {
        last10KeyPresses.shift();
      }
  
      if (last10KeyPresses.join(',') === konamiCode.join(',')) {

        var game = document.getElementById("gamescreen");
        var buttons = document.querySelectorAll(".headerButton");

        var audio = new Audio('sparkle.mp3');
        audio.play();
        if (game && buttons) {
            for (let i = 0; i < buttons.length; i += 1) {
                buttons[i].style.display = "none";
            }
            game.style.display = "flex";
        }

        function scrollToTop() {
            window.scrollTo({
            top: 0,
            behavior: 'instant'
            });
        }

        scrollToTop();
        document.body.style.overflow = "hidden";
  
        last10KeyPresses = [];

      }
    });
  
});

// Color mode
document.addEventListener('DOMContentLoaded', function() {
  var colorMode = document.getElementById("colorMode");
  var sunIcon = document.getElementById("moonIcon");
  var moonIcon = document.getElementById("sunIcon");
  var leftIndicator = document.getElementById("leftIndicatorArrow");
  var rightIndicator = document.getElementById("rightIndicatorArrow");

  // Check if a color mode preference is stored in local storage
  var storedColorMode = localStorage.getItem("colorMode");
  if (storedColorMode === "dark") {
    // Set the initial state to dark mode
    sunIcon.style.opacity = 0;
    moonIcon.style.opacity = 1;
    document.documentElement.style.setProperty('--headerColor', 'hsl(192, 15%, 20%)');
    document.documentElement.style.setProperty('--buttonColor', 'hsl(8, 26%, 44%)');
    document.documentElement.style.setProperty('--textColor', 'hsl(170, 27%, 64%)');
    document.documentElement.style.setProperty('--accentColor', 'hsl(227, 37%, 31%)');
    document.documentElement.style.setProperty('--mainColor', 'hsl(201, 20%, 10%)');

    document.documentElement.style.setProperty('--fadedColor', 'hsla(0, 0%, 20%, 0.7)');
    leftIndicator.style.filter = "invert(25%) sepia(0%) saturate(329%) hue-rotate(139deg) brightness(96%) contrast(84%)";
    rightIndicator.style.filter = "invert(25%) sepia(0%) saturate(329%) hue-rotate(139deg) brightness(96%) contrast(84%)";
  }

  colorMode.addEventListener("click", function() {
    if (moonIcon.style.opacity == 1) {
      sunIcon.style.opacity = 1;
      moonIcon.style.opacity = 0;
      document.documentElement.style.setProperty('--headerColor', 'hsl(203, 90%, 20%)');
      document.documentElement.style.setProperty('--buttonColor', 'hsl(171, 55%, 40%)');
      document.documentElement.style.setProperty('--textColor', 'hsl(40, 86%, 63%)');
      document.documentElement.style.setProperty('--accentColor', 'hsl(33, 69%, 55%)');
      document.documentElement.style.setProperty('--mainColor', 'hsl(16, 81%, 53%)');

      document.documentElement.style.setProperty('--fadedColor', 'hsla(0, 0%, 0%, 0.5)');
      leftIndicator.style.filter = "none";
      rightIndicator.style.filter = "none";

      // Store the color mode preference in local storage
      localStorage.setItem("colorMode", "light");
    } else {
      sunIcon.style.opacity = 0;
      moonIcon.style.opacity = 1;
      document.documentElement.style.setProperty('--headerColor', 'hsl(192, 15%, 20%)');
      document.documentElement.style.setProperty('--buttonColor', 'hsl(8, 26%, 44%)');
      document.documentElement.style.setProperty('--textColor', 'hsl(170, 27%, 64%)');
      document.documentElement.style.setProperty('--accentColor', 'hsl(227, 37%, 31%)');
      document.documentElement.style.setProperty('--mainColor', 'hsl(201, 20%, 10%)');

      document.documentElement.style.setProperty('--fadedColor', 'hsla(0, 0%, 20%, 0.7)');
      leftIndicator.style.filter = "invert(25%) sepia(0%) saturate(329%) hue-rotate(139deg) brightness(96%) contrast(84%)";
      rightIndicator.style.filter = "invert(25%) sepia(0%) saturate(329%) hue-rotate(139deg) brightness(96%) contrast(84%)";

      // Store the color mode preference in local storage
      localStorage.setItem("colorMode", "dark");
    }
  });
});

// Memory game
document.addEventListener('DOMContentLoaded', function() {
    var game = document.getElementById("gamescreen");
    var score = document.getElementById("numClicks");
    var gameNum = document.getElementById("numRounds");
    const reset = document.getElementById("resetButton");
    const close = document.getElementById("closeButton");
    var buttons = document.querySelectorAll(".headerButton");

    
    const cards = document.querySelectorAll(".card");
    var selectedCards = [];
    var paused = false;

    close.addEventListener("click", function() {
        resetBoard();
        game.style.display = "none";
        document.body.style.overflow = "auto";
        for (let i = 0; i < buttons.length; i += 1) {
            buttons[i].style.display = "flex";
        }
    });
    
    if (score && gameNum && reset && close && cards) {
        resetBoard();
    
        reset.addEventListener("click", function() {
            resetBoard();
            score.innerHTML = 0;
            gameNum.innerHTML = 0;
        });
        
        if (cards.length >= 1) {
            for (let i = 0; i < cards.length; i += 1) {
                cards[i].addEventListener("click", function() {
                    flip(cards[i]);
                });
            }
        }
        
        function flip(card) {
            if (!paused) {
                
                if (!(selectedCards.includes(card)) && card.id !== "matched") {
                  score.innerHTML = Number(score.innerHTML) + 1;
                    card.style.backgroundColor = card.id;
                    selectedCards.push(card);
        
                    if (selectedCards.length === 2) {
                        paused = true;
                        if (selectedCards[0].style.backgroundColor === selectedCards[1].style.backgroundColor) {
                            selectedCards[0].id = "matched";
                            selectedCards[1].id = "matched";
                            selectedCards = [];
                            paused = false;
                        } else {
                            setTimeout(() => {
                                selectedCards[0].style.backgroundColor = "rgb(100, 100, 100)";
                                selectedCards[1].style.backgroundColor = "rgb(100, 100, 100)";
                                selectedCards = [];
                                paused = false;
                            }, 300);
                        }
        
                        // Check if every card has an id of "matched"
                        if ([...cards].every(card => card.id === "matched")) {
                            setTimeout(() => {
                              resetBoard();
                              gameNum.innerHTML = Number(gameNum.innerHTML) + 1;
                            }, "300");
                        }
                    }
                }
            } else {
                // If paused, ignore the click event
                return;
            }
        }
        
        function resetBoard() {
            for (let i = 0; i < cards.length; i += 1) {
                cards[i].style.backgroundColor = "rgb(100, 100, 100)";
            }
            var preColor = Array.from(cards);
            while (preColor.length >= 1) {
                var color = generateRandomRGB();
                var cardIndex = Math.floor(Math.random() * preColor.length);
                preColor[cardIndex].id = color;
                preColor.splice(cardIndex, 1);
                var cardIndex2 = Math.floor(Math.random() * preColor.length);
                preColor[cardIndex2].id = color;
                preColor.splice(cardIndex2, 1);
            }
        
            function generateRandomRGB() {
                const red = Math.floor(Math.random() * 256);
                const green = Math.floor(Math.random() * 256);
                const blue = Math.floor(Math.random() * 256);
        
                const rgbValue = `rgb(${red}, ${green}, ${blue})`;
        
                return rgbValue;
            }
        }
    }
});