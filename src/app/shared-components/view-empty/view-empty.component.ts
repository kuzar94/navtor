import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  standalone: true,
  imports: [ViewEmptyComponent],
  selector: 'app-view-empty',
  templateUrl: './view-empty.component.html',
  styleUrls: ['./view-empty.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewEmptyComponent {

}
