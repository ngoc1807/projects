export const formatDate = (e) => {
	if (e) {
		let ngay = e.substr(8, 2);
		let thang = e.substr(5, 2);
		let nam = e.substr(0, 4);
		return ngay + "/" + thang + "/" + nam;
	}
};

export const TitleToSlug = (str) => {
	// Chuyển hết sang chữ thường
	str = str.toLowerCase();

	// xóa dấu
	str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
	str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
	str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
	str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
	str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
	str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
	str = str.replace(/(đ)/g, "d");

	// Xóa ký tự đặc biệt
	str = str.replace(/([^0-9a-z-\s])/g, "");

	// Xóa khoảng trắng thay bằng ký tự -
	str = str.replace(/(\s+)/g, "-");

	// xóa phần dự - ở đầu
	str = str.replace(/^-+/g, "");

	// xóa phần dư - ở cuối
	str = str.replace(/-+$/g, "");

	// return
	return str;
};

export const GetUrlMenu = (str) => {
	let b = 0;
	let c = 0;

	for (let i = 0; i < str.length; i++) {
		//   console.log(a[i]);
		if (str[i] === "/") {
			b++;
		}
		if (b === 3) {
			c = i;
			return str.slice(0, c);
		}
	}

	return str;
};

export const handleShortString = (str, num) => {
	if (str && str.length > num) {
		let temp = str.slice(0, num);

		let index = temp.lastIndexOf(" ");

		let result = temp.slice(0, index).concat(" ...");

		return result;
	} else {
		return str;
	}
};

export const randomId = (length) => {
	var result = [];
	var characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	// var characters = "0123456789";

	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result.push(
			characters.charAt(Math.floor(Math.random() * charactersLength))
		);
	}
	return result.join("");
};

export const layout = {
	labelCol: {
		span: 24,
	},
	wrapperCol: {
		span: 24,
	},
};
export const tailLayout = {
	wrapperCol: { offset: 0, span: 0 },
};

export const RULES_ANTD = {
	common: [
		{
			required: true,
			message: "Bạn chưa  nhập đầy đủ thông tin",
		},
		{
			max: 200,
			message: "Quá dài",
		},
	],

	sale: [
		{
			required: true,
			// type: "regexp",
			pattern: new RegExp(/^[1-9][0-9]?$|^100$/g),
			message: "Nhập từ 1 đến 100",
		},
	],

	isIntegerForPrice: [
		{
			required: true,
			// type: "regexp",
			pattern: new RegExp(/^[0-9]\d{0,7}?$|^100000000$/g),
			message: "Nhập từ 0 đến 100,000,000",
		},
	],

	text: [
		{
			required: true,
			message: "Bạn chưa  nhập đầy đủ thông tin",
		},
	],

	isNumber: [
		{
			required: true,
			message: "Bạn chưa  nhập đầy đủ thông tin",
		},
	],

	text: [
		{
			required: true,
			message: "Bạn chưa  nhập đầy đủ thông tin",
		},
	],

	email: [
		{ required: true, message: "Bạn chưa nhập email" },
		{ type: "email", message: "VD: abc@gmail.com" },
	],

	name: [
		{ required: true, message: "Bạn chưa nhập họ tên" },
		{
			max: 100,
			message: "Tên quá dài",
		},
	],

	gender: [{ required: true, message: "Bạn chưa nhập giới tính" }],

	location_medical: [
		{
			required: true,
			message: "Bạn chưa chọn phòng tiêm",
		},
	],

	code_note: [
		{
			required: true,
			message: "Bạn chưa nhập mã sổ tiêm ",
		},
	],
	birth_day: [
		{
			required: true,
			message: "Bạn chưa chọn ngày sinh",
		},
	],

	phone: [
		{
			required: true,
			// type: "regexp",
			pattern: new RegExp(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g),
			message: "VD : 0312345678",
		},
	],

	address: [
		{
			required: true,
			message: "Bạn chưa nhập địa chỉ",
		},
		{
			max: 300,
			message: "Địa chỉ quá dài",
		},
	],
	provinces: [
		{
			required: true,
			message: "Bạn chưa chọn tỉnh thành",
		},
	],
	districts: [
		{
			required: true,
			message: "Bạn chưa chọn quận huyện",
		},
	],
	wards: [
		{
			required: true,
			message: "Bạn chưa chọn phường xã",
		},
	],

	contact_person_1_phone_number: [
		{
			required: true,
			message: "Bạn chưa nhập người liên hệ ",
		},
	],

	contact_relationship: [
		{
			required: true,
			message: "Bạn chưa chọn quan hệ ",
		},
	],

	type_injection: [
		{
			required: true,
			message: "Bạn chưa chọn kiểu tiêm ",
		},
	],
	location_medical: [
		{
			required: true,
			message: "Bạn chưa chọn địa điểm tiêm ",
		},
	],

	pathogen: [
		{
			required: true,
			message: "Bạn chưa chọn kháng nguyên ",
		},
	],
	date_injection: [
		{
			required: true,
			message: "Bạn chưa chọn ngày tiêm ",
		},
	],
	cate: [
		{
			required: true,
			message: "Bạn chưa chọn kiểu chụp",
		},
	],

	select: [
		{
			required: true,
			message: "Bạn chưa chọn thông tin",
		},
	],
};
