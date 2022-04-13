"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexRouter = void 0;
const express_1 = require("express");
const index_1 = require("../controllers/index");
const router = (0, express_1.Router)();
exports.indexRouter = router;
router.route('/').get(index_1.get);
//# sourceMappingURL=index.js.map