import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function Docenteelegircurso() {

  const url = 'https://localhost:5001/api/cursos';
  const [curso, setCursos] = useState([]);
  const [selectedCursoID, setSelectedCursoID] = useState('');
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isSubMenuOpen1, setIsSubMenuOpen1] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCursos(data))
      .catch((error) => console.error('Error fetching cursos:', error));
  }, [url]);

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

                        
                        <div className="full-box page-header">
              <h3 className="text-left">
                <i className="fas fa-layer-group fa-fw"></i> &nbsp; Elija un Curso
              </h3>
              <p className="text-justify"></p>
            </div>

            
            <div className="container-fluid">
              <form action="" className="form-neon" autoComplete="off">
                <fieldset>
                  <legend>
                    <i className="far "></i> &nbsp; Elija Un Curso
                  </legend>

                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label htmlFor="item_estado" className="frome bmd-label-floating">
                        Cursos
                      </label>
                      <select
            className="form-control"
            name="item_estado"
            id="item_estado"
            value={selectedCursoID}
            onChange={(e) => setSelectedCursoID(e.target.value)}
          >
            <option value="" disabled>
              Seleccione un Curso
            </option>
            {curso.length > 0 ? (
              curso.map((curso) => (
                <option key={curso.cursoID} value={curso.cursoID}>
                  {curso.curso}
                </option>
              ))
            ) : (
              <option value="" disabled>
                Cargando cursos...
              </option>
            )}
          </select>
                    </div>
                  </div>
                </fieldset>
                <br />
                <br />
                <br />
                <p className="text-center" style={{ marginTop: '40px' }}>
                  <a><Link to={'/Docenteestudiantelista'}>
                    <button type="submit" className="btn btn-raised btn-info btn-sm">
                      
                      <i className="far fa-save"></i> Empezar
                      
                      
                    </button></Link>
                  </a>
                </p>
              </form>
            </div>
                        
                    </section>
                </main>
                
                
                
            </React.Fragment>
        
    )
}