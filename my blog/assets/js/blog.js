document.getElementById('backButton').addEventListener('click', function() {
    window.location.href = 'index.html';
})

const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
const postsContainer = document.getElementById('postsContainer');

blogPosts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('blog-post');

    postElement.innerHTML = `
         <h2>${post.title}</h2>
        <p>${post.content}</p>
        <p><em>Posted by ${post.username}</em></p>
    `;
    postsContainer.appendChild(postElement);
})

