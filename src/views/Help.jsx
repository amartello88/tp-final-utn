import { Link } from "react-router-dom"
import '../views/Help.css'


import React from 'react';

const Help = () => {
    return (
        <div style={{ 
            padding: '20px', 
            maxWidth: '850px', 
            margin: '20px auto', 
            fontFamily: 'Arial, sans-serif',
            lineHeight: '1.6',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}>
            <h1>Documentación y Guía de Usuario</h1>
            <p>
                Esta página ofrece información detallada sobre el funcionamiento de la aplicación de chat, las tecnologías detrás de ella y el plan de desarrollo futuro.
            </p>
            
            <hr style={{ margin: '20px 0' }}/>

            <section>
                <h2>1. Funcionamiento General del Chat</h2>
                <p>
                    El propósito de esta aplicación es facilitar la **comunicación instantánea** y fluida entre usuarios.
                </p>
                <ul style={{ paddingLeft: '20px' }}>
                    <li>
                        <strong>Comunicación en Tiempo Real:</strong> El chat se actualiza al instante, mostrando los mensajes tan pronto como son enviados.
                    </li>
                    <li>
                        <strong>Envío y Recepción:</strong> Se realiza a través de un simple formulario de texto y la lógica de la aplicación se encarga de distribuirlo.
                    </li>
                    <li>
                        <strong>Persistencia:</strong> El historial de conversaciones se almacena y carga para que los usuarios no pierdan el contexto al ingresar gracias a la persistencia de datos en el Local Storage.
                    </li>
                </ul>
            </section>

            <hr style={{ margin: '20px 0' }}/>

            <section>
                <h2>2. Tecnología Utilizada</h2>
      
                <ul style={{ paddingLeft: '20px' }}>
                    <li>
                        
              En este proyecto se utilizó React como biblioteca principal para el desarrollo de la interfaz. Gracias a su enfoque basado en componentes, permitió crear una estructura modular, dinámica y fácil de mantener.
              Para los estilos, se aplicó CSS de manera personalizada, logrando un diseño visual coherente, adaptable y agradable para el usuario.
                    </li>
                </ul>
            </section>

        <hr style={{ margin: '20px 0' }} />
        <section>
  <h2>3. Posibles Mejoras Futuras</h2>
  
  <ul style={{ paddingLeft: '20px' }}>
    <li>
      <strong>Chats grupales:</strong> Incorporar la posibilidad de crear grupos de conversación,
      permitiendo la interacción entre varios usuarios en un mismo chat.
    </li>
    <li>
      <strong>Funciones adicionales:</strong> Integrar el envío de archivos multimedia, la utilización de emojis
      y un indicador de “escribiendo...” para mejorar la experiencia de usuario.
    </li>
    <li>
      <strong>Notificaciones en tiempo real:</strong> Agregar alertas visuales o sonoras cuando se recibe un nuevo mensaje.
    </li>
    <li>
      <strong>Temas personalizables:</strong> Incluir la opción de cambiar colores o fondos del chat
      para una experiencia más personalizada.
    </li>
  </ul>
</section>

        </div>
    );
};



export default Help
