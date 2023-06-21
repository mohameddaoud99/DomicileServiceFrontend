import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import {DashboardDemoComponent} from './demo/view/dashboarddemo.component';
import {FormLayoutDemoComponent} from './demo/view/formlayoutdemo.component';
import {FloatLabelDemoComponent} from './demo/view/floatlabeldemo.component';
import {InvalidStateDemoComponent} from './demo/view/invalidstatedemo.component';
import {InputDemoComponent} from './demo/view/inputdemo.component';
import {ButtonDemoComponent} from './demo/view/buttondemo.component';
import {TableDemoComponent} from './demo/view/tabledemo.component';
import {ListDemoComponent} from './demo/view/listdemo.component';
import {TreeDemoComponent} from './demo/view/treedemo.component';
import {PanelsDemoComponent} from './demo/view/panelsdemo.component';
import {OverlaysDemoComponent} from './demo/view/overlaysdemo.component';
import {MediaDemoComponent} from './demo/view/mediademo.component';
import {MessagesDemoComponent} from './demo/view/messagesdemo.component';
import {MiscDemoComponent} from './demo/view/miscdemo.component';
import {EmptyDemoComponent} from './demo/view/emptydemo.component';
import {ChartsDemoComponent} from './demo/view/chartsdemo.component';
import {FileDemoComponent} from './demo/view/filedemo.component';
import {DocumentationComponent} from './demo/view/documentation.component';
import {IconsComponent} from './utilities/icons.component';

import {AppMainComponent} from './app.main.component';
import {AppNotfoundComponent} from './pages/app.notfound.component';
import {AppErrorComponent} from './pages/app.error.component';
import {AppAccessdeniedComponent} from './pages/app.accessdenied.component';
import {AppLoginComponent} from './pages/app.login.component';
import {AppCrudComponent} from './pages/app.crud.component';
import {AppCalendarComponent} from './pages/app.calendar.component';
import {AppTimelineDemoComponent} from './pages/app.timelinedemo.component';
import {BlocksComponent} from './blocks/blocks/blocks.component';



import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AppHowItWorksComponent } from './components/app-how-it-works/app-how-it-works.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { LogindemandeurComponent } from './components/logindemandeur/logindemandeur.component';
import { InscriptionComponent } from './components/inscription/inscription.component';

import { AccepteComponent } from './components/Reparateur/DemandeService/accepte/accepte.component';
import { RefuserComponent } from './components/Reparateur/DemandeService/refuser/refuser.component';
import { EnattenteComponent } from './components/Reparateur/DemandeService/enattente/enattente.component';
import { DemanderaparateurComponent } from './components/demanderaparateur/demanderaparateur.component';
import { ReparateurDetailsComponent } from './components/reparateur-details/reparateur-details.component';
import { DemandeServiceComponent } from './components/demande-service/demande-service.component';



import { LoginReparateurComponent } from './components/Reparateur/login-reparateur/login-reparateur.component';
import { CreercompteComponent } from './components/Reparateur/creercompte/creercompte.component';
import { EvaluationserviceComponent } from './components/Reparateur/evaluationservice/evaluationservice.component';
import { ListeContactComponent } from './components/Reparateur/liste-contact/liste-contact.component'; 
import { HistoriqueServiceComponent } from './components/historique-service/historique-service.component'; 



@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [


                    
                    {path: 'uikit/formlayout', component: FormLayoutDemoComponent},
                    {path: 'uikit/floatlabel', component: FloatLabelDemoComponent},
                    {path: 'uikit/invalidstate', component: InvalidStateDemoComponent},
                    {path: 'uikit/input', component: InputDemoComponent},
                    {path: 'uikit/button', component: ButtonDemoComponent},
                    {path: 'uikit/table', component: TableDemoComponent},
                    {path: 'uikit/list', component: ListDemoComponent},
                    {path: 'uikit/tree', component: TreeDemoComponent},
                    {path: 'uikit/panel', component: PanelsDemoComponent},
                    {path: 'uikit/overlay', component: OverlaysDemoComponent},
                    {path: 'uikit/media', component: MediaDemoComponent},
                    {path: 'uikit/menu', loadChildren: () => import('./demo/view/menus/menus.module').then(m => m.MenusModule)},
                    {path: 'uikit/message', component: MessagesDemoComponent},
                    {path: 'uikit/misc', component: MiscDemoComponent},
                    {path: 'uikit/charts', component: ChartsDemoComponent},
                    {path: 'uikit/file', component: FileDemoComponent},
                    {path: 'utilities/icons', component: IconsComponent},
                    {path: 'pages/empty', component: EmptyDemoComponent},
                    {path: 'pages/crud', component: AppCrudComponent},
                    {path: 'pages/calendar', component: AppCalendarComponent},
                    {path: 'pages/timeline', component: AppTimelineDemoComponent},
                    {path: 'components/charts', component: ChartsDemoComponent},
                    {path: 'components/file', component: FileDemoComponent},
                    {path: 'documentation', component: DocumentationComponent},
                    {path: 'blocks', component: BlocksComponent},

                    {path: 'demandeservice/accepte', component: AccepteComponent},
                    {path: 'demandeservice/refuser', component: RefuserComponent},
                    {path: 'demandeservice/enattente', component: EnattenteComponent},
                    {path: 'demandeservice/Evaluation', component: EvaluationserviceComponent},
                    {path: 'ListContacts', component: ListeContactComponent},
                ]
            },

            {path: 'CreerCompteReparateur', component: CreercompteComponent},
            {path: 'loginReparateur', component: LoginReparateurComponent},
            {path: 'site/DemandeService/:id', component: DemandeServiceComponent },
            {path: 'site/reparateurs/:id', component: DemanderaparateurComponent },
            {path: 'site/ReparateurDetails/:id', component: ReparateurDetailsComponent },
            {path: 'site/home', component: HomeComponent},
            {path: 'site/about', component: AboutComponent},
            {path: 'site/how-it-works', component: AppHowItWorksComponent},
            {path: 'site/services', component: ServicesComponent},
            {path: 'site/contact/:id', component: ContactComponent},
            {path: 'site/loginDemandeur', component: LogindemandeurComponent},
            {path: 'site/signup', component: InscriptionComponent},
            {path: 'site/HistoriqueServices', component: HistoriqueServiceComponent},

            {path: 'error', component: AppErrorComponent},
            {path: 'accessdenied', component: AppAccessdeniedComponent},
            {path: 'notfound', component: AppNotfoundComponent},
            {path: 'login', component: AppLoginComponent},
            {path: '**', redirectTo: '/notfound'},
            {path: '', component: LoginReparateurComponent},


          


        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
