export interface Section {
    id: string;
    title: string;
    tasksID: string[];
    // ---
    projectID: string | null;
}

export interface AddSectionDTO {
    title: string;
    // ---
    projectID: string | null;
}
