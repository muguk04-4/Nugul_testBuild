/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {
	'main_theme' : 'main_theme.mp3'
});

// Define the voice files used in the game.
monogatari.assets ('voices', {
	'scene1-nugul-1-1' : 'scene1-nugul-1-1.mp3'
});

// Define the sounds used in the game.
monogatari.assets ('sounds', {
	'click1' : 'click1.mp3'
});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {

});


// Define the Characters
monogatari.characters ({
	'y': {
		name: '홈그라운드 최강의 아웃풋 굴너',
		color: '#AF6000',
		love: 100
	}
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'play music main_theme with volume 5',
		'show scene #f7f6f6 with fadeIn',
		'show notification Welcome',
		{
			'Input': {
				'Text': '이름이 뭐야?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': '이름 쓰라고!!!'
			}
		},
		'play voice scene1-nugul-1-1',
		'y 안녕 {{player.name}}, 어서와!',
		'play voice scene1-nugul-1-1',
		'y 바보같은 {{player.name}}!!!',
		{
			'Choice': {
				'Dialog': 'y 모노가타리 문서 읽어봤니?',
				'Yes': {
					'Text': '엉',
					'Do': 'jump 엉'
				},
				'No': {
					'Text': '아닝',
					'Do': 'jump 아닝'
				},
			}
		}
	],

	'엉': [
		'y 잘했어!',
		'stop music main_theme',
		'y 개쩌는 게임을 만들때가 되었구나ㅏ??!!',
		'y 땋흑 정말 기대되는 걸?',
		function(){
			this.storage().player.B += 100;
		},
		{'Conditional' : {
			'Condition': function(){
				if(parseInt(this.storage().player.B) > 90){
					return "B";
				}
			},
			'B' : 'jump B_gimozzi',
		}},
		'jump 엉'
	],

	'아닝': [
		'y 그럼 이거 읽어봐',

		'show message Help',

		'y 이제 개쩌는 게임을 만들어보자!',
		'y 땋흑 정말 기대되는 걸?',
		'jump 엉'
	],


	'B_gimozzi':[
		'y B는 너를 사랑해',
		'end'
	],
	

});