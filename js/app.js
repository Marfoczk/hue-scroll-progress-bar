let progress = document.querySelector('.bar');
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = () => {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
    if (progress.style.height < (10+"%")) {
        progress.style.height = `10%`;
    }
}
