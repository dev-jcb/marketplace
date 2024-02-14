import Product from "../models/product.model.js";
import extend from "lodash/extend.js";
import errorHandler from "./error.controller.js";

const create = async (req, res) => {
    const product = new Product(req.body);

    try{
        await product.save();

        return res.status(200).json({
            message: `${product.name} has been created.`
        });
    } catch (ex) {
        return res.status(500).json({
            error: errorHandler.getErrorMessage(ex)
        });
    };
};

const getAll = async (req, res)=>{
    try {
        
        if(req.query && req.query.name)
        {
            let product = await Product.findOne({"name": req.query.name}).select("name description price quantity category");
            if(!product)
            {
                return res.status(404).json({
                    error:`Product ${req.query.name} does not exist.`
                });
            }

            res.status(200).json(product);
            return; 
        }

        let products = await Product.find().select("name description price quantity category");
        res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({
            error: errorHandler.getErrorMessage(error)
        });
    };
};

const idSearchParam = async (req, res, next, id) => {
    try{
        let product = await Product.findById(id);

        if(!product) {
            return res.status(404).json({
                error:`Product ${id} does not exist.`
            });
        }

        req.result = product;
        next();
    } catch (error) {
        return res.status(500).json({
            error: "Failed to retrieve product."
        });
    }
};

const getById = (req, res) => {
    return res.status(200).json(req.result);
};

const update = async(req, res) =>{
    try{
        let product = req.result;
        product = extend(product, req.body);
        await product.save();

        res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({
            error: errorHandler.getErrorMessage(error)
        });
    };
};

const remove = async (req, res) => {
    try {
        let product = req.result;
        let deletedProduct = await product.deleteOne();

        res.status(200).json(deletedProduct);
    } catch(error) {
        return res.status(500).json({
            error: errorHandler.getErrorMessage(error)
        });
    }
}

const deleteAll = async (req, res) => {
    try {
        let deletedProucts = await Product.deleteMany({});

        res.status(200).json(deletedProucts);
    } catch(error) {
        return res.status(500).json({
            error: errorHandler.getErrorMessage(error)
        });
    }
}


export default {create, getAll, idSearchParam, getById, update, remove, deleteAll};