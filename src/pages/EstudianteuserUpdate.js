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
					Nombre del estudiante <br/><small className="roboto-condensed-light"><p><span className="badge badge-dark">Estudiante</span></p></small>
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
                                        <i className="fas fa-clipboard-list fa-fw"></i> &nbsp; Ver Mataterias
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
                    
                    <a >
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
			
			
			
			<div class="container-fluid">
				<form action="" class="form-neon" autocomplete="off">
					<fieldset>
						<legend><i class="far fa-address-card"></i> &nbsp; Información personal</legend>
						
						<p>
                    <span className="badge badge-info">Administrativo</span> Permisos para registrar,
                    actualizar y eliminar
                  </p>
                  <p>
                    <span className="badge badge-success">Docente</span> Permisos para registrar y
                    actualizar
                  </p>
                  <p>
                    <span className="badge badge-dark">Estudiante</span> Solo permisos para visualizar
                  </p>
						<div class="container-fluid">
							<div class="row">
								
																
								
								<div class="col-12 col-md-6">
									<div class="form-group">
										<label for="usuario_telefono" class="frome bmd-label-floating">Teléfono</label>
										<input type="text" pattern="[0-9()+]{1,20}" class="form-control" name="usuario_telefono" id="usuario_telefono" maxlength="20"/>
									</div>
								</div>
								<div class="col-12 col-md-6">
									<div class="form-group">
										<label for="usuario_direccion" class="frome bmd-label-floating">Dirección</label>
										<input type="text" pattern="[a-zA-Z0-99áéíóúÁÉÍÓÚñÑ()# ]{1,190}" class="form-control" name="usuario_direccion" id="usuario_direccion" maxlength="190"/>
									</div>
								</div>
								
								<div class="col-12 col-md-6">
									<div class="form-group">
										<label for="item_estado" class="frome bmd-label-floating">Genero</label>
										<select class="form-control" name="item_estado" id="item_estado">
											<option value="" selected="" disabled="">Seleccione una Genero</option>
											<option selected="" value="femenino">Femenino</option>
											<option value="maculino">Masculino</option>
                                            <option value="otro">Otro</option>
										</select>
									</div>
								</div>
							</div>
						</div>
					</fieldset>
					<br/><br/><br/>
					<fieldset>
						<legend><i class="fas fa-user-lock"></i> &nbsp; Información de la cuenta</legend>
						<div class="container-fluid">
							<div class="row">
								<div class="col-12 col-md-6">
									<div class="form-group">
										<label for="usuario_usuario" class="frome bmd-label-floating">Nombre de usuario</label>
										<input type="text" pattern="[a-zA-Z0-9]{1,35}" class="form-control" name="usuario_usuario" id="usuario_usuario" maxlength="35"/>
									</div>
								</div>
								<div class="col-12 col-md-6">
									<div class="form-group">
										<label for="usuario_email" class="frome bmd-label-floating">Email</label>
										<input type="email" class="form-control" name="usuario_email" id="usuario_email" maxlength="70"/>
									</div>
								</div>
								<div class="col-12">
									<legend style={{ marginTop: '40px' }}><i class="fas fa-lock"></i> &nbsp; Nueva contraseña</legend>
									<p>Para actualizar la contraseña de esta cuenta ingrese una nueva y vuelva a escribirla. En caso que no desee actualizarla debe dejar vacíos los dos campos de las contraseñas.</p>
								</div>
								<div class="col-12 col-md-6">
									<div class="form-group">
										<label for="usuario_clave_nueva_1" class="frome bmd-label-floating">Contraseña</label>
										<input type="password" class="form-control" name="usuario_clave_nueva_1" id="usuario_clave_nueva_1" maxlength="200"/>
									</div>
								</div>
								<div class="col-12 col-md-6">
									<div class="form-group">
										<label for="usuario_clave_nueva_2" class="frome bmd-label-floating">Repetir contraseña</label>
										<input type="password" class="form-control" name="usuario_clave_nueva_2" id="usuario_clave_nueva_2" maxlength="200"/>
									</div>
								</div>
							</div>
						</div>
					</fieldset>
					
					<fieldset>
						<p class="text-center">Para poder guardar los cambios en esta cuenta debe de ingresar su nombre de usuario y contraseña</p>
						<div class="container-fluid">
							<div class="row">
								<div class="col-12 col-md-6">
									<div class="form-group">
										<label for="usuario_admin" class="frome bmd-label-floating">Nombre de usuario</label>
										<input type="text" pattern="[a-zA-Z0-9]{1,35}" class="form-control" name="usuario_admin" id="usuario_admin" maxlength="35"/>
									</div>
								</div>
								<div class="col-12 col-md-6">
									<div class="form-group">
										<label for="clave_admin" class="frome bmd-label-floating">Contraseña</label>
										<input type="password" class="form-control" name="clave_admin" id="clave_admin" maxlength="200"/>
									</div>
								</div>
							</div>
						</div>
					</fieldset>
					<p className="text-center" style={{ marginTop: '40px' }}>
						<button type="submit" class="btn btn-raised btn-success btn-sm"><i class="fas fa-sync-alt"></i> &nbsp; ACTUALIZAR</button>
					</p>
				</form>
			</div>
		</section>
	</main>
	
	
	
	
		
        </React.Fragment>
    )
}