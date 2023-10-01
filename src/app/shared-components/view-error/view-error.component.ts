import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  standalone: true,
  imports: [ViewErrorComponent],
  selector: 'app-view-error',
  templateUrl: './view-error.component.html',
  styleUrls: ['./view-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewErrorComponent {

}
