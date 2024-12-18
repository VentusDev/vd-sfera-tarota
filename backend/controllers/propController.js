import propModel from '../models/propModel.js';
import userModel from '../models/userModel.js';
//import fs from 'fs';
import { customErrors, customInfo } from '../utils/variables.js';

const addProp = async (req, res) => {
	const { name } = req.body;
	const catAlreadyExists = await propModel.findOne({ name });

	if (catAlreadyExists) {
		return res
			.status(400)
			.json({ success: false, message: customErrors.default });
	}

	let user = '';
	if (req.userId) {
		user = await userModel.findById(req.userId);
	}

	const props = new propModel({
		name: name,
		userId: user?._id,
		description: req.body.description,
        price: req.body.price
	});
	try {
		await props.save();
		res.json({ success: true, message: customInfo.catSavedSuccess });
	} catch (error) {
		console.log(error);

		res.json({ success: false, message: customErrors.catDosentSaved });
	}
};

const listProps = async (req, res) => {
	try {
		const prop = await propModel.find({});
		res.json({ success: true, data: prop });
	} catch (error) {
		res.json({ success: false, message: customErrors.loadListField });
	}
};

const removeProp = async (req, res) => {
	try {
		let user = '';
		if (req.userId) {
			user = await userModel.findById(req.userId);
		}

		const item = await propModel.findById(req.body.id);

		const { id } = user;
		if (user.isMaster || item.userId === id) {
			await propModel.findByIdAndDelete(req.body.id);
			res.json({ success: true, message: customInfo.propRemoved });
		} else {
			res.json({ success: false, message: customErrors.noPermissions });
		}
	} catch {
		res.json({ success: false, message: customErrors.default });
	}
};

const updateProp = async (req, res) => {
	try {
		let user = '';
		if (req.userId) {
			user = await userModel.findById(req.userId);
		}
		const { id } = user;
		const item = await propModel.findById(req.body.id);
		if (user.isMaster || item.userId === id) {
			await propModel.findByIdAndUpdate(req.body.id, {
				name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                userId: user?._id,
			});

			res.json({ success: true, message: customInfo.propUpdated });
		} else {
			res.json({ success: false, message: customErrors.noPermissions });
		}

	} catch (error) {
		console.log(error);
		res.json({ success: false, message: customErrors.default });
	}
};

export { addProp, listProps, removeProp, updateProp };
