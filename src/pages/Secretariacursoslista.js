import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { show_alert } from '../functions';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export default function Secretariacursoslista() {


	const url = 'https://localhost:7284/api/cursos';
	const [cursos, setcursos] = useState([]);

  const [cursosId, setcursosId] = useState('');
  const [Codigo, setCodigo] = useState('');
  const [description, setDescription] = useState('');
  const [departamentoacademico, setdepartamentoacademico] = useState('');
  const [profesorasignado, setprofesorasignado] = useState('');
  const [operation, setOperations] = useState(1);
  const [title, setTitle] = useState('');


  useEffect(() => {
	getcursos();
  },[]);

  const getcursos = async () => {
    const respuesta = await axios.get(url);
    setcursos(respuesta.data);
};

  

  const openModal = (op, curso) => {
    setOperations(op);
    if (op === 1) {
      setTitle('Registrar curso');
      setcursosId('');
      setcursos('');
	  setCodigo('');
	  setDescription('');
	  setdepartamentoacademico('');
      setprofesorasignado('');
    } else if (op === 2) {
      setTitle('Editar curso');
      setcursosId(curso.cursosId);
      setcursos(curso.curso);
	  setCodigo(curso.codigo);
	  setDescription(curso.descripcion);
	  setdepartamentoacademico(curso.departamentoacademico);
      setprofesorasignado(curso.profesorasignado);
    }
    window.setTimeout(function () {
      document.getElementById('Nombre').focus();
    }, 500);
  };

  const validar = () => {
    if (cursos.trim() === "") {
      show_alert("Escribe el nuevo curso", "Escribe el nuevo curso");
    } else if (profesorasignado === "") {
      show_alert("Seleccione el docente", "Seleccione el docente");
    } else if (Codigo.trim() === "") {
		show_alert("Escribe el código del curso", "Escribe el código del curso");
	}else if (description.trim() === "") {
		show_alert("Escribe la descripción del curso", "Escribe la descripción del curso");
	}else if (departamentoacademico.trim() === "") {
		show_alert("Escribe el departamento academico del curso", "Escribe el departamento academico del curso");
	}else {
      let parametros;
      let metodo;

      if (operation === 1) {
        parametros = { cursos: cursos, profesorasignado: profesorasignado, codigo: Codigo, descriccion: description, departamentoacademico: departamentoacademico}; 
        metodo = "POST";
        
      } else {
        parametros = { cursos: cursos, profesorasignado: profesorasignado, codigo: Codigo, descriccion: description, departamentoacademico: departamentoacademico };
        metodo = "PUT";
      }

      enviarSolicitud(metodo, parametros);
    }
  };

  const enviarSolicitud = async (metodo, parametros) => {
    if (metodo === "POST") {
      axios
        .post(`${url}`, parametros)
        .then(function (respuesta) {
          show_alert("Curso añadido exitosamente", "success");
          document.getElementById("btnCerrar").click();
          getcursos();
        })
        .catch(function (error) {
          show_alert("error", "Error de solucitud");
          console.log(error);
        });
    } else if (metodo === "PUT") {
      axios
        .put(`${url}/${cursosId}`, parametros)
        .then(function (respuesta) {
          console.log("Solicitud PUT exitosa:", respuesta.data);
          var tipo = respuesta.data[0];
          var msj = respuesta.data[1];
          show_alert("curso editado con éxito", "success");
          document.getElementById("btnCerrar").click();
          getcursos();
        })
        .catch(function (error) {
          show_alert("Error de solucitud", "error");
          console.log(error);
        });
    }
  };


  const deleteCandidatoEstudiante = (cursoId, curso) => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: "¿Seguro quieres eliminar el curso " + curso + "?",
      icon: "question",
      text: "No se podra dar marcha atras",
      showCancelButton: true,
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${url}/${cursoId}`);
          show_alert("Curso eliminado exitosamente", "success");
          getcursos();
        } catch (error) {
          show_alert("Error al eliminar el curso", "error");
          console.error(error);
        }
      } else {
        show_alert("El curso no fue eliminado", "info");
      }
    });
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
                    <i className="fas fa-clipboard-list fa-fw"></i> &nbsp; LISTA DE CURSOS
                </h3>
                <p className="text-justify">
                    
                </p>
            </div>
            <div className="container-fluid">
                <ul className="full-box list-unstyled page-nav-tabs">
                   
                    <li>
                        <a className="active" href="curso-lista.html"><i className="fas fa-clipboard-list fa-fw"></i> &nbsp; LISTA DE CURSOS</a>
                    </li>
                    <li>
                        <a href="curso-buscar.html"><i className="fas fa-search fa-fw"></i> &nbsp; BUSCAR CURSO</a>
                    </li>
                    
                </ul>
            </div>
            
            
            
			 <div className="container-fluid">
			 <div className="table-responsive">
					
					<table className="table table-dark table-sm">
						<thead>
							<tr className="text-center roboto-medium">
								<th>#</th>
								<th>ID</th>
								<th>CURSOS</th>
								<th>DOCENTE</th>
								<th>ACTUALIZAR/ELIMINAR</th>
								
							</tr>
						</thead>
						<tbody className="table-group-divider">
						{cursos.map((Cursos, i) => ( 
    <tr className="text-center" key={Cursos.cursosId}> 
        <td>{i+1}</td>
        <td>{Cursos.cursoId}</td>
        <td>{Cursos.curso}</td>
        <td>{Cursos.profesorasignado}</td>
        <td>
            <button onClick={() => openModal(2, Cursos)} className="btn btn-warning" data-bs-toggle='modal' data-bs-target='#modalCandidatoEstudiante'>
                <i className="fa-solid fa-edit"></i>
            </button>
            &nbsp;
            <button onClick={() => deleteCandidatoEstudiante(Cursos.cursoId, Cursos.curso, Cursos.profesorasignado)} className="btn btn-danger">
                <i className="fa-solid fa-trash"></i>
            </button>
        </td>
    </tr>
))}


							
						</tbody>
					</table>
				</div>
				<nav aria-label="Page navigation example">
					<ul className="pagination justify-content-center">
						<li className="page-item disabled">
							<a className="page-link" href="#" tabIndex="-1">Previous</a>
						</li>
						<li className="page-item"><a className="page-link" href="#">1</a></li>
						<li className="page-item"><a className="page-link" href="#">2</a></li>
						<li className="page-item"><a className="page-link" href="#">3</a></li>
						<li className="page-item">
							<a className="page-link" href="#">Next</a>
						</li>
					</ul>
				</nav>
			</div>
        </section>
    </main>
    
	<div id="modalCandidatoEstudiante" className="modal fade" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <label className="h5">{title}</label>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <input type="hidden" id="candidatoEstudianteId" />
              <div className="input-group mb-3">
                
                
              </div>
                    <div className="input-group mb-3">
                    <span className="input-group-text"><i className="fa-solid fa-comment"></i></span>
                    <input
                        type="text"
                        id="Curso"
                        className="form-control"
                        placeholder="CURSO"
                        value={cursos}
                        onChange={(e) => setcursos(e.target.value)}
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text"><i className="fa-solid fa-comment"></i></span>
                      <input
                        type="text"
                        id="Apellido"
                        className="form-control"
                        placeholder="APELLIDO"
                        value={Codigo}
                        onChange={(e) => setCodigo(e.target.value)}
                      />
                    </div>
                    <div className='d-grid col-6 mx-auto'>
                    <div className="d-flex justify-content-center align-items-center h-100">
                      <button onClick={() => validar()} className='btn btn-success'>Guardar</button>
                    </div>
                    </div>
                  </div>
                  <div className='modal-footer'>
                  <div className="d-flex justify-content-center align-items-center h-100">
                    <button type='button' id="btnCerrar" className='btn btn-secondary' data-bs-dismiss='modal'>Cerrar</button>
                  </div>
                  </div>
                </div>
              </div>
			  </div>
	
    </React.Fragment>

			

        )


}