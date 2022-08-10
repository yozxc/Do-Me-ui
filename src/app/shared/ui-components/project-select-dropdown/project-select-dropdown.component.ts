import { ProjectsQuery } from '@core/store/projects/projects.query';
import { Observable } from 'rxjs';
import { SectionsQuery } from '@core/store/sections/sections.query';
import { Section } from '@core/types/domain/section';
import {
    Component,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    EventEmitter,
    Output,
    AfterViewChecked,
    ElementRef,
    ViewChild,
    Input,
    Renderer2,
    OnInit
} from '@angular/core';
import { Project } from '@app/core/types/domain/project';
import { SelectedProject } from '@app/core/types/realization/selectedProject';

@Component({
    selector: 'ui-project-select-dropdown',
    templateUrl: './project-select-dropdown.component.html',
    styleUrls: ['./project-select-dropdown.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectSelectDropdownComponent implements OnInit, AfterViewChecked {
    isVisible: boolean = false;

    @Input() projectID: string | null = null;
    @Input() sectionID: string | null = null;

    @Output() setSelectedEvent: EventEmitter<SelectedProject> = new EventEmitter();
    @Output() closeEvent: EventEmitter<any> = new EventEmitter();

    @ViewChild('menuView') menuView?: ElementRef;

    inboxSections$!: Observable<Section[]>;
    projects$!: Observable<Project[]>;

    selectedProject: SelectedProject = {
        projectID: null,
        sectionID: null
    };

    constructor(
        private cdr: ChangeDetectorRef,
        private render: Renderer2,
        private projectsQuery: ProjectsQuery,
        public sectionsQuery: SectionsQuery
    ) {}

    // todo : check for close
    log(...qwe: any) {
        console.log(qwe);
        return true;
    }

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

    //

    // todo : to direcitve
    // this is setting menu to be visible in viewport
    ngAfterViewChecked(): void {
        if (!this.menuView) return;

        const element = this.menuView.nativeElement;
        const coordinates = this.menuView.nativeElement.getBoundingClientRect();

        if (coordinates.bottom > window.innerHeight) {
            this.render.setStyle(element, 'top', `calc(50% - ${coordinates.bottom - window.innerHeight + 5}px)`);
        }
        if (coordinates.top < 0) {
            this.render.setStyle(element, 'top', `calc(50% + ${coordinates.top * -1 + 5}px)`);
        }
        if (coordinates.left < 0) {
            this.render.setStyle(element, 'left', `calc(50% + ${coordinates.left * -1 + 5}px)`);
        }
        if (coordinates.right > window.innerWidth) {
            this.render.setStyle(element, 'left', `calc(50% - ${coordinates.right - window.innerWidth + 5}px)`);
        }
    }
}
