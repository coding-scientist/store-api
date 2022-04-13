"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = async (err, req, res, next) => {
    console.error(err);
    res.status(500).json({
        message: 'Something went wrong, please try again',
    });
    next();
};
exports.default = errorHandler;
//# sourceMappingURL=error-handler.js.map