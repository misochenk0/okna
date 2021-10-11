const profileView = () => {
    const profileItem = document.querySelectorAll(".profile-item")
    if(profileItem[0]) {
        const itemInfo = document.querySelectorAll('.profile-item__more')
        profileItem.forEach(item => {
            item.addEventListener('click', (e) => {
                for(let i = 0; i < itemInfo.length; i++) {
                    if(itemInfo[i].classList[1] === item.classList[1]) {
                        
                        if(item.classList.contains("active-item")) {
                            item.classList.remove("active-item")
                            itemInfo.forEach(item => item.style.display = 'none')
                        } else  {
                            itemInfo.forEach(item => item.style.display = 'none')
                            itemInfo[i].style.display = 'flex';
                            profileItem.forEach(item => {item.classList.remove('active-item')})
                            item.classList.add("active-item")

                        }
                    }
                }
            })
        })
    }
}

export default profileView