import express from 'express'
import bodyParser from 'body-parser'
const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"));

function filterTalent(data, search) {
    return data.filter(item => item.specialist.toLowerCase().includes(search.toLowerCase()));
}

app.get("/search", (req,res)=>{
    const search = req.query.search;
    // console.log(search)
    const dataFilter = filterTalent(talentPorto, search);
    // console.log(dataFilter);
    const messageFailded = false;
    
    if(dataFilter.length == 0){
        const messageFailded = true;
        res.render("search.ejs",
            {
                message : messageFailded,
                dataSlide :talentSlide,
                dataPorto : talentPorto
            }
        );
    }else{
        res.render("search.ejs",
            {
                dataSlide :talentSlide,
                dataPorto : dataFilter
            }
        );
    }
});

app.get("/", (req,res) =>{
    // console.log(talentPorto[0].urlImage[0]);
    res.render("index.ejs",
        {
            dataSlide :talentSlide,
            dataPorto : talentPorto
        }
    );
});

app.get("/:id", (req, res) => {
    const profileId = req.params.id;
    const porto = talentPorto.find(e => e.id == profileId);

    if (porto) {
        const filterSkill = porto.skill.map(skillName => {
            return personalSkill.find(skill => skill.nama.toLowerCase() === skillName.toLowerCase());
        }).filter(skill => skill !== undefined);

        // console.log(filterSkill);

        res.render("profile.ejs", { porto,filterSkill });
    } else {
        res.status(404).send("Profile not found");
    }
});



app.listen(port, ()=> {
    console.log(`Server is running at port ${port}`);
});

const personalSkill = [
    {
        nama: "C#",
        url : "Images/skill/c-sharp.svg"
    },
    {
        nama: "CSS",
        url : "Images/skill/css-3.svg"
    },
    {
        nama: "NodeJS",
        url : "Images/skill/nodejs.svg"
    },
    {
        nama: "Laravel",
        url : "Images/skill/laravel-2.svg"
    },
    {
        nama: "React",
        url : "Images/skill/science.svg"
    },
    {
        nama: "MySQL",
        url : "Images/skill/mysql-3.svg"
    },
    {
        nama: "Adobe Photoshop",
        url : "Images/skill/adobe-photoshop-2.svg"
    },
    {
        nama: "Adobe Illustrator",
        url : "Images/skill/adobe-illustrator-cs6.svg"
    },
    {
        nama: "Canva",
        url : "Images/skill/canva-1.svg"
    },
    {
        nama: "HTML",
        url : "Images/skill/html.svg"
    },
    {
        nama: "Javascript",
        url : "Images/skill/js.svg"
    },
    {
        nama: "C++",
        url : "Images/skill/c-.svg"
    }
];

const talentSlide = [
    {
        name : "Muhammad Fauzan",
        specialist : "Dukun",
        skill : ["Santet", "Pelet","pinter"],
        urlImage : "../Images/slideImage/imgFauzan.png"
    },
    {
        name : "Rafly Purnama",
        specialist : "Kadep durjana",
        skill : ["ngitung duit"],
        urlImage : "../Images/slideImage/imgRafly.png"
    },
    {
        name : "Dipo",
        specialist : "Cibubur gang",
        skill : ["Wuahaha", "Tes"],
        urlImage : "../Images/slideImage/imgDipo.png"
    },
    {
        name : "Salwa",
        specialist : "Anak buah",
        skill : ["haha", "hehe"],
        urlImage : "../Images/slideImage/imgSalwa.png"
    }
];

const talentPorto = [
    {
        id : 1,
        name : "Muhammad Fauzan",
        specialist : "Fullstack",
        about :"Saya adalah mahasiswa UPNVJ dan full-stack developer yang terampil dalam HTML, CSS, JavaScript, Node.js, dan Python.",
        skill : ["NodeJs", "C#","Canva","CSS"],
        urlImage : "../Images/slideImage/imgFauzan.png",
        urlImagePorto : [
            {
                desc : "ProjectBlabla",
                url :"../Images/dataPorto/fauzanPorto.png"
            },
            {
                desc : "ProjectBlabla",
                url :"../Images/dataPorto/raflyPorto.png"
            },
            {
                desc : "ProjectBlabla",
                url :"../Images/dataPorto/salwaPorto.png"
            },
            {
                desc : "ProjectBlabla",
                url :"../Images/dataPorto/dipoPorto.png"
            }
            
        ],
        achievement : [
            {
                type : "Juara 1",
                desc : "Lomba makan lele"
            },
            {
                type : "Juara 2",
                desc : "Lomba Boker"
            },
            {
                type : "Juara 1",
                desc : "Lomba balap karung"
            }
        ],
        experience : [
            {
                position : "Software Engineer",
                instance : "PT Kecap kecapan",
                year : "2022-2099"
            },
            {
                position : "Pengocok botol",
                instance : "PT ABC",
                year : "1022-2099"
            },
            {
                position : "Manager",
                instance : "PT Cinta abadi",
                year : "2021-present"
            },
        ],
        linkCV : "https://google.com"
    },
    {
        id : 2,
        name : "Rafly Purnama",
        specialist : "Designer",
        about :"Saya adalah mahasiswa UPNVJ dan full-stack developer yang terampil dalam HTML, CSS, JavaScript, Node.js, dan Python.",
        skill : ["NodeJs", "C#","C++","CSS","Laravel"],
        urlImage : "../Images/slideImage/imgRafly.png",
        urlImagePorto : [
            {
                desc : "ProjectBlabla",
                url :"../Images/dataPorto/raflyPorto.png"
            },
            {
                desc : "ProjectBlabla",
                url :"../Images/dataPorto/fauzanPorto.png"
            },
            {
                desc : "ProjectBlabla",
                url :"../Images/dataPorto/salwaPorto.png"
            },
            {
                desc : "ProjectBlabla",
                url :"../Images/dataPorto/dipoPorto.png"
            }
            
        ],
        achievement : [
            {
                type : "Juara 1",
                desc : "Lomba makan lele"
            },
            {
                type : "Juara 1",
                desc : "Lomba Boker"
            },
            {
                type : "Juara 1",
                desc : "Lomba balap karung"
            }
        ],
        experience : [
            {
                position : "Software Engineer",
                instance : "PT Kecap kecapan",
                year : "2022-2099"
            },
            {
                position : "Pengocok botol",
                instance : "PT ABC",
                year : "1022-2099"
            },
            {
                position : "Manager",
                instance : "PT Cinta abadi",
                year : "2021-present"
            },
        ],
        linkCV : "https://google.com"
    },
    {
        id : 3,
        name : "Dipo",
        specialist : "Front End",
        about :"Saya adalah mahasiswa UPNVJ dan full-stack developer yang terampil dalam HTML, CSS, JavaScript, Node.js, dan Python.",
        skill : ["NodeJs", "C#","HTML","CSS","Canva"],
        urlImage : "../Images/slideImage/imgDipo.png",
        urlImagePorto : [
            {
                desc : "ProjectBlabla",
                url :"../Images/dataPorto/dipoPorto.png"
            },
            {
                desc : "ProjectBlabla",
                url :"../Images/dataPorto/fauzanPorto.png"
            },
            {
                desc : "ProjectBlabla",
                url :"../Images/dataPorto/raflyPorto.png"
            },
            {
                desc : "ProjectBlabla",
                url :"../Images/dataPorto/salwaPorto.png"
            }
            
        ],
        achievement : [
            {
                type : "Juara 1",
                desc : "Lomba makan lele"
            },
            {
                type : "Juara 1",
                desc : "Lomba Boker"
            },
            {
                type : "Juara 1",
                desc : "Lomba balap karung"
            }
        ],
        experience : [
            {
                position : "Software Engineer",
                instance : "PT Kecap kecapan",
                year : "2022-2099"
            },
            {
                position : "Pengocok botol",
                instance : "PT ABC",
                year : "1022-2099"
            },
            {
                position : "Manager",
                instance : "PT Cinta abadi",
                year : "2021-present"
            },
        ],
        linkCV : "https://google.com"
    },
    {
        id : 4,
        name : "Salwa",
        specialist : "Backend",
        about :"Saya adalah mahasiswa UPNVJ dan full-stack developer yang terampil dalam HTML, CSS, JavaScript, Node.js, dan Python.",
        skill : ["NodeJs", "C#","HTML","CSS","Javascript"],
        urlImage : "../Images/slideImage/imgSalwa.png",
        urlImagePorto : [
            {
                desc : "ProjectBlabla",
                url :"../Images/dataPorto/original-dba8969c7ab75a3d2add459f0ef1ba27.png"
            },
            {
                desc : "ProjectBlabla",
                url :"../Images/dataPorto/fauzanPorto.png"
            },
            {
                desc : "ProjectBlabla",
                url :"../Images/dataPorto/raflyPorto.png"
            },
            {
                desc : "ProjectBlabla",
                url :"../Images/dataPorto/dipoPorto.png"
            }
            
        ],
        achievement : [
            {
                type : "Juara 1",
                desc : "Lomba makan lele"
            },
            {
                type : "Juara 1",
                desc : "Lomba Boker"
            },
            {
                type : "Juara 1",
                desc : "Lomba balap karung"
            }
        ],
        experience : [
            {
                position : "Software Engineer",
                instance : "PT Kecap kecapan",
                year : "2022-2099"
            },
            {
                position : "Pengocok botol",
                instance : "PT ABC",
                year : "1022-2099"
            },
            {
                position : "Manager",
                instance : "PT Cinta abadi",
                year : "2021-present"
            },
        ],
        linkCV : "https://google.com"
    }
];