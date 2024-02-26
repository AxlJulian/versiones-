import React, {useState} from "react";
import { Link } from 'react-router-dom';



export default function EstudianteMaterias() {

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
								<span style={{color: 'white'}}><i class="fab fa-dashcube fa-fw"  ></i> &nbsp;Inicio</span>
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

		
		<section className="full-box page-content">
			<nav className="full-box navbar-info">
				<a className="float-left show-nav-lateral">
					<i className="fas fa-exchange-alt"></i>
				</a>
				<a >
                    <Link to={'/EstudianteuserUpdate'}>
                        <i class="fas fa-user-cog"></i>
                    </Link>
                </a>
				<a className="btn-exit-system">
					<i className="fas fa-power-off"></i>
				</a>
			</nav>

			
			<div className="full-box page-header">
				<h3 className="text-left">
					<i className="fas fa-vote-yea"></i> &nbsp; NOTAS DE CADA MATERIA
				</h3>
				<p className="text-justify">
					Aqui podra Seleccionar la materia en la cual desea ver sus Notas.
				</p>
			</div>
			
			
			
			
			<div className="container-fluid">
				<form action="" className="form-neon" autocomplete="off">
					<div className="container-fluid">
						<div className="row">
						<div className="container-fluid">
              <div className="table-responsive">
                <table className="table table-dark table-sm">
                  <thead>
                    <tr className="text-center roboto-medium">
                      <th>#</th>
                      <th>MATEMATICAS</th>
                      <th>ESPAÑOL</th>
                      <th>QUIMICA</th>
                      <th>EDUCACION FISICA</th>

                      <th>FISICA</th>
                      <th>INGLES</th>
					  <th>ETICA</th>
					  <th>RELIGION</th>
					  <th>ECONOMIA</th>
					  
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-center">
                      <td>1</td>
                      <td>5.0</td>
                      <td>4.2</td>
                      <td>3.2</td>
                      <td>3.7</td>
                      <td>2.6</td>
                      <td>4.1</td>
					  <td>2.6</td>
					  <td>1.8</td>
					  <td>3.0</td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
              
            </div>
					
					
					
							
				</div>
			</div>
			

		</form>
        
	</div>
</section>
	
    </main>
	  
        </React.Fragment>
    )
}