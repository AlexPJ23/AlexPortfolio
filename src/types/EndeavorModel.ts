import { ObjectId } from "mongoose";

 interface EndeavorModel {
    id: ObjectId;
    title: string;
    description: string;
    status: 'in progress' | 'completed' | 'not started' | 'on hold' | 'canceled';
    created_at: string;
    update_at: string;
    priority : 1 | 2 | 3 | 4 | 5; // 1 is the highest priority and 5 is the lowest
    type : 'personal' | 'professional' | 'educational';
    tasks: string[];
};

export type { EndeavorModel };