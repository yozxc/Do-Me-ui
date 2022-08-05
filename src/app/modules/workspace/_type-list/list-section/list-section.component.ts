import { TasksService } from './../../../../core/store/tasks/tasks.service';
import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { SectionsQuery } from '@core/store/sections/sections.query';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { AddTaskData } from '@app/core/types/domain/task';
import { Section } from '@app/core/types/domain/section';
import { SectionsService } from '@core/store/sections/sections.service';

@Component({
    selector: 'app-list-section',
    templateUrl: './list-section.component.html',
    styleUrls: ['./list-section.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListSectionComponent implements OnInit, OnDestroy {
    taskEditorState: boolean = false;
    isChangingTitle: boolean = false;
    changeButtonDisabled: boolean = false;
    isClosed$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    @Input() sectionID!: string;

    section$!: Observable<Section>;
    sectionSub!: Subscription;
    sectionData!: Section;

    titleFormControl!: UntypedFormControl;

    constructor(private tasksService: TasksService, private sectionsService: SectionsService, private sectionsQuery: SectionsQuery) {}

    ngOnInit(): void {
        console.log(this.sectionID);
        this.section$ = this.sectionsQuery.selectSection(this.sectionID);

        this.sectionSub = this.section$.subscribe((section) => (this.sectionData = section));
        this.titleFormControl = new UntypedFormControl(this.sectionData.title);
        this.titleFormControl.valueChanges.subscribe((value) => (this.changeButtonDisabled = !value.length));
    }

    ngOnDestroy(): void {
        this.sectionSub.unsubscribe();
    }

    saveTitle(listTitle: string) {
        // this.listTitle = listTitle;
        this.isChangingTitle = false;
    }

    toggleIsClosed() {
        this.isClosed$.next(!this.isClosed$.getValue());
    }

    addTask(taskData: AddTaskData) {
        this.setSectionID(taskData);
        this.tasksService.addTask(taskData);
    }

    setSectionID(obj: any) {
        obj.sectionID = this.sectionID;
    }

    onSave() {
        if (this.titleFormControl.value.length) {
            this.sectionsService.updateTitle(this.sectionID, this.titleFormControl.value);
            this.isChangingTitle = false;
        }
    }

    onCancel() {
        this.isChangingTitle = false;
        this.titleFormControl.setValue(this.sectionData.title);
    }
}
