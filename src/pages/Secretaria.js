import React from 'react'
import { Link } from "react-router-dom";

export default function Secretaria() {
    return(
        
            <React.Fragment>
            <div>
	
	
	<main className="full-box main-container">
		
	<section className="full-box nav-lateral">
			<div className="full-box nav-lateral-bg show-nav-lateral"></div>
			<div className="full-box nav-lateral-content">
				<figure className="full-box nav-lateral-avatar">
					<i className="far fa-times-circle show-nav-lateral"></i>
					<figcaption className="SRMNPE text-center">
						SRUNPE <br/><small className="roboto-condensed-light"></small>
					</figcaption>
					<img src="/assets/avatar/Avatar_negro.jpg" className="img-fluid" alt="Avatar"/>
					<figcaption className="roboto-medium text-center">
                    Nombre de la secretaria <br/><small className="roboto-condensed-light"><p><span className="badge badge-info">Administrativo</span></p></small>
					</figcaption>
				</figure>
				<div className="full-box nav-lateral-bar"></div>
				<nav className="full-box nav-lateral-menu">
					<ul>
						<li>
							<a href="/Secretaria"><i className="fab fa-dashcube fa-fw"></i> &nbsp; Inicio</a>
						</li>

						<li>
							<a href="#" className="nav-btn-submenu"><i className="fas fa-users fa-fw"></i> &nbsp;  Estudiantes <i className="fas fa-chevron-down"></i></a>
							<ul>
								
								<li>
									<a href="/Secretariaestudiantelista"><i className="fas fa-clipboard-list fa-fw"></i> &nbsp; Lista De Estudiante</a>
								</li>
								<li>
									<a href="/Secretariabuscarestudiante"><i className="fas fa-search fa-fw"></i> &nbsp; Buscar Estudiante</a>
								</li>
							</ul>
						</li>

						<li>
							<a href="#" className="nav-btn-submenu"><i className="fas fa-chalkboard-user fa-fw"></i> &nbsp; Docentes <i className="fas fa-chevron-down"></i></a>
							<ul>
								{/*<li>
									<a href="nuevo-profesor.html"><i className="fas fa-plus fa-fw"></i> &nbsp; Agregar Docentes</a>
	</li>*/}
								<li>
									<a href="/Secretariadocentelista"><i className="fas fa-clipboard-list fa-fw"></i> &nbsp; Lista De Docentes</a>
								</li>
								<li>
									<a href="/Secretariadocentebuscar"><i className="fas fa-search fa-fw"></i> &nbsp; Buscar Docentes</a>
								</li>
							</ul>
						</li>

						<li>
							<a href="#" className="nav-btn-submenu"><i className="fas fa-layer-group fa-fw"></i> &nbsp; Cursos <i className="fas fa-chevron-down"></i></a>
							<ul>
								{/*<li>
									<a href="curso-nuevo.html"><i className="fas fa-plus fa-fw"></i> &nbsp; Agregar Curso</a>
								</li>*/}
								<li>
									<a href="/Secretariacursoslista"><i className="fas fa-clipboard-list fa-fw"></i> &nbsp; Lista De Cursos</a>
								</li>
								<li>
									<a href="/Secretariacursobuscar"><i className="fas fa-search fa-fw"></i> &nbsp; Buscar Curso</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="#" className="nav-btn-submenu"><i className="fas fa-pallet fa-fw"></i> &nbsp; Materias <i className="fas fa-chevron-down"></i></a>
							<ul>
								{/*<li>
									<a href="materia-nueva.html"><i className="fas fa-plus fa-fw"></i> &nbsp; Agregar Materias</a>
								</li>*/}
								<li>
									<a href="/Secretariamaterialista"><i className="fas fa-clipboard-list fa-fw"></i> &nbsp; Lista De Materias</a>
								</li>
								
							</ul>
						</li>

						

						<li>
							<a href="/Secretariareclamos"><i className="fas fa-exclamation-circle fa-fw"></i> &nbsp; Reclamos</a>
						</li>
					</ul>
				</nav>
			</div>
		</section>

		
		<section className="full-box page-content">
			<nav className="full-box navbar-info">
				<a href="#" className="float-left show-nav-lateral">
					<i className="fas fa-exchange-alt"></i>
				</a>
				<a href="/Secretariaactualizar">
					<i className="fas fa-user-cog"></i>
				</a>
				<a href="#" className="btn-exit-system">
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
			
				<a href='/Secretariaestudiantelista' className="tile">
				
					<div className="tile-tittle">Estudiantes</div>
					<div className="tile-icon">
						
						<i className="fas fa-users fa-fw"></i>
						
						<p>1350 Registrados</p>
					</div>
				</a>
				
				<a href="/Secretatiamateriaslista" className="tile">
					<div className="tile-tittle">Materias</div>
					<div className="tile-icon">
						<i className="fas fa-pallet fa-fw"></i>
						<p>12 Registradas</p>
					</div>
				</a>

				

				{/*<a href="usuario-lista.html" className="tile">
					<div className="tile-tittle">Usuarios Registrados</div>
					<div className="tile-icon">
						<i className="fas fa-user-check"></i>
						<p>50 Registrados</p>
					</div>
	</a>*/}
				
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
	
	
</div>
            </React.Fragment>
        
    )
}