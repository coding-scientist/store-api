"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const products_1 = require("../controllers/products");
const router = (0, express_1.Router)();
exports.productRouter = router;
router.route('/').get(products_1.getAllProducts);
//# sourceMappingURL=products.js.map