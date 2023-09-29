const suzon=[

{
    title:"Card 1",
    body:"Description card's one"
},
{
    title:"Card 2",
    body:"Description card's two"
},
{
    title:"Card 3",
    body:"Description card's three"
},
{
    title:"Card 4",
    body:"Description card's four"
},
{
    title:"Card 5",
    body:"Description card's five"
},
{
    title:"Card 6",
    body:"Description card's six"
},
{
    title:"Card 7",
    body:"Description card's seven"
},
{
    title:"Card 8",
    body:"Description card's eight"
},

]

const postsElement=document.querySelector(".posts");

let loadAllData=()=>{
    suzon.map((res)=>{
        let cardAElement=document.createElement("div");
        cardAElement.classList.add("card");
        cardAElement.innerHTML=

        `
        <h2 class="title"> ${res.title} </h2>
        <p> ${res.body} </p>

        `;

         postsElement.appendChild(cardAElement);

     
        
    });
}
loadAllData();