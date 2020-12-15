const express = require("express");
const router = express.Router();
const { update} = require("../controllers/category");
const { create} = require("../controllers/category");
const { DeleteCategory } = require("../controllers/category");
const { getcategory } = require("../controllers/category");


const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const { categoryById } = require("../controllers/category");

const category = require("../models/category");


router.post("/category/create/:userId", requireSignin, isAuth, isAdmin, create)
router.put("/category/update/:categoryId/:userId",requireSignin,isAuth,isAdmin,update)
router.delete("/category/delete/:categoryId/:userId",requireSignin,isAuth,isAdmin,DeleteCategory)
router.get("/category/getallcategory/",getcategory)

router.param("userId",userById);
router.param("categoryId",categoryById);

module.exports = router;
