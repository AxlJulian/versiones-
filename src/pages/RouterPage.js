import React from 'react'
import {BrowserRouter as Router,  Routes, Route} from 'react-router-dom'
import Home from './Home'
import Docente from './Docente'
import Docentebuscarestudiante from './DocenteBuscarestudiante'
import Docenteelegircurso from './Docenteelegircurso'
import Docenteestudiantelista from './Docenteestudiantelista'
import DocenteReclamos from './DocenteReclamos'
import Docenteuserupdate from './Docenteuserupdate'

import Estudiante from './Estudiante'
import Estudianteinfornotas from './EstudianteinfoNotas'
import EstudianteMaterias from './EstudianteMateria'
import EstudianteuserUpdate from './EstudianteuserUpdate'

import Secretaria from './Secretaria'
import Secretariaestudiantelista from './Secretariaestudiantelista'
import Secretariabuscarestudiante from './Secretariabuscarestudiante'
import Secretariadocentelista from './Secretariadocentelista'
import Secretariadocentebuscar from './Secretariadocentebuscar'
import Secretariacursoslista from './Secretariacursoslista'
import Secretariacursobuscar from './Secretariacursobuscar'
import Secretariamaterialista from './Secretariamaterialista'
import Secretariareclamos from './Secretariareclamos'
import Secretariaactualizar from './Secretariaactualizar'

import Prueba from './Prueba'

export default function RouterPage() {
    return(
        <div>
            <Router>
                <Routes>
                    <Route path='/Home' exact Component={Home}/>
                    <Route path='/Docente' exact Component={Docente}/>
                    <Route path='/DocenteBuscarestudiante' exact Component={Docentebuscarestudiante}/>
                    <Route path='/Docenteelegircurso' exact Component={Docenteelegircurso}/>
                    <Route path='/Docenteestudiantelista' exact Component={Docenteestudiantelista}/>
                    <Route path='/DocenteReclamos' exact Component={DocenteReclamos}/>
                    <Route path='/Docenteuserupdate' exact Component={Docenteuserupdate}/>

                    <Route path='/Estudiante' exact Component={Estudiante}/>
                    <Route path='/EstudianteinfoNotas' exact Component={Estudianteinfornotas}/>
                    <Route path='/EstudianteMateria' exact Component={EstudianteMaterias}/>
                    <Route path='/EstudianteuserUpdate' exact Component={EstudianteuserUpdate}/>

                    <Route path='/Secretaria' exact Component={Secretaria}/>
                    <Route path='/Secretariaestudiantelista' exact Component={Secretariaestudiantelista}/>
                    <Route path='/Secretariabuscarestudiante' exact Component={Secretariabuscarestudiante}/>
                    <Route path='/Secretariadocentelista' exact Component={Secretariadocentelista}/>
                    <Route path='/Secretariadocentebuscar' exact Component={Secretariadocentebuscar}/>
                    <Route path='/Secretariacursoslista' exact Component={Secretariacursoslista}/>
                    <Route path='/Secretariacursobuscar' exact Component={Secretariacursobuscar}/>
                    <Route path='/Secretariamaterialista' exact Component={Secretariamaterialista}/>
                    <Route path='/Secretariareclamos' exact Component={Secretariareclamos}/>
                    <Route path='/Secretariaactualizar' exact Component={Secretariaactualizar}/>

                    {/*<Route path='/Prueba' exact Component={Prueba}/>}*/}

                </Routes>
            </Router>
        </div>
        
    )
}