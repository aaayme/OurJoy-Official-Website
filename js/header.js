document.addEventListener("DOMContentLoaded", () => {
    const headerHTML = `
        <header>
            <div id="topHeader">
                <img src="media/OurJoy.png" alt="OurJoy">
            </div>
            <div id="bottomHeader">
                <label> <a href="index.html">Home</a></label>
                <label>Story</label>
                <label><a href="details.html">Details</a></label>
                <label>  <a href="monsters.html">Monsters </a></label>
                <label>Logs</label>
            </div>
        </header>
    `;

    document.body.insertAdjacentHTML("afterbegin", headerHTML);
});
