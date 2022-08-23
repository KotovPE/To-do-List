const badWordsArray = [
    'архипиздрит',
    'басран ',
    'бздение ',
    'бздеть',
    'бздех',
    'бзднуть',
    'бздун',
    'бздунья',
    'бздюха',
    'бикса',
    'блежник',
    'блудилище',
    'бляд',
    'блябу',
    'блябуду',
    'блядун',
    'блядунья',
    'блядь',
    'блядюга',
    'взьебка',
    'волосянка',
    'взьебывать',
    'вз\'ебывать',
    'выблядок',
    'выблядыш',
    'выебать',
    'выеть',
    'выпердеть',
    'высраться',
    'выссаться',
    'говенка',
    'говенный',
    'говешка',
    'говназия',
    'говнецо',
    'говно',
    'говноед',
    'говночист',
    'говнюк',
    'говнюха',
    'говнядина',
    'говняк',
    'говняный',
    'говнять',
    'гондон',
    'дермо',
    'долбоеб',
    'дрисня',
    'дрист',
    'дристать',
    'дристануть',
    'дристун',
    'дристуха',
    'дрочена',
    'дрочила',
    'дрочилка',
    'дрочить',
    'дрочка',
    'ебало',
    'ебальник',
    'ебануть',
    'ебаный',
    'ебарь',
    'ебатория',
    'ебать',
    'ебаться',
    'ебец',
    'ебливый',
    'ебля',
    'ебнуть',
    'ебнуться',
    'ебня',
    'ебун',
    'елда',
    'елдак',
    'елдачить',
    'заговнять',
    'задристать',
    'задрока',
    'заеба',
    'заебанец',
    'заебать',
    'заебаться',
    'заебываться',
    'заеть',
    'залупа',
    'залупаться',
    'залупить',
    'залупиться',
    'замудохаться',
    'засерун',
    'засеря',
    'засерать',
    'засирать',
    'засранец',
    'засрун',
    'захуячить',
    'злоебучий',
    'изговнять',
    'изговняться',
    'кляпыжиться',
    'курва',
    'курвенок',
    'курвин',
    'курвяжник',
    'курвяжница',
    'курвяжный',
    'манда',
    'мандавошка',
    'мандей',
    'мандеть',
    'мандища',
    'мандюк',
    'минет',
    'минетчик',
    'минетчица',
    'мокрохвостка',
    'мокрощелка',
    'мудак',
    'муде',
    'мудеть',
    'мудила',
    'мудистый',
    'мудня',
    'мудоеб',
    'мудозвон',
    'муйня',
    'набздеть',
    'наговнять',
    'надристать',
    'надрочить',
    'наебать',
    'наебнуться',
    'наебывать',
    'нассать',
    'нахезать',
    'нахуйник',
    'насцать',
    'обдристаться',
    'обдристаться',
    'обосранец',
    'обосрать',
    'обосцать',
    'обосцаться',
    'обсирать',
    'опизде',
    'отпиздячить',
    'отпороть',
    'отъеть',
    'охуевательский',
    'охуевать',
    'охуевающий',
    'охуеть',
    'охуительный',
    'охуячивать',
    'охуячить',
    'педрик',
    'пердеж',
    'пердение',
    'пердеть',
    'пердильник',
    'перднуть',
    'пердун',
    'пердунец',
    'пердунина',
    'пердунья',
    'пердуха',
    'пердь',
    'передок',
    'пернуть',
    'пидор',
    'пизда',
    'пиздануть',
    'пизденка',
    'пиздеть',
    'пиздить',
    'пиздища',
    'пиздобратия',
    'пиздоватый',
    'пиздорванец',
    'пиздорванка',
    'пиздострадатель',
    'пиздун',
    'пиздюга',
    'пиздюк',
    'пиздячить',
    'писять',
    'питишка',
    'плеха',
    'подговнять',
    'подъебнуться',
    'поебать',
    'поеть',
    'попысать',
    'посрать',
    'поставить',
    'поцоватый',
    'презерватив',
    'проблядь',
    'проебать',
    'промандеть',
    'промудеть',
    'пропиздеть',
    'пропиздячить',
    'пысать',
    'разъеба',
    'разъебай',
    'распиздай',
    'распиздеться',
    'распиздяй',
    'распроеть',
    'растыка',
    'сговнять',
    'секель',
    'серун',
    'серька',
    'сика',
    'сикать',
    'сикель',
    'сирать',
    'сирывать',
    'скурвиться',
    'скуреха',
    'скурея',
    'скуряга',
    'скуряжничать',
    'спиздить',
    'срака',
    'сраный',
    'сранье',
    'срать',
    'срун',
    'ссака',
    'ссаки',
    'ссать',
    'старпер',
    'струк',
    'суходрочка',
    'сцавинье',
    'сцака',
    'сцаки',
    'сцание',
    'сцать',
    'сциха',
    'сцуль',
    'сцыха',
    'сыкун',
    'титечка',
    'титечный',
    'титка',
    'титочка',
    'титька',
    'трипер',
    'триппер',
    'уеть',
    'усраться',
    'усцаться',
    'фик',
    'фуй',
    'хезать',
    'хер',
    'херня',
    'херовина',
    'херовый',
    'хитрожопый',
    'хлюха',
    'хуевина',
    'хуевый',
    'хуек',
    'хуепромышленник',
    'хуерик',
    'хуесос',
    'хуище',
    'хуй',
    'хуйня',
    'хуйрик',
    'хуякать',
    'хуякнуть',
    'целка',
    'шлюха'
];

// регистрация в заметках
let getUsersDataList = [];
let setUserDataList = [];
const labelsSelectUser = ['Тогда войдите', 'Тогда создадим'] ;

function loginWindows(){
	const labelsRegistration = ['Введите имя', 'Введите электронная почту','Введите логин', 'Введите пароль'];
	let signIn = confirm('У вас есть аккаунт?');
	if(signIn){
		alert(labelsSelectUser[0]);
		for(let i = 2; i <= labelsRegistration.length-1; i++){
			setUserDataList[i] = prompt(labelsRegistration[i], '');	
		}
		let getUserDataList = localStorage.getItem(setUserDataList[2]);
		getUserDataList = JSON.parse(getUserDataList);
		console.log(getUserDataList);
		if(isCorrect(setUserDataList, getUserDataList)){
			console.log(getUserDataList[0]);
			return getUserDataList[0];
		}else{
			loginWindows();
		}
	}else{
		alert(labelsSelectUser[1]);
		let results = [];
		for(let i = 0; i <= labelsRegistration.length-1; i++){
			getUsersDataList[i] = prompt(labelsRegistration[i], getUsersDataList[i]);
			if(i == 0 || i == 1){
				let result = detectorStopWords(getUsersDataList[i], i);
				getUsersDataList[i] = result.world;
				i = result.select;
			}
		}
		localStorage.setItem(getUsersDataList[0], JSON.stringify(getUsersDataList));
		location.reload();
	}
}
function isCorrect(_setUserDataList, _getUserDataList){
	let setEmptyLogin = _setUserDataList[2].replace(/^\s+|\s+$/g, '');
	let setEmptyPassword = _setUserDataList[3].replace(/^\s+|\s+$/g, '');
	console.log(_getUserDataList);
	let check;
	const labelsError = ['Поля пусты. Заполните поля данных...', 'Пользователя нет в БД...', 'Введины не верные данные...', 'Успешный вход'];
	if(setEmptyLogin == '' && setEmptyPassword == ''){//setEmptyLogin == '' && setEmptyPassword == '' || 
		alert(labelsError[0]);
		check = false;
	}else if(_getUserDataList == null){
		alert(labelsError[1]);
		check = false;
	}else if(setEmptyLogin != _getUserDataList[2] && setEmptyPassword != _getUserDataList[3]){
		alert(labelsError[2]);
		check = false;
	}else{
		alert(labelsError[3]);
		check = true;
	}
	return check;
}

// Валидация
function detectorStopWords(_world, _select){//, _select
    let en = /[a-z]+/i.test(_world);
	const typeErrorList = ['Используйте латиницу! Удалить строку?', 'В имени мало символов! Сгенерировать имя?', 'В поле используются нецензурные слова! Не нужно ругаться! Цензурить строку матов?'];
	let checkDialog;
	let checkError = false;
	if (en == false) {
		checkDialog = confirm(typeErrorList[0]);
		if (checkDialog){
		   _world = '';
		}
		checkError = true;
	}
	if(_select == 0 && _world.length <= 5){
		checkDialog = confirm(typeErrorList[1]);
		if (checkDialog){
		   _world = randomName();
		}
		checkError = true;
	}
	if(isSenzor(_world)){
		checkDialog = confirm(typeErrorList[2]);
		if (checkDialog){
		   _world = replaceSenzor(_world);
		}
		checkError = true;
	}
	if(checkError){
		return {world : _world, select : _select-1};// _world+':'+
	}else{
		return {world : _world, select : _select};;
	}
}
function randomName() {
    let arrayName = ['William', 'Kerrie', 'Joseph', 'Teresa', 'Lenard', 'Valerie', 'Franklin', 'Sophia', 'Nathan', 'Catherine'];
    let random = Math.floor(Math.random()*arr.length);
    return arrayName[random];
}
function isSenzor(_world) {
    for (let i = 0; i < badWordsArray.length; i++) {
		let badWord = badWordsArray[i];
		if (_world == badWord) {
			return true;
		}
	}
	return false;
}
function replaceSenzor(_world) {
    for (let i = 0; i < badWordsArray.length; i++) {
		let badWord = badWordsArray[i];
		if (_world == badWord) {
			return isSenzor(_word.replace(badWord, '*'.repeat(badWord.length)));
		}
	}
	return _world;
}

// создать поле заметки
let arrayList = [];
let userLogin = '';
function createANote(_textNote){
	arrayList.push(_textNote);
	const toDoList = document.getElementById('toDoList');
	const createLi = document.createElement('li');
    createLi.innerHTML = _textNote;
	toDoList.prepend(createLi);
}
function onLoadList(){
	userLogin = loginWindows();
	console.log(userLogin);
	let listOfLists = localStorage.getItem('list'+ userLogin);
    listOfLists = JSON.parse(listOfLists);
	console.log(userLogin);
	for(let i in listOfLists){
		createANote(listOfLists[i]);
	}
}
function onNewNote(){
  let textNote = document.getElementById('textNote').value;
      textNote = textNote.replace(/^\s+|\s+$/g, '');
  if(textNote != ''){
	 createANote(textNote);
	 localStorage.setItem('list' + userLogin, JSON.stringify(arrayList));
  }else{
     alert('Поле пусто. Введите данные...');
  }
  document.getElementById('textNote').value = '';
}
