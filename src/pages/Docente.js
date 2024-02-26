import React from 'react'
import { Link } from "react-router-dom";

export default function Docente() {
    return(
        
            <React.Fragment>
	
                <main className="full-box main-container">
                    
                    <section className="full-box nav-lateral">
                        <div className="full-box nav-lateral-bg show-nav-lateral"></div>
                        <div className="full-box nav-lateral-content">
                            <figure className="full-box nav-lateral-avatar">
                                <i className="far fa-times-circle show-nav-lateral"></i>
                                
                                <img src="/assets/avatar/Avatar_negro.jpg" className="img-fluid" alt="Avatar"/>
                                <figcaption className="roboto-medium text-center">
                                Nombre de docente <br/><small className="roboto-condensed-light"><p><span className="badge badge-success">Docente</span></p></small>
                                </figcaption>
                            </figure>
                            <div className="full-box nav-lateral-bar"></div>
                            <nav className="full-box nav-lateral-menu">
                                <ul>
                                    <li>
                                    <Link to={'/Docente'}>
                                        <i class="fab fa-dashcube fa-fw"></i> &nbsp; Inicio
                                    </Link>
                                    </li>
                                    <li>
                                        <a href="#" className="nav-btn-submenu"><i className="fas fa-layer-group fa-fw"></i> &nbsp; Cursos <i className="fas fa-chevron-down"></i></a>
                                        <ul>	
                                        
                                            <li>
                                                <Link to={'/Docenteelegircurso'}>
                                                <a ><i class="fas fa-clipboard-list fa-fw"></i> &nbsp; Elegir Cursos</a>
                                                </Link>	
                                            </li>
                                        							
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" className="nav-btn-submenu"><i className="fas fa-users fa-fw"></i> &nbsp;  Estudiantes <i className="fas fa-chevron-down"></i></a>
                                        <ul>  
                                        
                                        <li>
                                            <Link to={'/Docenteestudiantelista'}>
                                            <a ><i class="fas fa-clipboard-list fa-fw"></i> &nbsp; Lista De Estudiante</a>
                                            </Link>
                                        </li>
                                        
                                        
                                        <li>
                                            <Link to={'/Docentebuscarestudiante'}>
                                            <a ><i class="fas fa-search fa-fw"></i> &nbsp; Buscar Estudiante</a>
                                            </Link>
                                        </li>
                                        
                                        </ul>
                                    </li>
                                    <li>
                                    <Link to={'/DocenteReclamos'}>
                                        <i class="fas fa-exclamation-circle fa-fw"></i> &nbsp; Reclamos
                                    </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </section>

                    
                    <section className="full-box page-content">
                        <nav className="full-box navbar-info">
                            <a className="float-left show-nav-lateral">
                                <i className="fas fa-exchange-alt"></i>
                            </a>
                            <Link to={'/Docenteuserupdate'}>
                            <a >
                                <i className="fas fa-user-cog"></i>
                            </a>
                            </Link>
                            <a className="btn-exit-system">
                                <i className="fas fa-power-off"></i>
                            </a>
                        </nav>

                        
                        <img src="/assets/img/logotipo-6.jpeg" alt="Logotipo del colegio" className="logo-img"/>
                        <div className="full-box page-header">	
                            <h3 className="text-left">
                                <i className="fab fa-dashcube fa-fw"></i> &nbsp; INICIO
                            </h3>
                            <p className="eslogan text-justify">
                                "Un camino transparente hacia el éxito académico: Descubre la excelencia con nuestro innovador sistema de registro de usuarios y notas escolares."
                            </p>
                        </div>
                        
                        <div className="full-box tile-container">

                            <a href="/Docenteelegircurso" className="tile">
                                <div className="tile-tittle">Elegir Curso</div>
                                <div className="tile-icon">
                                    <i className="fas fa-layer-group fa-fw"></i>
                                    <p>3 Registrados</p>
                                </div>
                            </a>
                            <a href="Docenteestudiantelista" className="tile">
                                <div className="tile-tittle">Estudiantes</div>
                                <div className="tile-icon">
                                    <i className="fas fa-users fa-fw"></i>
                                    <p>100 Registrados</p>
                                </div>
                            </a>
                        </div>
                        
                    </section>
                </main>
                
                <footer className="footer">
                    <div className="footer-container">
                    <div className="row">
                        <div className="col-12">
                            <p>Derechos de autor </p>
                            <p>&copy; Plantilla: https://designlopers.com/</p>
                        </div>
                    </div>
                    </div>
                </footer>
                
            </React.Fragment>
        
    )
}