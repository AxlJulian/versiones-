import React, {useState} from "react";
import { Link } from 'react-router-dom';


export default function Estudiante() {

	
	const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

	
    return(
        <React.Fragment>
            
	<main class="full-box main-container">
		
		<section class="full-box nav-lateral">
			<div class="full-box nav-lateral-bg show-nav-lateral"></div>
			<div class="full-box nav-lateral-content">
				<figure class="full-box nav-lateral-avatar">
				<i className="far fa-times-circle show-nav-lateral"></i>
					<figcaption className="SRMNPE text-center">
						SRUNPE <br/><small className="roboto-condensed-light"></small>
					</figcaption>
					<img src="../assets/avatar/Avatar_negro.jpg" className="img-fluid" alt="Avatar"/>
					<figcaption className="roboto-medium text-center">
						Nombre del estudiantel <br/><small className="roboto-condensed-light"><p><span className="badge badge-dark">Estudiante</span></p></small>
					</figcaption>
				</figure>
				<div class="full-box nav-lateral-bar"></div>
				<nav class="full-box nav-lateral-menu">
					<ul>
						<li >
							<Link to={'/Estudiante'}>
								<i class="fab fa-dashcube fa-fw" ></i> &nbsp;Inicio
							</Link>
                        	
						</li>
						<li>
								<Link to={'/EstudianteMateria'}>	
                                    <li>
                                        <i className="fas fa-clipboard-list fa-fw" ></i> &nbsp; Ver Mataterias
                                    </li>
                                </Link>	
							<ul>	
								<Link to={'/EstudianteMateria'}>	
                                    <li>
                                        <i className="fas fa-clipboard-list fa-fw" ></i> &nbsp; Ver Mataterias
                                    </li>
                                </Link>		
							</ul>
						</li>	
						{/*<li>
							<a ><i class="fas fa-exclamation-circle fa-fw"></i> &nbsp; Reclamos</a>
						</li>*/}
						<li>
							<span style={{color: 'white'}}>
								<a  className="nav-btn-submenu" onClick={toggleSubMenu}><i className="fas fa-info fa-fw"></i> &nbsp; Información <i className="fas fa-chevron-down"></i></a>
							<ul style={{ display: isSubMenuOpen ? 'block' : 'none' }}>
                                <Link to={'/Estudianteinfonotas'}>
                                    <li>
                                        <a ><i className="fas fa-clipboard-list fa-fw"></i> &nbsp; Notas</a>
                                    </li>		
                                </Link>
														
							</ul></span>
						</li>
					</ul>
				</nav>
			</div>
		</section>

		
		<section class="full-box page-content">
			<nav class="full-box navbar-info">
			
                    <a href="#" class="float-left show-nav-lateral">
                        <i class="fas fa-exchange-alt"></i>
                    </a>
                    <a>
						<Link to={'/EstudianteuserUpdate'}>
                            <i class="fas fa-user-cog"></i>
                        </Link>
                    </a>
                    <a href="#" class="btn-exit-system">
                        <i class="fas fa-power-off"></i>
                    </a>
                
				
			</nav>

			
			<img src="../assets/img/logotipo-6.jpeg" alt="Logotipo del colegio" class="logo-img"/>
			<div class="full-box page-header">	
				<h3 class="text-left">
					<i class="fab fa-dashcube fa-fw"></i> &nbsp; INICIO
				</h3>
				<p class="eslogan text-justify">
					"Un camino transparente hacia el éxito académico: Descubre la excelencia con nuestro innovador sistema de registro de usuarios y notas escolares."
				</p>
			</div>
			
			
			
			<div class="full-box tile-container">
				<Link to={'/EstudianteMateria' } style={{color: "black"}}>
				<a  class="tile">
				
					<div class="tile-tittle">Notas</div>
					
					<div class="tile-icon">
						
						<i class="fas fa-pallet fa-fw"></i>
						
						<p>12 Materias</p>
						
					</div>
				
				</a>
				</Link>
			</div>
		</section>
	</main>
	<footer class="footer">
		<div class="footer-container">
		  <div class="row">
			<div class="col-12">
			 	<p>Derechos de autor </p>
				<p>&copy; Plantilla: https://designlopers.com/</p>
			</div>
		  </div>
		</div>
	</footer>
	
	
	
		
        </React.Fragment>
    )
}