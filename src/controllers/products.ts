import { Request, Response } from "express";

export const getAllProducts = (req: Request, res: Response) => {
	res.status(200).json({
		sucess: true,
		products: {
			name: 'osidh'
		}
	})
}