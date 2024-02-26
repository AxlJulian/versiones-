import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Secretariacursobuscar() {
    
	const url = 'https://localhost:7284/api/cursos';
	const [curso, setCursos] = useState([]);
	const [cursoID, setCursoID] = useState('');
	const [Codigo, setCodigo] = useState('');
	const [profesorasignado, setProfesorasignado] = useState('');
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		getcurso();
	}, []);

	const getcurso = async () =>{
		try{
			const response = await axios.get(url);
			setCursos(response.data);
		}catch(error){
			console.error('Error al obtener al curso:', error);
		}
	};

	const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

	const filteredcursos = curso.filter((curso) => {
		const fullName = `${curso.curso} ${curso.Codigo} ${curso.profesorasignado}`.toLowerCase();
		return fullName.includes(searchTerm.toLowerCase());

	});

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
            
            <div class="full-box page-header">
                <h3 class="text-left">
                    <i class="fas fa-search fa-fw"></i> &nbsp; BUSCAR CURSOS
                </h3>
                <p class="text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia fugiat est ducimus inventore, repellendus deserunt cum aliquam dignissimos, consequuntur molestiae perferendis quae, impedit doloribus harum necessitatibus magnam voluptatem voluptatum alias!
                </p>
            </div>
            <div class="container-fluid">
                <ul class="full-box list-unstyled page-nav-tabs">
                    <li>
                        <a href="curso-nuevo.html"><i class="fas fa-plus fa-fw"></i> &nbsp; NUEVO CURSO</a>
                    </li>
                    <li>
                        <a href="curso-lista.html"><i class="fas fa-clipboard-list fa-fw"></i> &nbsp; LISTA DE CURSOS</a>
                    </li>
                    <li>
                        <a class="active" href="curso-buscar.html"><i class="fas fa-search fa-fw"></i> &nbsp; BUSCAR CURSOS</a>
                    </li>                    
                </ul>
            </div>
            
            
            <div class="container-fluid">
				<form class="form-neon" onSubmit={(e) => e.preventDefault()}>
					
						<div class="row justify-content-md-center">
							<div class="col-12 col-md-6">
								<div class="form-group">
									<label for="inputSearch" class="frome bmd-label-floating">¿Qué Curso estas buscando?</label>
									<input type="text" class="form-control" name="busqueda_reservation" id="inputSearch" maxlength="30" value={searchTerm} onChange={handleSearchChange} />
								</div>
							</div>
							<div class="col-12">
								<p class="text-center" style={{marginTop: "40px"}}>
									<button type="submit" class="btn btn-raised btn-info"  onClick={getcurso}><i class="fas fa-search"></i> &nbsp; BUSCAR</button>
								</p>
							</div>
						</div>
					
				</form>
			</div>

			
			


			 <div class="container-fluid">
				<div class="table-responsive">
					<table class="table table-dark table-sm">
						<thead>
							<tr class="text-center roboto-medium">
								<th>#</th>
								<th>CURSOS</th>
								<th>PROFESOR ASIGNADO</th>
								<th>CODIGO</th>							
								<th>ACTUALIZAR</th>								
								<th>ELIMINAR</th>
							</tr>
						</thead>
						<tbody>
							{filteredcursos.map((curso, i) =>(
								<tr class="text-center" key={i}>
									<td>{i + 1}</td>
									<td>{curso.curso}</td>
									<td>{curso.profesorasignado}</td>
									<td>{curso.Codigo}</td>																
									<td>
										<a href="actualizar-curso.html" class="btn btn-success">
											<i class="fas fa-sync-alt"></i>	
										</a>
									</td>								
									<td>
										<form action="">
											<button type="button" class="btn btn-warning">
												<i class="far fa-trash-alt"></i>
											</button>
										</form>
									</td>
								</tr>
							))}
							
							
						</tbody>
					</table>
				</div>
				<nav aria-label="Page navigation example">
					<ul class="pagination justify-content-center">
						<li class="page-item disabled">
							<a class="page-link" href="#" tabindex="-1">Atras</a>
						</li>
						<li class="page-item"><a class="page-link" href="#">1</a></li>
						<li class="page-item"><a class="page-link" href="#">2</a></li>
						<li class="page-item"><a class="page-link" href="#">3</a></li>
						<li class="page-item">
							<a class="page-link" href="#">Siguiente</a>
						</li>
					</ul>
				</nav>
			</div>
        </section>
    </main>
    </React.Fragment>
    )
}