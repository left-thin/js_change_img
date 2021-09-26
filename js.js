function changeImg(id) {

    
    var j  = document.getElementById(id).getAttribute('src')

    document.getElementById('img-main').setAttribute('src',j)
}