import itemsModel from '../models/itemsModel.js';
//import fs from 'fs';
import { customInfo, customErrors } from '../utils/variables.js';
import categoryModel from '../models/categoryModel.js';
import userModel from '../models/userModel.js';
import propModel from '../models/propModel.js';

const addItems = async (req, res) => {
	let user = '';
	if (req.userId) {
		user = await userModel.findById(req.userId);
	}
	let image_filename = req.file ? `${req.file.filename}` : 'default.png';

	const items = new itemsModel({
		name: req.body.name,
		description: req.body.description,
		price: req.body.price,
		category: req.body.category,
		image: image_filename,
		userId: user?._id,
		size: req.body.size,
	});
	try {
		await items.save();
		res.json({ success: true, message: customInfo.itemAdded });
	} catch (error) {
		res.json({ success: false, message: customErrors.default });
	}
};

const itemsList = async (req, res) => {
	try {
		const items = await itemsModel.find({});

		for (const item of items) {
			let cat = await categoryModel.findById(item.category);

			if (cat?.category !== 'undefined' && cat?.category) {
				let prop = await propModel.findById(cat?.category);

				if (prop) {
					item.size = prop.description.split(',');
				}
			}
		}
		res.json({ success: true, data: items });
	} catch (error) {
		res.json({ success: false, message: customErrors.default });
	}
};

const itemsCat = async (req, res) => {
	try {
		const items = await itemsModel.find({});
		let catArr = [];
		Object.entries(items).map(([item, i]) => {
			if (!(i['category'] == 'undefined') && !catArr.includes(i['category'])) {
				catArr.push(i['category']);
			}
		});
		const category = await categoryModel.find({});

		const filteredArray = category.filter((item) =>
			catArr.includes(item._id.toString())
		);

		res.json({ success: true, data: filteredArray });
	} catch (error) {
		res.json({ success: false, message: customErrors.default });
	}
};

const removeItem = async (req, res) => {
	try {
		let user = '';
		if (req.body.userId) {
			user = await userModel.findById(req.body.userId);
		}

		const item = await itemsModel.findById(req.body.id);
		const { id } = user;

		if (user.isMaster || item.userId === id) {
			if (item.image !== 'default.png') {
				//fs.unlink(`uploads/${item.image}`,()=>{})
			}
			await itemsModel.findByIdAndDelete(req.body.id);
			res.json({ success: true, message: customInfo.itemRemoved });
		} else {
			res.json({ success: false, message: customErrors.noPermissions });
		}
	} catch {
		res.json({ success: false, message: customErrors.default });
	}
};

const updateItem = async (req, res) => {
	let user = '';
	if (req.userId) {
		user = await userModel.findById(req.userId);
	}
	const { id } = user;
	const item = await itemsModel.findById(req.body.id);
	try {
		if (user.isMaster || item.userId === id) {
			if (item.image !== 'default.png') {
				//fs.unlink(`uploads/${item.image}`,()=>{})
			}
			await itemsModel.findByIdAndUpdate(req.body.id, {
				name: req.body.name,
				description: req.body.description,
				price: req.body.price,
				category: req.body.category,
				size: req.body.size,
			});
			if (req.file) {
				await itemsModel.findByIdAndUpdate(req.body.id, {
					image: req.file.filename,
					img: req.body.img,
				});
			}
			res.json({ success: true, message: customInfo.default });
		} else {
			res.json({ success: false, message: customErrors.noPermissions });
		}
	} catch (error) {
		console.log(error);
		res.json({ success: false, message: 'error' });
	}
};

export { addItems, itemsList, removeItem, updateItem, itemsCat };
