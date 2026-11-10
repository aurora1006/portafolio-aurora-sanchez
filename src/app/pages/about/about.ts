import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {

  readonly email = 'aurora.sanchez@live.com.mx';

  readonly linkedin =
    'https://www.linkedin.com/in/aurora-antonia-sanchez-calva/';

  readonly curriculum =
    'https://drive.google.com/file/d/1tnc1S35OfYQ8kaXr5DsZnccLNXKCVs62/view?usp=sharing';

}