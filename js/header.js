document.addEventListener("DOMContentLoaded", () => {
    const headerHTML = `
        <header>
            <div id="topHeader">
                <img src="media/OurJoy.png" alt="OurJoy">
            </div>
            <div id="bottomHeader">
                <label>Home</label>
                <label>Story</label>
                <label>Monsters</label>
            </div>
        </header>
    `;

    document.body.insertAdjacentHTML("afterbegin", headerHTML);
});
