import { ObjectId } from "mongoose";

type TaskModel = {
    name: string;
    description: string;
    status: string;
    startDate: string;
    endDate: string;
    investment: number;
    participants: string[];
}

 interface EndeavorModel {
    id?: ObjectId;
    name: string;
    description: string;
    status: string;
    startDate: string;
    endDate: string;
    priority : 1 | 2 | 3 | 4 | 5; // 1 is the highest priority and 5 is the lowest
    owner: string;
    type : 'personal' | 'professional' | 'educational';
    participants: string[];
    tasks: TaskModel[];
};

export type { EndeavorModel, TaskModel };