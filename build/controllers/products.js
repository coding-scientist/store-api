"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProducts = void 0;
const getAllProducts = (req, res) => {
    res.status(200).json({
        sucess: true,
        products: {
            name: 'osidh'
        }
    });
};
exports.getAllProducts = getAllProducts;
//# sourceMappingURL=products.js.map