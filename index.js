function currentTime() {
    const date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return (`${hours}:${minutes}:${seconds}`);

}



let clockRenderSection = document.getElementById("clock-render");

clockRenderSection.innerHTML = currentTime();