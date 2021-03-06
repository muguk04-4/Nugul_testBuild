monogatari.characters ({
	'b': {
		name: 'Birdrone',
		color: '#FF0000',
		directory: 'test',
		sprites: {
			normal: 'birdrone.png'
		}
	},
	'w': {
		name: '웨이터',
		color: '#FF0000',
		directory: 'test',
		sprites: {
			normal: 'developer.png'
		},
	},
});

monogatari.assets ('voices', {
	//한여름
	'000_han_000' : 'testScene/han/000_han_000.mp3',
	'000_han_001' : 'testScene/han/000_han_001.mp3',
	'000_han_002' : 'testScene/han/000_han_002.mp3',
	'000_han_003' : 'testScene/han/000_han_003.mp3',
	'000_han_004' : 'testScene/han/000_han_004.mp3',
	'000_han_005' : 'testScene/han/000_han_005.mp3',
	'000_han_006' : 'testScene/han/000_han_006.mp3',
	'000_han_007' : 'testScene/han/000_han_007.mp3',
	'000_han_008' : 'testScene/han/000_han_008.mp3',
	'000_han_009' : 'testScene/han/000_han_009.mp3',
	'000_han_010' : 'testScene/han/000_han_010.mp3',
	//강성찬
	'000_kang_001' : 'testScene/han/000_kang_001.mp3',
	'000_kang_002' : 'testScene/han/000_kang_002.mp3',
	'000_kang_003' : 'testScene/han/000_kang_003.mp3',
	'000_kang_004' : 'testScene/han/000_kang_004.mp3',
	'000_kang_005' : 'testScene/han/000_kang_005.mp3',
	'000_kang_006' : 'testScene/han/000_kang_006.mp3',
	'000_kang_007' : 'testScene/han/000_kang_007.mp3',
	'000_kang_008' : 'testScene/han/000_kang_008.mp3',
	'000_kang_009' : 'testScene/han/000_kang_009.mp3',
	'000_kang_010' : 'testScene/han/000_kang_010.mp3',
	'000_kang_011' : 'testScene/han/000_kang_011.mp3',
	'000_kang_012' : 'testScene/han/000_kang_012.mp3',
	'000_kang_013' : 'testScene/han/000_kang_013.mp3',
	'000_kang_014' : 'testScene/han/000_kang_014.mp3',
	'000_kang_015' : 'testScene/han/000_kang_015.mp3',
});


monogatari.script ({
	// 챕터 선택지
	'choose_chapter1_or_testscene' :[
		{
			'Choice': {
				'Dialog': 'y 테스트씬 or 챕터1(그림 테스트)',
				'Yes': {
					'Text': '테스트씬',
					'Do': 'jump testScene'
				},
				'No': {
					'Text': '챕터1',
					'Do':'jump choose_chapter1_or_testscene',
				},
			}
		}
	],
	// -------------------------------------
	// 테스트씬
	'testScene': [
		'stop music main_theme',
		'play music testScene_theme with volume 25 loop',
		'show scene testScene with fadeIn with duration 3s',
		'<span style="font-weight:bold; font-size:50px">강성찬</span>과 {{player.name}}이 아무도 없는 레스토랑에서 전세를 낸 듯 테이블에 앉아있다. {{player.name}}은 주위를 둘러보며 예쁜 레스토랑 내부를 구경하며 감탄하고 있다.',
		
		'play sound highhill_tap with fade 3',
		//'(효과음) 웨이터가 구두를 신고 다가오는 소리 (타일 밟는 소리)',
		

		'show character kang normal_L fadeIn with duration 2s at left',
		'show character w normal fadeIn with duration 5s at right',
		'w 주문하시겠습니까?',
		'play voice 000_kang_001',
		'kang 스테이크로 부탁합니다.',
		'w 네, 스테이크는 어떤 걸로 해드릴까요?',
		'play voice 000_kang_002',
		'kang (고민하며) 추천..! 추천메뉴가 뭐죠?',
		'w 요즘 잘 나가는 티본 스테이크로 해드릴까요?',
		
		'play voice 000_kang_003',
		'kang (긁적이며) 아.. 네.',
		'w 안심, 채끝살로 준비해드리겠습니다. 와인은 어떻게 해드릴까요?',
		'play voice 000_kang_004',
		'kang ({{player.name}}의 눈치를 보며) 그...그것도 추천으로.',
		'play voice 000_han_000',
		'me (입을 막으며 푸흐흐 웃는 소리)',
		'w 독일 와인, 러시아 와인 종류로 추천드립니다.',
		'play voice 000_kang_005',
		'kang 단 걸 좋아하니, 단걸로 부탁합니다.',
		'w 메인이 좀 기름지니까, 기름기를 좀 잡아줄 수 있는 걸로 드릴까요? 독일 리즐링 화이트와인쪽으로 준비해드리겠습니다.',
		'play voice 000_kang_006',
		'kang (엉성하게 웃는다) 아, 알겠습니다.',
		'w 잠시만 기다려주시면 음식 준비해드리겠습니다.',
		'hide character w with fadeOut with duration 3s',
		
		'play sound highhill_tap',
		//'(효과음) 웨이터가 구두를 신고 멀어지는 소리 (타일 밟는 소리)',

		'hide character kang with fadeOut with duration 1s',
		'show character kang normal_R fadeIn with duration 2s at center',
		'익숙하지 않은 듯한 성찬의 바보같은 모습을 본 {{player.name}}은 웃음을 참다가 결국 크게 웃어버린다. 성찬은 부끄러운 듯 얼굴을 붉히며 당황한다.',

		'play voice 000_han_001',
		'me (웃으며) 큭..큭하하하! 하하하! 웃겨라!',
		'play voice 000_kang_007',
		'kang  왜 자꾸 웃습니까.',
		'play voice 000_han_002',
		'me (크게 웃는 소리 / 재미있다는 듯 눈물을 닦으며 놀리듯) 그냥, 우리 대표님 추천 좋아하시나보다~',

		'play sound dol_tap',
		//'(효과음) 웨이터가 구두를 신고 다가오는 소리 (타일 밟는 소리) + (효과음) 카트를 끌고 오는 소리',

		'play voice 000_han_003',
		'me (큭큭 거리며 웃는다)',

		'play sound dish_drop',
		//'(효과음) 접시들을 테이블에 올려놓는 소리 (빵을 담아 놓는 나무재질 바구니 / 잼그릇과 잼칼 / 스프 2접시)',

		'play voice 000_kang_008',
		'kang {{player.name}}씨. 그렇게 웃기십니까?',
		'play sound breadknife',
		'play voice 000_han_004',
		'me ((효과음) 잼칼 가볍게 드는 소리 / 잼칼을 들어올려 빵에 잼을 바른다) 하하하. 대표님도 귀여운 구석이 있네요? 직원들이 이런 모습을 보면 깬다고 할걸요? (빵을 살짝 입에 물고) 완전 상남자스타일인 줄 알던데.',
		'play voice 000_kang_009',
		'kang ...{{player.name}}씨한텐 어떤데요? 저같은 타입, 별롭니까?',
		'play voice 000_han_005',
		'me (사레들린 기침) / ((효과음) 급하게 물 마시는 소리 / 물마시고 잘못들었다는 듯이) ...뭐라구요?',
		'play voice 000_kang_010',
		'kang ….{{player.name}}씨는 귀여운 남자 어떤데요?',
		'play voice 000_han_006',
		'me ...무슨 뜻이에요?',
		'play voice 000_kang_011',
		'kang (고민하다가 결심한 듯) 전, {{player.name}}씨가 좋아하는 타입이 저였으면 ..',
		'play sound dish_drop_s',
		'play voice 000_han_007',
		'me ((효과음) 식기를 탁 놓는 소리 / 식기를 내려놓으며 O.L) 어! 대표님, 그거 완전 고백멘트였어요! 저라서 다행이지, 누가 들으면 오해한다고요! 소문이라도 나면 어쩌려고 그러세요?',

		'play voice 000_kang_012',
		'kang ...오해하라고 하는 말입니다. (반응이 없자) 장난치는 거 아닙니다. 내가 무슨 말을 하고 있는 지 충분히 알고 있어요. 소문나면 {{player.name}}씨가 낙하산이라고 손가락질 받을거라는 것도 잘 알고, {{player.name}}씨가 저에게 관심없다는 것도.. (고민하다가) ...알아요.',
		'play voice 000_han_008',
		'me (조용히 낮게 발끈하며) 그걸 아는 사람이..!',
		'play voice 000_kang_013',
		'kang (O.L) 이기적이라고 생각할 수도 있는데, 그냥 오늘은 제 마음만 전하고 싶었습니다. 내가 이런 마음이니까… 그냥..',
		'play voice 000_han_009',
		'me (크게 들숨, 날숨) 알겠어요.',
		'play voice 000_kang_014',
		'kang (잘못들었다는 듯) 네?',
		'play sound breadknife',
		'play voice 000_han_010',
		'me ((효과음) 숟가락 들어올리는 소리 / 숟가락을 들며) 알았으니까 밥이나 먹어요. 오늘 아무것도 못 먹었을 거 아녜요?',
		'play voice 000_kang_015',
		'kang (밝게 웃는 호) 네.',

		'play sound metal_dish',
		//'(효과음) 식기가 부딪히며 달그락 거리는 소리',

		'성찬쿤과 {{player.name}}쨩이 식사하며 식기를 부딪히는 소리와 레스토랑 실내음악만이 울려퍼져 공간을 메운다.'
	],

	// -------------------------------------
	// 챕터1 (캐릭터, 배경, 사운드 테스트용)
	'chapter1': [
		'play music main_theme with volume 5 loop',
    'show scene scene_test1 with fadeIn with duration 3s',
		
    'y 나 소환하면서 새소리 브금 추가하기',
		'show character y normal fadeIn with duration 3s',
		'play music chapter1_theme with volume 5 loop',

		'y 나 천천히 사라지면서 새소리만 남기',
		'hide character y with fadeOut with duration 6s',
		'stop music main_theme',

		'y 나 소환되면서 효과음 뿅',
		'show character y normal',
		'play sound click1 with volume 50',

		'y 나 좌, 새 우',
		'show character y normal at left',
		'show character b normal at right',
		'b 애옹',
		'y 나 우, 새 좌',
		'show character b normal at left',
		'show character y normal at right',
		'b 애옹',
		'y 나 새 합체',
		'b 애옹?',
		'show character y normal at center',
		'show character b normal at center',

		'y 배경 바꾸기',
		'show scene scene_test2 with fadeIn with duration 3s',

		'gallery unlock just_test',
		'y {{player.name}}님, 갤러리에 새로운 사진을 잠금해제해드렸습니다. 확인해보세요',
		'stop music chapter1_theme',
		'end'
	],
});