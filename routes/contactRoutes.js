const express = require("express")
const router = express.Router();


// controller for handling the contact logic

const { getContacts, createContact, deleteContact, updateContact, getContact } = require("../controllers/contactController");


// to get all contacts
router.route("/").get(getContacts);
//to create a contact
router.route("/").post(createContact);
//get a single contact
router.route("/:id").get(getContact);
//update a contact
router.route("/:id").put(updateContact);
//delete a conatct
router.route("/:id").delete(deleteContact);


module.exports = router;