import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '@app/core/types/domain/project';
import { SelectedProject } from '@app/core/types/realization/selectedProject';
import { ProjectsQuery } from '@core/store/projects/projects.query';
import { SectionsQuery } from '@core/store/sections/sections.query';
import { Section } from '@core/types/domain/section';
import { Observable } from 'rxjs';

@Component({
    selector: 'ui-project-select-dropdown',
    templateUrl: './project-select-dropdown.component.html',
    styleUrls: ['./project-select-dropdown.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectSelectDropdownComponent implements OnInit {
    isVisible: boolean = false;

    @Input() projectID: string | null = null;
    @Input() sectionID: string | null = null;

    @Output() setSelectedEvent: EventEmitter<SelectedProject> = new EventEmitter();
    @Output() closeEvent: EventEmitter<any> = new EventEmitter();

    inboxSections$!: Observable<Section[]>;
    projects$!: Observable<Project[]>;

    selectedProject: SelectedProject = {
        projectID: null,
        sectionID: null
    };

    constructor(private cdr: ChangeDetectorRef, private projectsQuery: ProjectsQuery, public sectionsQuery: SectionsQuery) {}

    ngOnInit(): void {
        this.selectedProject = { projectID: this.projectID, sectionID: this.sectionID };
        this.inboxSections$ = this.sectionsQuery.selectInboxSections();
        this.projects$ = this.projectsQuery.selectAll();
    }

    getSectionObs(ids: string[]): Observable<Section[] | undefined> {
        return this.sectionsQuery.selectMany(ids);
    }

    setSelected(selected: SelectedProject) {
        this.selectedProject = selected;
        this.setSelectedEvent.emit(this.selectedProject);
    }

    toggleIsVisible() {
        this.isVisible = !this.isVisible;
        this.cdr.detectChanges();
    }

    close() {
        this.isVisible = false;
        this.closeEvent.emit();
    }
}
