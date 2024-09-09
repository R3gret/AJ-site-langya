document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelectorAll('.description').forEach(desc => desc.style.display = 'none');      
        const descriptionDiv = this.nextElementSibling;
        if (descriptionDiv.style.display === 'block') {
            descriptionDiv.style.display = 'none';
        } else {
            descriptionDiv.style.display = 'block';
            descriptionDiv.textContent = this.dataset.description;
        }
    });
});
