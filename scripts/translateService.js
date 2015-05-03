'use strict';

var servicename = 'translate';

var deps = ['$window'];

function service($window) {
	var action = new Object();
    var language = 'en';
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
			en: "What if your content could only be accessed from the exact place where you took it.",
			fr: "Et si vos contenus étaient accessibles uniquement à l'endroit de leur prises..."
		},
		"banner-description": {
			en:"would it make a difference ?",
			fr:"cela ferait-il une différence ?"
		},
		"banner-button": {
			en: "How to use it",
			fr: "Comment l'utiliser"
		},
		"first-feature-title": {
			en: "See pictures around you",
			fr: "Découvre les photos postées autours de toi"
		},
		"first-feature-description": {
			en: "You can see your friends pictures and public pictures on the map. If a post appears in red, its content is not enabled.  If it appears in turquoise, you're free to go!",
			fr: "Découvrez les photos publics et celles de vos amis sur la carte. Si un post apparait en rouge, alors son contenu est inaccessible. Si il apparait en turquoise, tu peux le visionner "
		},
		"second-feature-title": {
			en: "Move to famous places to get more content",
			fr: "Rend toi sur les lieux les plus fréquentés pour avoir accès à plus de contenu"
		},
		"second-feature-description": {
			en: "When you are close enough to a post, you can enblock its content, and its comments",
			fr: "Quand tu es assez proche d'un post, tu peux en débloquer le contenu, et ses commentaires"
		},
		"third-feature-title": {
			en: "Collect posts and see them later",
			fr: "Ajoute des posts à ta collection pour les visionner plus tard"
		},
		"third-feature-description": {
			en: "Add some interesting posts to your collections while many others stays where they are and will never be seen or commented elsewhere",
			fr: "Ajoutez certains posts intéressants à votre collection, alors que beaucoup d'autres posts ne seront jamais vus ni commentés autrepart."
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
			en: "Developpeur back-end et web"
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
		"description": {
			en:"SnapAround is a geo-localized network which allow people close geographically to communicate and to meet each other",
			fr:"SnapAround est un réseau social géolocalisé qui incite les personnes proches géographiquement à communiquer et à se rencontrer"
		}
	}

	return action;
}

service.$inject = deps;

app.factory(servicename, service);
