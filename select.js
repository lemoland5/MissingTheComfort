console.log("im loaded");

const img = document.getElementById("albumPreview")
const albumList = document.querySelectorAll(".albumMarker")

img.onload = () => {
    img.classList.remove("hiddenOpacity")
    console.log(element.classList);
}


const IMAGE_FORMAT = ".png"
const IMAGE_DIRECTORY = "./img/covers-irl/"

let currentSelection = ""

function parseCoverPath(name) {
    return IMAGE_DIRECTORY + name + IMAGE_FORMAT;
}


// albumList.forEach(element => {
//     console.log(parseCoverPath(element.dataset.cover));
// });

albumList.forEach(element => {
    element.addEventListener("click", () => {

        if(currentSelection == parseCoverPath(element.dataset.cover)){
            return 
        }

        currentSelection = parseCoverPath(element.dataset.cover)

        albumList.forEach(elem => {
            elem.classList.remove("textWhite")
            elem.classList.add("textGray")
        });

        element.classList.remove("textGray")
        element.classList.add("textWhite")
        
        

        img.classList.add("hiddenOpacity")
        console.log(element.classList);

        setTimeout(()=> {
            img.src = currentSelection


        }, 150)


    })
});

console.log(parseCoverPath(albumList[0].dataset.cover));
