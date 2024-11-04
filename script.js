document.addEventListener('DOMContentLoaded', () => {
    const featuredImage = document.getElementById('featured');
    const figcaption = document.querySelector('figcaption');
    const thumbnails = document.querySelectorAll('#thumbnails img');

    // Function to update the featured image
    function updateFeaturedImage(newSrc, caption) {
        featuredImage.src = newSrc;
        figcaption.textContent = caption;
        
        thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));
    }

    // Add event listener to each thumbnail
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const largeImageSrc = thumbnail.getAttribute('data-large');
            const caption = thumbnail.getAttribute('data-caption');

            updateFeaturedImage(largeImageSrc, caption);

            // Set active class to the clicked thumbnail
            thumbnail.classList.add('active');
        });
    });

    // Set the first thumbnail as active by default
    thumbnails[0].classList.add('active');
});
