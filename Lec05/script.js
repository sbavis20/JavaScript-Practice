
let movies=[
    {
        name:"Naruto",
        rating:8.4,
        poster:"https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
        description:"Naruto Uzumaki, a mischievous adolescent ninja, struggles as he searches for recognition and dreams of becoming the Hokage, the village's leader and strongest ninja.",

    },
    {
        name:"Haikyu!!",
        rating:8.7,
        poster:"https://play-lh.googleusercontent.com/iW97ajt1phIFhOzZf2qjmUZzsIzOYiMxipaq1enzIYGRSSWCNGamPNU_8t5iw312zta0_A",
        description:"Determined to be like the volleyball championship's star player nicknamed the small giant, Shoyo joins his school's volleyball club.",
    },
    {
        name:"Ace of Diamond",
        rating:8.1,
        poster:"https://m.media-amazon.com/images/M/MV5BMjM1ZjVlOWUtZDI4Ni00NWMxLWE4NjctYmU1NzA5Nzk5ZTE1XkEyXkFqcGdeQXVyNTc3MDU1MTU@._V1_.jpg",
        description:"Follows the life of Eijun Sawamura, a gifted baseball player who have his own extraordinary pitcher's talent. His goal is one, to become the ace of Seidou High School.",
    },
    {
        name:"That Time I Got Reincarnated As A Slime",
        rating:8.1,
        poster:"https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,fit=contain,width=1200,height=675,quality=85/catalog/crunchyroll/183aa89af7da4843887aa1b9dc67b252.jpe",
        description:"Average 37-year-old Minami Satoru dies and is reincarnated as the most unremarkable creature imaginable-a slime.",
    },
    {
        name:"Hellsing Ultimate",
        rating:8.2,
        poster:"https://m.media-amazon.com/images/M/MV5BZWRlYjYzZWMtNjQxZi00MTUyLWE2MTEtN2JlNGMwYWRhMjUzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
        description:"The vampire Alucard, his master Sir Integra Fairbrook Wingates Hellsing, and his newly sired ward Seras Victoria, try to protect England from a war-crazed SS-Major who seeks to start an eternal war with his vampire army.",
    },
    {
        name:"Bleach",
        rating:8.1,
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyAqcu1ww7DpEoNIlcPzwOGo_vX7pUL6nGJEnrIMevug&s",
        description:"High school student Ichigo Kurosaki, who has the ability to see ghosts, gains soul reaper powers from Rukia Kuchiki and sets out to save the world from Hollows.",
    },
    {
        name:"Fullmetal Alchemist: Brotherhood",
        rating:9.1,
        poster:"https://m.media-amazon.com/images/M/MV5BZmEzN2YzOTItMDI5MS00MGU4LWI1NWQtOTg5ZThhNGQwYTEzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
        description:"Two brothers search for a Philosopher's Stone after an attempt to revive their deceased mother goes awry and leaves them in damaged physical forms.",
    },
    {
        name:"Grand Blue Dreaming",
        rating:7.8,
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQjuJhExtrQ_PHJjTDHWnsYXTMDETaYnc7IPLudHX2WA&s",
        description:"A college student spends his year at the seaside town of Izu, having fun on the beach with his school friends.",
    },
    {
        name:"Welcome to Demon-School, Iruma-kun",
        rating:7.6,
        poster:"https://m.media-amazon.com/images/I/81Hy-+iKv3L._AC_UF1000,1000_QL80_.jpg",
        description:"A human child is adopted by a demon and sent to a demon school. He must find a way to survive in the dangerous but fun world he has entered.",
    },
    {
        name:"My Neighbor Totoro",
        rating:8.1,
        poster:"https://m.media-amazon.com/images/I/91vUs8FWWxL._AC_UF1000,1000_QL80_.jpg",
        description:"When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby.",
    },
    {
        name:"Paprika",
        rating:7.7,
        poster:"https://m.media-amazon.com/images/M/MV5BNDI4MGEwZDAtZDg0Yy00MjFhLTg1MjctODdmZTMyNTUyNDI3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg",
        description:"When a machine that allows therapists to enter their patients' dreams is stolen, all hell breaks loose. Only a young female therapist, Paprika, can stop it.",
    },
    {
        name:"Death Note",
        rating:8.9,
        poster:"https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
        description:"An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.",
    },
    {
        name:"Code Geass",
        rating:8.7,
        poster:"https://upload.wikimedia.org/wikipedia/en/7/74/Code_Geass_R1_box_set_cover.jpg",
        description:"After being given a mysterious power to control others, an outcast prince becomes the masked leader of the rebellion against an all-powerful empire.",
    },
    {
        name:"Steins;Gate",
        rating:8.8,
        poster:"https://m.media-amazon.com/images/M/MV5BMjUxMzE4ZDctODNjMS00MzIwLThjNDktODkwYjc5YWU0MDc0XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_FMjpg_UX1000_.jpg",
        description:"After discovering time travel, a university student and his colleagues must use their knowledge of it to stop an evil organization and their diabolical plans.",
    },
    {
        name:"The Dangers in My Heart",
        rating:8.1,
        poster:"https://m.media-amazon.com/images/M/MV5BNjhlZDRhNWQtMjU5YS00NzgxLTkwM2QtNWRhMDhhODJlZTkzXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg",
        description:"Fascinated by the macabre, Kyotaro fantasizes about acting on his twisted thoughts to the detriment of his classmates. His heart was dark until an encounter with Anna lit a spark within it in a classic tale of boy meets girl.",
    },
    {
        name:"Fruits Basket",
        rating:8.6,
        poster:"https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,fit=contain,width=480,height=720,quality=85/catalog/crunchyroll/0a34f193aa46a27cd75f5ee553834c41.jpe",
        description:"After Tohru is taken in by the Soma family, she learns that twelve family members transform involuntarily into animals of the Chinese zodiac and helps them deal with the emotional pain caused by the transformations.",
    },
    {
        name:"Solo Leveling",
        rating:8.4,
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxEXZvHhrZnrknHt2rKgGAmZZEnWt7zk7s9k4wapaJQw&s",
        description:"In a world of gifted hunters and monsters, a weak hunter Sung Jinwoo gains extraordinary powers through a mysterious program, leading him to become one of the strongest hunters and conquerin..",
    },
    {
        name:"Mashle: Magic and Muscles",
        rating:7.6,
        poster:"https://m.media-amazon.com/images/M/MV5BZDE0ZTRhMTQtMTIzNC00NjY4LTllMmEtYjY4Y2ZlZmZlODU0XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg",
        description:"Into a world of magicians is born Mash, a young boy who lacks magic but is the strongest person around. His existence and destiny will change his world.",
    },
    {
        name:"Wind Breaker",
        rating:7.7,
        poster:"https://m.media-amazon.com/images/M/MV5BNDU3OGFjZDAtNDY2Ny00YTY1LThhYzUtMmZkMDE3OWRkYTcyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
        description:"Haruka Sakura has no interest in weaklings, only the strongest fighters. Starting at Furin High, a school known for student brawlers who protect their town, Haruka seeks to battle his way to...",
    },
    {
        name:"Fighting Spirit",
        rating:8.8,
        poster:"https://m.media-amazon.com/images/M/MV5BMDMxZjFjZWYtNDdlNy00ZTQ2LWIzMWItMjQ2MTJhMWU0NDVjXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg",
        description:"Ippo, a teenage boy with a pure heart and unrelenting determination, discovers a passion for boxing after veteran fighter Takamura saves him from bullies.",
    }

]



function searchMovie(){

    let movieName = document.getElementById('search').value;

   console.log(movieName);

}

function displayMovies(){
    // let movieDIV = document.createElement("div");
    // movieDIV.classList.add('movie');

    // let overlayDIV = document.createElement("div");
    // overlayDIV.classList.add("overlay");

    // movieDIV.appendChild(overlayDIV);

    // console.log(movieDIV);


    let htmlString = ``;

for(let i=0;i<movies.length;i++){

}

    document.getElementById("movies").innerHTML = htmlString;
}


displayMovies();
