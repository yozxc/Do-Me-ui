export interface Section {
    id: string;
    title: string;
    tasksID: string[];
    // ---
    projectID: string | null;
}

export interface AddSectionData {
    title: string;
    // ---
    projectID: string | null;
}
