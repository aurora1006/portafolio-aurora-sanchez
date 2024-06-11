import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  email: string = "aurora.sanchez@live.com";
  frase: string = "El único modo de hacer un gran trabajo es amar lo que haces";
  items: MenuItem[] | undefined;
  proyectos!: any[];

  ngOnInit(): void {
    this.proyectos = [
      {
        name: 'Hackathon Danone México 2023',
        category: "CONCURSO",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7077472559021088768/"
      },
      {
        name: 'HazCuentas App',
        category: "App",
        url: "https://apps.apple.com/us/app/hazcuentas/id1556955814"
      },
      {
        name: "Preparación para certificación Java 17",
        category: "Certificaciones",
        url: "https://github.com/aurora1006/certificacion_java_17"
      }
    ];

    this.items = [
      {
        label: 'Acerca de mí',
        icon: 'pi pi-face-smile'
      },
      /*{
          label: 'Proyectos',
          icon: 'pi pi-briefcase',
          items: [
              {
                  label: 'Hackathon Danone México 2023',
                  icon: 'pi pi-trophy'
              },
              {
                  label: 'HazCuentas App',
                  icon: 'pi pi-apple'
              },
          ]
      },
      {
          label: 'Contacto',
          icon: 'pi pi-envelope'
      }*/
  ]
}

}
