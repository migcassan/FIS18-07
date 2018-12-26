import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { MainMenuComponent } from './main-menu/main-menu.component';

const appRoutes = [];

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),  
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
/*
 <div class="panel panel-default">
        <div class="panel-heading">
            Log In
        </div>
        <div class="panel-body">
            <form action="">

                <div class="row">
                    <!-- <label for="emailU" class="col-md-1 control-label">Correo: </label> -->
                    <div class=".col-md-3">
                        <p>
                            <input class="form-control" id="emailU" placeholder="Correo">
                        </p>
                    </div>
                </div>

                <div class="row">
                    <!-- <label for="claveU" class="col-md-1 control-label">Contraseña: </label> -->
                    <div class="col-md-3">
                        <p>
                            <input type="password" class="form-control" id="claveU" placeholder="Contrase&ntilde;a">
                        </p>
                    </div>
                </div>

                <div class="row">
                    <label class="col-sm-1 control-label"></label>
                    <button type="button" id="registrar" class="btn btn-success col-md-2">Registrar</button>
                    <label class="col-sm-1 control-label"></label>
                    <button type="button" id="logIn" class="btn btn-info col-md-2">Iniciar Sesión</button>
                </div>
            </form>
        </div>
    </div>

*/