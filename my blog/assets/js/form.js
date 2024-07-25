document.getElementById('blogForm').addEventListener('submit',function(event){
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    console.log('Username:', username);
    console.log('Title:', title);
    console.log('Content:', content);

    if (!username || !title || !content) {
        alert('Please complete all fields.');
        return;
    }

    const blogPost = {username, title, content};

    let blogPosts= JSON.parse(localStorage.getItem('blogPosts')) || [];
    blogPosts.push(blogPost);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

    window.location.href = 'blog.html';
})