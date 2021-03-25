function currentTime() {
    const date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return (`${hours}:${minutes}:${seconds}`);
}


console.log(currentTime());