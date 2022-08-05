export interface Section {
    id: string;
    title: string;
    tasksID: string[];
    // ---
    projectID?: string;
}

export interface AddSectionData {
    title: string;
    // ---
    projectID?: string;
}
