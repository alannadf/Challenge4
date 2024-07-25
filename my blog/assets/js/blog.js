document.getElementById('backButton').addEventListener('click', function() {
    window.location.href = 'index.html';
})

const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
const postsContainer = document.getElementById('postsContainer');

