import * as express from 'express';
import { Types } from 'mongoose';
import { collections } from '../services/database.service';
import { EndeavorModel } from '../types/EndeavorModel';


export const endeavorsRouter = express.Router();
endeavorsRouter.use(express.json());





endeavorsRouter.get('/', async (req: express.Request, res: express.Response) => {
    const page = parseInt(req.query.page as string) || 1;
    const perPage = parseInt(req.query.perPage as string) || 3;

    try {
        const endeavors = await collections.endeavors!
            .find()
            .skip((page - 1) * perPage)
            .limit(perPage)
            .toArray();

        res.status(200).json(endeavors);
    } catch (error) {
        res.status(500).send('Error fetching endeavors from database');
    }
});

endeavorsRouter.get('/count', async (_req: express.Request, res: express.Response) => {
    try {
        const count = await collections.endeavors!.countDocuments();
        res.status(200).json({ total: count });
    } catch (error) {
        res.status(500).send('Error fetching endeavor count from database');
    }
});

endeavorsRouter.get('/:id', async (req: express.Request, res: express.Response) => {
    const id = req?.params?.id;
    try {
        const query = { _id: new Types.ObjectId(id) };
        const endeavor = await collections.endeavors!.findOne(query);
        if (!endeavor) {
            res.status(404).send('Endeavor not found');
            return;
        }
        res.status(200).json(endeavor);
    } catch (error) {
        res.status(500).send('Error fetching endeavor from database');
    }
}
);

endeavorsRouter.post('/', async (req: express.Request, res: express.Response) => {
    try {
        const endeavor : EndeavorModel = req.body ;
        const result = await collections.endeavors!.insertOne(endeavor);
        result 
        ? res.status(201).json(result)
        : res.status(404).send('Error creating endeavor');;
    } catch (error) {
        res.status(500).send('Error creating endeavor');
    }
}
);

endeavorsRouter.put('/:id', async (req: express.Request, res: express.Response) => {
    const id = req?.params?.id;
    try {
        const query = { _id: new Types.ObjectId(id) };
        const result = await collections.endeavors!.updateOne(query, { $set: req.body });
        result.modifiedCount > 0
        ? res.status(200).send('Endeavor updated successfully')
        : res.status(404).send('Endeavor not found');
    } catch (error) {
        res.status(500).send('Error updating endeavor');
    }
}
);

endeavorsRouter.delete('/:id', async (req: express.Request, res: express.Response) => {
    const id = req?.params?.id;
    try {
        const query = { _id: new Types.ObjectId(id) };
        const result = await collections.endeavors!.deleteOne(query);
        result.deletedCount > 0
        ? res.status(200).send('Endeavor deleted successfully')
        : res.status(404).send('Endeavor not found');
    } catch (error) {
        res.status(500).send('Error deleting endeavor');
    }
}
);

export default endeavorsRouter;