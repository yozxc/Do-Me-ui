import { Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-add-label',
    templateUrl: './add-label.component.html',
    styleUrls: ['./add-label.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddLabelComponent implements OnInit {
    colors = [
        { name: 'Berry Red', styleCls: 'bg-berryRed' },
        { name: 'Red', styleCls: 'bg-red' },
        { name: 'Orange', styleCls: 'bg-orange' },
        { name: 'Yellow', styleCls: 'bg-yellow' },
        { name: 'Olive Green', styleCls: 'bg-oliveGreen' },
        { name: 'Lime Green', styleCls: 'bg-limeGreen' },
        { name: 'Green', styleCls: 'bg-green' },
        { name: 'Mint Green', styleCls: 'bg-mintGreen' },
        { name: 'Teal', styleCls: 'bg-teal' },
        { name: 'Sky Blue', styleCls: 'bg-skyBlue' },
        { name: 'Light Blue', styleCls: 'bg-lightBlue' },
        { name: 'Blue', styleCls: 'bg-blue' },
        { name: 'Grape', styleCls: 'bg-grape' },
        { name: 'Violet', styleCls: 'bg-violet' },
        { name: 'Lavender', styleCls: 'bg-lavender' },
        { name: 'Magenta', styleCls: 'bg-magenta' },
        { name: 'Salmon', styleCls: 'bg-salmon' },
        { name: 'Charcoal', styleCls: 'bg-charcoal' },
        { name: 'Grey', styleCls: 'bg-grey' },
        { name: 'Taupe', styleCls: 'bg-taupe' },
    ];
    currentColorID: number = 0;

    isColorListActive: boolean = false;

    constructor(private router: Router) {}

    ngOnInit(): void {}

    toggleIsColorListActive() {
        this.isColorListActive = !this.isColorListActive;
    }

    setCurrentColorID(id: number) {
        this.currentColorID = id;
        this.isColorListActive = false;
    }

    onCancel() {
        this.router.navigate([this.router.url]);
    }
}
