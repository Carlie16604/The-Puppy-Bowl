const puppySelect = document.querySelector(".puppySelect");
const imgRef = document.querySelector(".imgRef");
const newPage = document.querySelector(".newPage");
const button = document.querySelector(".button");

let puppies;

const puppyIndex = async() => {
    const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2307-FTB-ET-WEB-FT/players");
    const results = await response.json();
    puppies = results.data.players;
    render();
};
const render = () => {
    const hash = window.location.hash.slice(1)*1;
    const puppyMap = puppies.map((puppy) => { 
        if(hash !== puppy.id) {
            return `
                <a href='#${puppy.id !== hash ? puppy.id : ''}' class='${puppy.id === hash ? 'selected' : ''}'>
                ${puppy.name}
                </a>
                <p>
                ${puppy.breed}
                </p>
                `;
        }else {
            return `
            <a href='#${puppy.id !== hash ? puppy.id : ''}' class='${puppy.id === hash ? 'selected' : ''}'>
            <h3> ${puppy.name} </h3>
            </a>
            <h3> ${puppy.breed} </h3>
            <a class="imgRef" href='${puppy.imageUrl}'>
                <img width="200" height="200" src='${puppy.imageUrl}'>
            </a>
            <br/>`
        }
    }).join('') 
    puppySelect.innerHTML = puppyMap;
    
    const puppyImg = puppies.find(puppy => {
        return puppy.id === hash;
    });
    /*let detailHtml = ''; //I want this to open a new page with the dogs name, breed, and photo
    if(puppyImg){
        detailHtml = `
        `;
    }*/
    //imgRef.innerHTML = detailHtml;
    
};

window.addEventListener('hashchange', () => {
    render();
})
puppyIndex();

function stinkyPooPoo() {

}

/*`
        <p>
        <a href=#'${puppy.imageUrl}'>
        ${puppy.name}<br/>
        </a>
        ${puppy.breed}
        </p>

        <a href='#${puppy.id !== hash ? puppy.id : ''}' class='${puppy.id === hash ? 'selected' : ''}'>
        `;*/


