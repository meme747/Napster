document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('tokenomicsChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Community', 'Marketing', 'Development', 'Liquidity'],
            datasets: [{
                data: [40, 20, 20, 20],
                backgroundColor: [
                    '#FF6B6B',     // Community
                    '#4ECDC4',     // Marketing
                    '#45B7D1',     // Development
                    '#FDCB6E'      // Liquidity
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                title: {
                    display: true,
                    text: 'MEME COIN TOKENOMICS',
                    font: {
                        size: 16
                    }
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                }
            },
            layout: {
                padding: 10
            }
        }
    });

    // Playful animations
    gsap.from('.hero-content', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.hero-image', {
        opacity: 0,
        x: 100,
        duration: 1,
        ease: 'power3.out'
    });

    // Add beautiful staggered animation for token icons
    gsap.from('.token-icon', {
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Add animation for the new meme coon image
    gsap.from('.animated-meme-coon', {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        ease: 'back.out(1.7)'
    });
});