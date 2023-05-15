//remplisage de carte 

let names =['Original','Mojito','Pink Tonic','Tropical'];
let discriptions =['Boisson énergisante gazeuse,à la taurine et chargée au caféine.....',
'Boisson énérgustabe gazeuse, saveur mojito à a la caféine et sans alcool.',
'Boisson énergisante gazeuse, aux fruits, taurine,caféine et extrait de  ',
'Boisson énergisante gazeuse, aux fruits, taurine,caféine et extrait de gingembre.',
];
let colors = ["red", "#85C066", "#EA5DCE", "#9E5E22"];


//creation d'un ligne hr
let hrElement = document.createElement("hr");

//creation d'un container dans le body
let container = document.createElement('div');
document.body.appendChild(container);
container.style.textAlign="center";

//creation d'un container dans le body
function element(name,discriptions,index)

{
      // Créer un nouvel élément <hr>
    let hr = document.createElement('hr');


    
    
    // Créer un bouton "plus d'infos" 

    let btn = document.createElement('button');
    btn.classList.add('button');
    btn.textContent = 'Plus d\'infos';

     // Créer un bouton "sélectionner"
     let selectBtn = document.createElement('button');
     selectBtn.textContent = 'Sélectionner';
     selectBtn.classList.add('button2');

     


    //elements
     let card = document.createElement('div');
    let title= document.createElement('h2');
    let discription = document.createElement('p');


  // Ajouter le contenu aux éléments de carte
    let head = document.createTextNode(name);
    let discriptionContent = document.createTextNode(discriptions);
    title.appendChild(head);
    discription.appendChild(discriptionContent);

  // Ajouter des styles aux éléments de carte

    card.style.width = '500px';
    card.style.background ='gray';
    card.style.color ='white';
    card.style.padding ='20px';
    card.style.margin='40px';
    card.style.display ='inline-block';

    card.style.border="50px";
  
    card.style.backgroundColor = colors[index];


    



//Ajouter  les éléments de carte à la carte

    card.appendChild(title);
    card.appendChild(discription);
    card.insertBefore(hr, discription);
    card.appendChild(btn);
    card.appendChild(selectBtn);


// Ajouter la carte au conteneur

    container.appendChild(card);

}




for (let i = 0 ; i < 3 ; i++)
{

    element(names[i],discriptions[i],i);
}

// Créer un nouvel élément <div>
let newDiv = document.createElement('div');


// Ajouter du contenu au div
let divContent = document.createTextNode('Votre choix :');
newDiv.appendChild(divContent);

// Ajouter des styles au div
newDiv.style.color = 'white';
newDiv.style.fontSize = '50px';
newDiv.style.textAlign = 'center'; 

newDiv.style.backgroundColor="bisque"
// Ajouter le div au corps de la page
document.body.appendChild(newDiv);




































/*
// Ajouter un gestionnaire d'événements pour le bouton "plus d'infos"
btn.addEventListener('click', function() {
    // Rediriger l'utilisateur vers une page avec plus d'informations sur la boisson
    window.location.href = 'https://example.com/more-info/' + encodeURIComponent(name);
  });
*/
