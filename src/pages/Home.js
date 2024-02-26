import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Docente() {
	const [selectedOption, setSelectedOption] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
  
	const handleLogin = (e) => {
		
	  e.preventDefault();
	  if (selectedOption && username && password) {
		// Simulación de verificación de inicio de sesión
		if (selectedOption === 'estudiante' && username === 'YeisonGualteros' && password === 'yeison123') {
		  // Redirigir al usuario a la página de cliente
		  navigate('/estudiante');
		} else if (selectedOption === 'administrador' && username === 'aa' && password === 'axl123') {
		  // Redirigir al usuario a la página de administrador
		  navigate('/Secretaria');
		}else if (selectedOption === 'docente' && username === 'JuanNovoa' && password === 'juan123') {
			// Redirigir al usuario a la página de administrado
			navigate('/docente');
		}  else {
		  alert('Credenciales incorrectas');
		}
	  } else {
		alert('Por favor, selecciona un tipo de usuario, proporciona un nombre de usuario y una contraseña');
	  }
	};
  
	const handleSelectChange = (e) => {
	  setSelectedOption(e.target.value);
	};
  
	const handleUsernameChange = (e) => {
	  setUsername(e.target.value);
	};
  
	const handlePasswordChange = (e) => {
	  setPassword(e.target.value);
	};
  
	return (
		<React.Fragment>
		<div className="Fondo">
	<div className="login-content">
		<nav>
			<ul>				
				<li>
					<p className="text-center">
						<i className="fas fa-user-circle fa-5x"></i>
					</p>	
				</li>
					<ul>
						<li>
							<p className="text-center">
								Inicia sesión
								
							</p>
							<form onSubmit={handleLogin}>
								<div className="form-group">
									<label htmlFor="UserName" className="bmd-label-floating"><i className="fas fa-user-tie"></i> &nbsp; Usuario</label>
									<input type="text" className="form-control" id="UserName" name="usuario" pattern="[a-zA-Z0-9]{1,35}" maxLength="35" value={username} onChange={handleUsernameChange}/>
								</div>
								<div className="form-group">
									<label htmlFor="UserPassword" className="bmd-label-floating"><i className="fas fa-keyy"></i> &nbsp; Contraseña</label>
									<input type="password" className="form-control" id="UserPassword" name="clave" maxLength="200" value={password} onChange={handlePasswordChange}/>
								</div>
								<div className="form-group">
									<label htmlFor="UserPassword" className="bmd-label-floating"> &nbsp; </label>
									<select className="form-select" aria-label="Default select example" value={selectedOption} onChange={handleSelectChange}>
										<option selected>Seleccione el Usuario</option>
										<option value="estudiante">Estudiante</option>
										<option value="docente">Docente</option>
										<option value="administrador">Administrativo</option>
									</select>
								</div>
								<div className="form-group">
									<a >
										<label htmlFor="UserPassword" className="bmd-label-floating"><i className=""></i> &nbsp; ¿olvidaste la contraseña?</label>
									</a>
									
								</div>
								<br />
								<button type="submit">Iniciar Sesión</button>					
							</form>
						</li>	
					</ul>
			</ul>				
		</nav>			
	</div>
	
</div>

            </React.Fragment>
        
    )
}