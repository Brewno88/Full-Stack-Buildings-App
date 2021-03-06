const router = require('express').Router();
let Building = require('../models/building.model');
const e = require('express');

const buildingStructure = req => {
	return {
		name: req.body.name,
		type: req.body.type,
		description: req.body.description,
		status: req.body.status,
		grossArea: req.body.grossArea,
		location: req.body.location,
		imageSrc: req.body.imageSrc,
		floors: req.body.floors.map(floor => {
			return {
				label: floor.label,
				availableSpace: floor.availableSpace,
				occupier: floor.occupier,
				disabled: floor.disabled,
			};
		}),
	};
};

// @route GET api/buildings
// @desc Get ALL the buildings
// @access Public
router.get('/', async (req, res) => {
	try {
		const buildings = await Building.find().sort({ addedOn: -1 });
		res.status(200).json({
			success: true,
			count: buildings.length,
			data: buildings,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			error: `Error: ${error.message}`,
		});
	}
});

// @route GET api/buildings/:id
// @desc Get a SPECIFIC building
// @access Public
router.get('/:id', async (req, res) => {
	try {
		const building = await Building.findById(req.params.id);
		res.status(200).json(building);
	} catch (error) {
		res.status(404).json({ success: false, error: `Error: error.message` });
	}
});

// @route PATCH api/buildings/edit/:id
// @desc EDIT a building
// @access Public
router.patch('/:id', async (req, res) => {
	try {
		const updatedBuildings = await Building.findByIdAndUpdate(
			{ _id: req.params.id },
			buildingStructure(req)
		);
		res.status(200).json(updatedBuildings);
	} catch (error) {
		res.status(400).json({ success: false, error: `Error: error.message` });
	}
});

// @route POST api/buildings
// @desc ADD a building
// @access Public
router.post('/', async (req, res) => {
	const building = new Building(buildingStructure(req));
	try {
		const newBuilding = await building.save();
		res.status(201).json({
			success: true,
			data: newBuilding,
		});
	} catch (error) {
		if (error.name === 'ValidationError') {
			const messages = Object.values(err.errors).map(val => val.message);
			return res.status(400).json({
				success: false,
				error: messages,
			});
		} else {
			res
				.status(500)
				.json({ success: false, message: `Server Error: ${err.message}` });
		}
	}
});

// @route DELETE api/buildings/edit/:id
// @desc DELETE a building
// @access Public
router.delete('/:id', async (req, res) => {
	try {
		const removedBuilding = await Building.deleteOne({ _id: req.params.id });
		res.status(200).json({ success: true, removedBuilding });
	} catch (error) {
		res
			.status(404)
			.json({ success: false, message: `Error: ${error.message}` });
	}
});

module.exports = router;
