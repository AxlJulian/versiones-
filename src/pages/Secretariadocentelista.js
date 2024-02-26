import React from "react"

export default function Secretariadocentelista(){
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

                
            <div className="full-box page-header">
                <h3 className="text-left">
                    <i className="fas fa-clipboard-list fa-fw"></i> &nbsp; LISTA DE PROFESORES
                </h3>
                <p className="text-justify">
                </p>
            </div>
            <div className="container-fluid">
                <ul className="full-box list-unstyled page-nav-tabs">
                    
                    <li>
                        <a className="active" href="/Secretariadocentelista"><i className="fas fa-clipboard-list fa-fw"></i> &nbsp; LISTA DE PROFESORES</a>
                    </li>
                    <li>
                        <a href="/Secretariadocentebuscar"><i className="fas fa-search fa-fw"></i> &nbsp; BUSCAR PROFESOR/A</a>
                    </li>
                </ul>
            </div>
            
            
           <div className="container-fluid">
				<div className="table-responsive">
					<table className="table table-dark table-sm">
						<thead>
							<tr className="text-center roboto-medium">
								<th>#</th>
								<th>CÓDIGO</th>
								<th>NOMBRE</th>
								<th>CURSO</th>
								<th>ACTUALIZAR</th>
								<th>ELIMINAR</th>
							</tr>
						</thead>
						<tbody>
							<tr className="text-center" >
								<td>1</td>
								<td>012342567</td>
								<td>NOMBRE DEL PROFESOR</td>
								<td>101</td>
								<td>
                                    <a href="actualizar-profesor.html" className="btn btn-success">
                                        <i className="fas fa-sync-alt"></i> 
                                    </a>
                                </td>
                                <td>
                                    <form action="">
                                        <button type="button" className="btn btn-warning">
                                            <i className="far fa-trash-alt"></i>
                                        </button>
                                    </form>
                                </td>
							</tr>
							<tr className="text-center" >
								<td>2</td>
								<td>012342567</td>
								<td>NOMBRE DEL PROFESOR</td>
								<td>102</td>
								<td>
                                    <a href="actualizar-profesor.html" className="btn btn-success">
                                        <i className="fas fa-sync-alt"></i> 
                                    </a>
                                </td>
                                <td>
                                    <form action="">
                                        <button type="button" className="btn btn-warning">
                                            <i className="far fa-trash-alt"></i>
                                        </button>
                                    </form>
                                </td>
							</tr>
							<tr className="text-center" >
								<td>3</td>
								<td>012342567</td>
								<td>NOMBRE DEL PROFESOR</td>
								<td>201</td>
								<td>
                                    <a href="actualizar-profesor.html" className="btn btn-success">
                                        <i className="fas fa-sync-alt"></i> 
                                    </a>
                                </td>
                                <td>
                                    <form action="">
                                        <button type="button" className="btn btn-warning">
                                            <i className="far fa-trash-alt"></i>
                                        </button>
                                    </form>
                                </td>
							</tr>
							<tr className="text-center" >
								<td>4</td>
								<td>012342567</td>
								<td>NOMBRE DEL PROFESOR</td>
								<td>301</td>
								<td>
                                    <a href="actualizar-profesor.html" className="btn btn-success">
                                        <i className="fas fa-sync-alt"></i> 
                                    </a>
                                </td>
                                <td>
                                    <form action="">
                                        <button type="button" className="btn btn-warning">
                                            <i className="far fa-trash-alt"></i>
                                        </button>
                                    </form>
                                </td>
							</tr>
						</tbody>
					</table>
				</div>
				<nav aria-label="Page navigation example">
					<ul className="pagination justify-content-center">
						<li className="page-item disabled">
							<a className="page-link" href="#" tabIndex="-1">Atras</a>
						</li>
						<li className="page-item"><a className="page-link" href="#">1</a></li>
						<li className="page-item"><a className="page-link" href="#">2</a></li>
						<li className="page-item"><a className="page-link" href="#">3</a></li>
						<li className="page-item">
							<a className="page-link" href="#">Siguiente</a>
						</li>
					</ul>
				</nav>
			</div>
        </section>




    </main>
    
    	
	
            


        </React.Fragment>
            
    )
}