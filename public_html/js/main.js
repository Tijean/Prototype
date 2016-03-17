var liste = [
    "Changement",
    "Système",
    "Référence",
    "Processus fonctionnel",
    "Groupe de donnée",
    "Mouvement",
    "Réutilisation",
    "Entrée",
    "Sortie",
    "Lecture",
    "Écriture",
    "Commentaire"
];

var buildingList = [{
    "BuildingName": "Adler Journalism and Mass Communication Building",
        "BuildingNumber": "0456"
}, {
    "BuildingName": "Art Building",
        "BuildingNumber": "0021"
}];

$.each(buildingList, function (index, value) {
    $(".dropdown-menu").append($("<li>").text(value.BuildingName));
})


$('.dropdown-menu li').click(function () {
    console.log(this)
});
