import React, {useState} from "react";
import { Link } from 'react-router-dom';



export default function EstudianteinfoNotas() {

	const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

    return(
        <React.Fragment>
            
            
            
    <main className="full-box main-container">
        
        <section className="full-box nav-lateral">
			<div className="full-box nav-lateral-bg show-nav-lateral"></div>
			<div className="full-box nav-lateral-content">
				<figure className="full-box nav-lateral-avatar">
					<i className="far fa-times-circle show-nav-lateral"></i>
                    <figcaption className="SRMNPE text-center">
						SRUNPE <br/><small className="roboto-condensed-light"></small>
					</figcaption>
					<img src="../assets/avatar/Avatar_negro.jpg" className="img-fluid" alt="Avatar"/>
					<figcaption className="roboto-medium text-center">
                    Nombre del estudiante <br/><small className="roboto-condensed-light"><p><span className="badge badge-dark">Estudiante</span></p></small>
					</figcaption>
				</figure>
				<div className="full-box nav-lateral-bar"></div>
				<nav className="full-box nav-lateral-menu">
                <ul>
						<li >
							<Link to={'/Estudiante'}>
								<i class="fab fa-dashcube fa-fw" ></i> &nbsp;Inicio
							</Link>
                        	
						</li>
						<li>
								<Link to={'/EstudianteMateria'}>	
                                    <li>
                                        <i className="fas fa-clipboard-list fa-fw" ></i>&nbsp; Ver Mataterias
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

        <section className="full-box page-content">
			<nav className="full-box navbar-info">
				<a  className="float-left show-nav-lateral">
					<i className="fas fa-exchange-alt"></i>
				</a>
				<a >
                    <Link to={'/EstudianteuserUpdate'}>
                            <i class="fas fa-user-cog"></i>
                        </Link>
				</a>
				<a  className="btn-exit-system">
					<i className="fas fa-power-off"></i>
				</a>
			</nav>
            
            <div className="full-box page-header">
                <h3 className="text-left">
                    <i className="fas fa-info fa-fw"></i> &nbsp; Informacion sobre las notas
                </h3>
                <p className="text-justify">
                </p>
            </div>

            
            <div className="container-fluid">
                <form action="" className="form-neon" autocomplete="off">
                    <fieldset>
                        <legend><i className=""></i> &nbsp; ¿Para que son las notas?</legend>
                        <p>En primer lugar, sirven como un indicador del rendimiento académico del estudiante. Las notas reflejan el nivel de comprensión y dominio que tiene un estudiante sobre los temas estudiados en clase y se utilizan para evaluar su progreso a lo largo del año escolar.</p>

                        <p>Además, las notas también pueden ser importantes para la toma de decisiones académicas y administrativas. Por ejemplo, las notas pueden utilizarse para determinar si un estudiante necesita atención adicional en áreas específicas, si debe ser promovido al siguiente nivel escolar o si debe repetir el año escolar.</p>
                            
                        <p>También es común que las notas se utilicen para otorgar becas y premios académicos a los estudiantes con mejores calificaciones, y pueden ser un factor importante en la selección de estudiantes para programas académicos avanzados o para la admisión a universidades y programas de posgrado.</p>
                        <p> </p>
                        <p> </p>
                        <p> </p>
                        <legend><i className="Sistema de calificacion"></i> &nbsp; Sistema de calificacion</legend>
                        
						<p><span className="badge badge-info-admin">Sobresaliente</span>  4.5/5.0</p>
						<p><span className="badge badge-success-doce">Exelente</span>  4.0/4.4</p>
						<p><span className="badge badge-medio">medio</span>  3.0/3.9</p>
                        <p><span className="badge badge-basico">Bajo</span>  2.5/2.9</p>
                        <p><span className="badge badge-bajo">Muy Bajo</span>  0.0/2.4 </p>
                        
                        
                    </fieldset>
                    
                    
                    <br/><br/><br/>
                    <p className="text-center" style={{ marginTop: '40px' }}>
                        <button type="reset" className="btn btn-raised btn-secondary btn-sm"><i className="fas fa-paint-roller"></i> &nbsp; LIMPIAR</button>
                        &nbsp; &nbsp;
                        <button type="submit" className="btn btn-raised btn-info btn-sm"><i className="far fa-save"></i> &nbsp; GUARDAR</button>
                    </p>
                    
                </form>
            </div>


            


        </section>
    </main>

	  
        </React.Fragment>
    )
}