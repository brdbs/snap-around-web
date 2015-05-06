'use strict';

var servicename = 'translate';

var deps = ['$window'];

function service($window) {
	var action = new Object();
    var language = 'fr';
	if($window.localStorage.language){
		var language = $window.localStorage.language;
	}

    action.setLanguage = function(language){
        $window.localStorage.language = language;
        $window.location.reload();
    }

    action.lang = function(){
        return language;
    }
    
    action.get = function(key){
        var label = dict[key][language];
        if(label == "undefined")
{            return key;
        } else {
            return label;
        }
    }   

    var dict = {
		"header-title": {
			en: 'snapAround',
			fr: 'snapAround'
		},
		"header-description": {
			en: '',
			fr: ''
		},
		"header-button": {
			en: "See more",
			fr: "En savoir plus"
		},
		"banner-title": {
			en: "What if your content could only be accessed from the exact place where you posted it.",
			fr: "Et si vos contenus étaient disponibles uniquement depuis l'endroit ou vous les postez..."
		},
		"banner-description": {
			en:"would it make a difference ? ",
			fr:"cela ferait-il une différence ?"
		},
		"banner-button": {
			en: "Download on app store",
			fr: "Télécharger sur l'app store"
		},
		"first-feature-title": {
			en: "Participate in a unique experiment",
			fr: "Participe à un évenement unique"
		},
		"first-feature-description": {
			en: " Try out our new features! Share a 24h visible photo on \"24h de l'INSA  festival\" on May 22,23,24th. Don't forget to give us some feedback! ",
			fr: " Essaye nos nouvelles fonctionnalitées. Partage des photos visibles 24h à l'occasion des 24h de l'INSA les 22,23 et 24 Mai 2015 et donne nous tes impressions."
		},
		"second-feature-title": {
			en: "See pictures around you",
			fr: "Découvre les photos postées autours de toi"
		},
		"second-feature-description": {
			en: "You can see your friends pictures and public pictures on the map. If a post appears in red, its content is not enabled.  If it appears in turquoise, it's accesible",
			fr: "Découvre les photos publics et celles de tes amis sur la carte. Si un post apparait en rouge, alors son contenu est inaccessible. Si il apparait en turquoise, il est accesible."
		},
		"third-feature-title": {
			en: "Go to famous places to get more content",
			fr: "Rend toi sur les lieux les plus fréquentés pour avoir accès à plus de contenu"
		},
		"third-feature-description": {
			en: "When you are close enough to a post, you can unblock its content, and its comments",
			fr: "Quand tu es assez proche d'un post, tu peux en débloquer le contenu, et ses commentaires"
		},
		"first-usecase-title": {
			en: "Collect posts and see them later",
			fr: "Ajoute des posts à ta collection pour les visionner plus tard"
		},
		"first-usecase-description": {
			en: "Never miss something that happened next to you. SnapAround is specially designed for events such as festivals and conventions.",
			fr: "Ne rate plus les évenements qui t'entourent. SnapAround est spéciallement pensé pour couvrir les festivals et les conventions de toute sorte."
		},
		"second-usecase-title": {
			en: "SnapAround me",
			fr: "SnapAround autours de moi"
		},
		"second-usecase-description": {
			en: "Get closer to your neighborhood and share usefull things around you",
			fr: "Apprend a connaitre ton voisinnage et partage des choses utiles"
		},
		"more-feature-title": {
			en: "See how it can be used",
			fr: "Découvre comment l'utiliser"
		},
		"member1-name": {
			en: "ANTOINE Kevin",
			fr: "ANTOINE Kevin"
		},
		"member1-description": {
			en: "Developpeur back-end et web",
			fr: "Developpeur back-end et web"
		},
		"member2-name": {
			en: "RICARD Robin",
			fr: "RICARD Robin"
		},
		"member2-description": {
			en: "back-end javascript ninja",
			fr: "back-end javascript ninja"
		},
		"member3-name": {
			en: "KITANE Mehdi",
			fr: "KITANE Mehdi"
		},
		"member3-description": {
			en: "IOS dev",
			fr: "IOS dev"
		},
		"member4-name": {
			en: "SIVANANDAN Bruno",
			fr: "SIVANANDAN Bruno"
		},
		"member4-description": {
			en: "Graphical designer",
			fr: "Graphical designer"
		},
		"member5-name": {
			en: "COMTE Valentin",
			fr: "COMTE Valentin"
		},
		"member5-description": {
			en: "IOS dev",
			fr: "IOS dev"
		},
		"member6-name": {
			en: "BENHMIDA Karim",
			fr: "BENHMIDA Karim"
		},
		"member6-description": {
			en: "IOS dev",
			fr: "IOS dev"
		},
	}

	return action;
}

service.$inject = deps;

app.factory(servicename, service);
