import { Project } from './../app/core/types/projectType';

export const projectsList: Project[] = [
    {
        id: 'projectID_1',
        title: 'project_1',
        colorCls: 'berryRed',
        todoTasks: 4,
        noSectionTasks: [
            {
                taskID: 'noSectionTaskID_1',
                taskName: 'todo_1',
                isChecked: true,
                priority: 1
            },
            {
                taskID: 'noSectionTaskID_2',
                taskName: 'todo_2',
                isChecked: false,
                priority: 4
            }
        ],
        sections: [
            {
                id: 'sectionID_1',
                title: 'todo_section_1',
                tasksList: [
                    {
                        taskID: 'sectionTask_1',
                        taskName: 'todo smth :)',
                        taskDescription: 'task description',
                        isChecked: true,
                        priority: 1
                    },
                    {
                        taskID: 'sectionTask_2',
                        taskName: 'todo_2',
                        isChecked: false,
                        priority: 3
                    }
                ]
            },
            {
                id: 'sectionID_1',
                title: 'section 2',
                tasksList: [
                    {
                        taskID: 'sectionTask_11',
                        taskName: 'todo smth :)',
                        taskDescription: 'task description',
                        isChecked: false,
                        priority: 1
                    },
                    {
                        taskID: 'sectionTask_22',
                        taskName: 'todo_2',
                        isChecked: false,
                        priority: 3
                    }
                ]
            }
        ]
    }
];
