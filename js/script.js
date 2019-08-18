// affichage des sections au clic sur les titres
$("#competences").on("click", function() {
    if ($("#iCompetences").hasClass("fa-arrow-circle-down")) {
        $("#tableCompetences").show();
        $("#iCompetences").removeClass("fa-arrow-circle-down");
        $("#iCompetences").addClass("fa-arrow-circle-up");
    } else {
        $("#tableCompetences").hide();
        $("#iCompetences").removeClass("fa-arrow-circle-up");
        $("#iCompetences").addClass("fa-arrow-circle-down");
    }
});
$("#experiences").on("click", function() {
    if ($("#iExperiences").hasClass("fa-arrow-circle-down")) {
        $("#tableExperiences").show();
        $("#iExperiences").removeClass("fa-arrow-circle-down");
        $("#iExperiences").addClass("fa-arrow-circle-up");
    } else {
        $("#tableExperiences").hide();
        $("#iExperiences").removeClass("fa-arrow-circle-up");
        $("#iExperiences").addClass("fa-arrow-circle-down");
    }
});
$("#formation").on("click", function() {
    if ($("#iFormation").hasClass("fa-arrow-circle-down")) {
        $("#tableFormation").show();
        $("#iFormation").removeClass("fa-arrow-circle-down");
        $("#iFormation").addClass("fa-arrow-circle-up");
    } else {
        $("#tableFormation").hide();
        $("#iFormation").removeClass("fa-arrow-circle-up");
        $("#iFormation").addClass("fa-arrow-circle-down");
    }
});