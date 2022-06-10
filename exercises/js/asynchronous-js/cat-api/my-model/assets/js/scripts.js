const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const img = document.getElementById('cat-img');

const getCats = async () => {
	try {
		const data = await fetch(BASE_URL);
		const json = await data.json();
		return json.webpurl;
	} catch (e) {
		console.log(e.message);
	}
};

const loadImg = async () => {
	img.src = await getCats();
};

const changeImgBtn = document.getElementById('changeBtn');
changeImgBtn.addEventListener('click', console.log("hi"));

loadImg();