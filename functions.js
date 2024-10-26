document.addEventListener('DOMContentLoaded', () => {
    const bars = document.querySelectorAll('.bar');
    
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
    }, { threshold: 0.1 });
    
    bars.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const collegeUniElements = document.querySelectorAll('.campus .college-uni');
    
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
    }, { threshold: 0.1 });
    
    collegeUniElements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const timelineElements = document.querySelectorAll('.timeline .timeline-content');
    
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
    }, { threshold: 0.1 });
    
    timelineElements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const timelineElements = document.querySelectorAll('.myeducation');
    
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
    }, { threshold: 0.1 });
    
    timelineElements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const timelineElements = document.querySelectorAll('.mylanguages');
    
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
    }, { threshold: 0.1 });
    
    timelineElements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const timelineElements = document.querySelectorAll('.mylanguage .title');
    
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
    }, { threshold: 0.1 });
    
    timelineElements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const timelineElements = document.querySelectorAll('.timeline .title');
    
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
    }, { threshold: 0.1 });
    
    timelineElements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const timelineElements = document.querySelectorAll('.webapps');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, { threshold: 0.01 });
    
    timelineElements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const timelineElements = document.querySelectorAll('.mobapps');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, { threshold: 0.01 });
    
    timelineElements.forEach(element => {
        observer.observe(element);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const timelineElements = document.querySelectorAll('.projects');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, { threshold: 0.01 });
    
    timelineElements.forEach(element => {
        observer.observe(element);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const timelineElements = document.querySelectorAll('.projects2');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, { threshold: 0.01 });
    
    timelineElements.forEach(element => {
        observer.observe(element);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const timelineElements = document.querySelectorAll('.projects3');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, { threshold: 0.01 });
    
    timelineElements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const timelineElements = document.querySelectorAll('.schoolproj');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, { threshold: 0.01 });
    
    timelineElements.forEach(element => {
        observer.observe(element);
    });
});