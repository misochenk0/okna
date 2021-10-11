const popup = () => {
    const orderCallBtn = document.querySelectorAll(".order__call");
    const popup = document.querySelector(".overflow");
    if(orderCallBtn[0]) {
        orderCallBtn.forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.preventDefault()
                popup.classList.add("overflow_active");
                document.body.style.overflow ="hidden";
            })
        })
        const closeBtn = popup.querySelector(".popup__close")
        function closeModal() {
            popup.classList.remove("overflow_active");
            document.body.style.overflow ="visible";
        }
        closeBtn.addEventListener("click", (e) => {
            e.preventDefault()
            closeModal()})
        document.addEventListener("keydown", e => {
            if(e.key === "Escape") {
                closeModal();
            }
        })
        document.addEventListener("click", e => {
            e.stopPropagation();
            if(e.target === popup) {
                closeModal()
            }
        })
    }
}
export default popup;