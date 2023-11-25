const mongoose = require("mongoose");

const schema = mongoose.Schema;

const UserSchema = new Schema({
	username: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	handle: { type: String, required: true },
	birtday: { type: Date, required: true },
});

UserSchema.virtual("url").get(function ()
{
	// We don't use an arrow function as we'll need the this object
	return `/user/${this.handle}`;
});

module.exports = mongoose.model("user", UserSchema);