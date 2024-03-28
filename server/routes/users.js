const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
	try {
		// Validate the request body using the Joi schema
		const { error } = validate(req.body);
		// If validation fails, return a 400 Bad Request response with the validation error message
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		// Check if a user with the provided email already exists
		const user = await User.findOne({ email: req.body.email });
		// If a user with the email exists, return a 409 Conflict response
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		// Generate a salt for password hashing
		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		// Hash the user's password using bcrypt
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		// Create a new user instance with hashed password and save it to the database
		await new User({ ...req.body, password: hashPassword }).save();
		// Send a 201 Created response indicating successful user creation
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		// If an error occurs during the process, send a 500 Internal Server Error response
		res.status(500).send({ message: "Internal Server Error" });
	}
});


module.exports = router;