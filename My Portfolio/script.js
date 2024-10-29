document.querySelectorAll('.read-more').forEach(function(button) {
    button.addEventListener('click', function() {
        const moreText = this.previousElementSibling;
        const dots = this.previousElementSibling.previousElementSibling;
        const project = this.closest('.project');
        const allProjects = document.querySelectorAll('.project');

        if (moreText.style.display === 'none' || moreText.style.display === '') {
            moreText.style.display = 'inline';
            dots.style.display = 'none';
            allProjects.forEach(proj => proj.classList.add('hide'));
            project.classList.add('expanded-project');
            this.textContent = 'Read less';
        } else {
            moreText.style.display = 'none';
            dots.style.display = 'inline';
            allProjects.forEach(proj => proj.classList.remove('hide'));
            project.classList.remove('expanded-project');
            this.textContent = 'Read more';
        }
    });
});