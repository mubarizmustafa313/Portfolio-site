
        // JavaScript function to toggle the visibility of the details
        function toggleDetails(contentId, buttonElement) {
            // 1. Get the hidden content element by its ID
            var content = document.getElementById(contentId);
            
            // 2. Check the current display style
            if (content.style.display === 'none' || content.style.display === '') {
                // If hidden, show it
                content.style.display = 'block';
                // Change the button text
                buttonElement.textContent = 'Read Less';
            } else {
                // If visible, hide it
                content.style.display = 'none';
                // Change the button text back
                buttonElement.textContent = 'Read More';
            }
        }
 