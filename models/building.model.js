const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const floorsSchema = new Schema({
	label: { type: String, required: true },
	availableSpace: { type: Number, required: true },
	occupier: { type: String, default: '' },
	disabled: { type: Boolean, required: true, default: false },
});

const buildingSchema = new Schema({
	name: { type: String, required: true },
	type: { type: String, required: true },
	description: { type: String, required: true },
	status: { type: String, required: true },
	grossArea: { type: Number, required: true },
	location: { type: String, required: true },
	imageSrc: { type: String, required: true },
	addedOn: { type: Date, default: Date.now },
	floors: [floorsSchema],
});

module.exports = mongoose.model('Buildings', buildingSchema);
