document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggleBtn = document.getElementById('sidebar-toggle');
    const toggleIcon = sidebarToggleBtn.querySelector('.material-symbols-outlined');
    const navLinks = document.querySelectorAll('.nav-link');
    const pageSections = document.querySelectorAll('.page-section');
    const pageTitle = document.getElementById('page-title');

    // Sidebar Toggle
    sidebarToggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        if (sidebar.classList.contains('collapsed')) {
            toggleIcon.textContent = 'menu';
        } else {
            toggleIcon.textContent = 'menu_open';
        }
    });

    // Navigation and SPA Routing
    function navigateTo(targetId) {
        // Update active nav link
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.target === targetId) {
                link.classList.add('active');
                // Update page title
                pageTitle.textContent = link.querySelector('.nav-text').textContent;
            }
        });

        // Update active section
        pageSections.forEach(section => {
            section.classList.remove('active');
            if (section.id === targetId) {
                section.classList.add('active');
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.dataset.target;
            navigateTo(target);
            
            // On mobile, close sidebar after clicking a link
            if (window.innerWidth <= 768) {
                sidebar.classList.add('collapsed');
                toggleIcon.textContent = 'menu';
            }
        });
    });

    // Handle initial hash in URL if present
    const initialHash = window.location.hash.replace('#', '');
    if (initialHash && document.getElementById(initialHash)) {
        navigateTo(initialHash);
    }

    // Tracking Form Simulation
    const trackingBtn = document.getElementById('tracking-btn');
    const trackingInput = document.getElementById('tracking-input');
    const trackingResult = document.getElementById('tracking-result');
    const resTrackingNumber = document.getElementById('res-tracking-number');

    if (trackingBtn) {
        trackingBtn.addEventListener('click', () => {
            const val = trackingInput.value.trim();
            if (val) {
                // Simulate loading/fetching
                trackingBtn.textContent = 'Tracking...';
                trackingBtn.disabled = true;
                
                setTimeout(() => {
                    resTrackingNumber.textContent = val.toUpperCase();
                    trackingResult.classList.remove('active');
                    // Small delay to restart animation
                    setTimeout(() => {
                        trackingResult.classList.add('active');
                    }, 50);
                    
                    trackingBtn.textContent = 'Track Now';
                    trackingBtn.disabled = false;
                }, 800);
            } else {
                alert('Please enter a tracking number.');
            }
        });
    }
});
