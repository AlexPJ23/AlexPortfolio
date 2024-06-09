import { TaskModel } from './EndeavorModel';
export type ProjectModel =
{
    _id: string;
    name: string;
    description: string;
    status: 'in progress' | 'completed' | 'not started' | 'on hold' | 'canceled';
    startDate: string;
    endDate: string;
    priority : 1 | 2 | 3 | 4 | 5; // 1 is the highest priority and 5 is the lowest
    owner: string;
    participants: string[];
    tasks: TaskModel[];
};
