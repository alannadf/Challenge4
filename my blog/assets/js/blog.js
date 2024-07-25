document.getElementById('backButton').addEventListener('click', function() {
    window.location.href = 'index.html';
})

const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
const postsContainer = document.getElementById('postsContainer');

blogPosts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('blog-post');

    
})

