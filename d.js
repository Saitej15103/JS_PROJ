let song = []


song = result


song = [{
    title: "babhnbai",
    img: "b.jpg",
    song: "../Music/Godari Gattu.mp3.crdownload"
}, {
    title: "babhnbai",
    img: "b.jpg",
    song: "link"
}, {
    title: "babhnbai",
    img: "b.jpg",
    song: "link"
}, {
    title: "babhnbai",
    img: "b.jpg",
    song: "link"
}, {
    title: "babhnbai",
    img: "b.jpg",
    song: "link"
}, {
    title: "babhnbai",
    img: "b.jpg",
    song: "link"
}, {
    title: "babhnbai",
    img: "b.jpg",
    song: "link"
}]
let cont = document.getElementById("cont")
song.forEach((val) => {
    let card = document.createElement("div")
    card.innerHTML = `<img src= ${val.img} />`

    cont.appendChild(card)
})