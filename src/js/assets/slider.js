const pureSlider = (slidesTag, type, style, items, noTouch, height, autoPlaytime) => {
    
    const pure = document.querySelectorAll(slidesTag);
    if(pure) {
        if(style ==='classic') {
            pure.forEach(slider => {

                const btnNext = slider.nextElementSibling.children[0],
                      btnPrev = slider.nextElementSibling.children[2];
                
                if(type === 'dots') {
                    
                    for(let i = 0;  i<slider.children.length; i++) {
        
                        let dot = document.createElement('div');
                        dot.setAttribute('class', 'dot');
                        slider.nextElementSibling.nextElementSibling.appendChild(dot);
                        dot.setAttribute('data-slide-to', i + 1);
                    }
                    slider.parentElement.querySelector('.dot').classList.add('dot_active');
                    window.addEventListener('resize', () => {
                        const dots = slider.parentElement.querySelectorAll('.dot');
                        if(dots) {
                            dots.forEach(dot => dot.remove());
                        }
                        for(let i = 0;  i<slider.children.length; i++) {
        
                            let dot = document.createElement('div');
                            dot.setAttribute('class', 'dot');
                            slider.nextElementSibling.nextElementSibling.appendChild(dot);
                            dot.setAttribute('data-slide-to', i + 1);
                        }
                        slider.parentElement.querySelector('.dot').classList.add('dot_active');
                    })
                    
                }
        
                if(type === 'imgs') {
                    for(let i = 0;  i<slider.children.length; i++) {
        
                        let img = document.createElement('div');
                        img.setAttribute('class', 'product-imgs-mini__block');
                        let picture = document.createElement('img');
                        picture.setAttribute('src', slider.children[i].children[0].src);
        
        
                        slider.parentElement.nextElementSibling.appendChild(img);
                        img.appendChild(picture);
                        picture.setAttribute('data-slide-to', i + 1);
        
        
                    }
                    slider.parentElement.parentElement.querySelector('.product-imgs-mini__block').classList.add('active');
                }
                
                if(type == 'multiple') {
                    
                    function createMultipleDots() {
                        for(let i = 0; i < (slider.children[0].clientWidth * slider.children.length) / slider.clientWidth; i++) {
                            let dot = document.createElement('div');
                            if(items =='items') {
                                dot.setAttribute('class', 'dot');
                                slider.nextElementSibling.children[1].appendChild(dot);
                                
                            } else {
                                dot.setAttribute('class', 'reviews-dots__dot');
                                slider.nextElementSibling.nextElementSibling.appendChild(dot);
                            }
                            
                            dot.setAttribute('data-slide-to', i + 1);
        
                        }
                        if(items =='items') {
                            slider.parentElement.querySelector('.dot').classList.add('dot_active');
                        } else {
                            slider.parentElement.querySelector('.reviews-dots__dot').classList.add('active');
                        }
                    }
                    // createMultipleDots()
                    
                    window.addEventListener('resize', () => {
                        let dots = slider.parentElement.querySelectorAll('.dot');
                        let reviewDots = slider.parentElement.querySelectorAll('.reviews-dots__dot');
    
                        if(dots || reviewDots) {
                            if(dots) {
                                dots.forEach(i => i.remove())
                            }
                            if(reviewDots) {
                                reviewDots.forEach(i => i.remove())
                            }
                            // createMultipleDots()
                        }
    
                    })
                    
                }
                if(height == true) {
                    window.addEventListener('resize', () => {

                        if(document.documentElement.clientWidth > 576) {
                            slider.style.pointerEvents = 'none';
                        } else {
                            slider.style.pointerEvents = 'unset';

                        }
                    })
                    
                }
                let viewport = slider.parentElement.offsetWidth,
        
                viewSlide = 0,
                posx = 0;
        
                window.addEventListener('resize', () => {
                    updateViewport();
                });
        
                function updateViewport() {
                    viewport = slider.parentElement.offsetWidth;
                    slider.style.transform= `translateX(0px)`;
                    
    
                    return viewport
                }
        
                slider.style.transform = '.translateX(0)';
                var dots = slider.parentElement.querySelectorAll('.dot'),
                    multipleDots = slider.parentElement.querySelectorAll('.reviews-dots__dot');
                window.addEventListener('resize', () => {
                    return dots = slider.parentElement.querySelectorAll('.dot'),
                    multipleDots = slider.parentElement.querySelectorAll('.reviews-dots__dot');
    
                })
                let dashes = slider.parentElement.parentElement.querySelectorAll('.i');
                let imgs = slider.parentElement.parentElement.querySelectorAll('.product-imgs-mini__block');
                 
                
        
                function prevSlide() {
                    if (viewSlide < slider.children.length - 1 && !(type == "multiple")) {
                        viewSlide++;    
        
                    } else if (type == "multiple" && viewSlide < Math.floor(slider.children[0].clientWidth * slider.children.length) / slider.clientWidth - 1) {
                        viewSlide++;
                    } else { 
                        viewSlide = 0;
                    }
                    
                    if (type === 'dots') {
                        dots.forEach(dot => dot.classList.remove('dot_active'));
                        dots[viewSlide].classList.add('dot_active');
                        slider.style.transform = `translateX(${-viewSlide * viewport}px)`;
                    }
                    if (type === 'i') {
                        dashes.forEach(dash => dash.classList.remove('active'))
                        dashes[viewSlide].classList.add('active');
                        slider.style.transform = `translateX(${-viewSlide * viewport}px)`;
                    }
                    if (type === 'imgs') {
                        imgs.forEach(img => img.classList.remove('active'))
                        imgs[viewSlide].classList.add('active');
                        slider.style.transform = `translateX(${-viewSlide * viewport}px)`;
                    }
                    if (type === 'multiple') {
                        
                        if(items ==='items') {
                            dots.forEach(dot => dot.classList.remove('dot_active'))
                            dots[viewSlide].classList.add('dot_active');
                            slider.style.transform = `translateX(${-viewSlide * viewport}px)`;
                        } else {
                            // multipleDots.forEach(dot => dot.classList.remove('active'))
                            // multipleDots[viewSlide].classList.add('active');
                            slider.style.transform = `translateX(${-viewSlide * viewport}px)`;
                        }
                    }
        
                }
                function nextSlide() {
                    if (viewSlide > 0) {
                        viewSlide--; 
                    } else if(type == 'multiple') {
                        viewSlide = Math.floor((slider.children[0].clientWidth * slider.children.length) / slider.clientWidth);
                        
                    } else {
                        viewSlide = slider.children.length - 1; 
                    }
                    
                    if (type === 'dots') {
                        dots.forEach(dot => dot.classList.remove('dot_active'));
                        dots[viewSlide].classList.add('dot_active');
                        slider.style.transform = `translateX(${-viewSlide * viewport}px)`;
                    }
                    if (type === 'i') {
                        dashes.forEach(dash => dash.classList.remove('active'))
                        dashes[viewSlide].classList.add('active');
                        slider.style.transform = `translateX(${-viewSlide * viewport}px)`;
                    }
                    if (type === 'imgs') {
                        imgs.forEach(img => img.classList.remove('active'))
                        imgs[viewSlide].classList.add('active');
                        slider.style.transform = `translateX(${-viewSlide * viewport}px)`;
                    }
                    if (type === 'multiple') {
                        
                        if(items ==='items') {
                            dots.forEach(dot => dot.classList.remove('dot_active'))
                            dots[viewSlide].classList.add('dot_active');
                            slider.style.transform = `translateX(${-viewSlide * viewport}px)`;
                        } else {
                            // multipleDots.forEach(dot => dot.classList.remove('active'))
                            // multipleDots[viewSlide].classList.add('active');
                            slider.style.transform = `translateX(${-viewSlide * viewport}px)`;
                        }
                    }
        
                }
                function currentSlide() {
                    slider.style.transform= `translateX(${-viewSlide * viewport}px)`;
                }
        
                if(btnNext && btnPrev) {
                    btnNext.addEventListener("click", nextSlide);
                    btnPrev.addEventListener("click", prevSlide);
                }
                
        
        
        
                if(type ==='dots') {
                    function addListener() {
                        dots.forEach(dot => {
                            dot.addEventListener('click', (e) => {
                                const slideTo = e.target.getAttribute('data-slide-to');
                
                                viewSlide = slideTo - 1;
                                slider.style.transform = `translateX(${-viewSlide * viewport}px)`;
                
                                dots.forEach(dot => dot.classList.remove('dot_active'));
            
                                dots[viewSlide].classList.add('dot_active');
                                
                            });
                        }); 
                    }
                    addListener()
                    window.addEventListener('resize', () => {
                        addListener()
    
                    })   
                }
                if(type ==='i') {
                    dashes.forEach(dash => {
                        dash.addEventListener('click', (e) => {
                            const slideTo = e.target.getAttribute('data-slide-to');
            
                            viewSlide = slideTo - 1;
                            slider.style.transform = `translateX(${-viewSlide * viewport}px)`;
            
                            dashes.forEach(dash => dash.classList.remove('active'));
        
                            dashes[viewSlide].classList.add('active');
            
            
                        });
                    });    
                }
                if(type ==='imgs') {
                    imgs.forEach(img => {
                        img.addEventListener('click', (e) => {
                            const slideTo = e.target.getAttribute('data-slide-to');
                            viewSlide = slideTo - 1;
                            slider.style.transform = `translateX(${-viewSlide * viewport}px)`;
                            imgs.forEach(img => img.classList.remove('active'));
                            imgs[viewSlide].classList.add('active');
                        });
                    });    
                }
                if(type ==='multiple') {
                    function addListener() {
                        if(items ==='items') {
                            dots.forEach(dot => {
                                dot.addEventListener('click', (e) => {
                                    const slideTo = e.target.getAttribute('data-slide-to');
                    
                                    viewSlide = slideTo - 1;
                                    slider.style.transform = `translateX(${-viewSlide * viewport}px)`;
                    
                                    dots.forEach(dot => dot.classList.remove('dot_active'));
                
                                    dots[viewSlide].classList.add('dot_active');
                    
                    
                                });
                            })
                        } else {
                            // multipleDots.forEach(dot => {
                            //     dot.addEventListener('click', (e) => {
                            //         const slideTo = e.target.getAttribute('data-slide-to');
                    
                            //         viewSlide = slideTo - 1;
                            //         slider.style.transform = `translateX(${-viewSlide * viewport}px)`;
                    
                            //         multipleDots.forEach(dot => dot.classList.remove('active'));
                
                            //         multipleDots[viewSlide].classList.add('active');
                    
                    
                            //     });
                            // });
                        }
                    }
                    addListener()
                    window.addEventListener('resize', () => {
                        addListener()
                    })
                        
                }
                function mouseDown(e) {
                    if(e.identifier === 0) {
                        posx = e.clientX;
                        slider.style.transition = '.9s all';
                        return posx
                    } else {
                        e.preventDefault();
                        posx = e.clientX;
                        slider.style.transition = '.9s all';
                        return posx
                    }
                    
                }
        
                function mouseUp(e) {
                if (e.clientX - posx < - viewport * 0.2) {
                    slider.style.transition = '0.9s';
                    prevSlide();
                } else {
                    slider.style.transition = '0.9s';
                    currentSlide();
                }
                posx = 0;
                }
        
                function moving(e) {
                function leaving() {
                    slider.style.transition = '0.9s';
                    currentSlide();
                    posx = 0;
                }
                slider.addEventListener('mouseleave', () => {
                    leaving();
                })
                if (posx > 0) {
                    slider.style.transition = '0s';
                    slider.style.transform = `translateX(${-viewSlide * viewport -posx + e.clientX}px`;
                    if (-posx + e.clientX < - viewport * 0.3) {
                        slider.style.transition = '0.9s';
                        prevSlide();
                        posx = 0;
                    } else if (e.clientX - posx > viewport * 0.3) {
                        slider.style.transition = '0.9s';
                        nextSlide();
                        posx = 0;
                    }                
                } else if (posx == 0) {
                    slider.removeEventListener('mousemove', moving);
                    slider.removeEventListener('touchmove', moving);
                } 
                }  
        
                if(!noTouch) {
                    slider.addEventListener('touchstart', (e) =>{
                        posx = e.touches[0].clientX;
                        slider.style.transition = '.9s all';
                        return posx
                    }, {passive: true})
                    slider.addEventListener('touchmove', e =>{
                        moving(e.touches[0]);
                    }, {passive: true})
                    slider.addEventListener('touchend', e => {
                        mouseUp(e);
                    })
            
                    slider.addEventListener(`mousedown`, (e) => {
                        mouseDown(e);
                    })
                    slider.addEventListener('mouseup', (e) => {
                        mouseUp(e);
                    })
                    slider.addEventListener('mousemove', (e) => {
                        moving(e);
                    })
                }
                if(autoPlaytime) {
                    var paused = false;
                    function activateAnimation() {
                        paused = setInterval(function() {
                            prevSlide();
                        }, autoPlaytime);
                    }
                    activateAnimation();
                    slider.parentElement.addEventListener('mouseenter', () => {
                        clearInterval(paused);
                    })
                
                    slider.parentElement.addEventListener('mouseleave', () => {
                        activateAnimation();
                    })
                }
                
            })
        } else if(style === 'opacity') {
            pure.forEach(slider => {
                if(type === 'imgs') {
                    let viewSlide = 0;

                    for(let i = 0;  i<slider.children.length; i++) {
                        let img = document.createElement('div');
                        img.setAttribute('class', 'product-imgs__mini-item');
                        let picture = document.createElement('img');
                        picture.setAttribute('src', slider.children[i].src);
                        slider.parentElement.previousElementSibling.appendChild(img);
                        img.appendChild(picture);
                        img.setAttribute('data-slide-to', i + 1);        
                    }
                    slider.parentElement.parentElement.querySelector('.product-imgs__mini-item').classList.add('active');


                    let imgs = slider.parentElement.parentElement.querySelectorAll('.product-imgs__mini-item');
                
                    imgs.forEach(img => img.classList.remove('active'))
                    imgs[viewSlide].classList.add('active');
                    slider.children.forEach(item => {
                        item.classList.remove('active-slide');
                    })
                    slider.children[viewSlide].classList.add('active-slide');


                    imgs.forEach(img => {
                        img.addEventListener('click', (e) => {
                            console.log(e.target)
                            const slideTo = e.target.getAttribute('data-slide-to');
                            viewSlide = slideTo - 1;
                            slider.children.forEach(item => {
                                item.classList.remove('active-slide');
                            })
                            console.log(viewSlide)
                            slider.children[viewSlide].classList.add('active-slide');
                            imgs.forEach(img => img.classList.remove('active'));
                            imgs[viewSlide].classList.add('active');
                        });
                    });
                }
                if(type === 'dots') {
                    
                    for(let i = 0;  i<slider.children.length; i++) {
        
                        let dot = document.createElement('div');
                        dot.setAttribute('class', 'dot');
                        slider.nextElementSibling.appendChild(dot);
                        dot.setAttribute('data-slide-to', i + 1);
                    }
                    slider.parentElement.querySelector('.dot').classList.add('dot_active');
                    let viewSlide = 0,
                        viewport = slider.parentElement.offsetWidth,
                        posx =0,
                        paused = false;
                    function prevSlide() {
                        if (viewSlide > 0) {
                            viewSlide--; 
                        } else {
                            viewSlide = slider.children.length - 1; 
                        }
                        
                        if (type === 'dots') {
                            dots.forEach(dot => dot.classList.remove('dot_active'));
                            dots[viewSlide].classList.add('dot_active');
                            slider.children.forEach(item => item.classList.add('disabled'));
                            slider.children[viewSlide].classList.remove('disabled');
                            ;
                        }
                    }
                    function nextSlide() {
                        if (viewSlide < slider.children.length) {
                            viewSlide++;    
            
                        } else { 
                            viewSlide = 0;
                        }
                        
                        if (type === 'dots') {
                            dots.forEach(dot => dot.classList.remove('dot_active'));
                            if(dots[viewSlide]) {
                                dots[viewSlide].classList.add('dot_active');
                            } else {
                                dots[0].classList.add('dot_active')
                            }
                            
                            slider.children.forEach(item => item.classList.add('disabled'));
                            if(slider.children[viewSlide]) {
                                slider.children[viewSlide].classList.remove('disabled');
                            } else {
                                slider.children[0].classList.remove('disabled');
                            }
                            
                        }
                    }
                    var dots = slider.parentElement.querySelectorAll('.dot');
                    if(type ==='dots') {
                        function addListener() {
                            dots.forEach(dot => {
                                dot.addEventListener('click', (e) => {
                                    const slideTo = e.target.getAttribute('data-slide-to');
                    
                                    viewSlide = slideTo - 1;
                                    slider.children.forEach(item => item.classList.add('disabled'));
                                    slider.children[viewSlide].classList.remove('disabled');
                                    dots.forEach(dot => dot.classList.remove('dot_active'));
                                    dots[viewSlide].classList.add('dot_active');
                                    
                                });
                            }); 
                        }
                        addListener()
                        window.addEventListener('resize', () => {
                            addListener()
        
                        })   
                    }
                    function mouseDown(e) {
                        if(e.identifier === 0) {
                            posx = e.clientX;
                            slider.style.transition = '.9s all';
                            return posx
                        } else {
                            e.preventDefault();
                            posx = e.clientX;
                            slider.style.transition = '.9s all';
                            return posx
                        }
                    }
            
                    function mouseUp(e) {
                    if (e.clientX - posx < - viewport * 0.2) {
                        slider.style.transition = '0.9s';
                    } else {
                        slider.style.transition = '0.9s';
                    }
                    posx = 0;
                    }
            
                    function moving(e) {
                        function leaving() {
                            slider.style.transition = '0.9s';
                            posx = 0;
                        }
                        slider.addEventListener('mouseleave', () => {
                            leaving();
                    })
                    if (posx > 0) {
                        slider.style.transition = '0s';
                        if (-posx + e.clientX < - viewport * 0.3) {
                            slider.style.transition = '0.9s';
                            nextSlide();
                            posx = 0;
                        } else if (e.clientX - posx > viewport * 0.3) {
                            slider.style.transition = '0.9s';
                            prevSlide();
                            posx = 0;
                        }                
                    } else if (posx == 0) {
                        slider.removeEventListener('mousemove', moving);
                        slider.removeEventListener('touchmove', moving);
                    } 
                    }  
            
                    if(!noTouch) {
                        slider.addEventListener('touchstart', (e) =>{
                            posx = e.touches[0].clientX;
                            slider.style.transition = '.9s all';
                            return posx
                        }, {passive: true})
                        slider.addEventListener('touchmove', e =>{
                            moving(e.touches[0]);
                        }, {passive: true})
                        slider.addEventListener('touchend', e => {
                            mouseUp(e);
                        })
                
                        slider.addEventListener(`mousedown`, (e) => {
                            mouseDown(e);
                        })
                        slider.addEventListener('mouseup', (e) => {
                            mouseUp(e);
                        })
                        slider.addEventListener('mousemove', (e) => {
                            moving(e);
                        })
                    }
                    function activateAnimation() {
                        paused = setInterval(function() {
                            nextSlide();
                        }, 3000);
                    }
                    activateAnimation();
                    slider.parentElement.addEventListener('mouseenter', () => {
                        clearInterval(paused);
                    })
                
                    slider.parentElement.addEventListener('mouseleave', () => {
                        activateAnimation();
                    })

                }
            })
           
        }
        

        
    }  
}

export default pureSlider;