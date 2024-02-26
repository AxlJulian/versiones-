import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default function Docenteuserupdate() {

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isSubMenuOpen1, setIsSubMenuOpen1] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };
  const toggleSubMenu1 = () => {
    setIsSubMenuOpen1(!isSubMenuOpen1);
  };

  return (
    
      <React.Fragment>
        <main className="full-box main-container">
         
          <section className="full-box nav-lateral">
            <div className="full-box nav-lateral-bg show-nav-lateral"></div>
            <div className="full-box nav-lateral-content">
              <figure className="full-box nav-lateral-avatar">
                <i className="far fa-times-circle show-nav-lateral"></i>
                <figcaption className="SRMNPE text-center">
                  SRUNPE <br />
                  <small className="roboto-condensed-light"></small>
                </figcaption>
                <img src="../assets/avatar/Avatar_negro.jpg" className="img-fluid" alt="Avatar" />
                <figcaption className="roboto-medium text-center">
                  Nombre Del Usuario <br />
                  <small className="roboto-condensed-light">
                    <p>
                      <span className="badge badge-success">Docente</span>
                    </p>
                  </small>
                </figcaption>
              </figure>
              <div className="full-box nav-lateral-bar"></div>
              <nav className="full-box nav-lateral-menu">
              <ul>
                                <li>
                                    <Link to={'/docente'}>
                                        <i class="fab fa-dashcube fa-fw"></i> &nbsp; Inicio
                                    </Link>
                                </li>
                                <li>
                                <span style={{color: 'white'}}>
                                    <a onClick={toggleSubMenu} class="nav-btn-submenu"><i class="fas fa-layer-group fa-fw"></i> &nbsp; Cursos <i class="fas fa-chevron-down"></i></a>
                                    <ul style={{ display: isSubMenuOpen ? 'block' : 'none' }}>
                                        <Link to={'/docenteelegircurso'}>
                                            <li>
                                                <a ><i class="fas fa-clipboard-list fa-fw"></i> &nbsp; Elegir Cursos</a>
                                            </li>
                                        </Link>
                                    </ul>
                                </span>
                                </li>
                                <li>
                                <span style={{color: 'white'}}>
                                    <a onClick={toggleSubMenu1} class="nav-btn-submenu"><i class="fas fa-users fa-fw"></i> &nbsp;  Estudiantes <i class="fas fa-chevron-down"></i></a>
                                    <ul style={{ display: isSubMenuOpen1 ? 'block' : 'none' }}>
                                        <Link to={'/docenteestudiantelista'}>
                                        <li>
                                            <a ><i class="fas fa-clipboard-list fa-fw"></i> &nbsp; Lista De Estudiante</a>
                                        </li>
                                        </Link>
                                        <Link to={'/docentebuscarestudiante'}>
                                        <li>
                                            <a href="Docente-buscar-estudiante.html"><i class="fas fa-search fa-fw"></i> &nbsp; Buscar Estudiante</a>
                                        </li>
                                        </Link>
                                    </ul>
                                </span>
                                </li>
                                <li>
                                    <Link to={'/docentereclamos'}>
                                        <i class="fas fa-exclamation-circle fa-fw"></i> &nbsp; Reclamos
                                    </Link>
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
                <i className="fas fa-user-cog"></i>
              </a>
              <a  className="btn-exit-system">
                <i className="fas fa-power-off"></i>
              </a>
            </nav>

          
            <div className="full-box page-header">
              <h3 className="text-left">
                <i className="fas fa-sync-alt fa-fw"></i> &nbsp; ACTUALIZAR USUARIO
              </h3>
              <p className="text-justify">

              </p>
            </div>

       
            <div className="container-fluid" style={{ overflowY: 'auto', maxHeight: '500px' }}>
              <form action="" className="form-neon" autoComplete="off">
                <fieldset>
                  <legend>
                    <i className="far fa-address-card"></i> &nbsp; Información personal
                  </legend>
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
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-12 col-md-4">
                        <div className="form-group">
                          <label htmlFor="usuario_dni" className="frome bmd-label-floating">
                            T.I/C.C
                          </label>
                          <input
                            type="text"
                            pattern="[0-9-]{1,20}"
                            className="form-control"
                            name="usuario_dni"
                            id="usuario_dni"
                            maxLength="20"
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-4">
                        <div className="form-group">
                          <label htmlFor="usuario_nombre" className="frome bmd-label-floating">
                            Nombres
                          </label>
                          <input
                            type="text"
                            pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}"
                            className="form-control"
                            name="usuario_nombre"
                            id="usuario_nombre"
                            maxLength="35"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-4">
                        <div className="form-group">
                          <label htmlFor="usuario_apellido" className="frome bmd-label-floating">
                            Apellidos
                          </label>
                          <input
                            type="text"
                            pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}"
                            className="form-control"
                            name="usuario_apellido"
                            id="usuario_apellido"
                            maxLength="35"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label htmlFor="usuario_telefono" className="frome bmd-label-floating">
                            Teléfono
                          </label>
                          <input
                            type="text"
                            pattern="[0-9()+]{1,20}"
                            className="form-control"
                            name="usuario_telefono"
                            id="usuario_telefono"
                            maxLength="20"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label htmlFor="usuario_direccion" className="frome bmd-label-floating">
                            Dirección
                          </label>
                          <input
                            type="text"
                            pattern="[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ()# ]{1,190}"
                            className="form-control"
                            name="usuario_direccion"
                            id="usuario_direccion"
                            maxLength="190"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-4">
                        <div className="form-group">
                          <label htmlFor="prestamo_fecha_final" className="frome ">
                            Fecha de Nacimiento
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            name="prestamo_fecha_final"
                            id="prestamo_fecha_final"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label htmlFor="item_estado" className="frome bmd-label-floating">
                            Género
                          </label>
                          <select className="form-control" name="item_estado" id="item_estado">
                            <option value="" selected="" disabled="">
                              Seleccione una Género
                            </option>
                            <option selected="" value="femenino">
                              Femenino
                            </option>
                            <option value="maculino">Masculino</option>
                            <option value="otro">Otro</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <br />
                <br />
                <br />
                <fieldset>
                  <legend>
                    <i className="fas fa-user-lock"></i> &nbsp; Información de la cuenta
                  </legend>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label htmlFor="usuario_usuario" className="frome bmd-label-floating">
                            Nombre de usuario
                          </label>
                          <input
                            type="text"
                            pattern="[a-zA-Z0-9]{1,35}"
                            className="form-control"
                            name="usuario_usuario"
                            id="usuario_usuario"
                            maxLength="35"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label htmlFor="usuario_email" className="frome bmd-label-floating">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            name="usuario_email"
                            id="usuario_email"
                            maxLength="70"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <legend style={{ marginTop: '40px' }}>
                          <i className="fas fa-lock"></i> &nbsp; Nueva contraseña
                        </legend>
                        <p>
                          Para actualizar la contraseña de esta cuenta ingrese una nueva y vuelva a
                          escribirla. En caso que no desee actualizarla debe dejar vacíos los dos campos
                          de las contraseñas.
                        </p>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label htmlFor="usuario_clave_nueva_1" className="frome bmd-label-floating">
                            Contraseña
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            name="usuario_clave_nueva_1"
                            id="usuario_clave_nueva_1"
                            maxLength="200"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label htmlFor="usuario_clave_nueva_2" className="frome bmd-label-floating">
                            Repetir contraseña
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            name="usuario_clave_nueva_2"
                            id="usuario_clave_nueva_2"
                            maxLength="200"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </fieldset>

                <fieldset>
                  <p className="text-left">
                    -Para poder guardar los cambios en esta cuenta debe de ingresar su nombre de usuario y
                    contraseña
                  </p>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label htmlFor="usuario_admin" className="frome bmd-label-floating">
                            Nombre de usuario
                          </label>
                          <input
                            type="text"
                            pattern="[a-zA-Z0-9]{1,35}"
                            className="form-control"
                            name="usuario_admin"
                            id="usuario_admin"
                            maxLength="35"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label htmlFor="clave_admin" className="frome bmd-label-floating">
                            Contraseña
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            name="clave_admin"
                            id="clave_admin"
                            maxLength="200"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <p className="text-center" style={{ marginTop: '40px' }}>
                  <button type="submit" className="btn btn-raised btn-success btn-sm">
                    <i className="fas fa-sync-alt"></i> &nbsp; ACTUALIZAR
                  </button>
                </p>
              </form>
            </div>
          </section>
        </main>

      
        
      </React.Fragment>
    
  );
}
