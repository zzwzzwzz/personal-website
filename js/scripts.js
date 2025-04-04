// Intersection Observer for fade-in effects
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Back to Top Button
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    backToTop.style.opacity = window.scrollY > 500 ? '1' : '0';
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', (e) => {
    e.stopPropagation();
    
    // Toggle the hidden class
    const isMenuOpen = !mobileMenu.classList.contains('hidden');
    
    if (isMenuOpen) {
        // If menu is open, close it
        mobileMenu.classList.add('hidden');
        mobileMenuButton.querySelector('i').style.transform = 'rotate(0deg)';
        mobileMenuButton.querySelector('i').classList.remove('text-yellow-600');
    } else {
        // If menu is closed, open it
        mobileMenu.classList.remove('hidden');
        mobileMenuButton.querySelector('i').style.transform = 'rotate(90deg)';
        mobileMenuButton.querySelector('i').classList.add('text-yellow-600');
    }
});

// Close menu on outside click
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
        mobileMenu.classList.add('hidden');
        mobileMenuButton.querySelector('i').style.transform = 'rotate(0deg)';
        mobileMenuButton.querySelector('i').classList.remove('text-yellow-600');
    }
});

// Smooth scroll for mobile links
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
        mobileMenu.classList.add('hidden');
        mobileMenuButton.querySelector('i').style.transform = 'rotate(0deg)';
        mobileMenuButton.querySelector('i').classList.remove('text-yellow-600');
    });
});

// Dark Mode Toggle
const themeToggleDesktop = document.getElementById('theme-toggle-desktop');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');
const body = document.body;
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Function to set the theme
function setTheme(isDark) {
    if (isDark) {
        body.classList.add('dark-mode');
        document.querySelectorAll('#theme-toggle-desktop i, #theme-toggle-mobile i').forEach(icon => {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        });
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        document.querySelectorAll('#theme-toggle-desktop i, #theme-toggle-mobile i').forEach(icon => {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        });
        localStorage.setItem('theme', 'light');
    }
}

// Set initial theme based on preference
const currentTheme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');
setTheme(currentTheme === 'dark');

// Toggle theme on button click
[themeToggleDesktop, themeToggleMobile].forEach(toggle => {
    toggle.addEventListener('click', () => {
        const isDark = body.classList.contains('dark-mode');
        setTheme(!isDark);
    });
});

// Particles.js Configuration
particlesJS('particles-js', {
    particles: {
        number: { value: 80 },
        color: { value: '#f59e0b' },
        shape: { type: 'circle' },
        opacity: { value: 0.5 },
        size: { value: 3 },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
        }
    }
});


// Less redundant code for the project cards
// Project data
const projects = [
    {
        title: "From Far Away to G'Day",
        image: "images/fishtalk.png",
        alt: "Fish Talk's documentary project From Far Away to G'Day",
        description: "From Far Away to G'Day is a documentary spotlighting six Asian immigrants' transformative journeys in Australia, from international students to community pioneers. For this project, I help with designing the pitch deck, film posters and maintaining the website using Wix.",
        projectLink: "https://www.fishtalkglobal.com/fromfarawaytogday",
        codeLink: "",
        donateLink: "https://documentaryaustralia.com.au/project/from-far-away-to-gday/",
        skills: ["Poster Design", "Web Design", "Wix", "SEO", "Marketing"]
    },
    {
        title: "Personal Website",
        image: "images/mainbg.JPG",
        alt: "Ziwen Zhou's Personal Website and Portfolio",
        description: "Ziwen Zhou's Personal Website and Portfolio (Current website). A Sydney-based full-stack developer and designer combining technical experience with musical and cinematic storytelling.",
        projectLink: "https://ziwenzhou.com/",
        codeLink: "https://github.com/zzwzzwzz/PersonalWebsite",
        skills: ["HTML", "Tailwind CSS", "JavaScript", "Responsive Design", "Cloudflare", "Web Design"]
    },
    {
        title: "Mind Capsule",
        image: "images/MindCapsule.png",
        alt: "MindCapsule",
        description: "MindCapsule is a Full-Stack Hackathon (UNIHACK 2025) project, designed to help individuals better understand and manage their emotions, using principles from Cognitive Behavioral Therapy (CBT). Name was inspired by Time Capsule.",
        projectLink: "https://mindcapsule-sirius.vercel.app/",
        caseStudyLink: "https://devpost.com/software/sirius-gqlych",
        codeLink: "https://github.com/zzwzzwzz/MindCapsule",
        skills: ["HTML", "Tailwind CSS", "Node.js", "JavaScript", "MongoDB", "Vercel", "Rapid Prototyping"]
    },
    {
        title: "Be There",
        image: "images/BeThere.png",
        alt: "BeThere",
        description: "BeThere is an iOS app built with Swift by our team BlueOPERAT via Apple Foundation Program @UTS, it connects Working Holiday Visa (WHV) holders in Australia in small groups of 6 to foster real-world meetups, using playful AI (A Rat Bot) to spark conversations and ensure active engagement.",
        codeLink: "https://github.com/zzwzzwzz/BeThere",
        skills: ["Swift", "iOS Development", "Design Thinking", "Rapid Prototyping"]
    }
];

// Generate project cards
function generateProjectCards() {
    const container = document.getElementById('project-container');
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all';
        
        // Links section
        let links = '';
        if (project.projectLink) {
            links += `<a href="${project.projectLink}" class="social-icon hover:text-yellow-600 transition-colors" aria-label="View project">
                        <i class="fas fa-external-link-alt"></i>
                      </a>`;
        }
        if (project.codeLink) {
            links += `<a href="${project.codeLink}" class="social-icon hover:text-yellow-600 transition-colors" aria-label="View code on GitHub">
                        <i class="fab fa-github"></i>
                      </a>`;
        }
        if (project.donateLink) {
            links += `<a href="${project.donateLink}" class="social-icon hover:text-yellow-600 transition-colors" aria-label="Donate and Support">
                        <i class="fa-solid fa-hand-holding-heart"></i>
                      </a>`;
        }
        
        // Skills section
        let skills = '';
        project.skills.forEach(skill => {
            skills += `<span class="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm">${skill}</span>`;
        });
        
        // Generate card HTML
        card.innerHTML = `
            <div class="group relative h-52 rounded-lg mb-4 overflow-hidden transition-all duration-300 project-image">
                <img 
                    src="${project.image}" 
                    alt="${project.alt}"
                    class="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                >
                <a href="${project.caseStudyLink || project.projectLink || '#'}" 
                   class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span class="text-white font-medium">${project.caseStudyLink ? 'View Case Study →' : 'View →'}</span>
                </a>
            </div>
            
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-semibold">${project.title}</h3>
                <div class="flex gap-3 text-slate-500">
                    ${links}
                </div>
            </div>
            <p class="text-slate-600 mb-4">${project.description}</p>
            <div class="flex flex-wrap gap-2">
                ${skills}
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Call the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', generateProjectCards);
// Less reduncdant code for the project cards over