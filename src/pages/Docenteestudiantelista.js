import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { show_alert } from '../functions';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEstudiantes } from './EstudianteContext';

export default function Docenteestudiantelista() {
  const url = 'https://localhost:5001/api/CandidatoEstudiante'
  //const urls = 'https://localhost:5001/api/asistencia';
  const navigate = useNavigate();
  const { estudiantes, setEstudiantes } = useEstudiantes();
  const [candidatoEstudianteId, setCandidatoEstudianteId] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [asistencia, setAsistencia] = useState('');
  const [operation, setOperation] = useState(1);
  const [title, setTitle] = useState('');
  const [candidatoEstudiante, setcandidatoEstudiante] = useState([]);
  const [asistencias, setAsistencias] = useState({});
  const [notas, setNotas] = useState({});
  const [editandoNota, setEditandoNota] = useState(false);
  

  useEffect(() => {
    getCandidatoEstudiante();
  }, []);

  const getCandidatoEstudiante = async () => {
    try {
      const response = await axios.get(url);
      console.log(response.data);
      setcandidatoEstudiante(response.data);
    } catch (error) {
      console.error('Error al obtener al estudiante:', error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:5001/api/CandidatoEstudiante');
        setEstudiantes(response.data);
      } catch (error) {
        console.error('Error al obtener estudiantes:', error);
      }
    };

    fetchData();
  }, [setEstudiantes]);

  const openModal = (op, candidatoEstudiante) => {
    setOperation(op);
    if (op === 1) {
      setTitle('Registrar asistencia');
      setCandidatoEstudianteId(candidatoEstudiante.candidatoEstudianteId);
      setNombre(candidatoEstudiante.nombre);
      setApellido(candidatoEstudiante.apellido);
      setAsistencia('');
    } else if (op === 2) {
      setTitle('Editar asistencia');
      setCandidatoEstudianteId(candidatoEstudiante.candidatoEstudianteId);
      setNombre(candidatoEstudiante.nombre);
      setApellido(candidatoEstudiante.apellido);
      setAsistencia(candidatoEstudiante.asistencia);
    }
    window.setTimeout(function () {
      document.getElementById('Nombre').focus();
    }, 500);
  };

  const validar = () => {
    if (nombre.trim() === '') {
      show_alert('Escribe el nombre del estudiante', 'Escribe el nombre del nombre');
    } else if (apellido.trim() === '') {
      show_alert('Escribe el apellido del estudiante', 'Escribe el estado del apellido');
    } else {
      const parametros = { nombre, apellido, asistencia, notas };
      const metodo = operation === 1 ? 'POST' : 'PUT';

      enviarSolicitud(metodo, parametros);
    }
  };

  const enviarSolicitud = async (metodo, parametros) => {
    try {
      const response = await (metodo === 'POST'
        ? axios.post(url, parametros)
        : axios.put(`${url}/${candidatoEstudianteId}`, parametros));
  
      console.log('Respuesta del servidor:', response.data);
  
      // Actualizar el estado local con los nuevos datos
      setcandidatoEstudiante(response.data);
  
      // Limpiar los estados después de una operación exitosa
      setCandidatoEstudianteId('');
      setNombre('');
      setApellido('');
      setAsistencia('');
      setNotas({});
  
      // Cerrar el modal
      document.getElementById('btnCerrar').click();
  
      show_alert(
        operation === 1 ? 'Estudiante añadido exitosamente' : 'Cargo editado con éxito',
        'success'
      );
  
      // Acciones adicionales
      // Actualizar el contexto global (si se está utilizando)
      // updateGlobalState(response.data);
  
      // Navegar a otra página (si es necesario)
      // history.push('/nueva-pagina');
  
      // Ejecutar funciones adicionales (si es necesario)
      // ejecutarFuncionesAdicionales();
  
    } catch (error) {
      console.error('Error de solicitud:', error);
      show_alert('Error de solicitud', 'error');
    }
  };
  

  return (
    <React.Fragment>
      <main className="full-box main-container">
        <section className="full-box nav-lateral">
          <div className="full-box nav-lateral-bg show-nav-lateral"></div>
          <div className="full-box nav-lateral-content">
            <figure className="full-box nav-lateral-avatar">
              <i className="far fa-times-circle show-nav-lateral"></i>
              <img src="/assets/avatar/Avatar_negro.jpg" className="img-fluid" alt="Avatar" />
              <figcaption className="roboto-medium text-center">
                Nombre de docente <br />
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
                  <Link to={'/Docente'}>
                    <i className="fab fa-dashcube fa-fw"></i> &nbsp; Inicio
                  </Link>
                </li>
                <li>
                <Link onClick={() => navigate(`/Docentebuscarestudiante/${candidatoEstudiante.candidatoEstudianteId}`)}>
                    <a>
                      <i className="fas fa-clipboard-list fa-fw"></i> &nbsp; Lista De Estudiante
                    </a>
                  </Link>
                </li>
                <li>
                  <a href="#" className="nav-btn-submenu">
                    <i className="fas fa-layer-group fa-fw"></i> &nbsp; Cursos{' '}
                    <i className="fas fa-chevron-down"></i>
                  </a>
                  <ul>
                    <li>
                      <Link to={'/Docenteelegircurso'}>
                        <i className="fas fa-clipboard-list fa-fw"></i> &nbsp; Elegir Cursos
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="nav-btn-submenu">
                    <i className="fas fa-users fa-fw"></i> &nbsp; Estudiantes{' '}
                    <i className="fas fa-chevron-down"></i>
                  </a>
                  <ul>
                    <li>
                      <Link to={'/Docenteestudiantelista'}>
                        <i className="fas fa-clipboard-list fa-fw"></i> &nbsp; Lista De Estudiante
                      </Link>
                    </li>
                    <li>
                      <Link to={'/Docentebuscarestudiante'}>
                        <i className="fas fa-search fa-fw"></i> &nbsp; Buscar Estudiante
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to={'/DocenteReclamos'}>
                    <i className="fas fa-exclamation-circle fa-fw"></i> &nbsp; Reclamos
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
            <Link to={'/Docente'}>
              <i className="fab fa-dashcube fa-fw"></i> &nbsp; Inicio
            </Link>
            <a className="btn-exit-system">
              <i className="fas fa-power-off"></i>
            </a>
          </nav>

          <div className="full-box page-header">
            <h3 className="text-left">
              <i className="fas fa-clipboard-list fa-fw"></i> &nbsp; LISTA DE ESTUDIANTES
            </h3>
            <p className="text-justify"></p>
          </div>

          <div className="container-fluid">
            <div className="table-responsive" style={{ overflowY: 'auto', maxHeight: '70vh' }}>
              <table className="table table-dark table-sm">
                <thead>
                  <tr className="text-center roboto-medium">
                    <th>#</th>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>APELLIDO</th>
                    <th>ASISTENCIA</th>
                    <th>NOTA</th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                  {candidatoEstudiante.length > 0 &&
                    candidatoEstudiante.map((candidatoEstudiante, i) => (
                      <tr key={candidatoEstudiante.candidatoEstudianteId} className="text-center">
                        <td className="#">{i + 1}</td>
                        <td className="ID">{candidatoEstudiante.candidatoEstudianteId}</td>
                        <td className="nombre">{candidatoEstudiante.nombre}</td>
                        <td className="apellido">{candidatoEstudiante.apellido}</td>
                        <td className="asistencia">
                          <div className="d-flex justify-content-center align-items-center">
                            <select
                              className="form-select"
                              value={asistencias[candidatoEstudiante.candidatoEstudianteId] || ''}
                              onChange={(e) =>
                                setAsistencias({
                                  ...asistencias,
                                  [candidatoEstudiante.candidatoEstudianteId]: e.target.value,
                                })
                              }
                            >
                              <option value="" disabled>
                                Elige una opción
                              </option>
                              <option value="Asistencia">Asistencia</option>
                              <option value="Inasistencia">Inasistencia</option>
                            </select>
                          </div>
                        </td>

                        <td className="nota">
                          <div className="d-flex justify-content-center align-items-center">
                            <input
                              type="text"
                              pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,40}"
                              className="form-control"
                              name={`nota-${candidatoEstudiante.candidatoEstudianteId}`}
                              id={`nota-${candidatoEstudiante.candidatoEstudianteId}`}
                              maxLength="40"
                              value={notas[candidatoEstudiante.candidatoEstudianteId] || ''}
                              onChange={(e) =>
                                setNotas({
                                  ...notas,
                                  [candidatoEstudiante.candidatoEstudianteId]: e.target.value,
                                })
                              }
                            />
                          </div>
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              if (editandoNota) {
                                console.log(
                                  'Guardar asistencia existente:',
                                  asistencias[candidatoEstudiante.candidatoEstudianteId]
                                );
                                console.log(
                                  'Guardar nota existente:',
                                  notas[candidatoEstudiante.candidatoEstudianteId]
                                );
                              } else {
                                console.log(
                                  'Guardar nueva asistencia:',
                                  asistencias[candidatoEstudiante.candidatoEstudianteId]
                                );
                                console.log(
                                  'Guardar nueva nota:',
                                  notas[candidatoEstudiante.candidatoEstudianteId]
                                );
                              }
                              setAsistencias({
                                ...asistencias,
                                [candidatoEstudiante.candidatoEstudianteId]: '',
                              });
                              setNotas({
                                ...notas,
                                [candidatoEstudiante.candidatoEstudianteId]: '',
                              });
                              setEditandoNota(false);
                            }}
                            className="btn btn-success"
                            type="button"
                          >
                            Guardar
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>

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
                    <span className="input-group-text">
                      <i className="fa-solid fa-comment"></i>
                    </span>
                    <input
                      type="text"
                      id="Nombre"
                      className="form-control"
                      placeholder="NOMBRE"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i className="fa-solid fa-comment"></i>
                    </span>
                    <input
                      type="text"
                      id="Apellido"
                      className="form-control"
                      placeholder="APELLIDO"
                      value={apellido}
                      onChange={(e) => setApellido(e.target.value)}
                    />
                  </div>
                  {operation === 1 && (
                    <div className="input-group mb-3">
                      <span className="input-group-text">
                        <i className="fa-solid fa-calendar-check"></i>
                      </span>
                      <input
                        type="text"
                        id="Asistencia"
                        className="form-control"
                        placeholder="ASISTENCIA"
                        value={asistencia}
                        onChange={(e) => setAsistencia(e.target.value)}
                      />
                    </div>
                  )}
                  {operation === 2 && (
                    <div className="input-group mb-3">
                      <span className="input-group-text">
                        <i className="fa-solid fa-calendar-check"></i>
                      </span>
                      <input
                        type="text"
                        id="Asistencia"
                        className="form-control"
                        placeholder="ASISTENCIA"
                        value={asistencia}
                        onChange={(e) => setAsistencia(e.target.value)}
                      />
                    </div>
                  )}
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i className="fa-solid fa-clipboard"></i>
                    </span>
                    <input
                      type="text"
                      id="Nota"
                      className="form-control"
                      placeholder="NOTA"
                      value={notas[candidatoEstudianteId] || ''}
                      onChange={(e) => setNotas({ ...notas, [candidatoEstudianteId]: e.target.value })}
                    />
                  </div>
                  <div className="d-grid col-6 mx-auto">
                    <div className="d-flex justify-content-center align-items-center h-100">
                      <button onClick={() => validar()} className="btn btn-success">
                        Guardar
                      </button>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <div className="d-flex justify-content-center align-items-center h-100">
                    <button
                      type="button"
                      id="btnCerrar"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}
