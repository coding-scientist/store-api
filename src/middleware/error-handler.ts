import { NextFunction, Request, Response } from 'express';

const errorHandler = async (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	console.error(err);
	res.status(500).json({
		message: 'Something went wrong, please try again',
	});
	next();
};

export default errorHandler;
