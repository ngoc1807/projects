export const randomNumber = (min, max) => {
	return min + Math.trunc(Math.random() * (max - min));
};

export const randomName = (value) => {
	return Date.now() + "-" + Math.round(Math.random() * 1e9) + value;
};

export const getStorage = (value) => {
	let persist = JSON.parse(localStorage.getItem("persist:root"));
	if (persist) {
		let auth = JSON.parse(persist.user);

		if (auth.user != null) {
			let authInfo = auth.user;
			// console.log(authInfo, "authInfo");
			switch (value) {
				case "id":
					return authInfo.userId;
				case "avatar":
					return authInfo.avatar;
				case "date":
					return authInfo.date;
				case "email":
					return authInfo.email;
				case "phone":
					return authInfo.phone;
				case "role":
					return authInfo.role;
				case "isAuth":
					return authInfo.isAuth;
				case "note":
					return authInfo.note;
				default:
					return authInfo;
			}
		}
		return null;
	}
	return null;
};

export const logOut = () => {
	sessionStorage.removeItem("accessJWT");
	localStorage.clear();
};

export const handleSale = (root, sale) => {
	let a = (100 - +sale) / 100;

	let b = Math.floor(root * a);

	return numberWithCommas(b);
};

export const numberWithCommas = (x) => {
	var parts = x.toString().split(".");
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return parts.join(".");
};

export const randomShortArrayTour = (v, k) => {
	// khi array nhỏ nên dùng cái nay
	const b = v.Booking_NN_Cate.map((i) => i.images);
	const c = v.Booking_NN_Place.map((i) => i.Place_Imgs.map((v) => v.image));

	const d = c.flat().concat(b);
	const res = d.sort(func);

	if (d.length <= k) {
		return d;
	} else {
		const f = res.slice(0, k);
		return f;
	}
};

//  hàm trộn array
function func(a, b) {
	return 0.5 - Math.random();
}

// hàm random
// function funcRandom(a, b) {
// 	return 0.5 - Math.random();
// 	var item = items[Math.floor(Math.random() * items.length)];
// }

export const randomArray = (v, k) => {
	const listId = v.map((i) => i.id);
	const resultSort = listId.sort(func);
	if (listId.length <= k) {
		return v;
	} else {
		const res = resultSort.slice(0, k);

		return finElementId(v, res);
	}
};

const finElementId = (v, u) => {
	let a = [];
	u.forEach((element) => {
		const res = v.find((x) => x.id === +element);

		a.push(res);
	});

	return a;
};
