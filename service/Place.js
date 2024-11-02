const asyncHandler = require("express-async-handler");
const ApiError = require("../Utility/ErroreApi");
const ApiFeatures = require("../Utility/apifeatcher");
 
const factor = require("./Handler");
const Notfs = require("../model/notf");
const Place = require("../model/place");
 
exports.C_Place=asyncHandler(async(req,res,next)=>{
const placee =await Place.create({
    Name:req.body.Name,
 
})
if(!placee){
    return next(new ApiError("the place is not created",404))
}
res.status(201).json(placee)
})
exports.G_Place=  asyncHandler(async (req, res,next) => {
 
 const data=await Place.find()
   
    res
      .status(200)
      .json(data);
  });
exports.GO_Place=factor.getOne(Place)
exports.U_Place=factor.updateOne(Place)
exports.D_Place=factor.deleteOne(Place)