const express = require("express");
const router = express.Router();
const get_validation = require("../Validation/categoryvalidation");
const { protect, toAllow } = require("../service/Auth");
 
const { cr_product } = require("../Utility/Validation/product_validation");
const { G_Place, C_Place, GO_Place, U_Place, D_Place } = require("../service/Place");
router
  .route("/")
  .get(G_Place).post( C_Place)
  router
  .route("/:id")
  .get(GO_Place)
  .put(U_Place)
  .delete(D_Place)
const PlaceRoute=router
module.exports = PlaceRoute;