function toggle() {


    const hiddenBtn = document.querySelector('.close') 
    const hiddenDiv = document.querySelector('#extra')
    const showBtn = document.querySelector('.hamburger') 
    const showDiv =  document.querySelector('.container')

    if (hiddenBtn.style.display === 'block') {
        hiddenBtn.style.display = 'none'
        hiddenDiv.style.display = 'none'

        showBtn.style.display = 'block'
        showDiv.style.display = 'block'
       

    } else {
        hiddenBtn.style.display = 'block'
        hiddenDiv.style.display = 'block'

        showBtn.style.display = 'none'
        showDiv.style.display = 'none'

    }


}


