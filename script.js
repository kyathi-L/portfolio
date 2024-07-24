document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.nav-tabs ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Back-to-top button
  const backToTopBtn = document.createElement('button');
  backToTopBtn.innerText = '↑';
  backToTopBtn.id = 'back-to-top';
  document.body.appendChild(backToTopBtn);

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });

  // Dark mode toggle
  const darkModeToggle = document.createElement('button');
  darkModeToggle.innerText = '🌙';
  darkModeToggle.id = 'dark-mode-toggle';
  document.body.appendChild(darkModeToggle);

  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  // Add CSS for back-to-top button and dark mode
  const style = document.createElement('style');
  style.innerHTML = `
    #back-to-top {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color:darkcyan;
      color: white;
      border: none;
      padding: 10px 15px;
      border-radius: 5px;
      cursor: pointer;
      display: none;
      font-size: 18px;
    }

    #back-to-top:hover {
      background-color: rgb(11, 85, 85);;
    }

    #dark-mode-toggle {
      position: fixed;
      top: 20px;
      right: 20px;
      background-color: #333;
      color: white;
      border: none;
      padding: 10px;
      border-radius: 50%;
      cursor: pointer;
      font-size: 18px;
    }

    #dark-mode-toggle:hover {
      background-color: black;
    }

    .dark-mode {
      background-color: #333;
      color: #fff;
    }

    .dark-mode header {
      background-color: #333;
    }

    .dark-mode #resume {
    background-color: Cyan;
    color: white;
    box-shadow: 0 4px 8px silver;
    font-size: 18px;
  }

  .dark-mode  a #resume :hover {
    background-color: #turquoise;
  }

  .dark-mode .nav-tabs {
    background-color: #222;
  }

    .dark-mode .nav-tabs ul li a {
      color: white;
    }

    .dark-mode .nav-tabs ul li a:hover
    {
      color:gold;
    }
    .dark-mode main {
      background-color: #000;
      
    }

    .dark-mode section h2
    {
      color:cyan;
      border-bottom: 2px solid cyan;
    }

    .dark-mode .experience-item,
    .dark-mode .project,
    .dark-mode .skills-list li,
    .dark-mode .education-list li {
      background-color: #333;
    }

    .dark-mode .project:hover
    {
      background-color:#444;
    }

    .dark-mode .skills-list li,
    .dark-mode .education-list li,
    .dark-mode .experience-item
    {
      background-color:#555;
      color:white;
    }

    .dark-mode .experience-item:hover {
    box-shadow: 0 8px 16px rgb(16, 204, 221);
    }

    .darkmode .experience-item h3 {
    color: white;
    }

    .dark-mode .education-list h3
    {
    color:silver;
    }

    .dark-mode .experience-item p
    {
    color:white;
    }

    .dark-mode .skills-list li:hover,
    .dark-mode .education-list li:hover
    {
      background-color:darkcyan;
      color:white
    }

    .dark-mode .project h3{
      color:white;
    }

    .dark-mode .project-link,
    .dark-mode .certifications li::before {
      color:#222;
      background-color: turquoise;
    }

     .dark-mode .project-link:hover
     {
      background-color:darkcyan;
     }
    
    .dark-mode .certifications li:hover
    {
      color: turquoise;
      font-weight:Bold;
    }

    .dark-mode footer {
      background-color: #222;
    }
  `;
  document.head.appendChild(style);
});
