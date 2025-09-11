
function validateCode(event) {
    event.preventDefault();
    const code = document.getElementById('code').value;
    const validCode = "20225";

    if (code === validCode) {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'https://drive.google.com/drive/folders/1IkbndsWUmoZOOvdfYAmrrCUGEYCiuGIF';
    } else {
        alert('كود غير صحيح');
    }
    return false;
}


