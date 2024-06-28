document.addEventListener('DOMContentLoaded', function() {
    const bars = document.querySelectorAll('.bar');
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                entry.target.classList.remove('out-view');
            } else {
                entry.target.classList.remove('in-view');
                entry.target.classList.add('out-view');
            }
        });
    }, observerOptions);

    bars.forEach(bar => {
        observer.observe(bar);
    });
});