# e-commerce

TODO:

- [x] Crear un contexto que pueda proveer la función manageError del hook useErrorHandler para que toda la aplicación maneje una sola instancia y no se creen multiples redirecciones.

- [ ] Mejorar la persistencia del token de autenticación utilizando cookies con fecha de expiración para evitar solicitarlo cada vez que se actualice la página.

### Bugs

- [x] Cuando se cancela una solicitud (abortController.abort) el manejador de errores lo interpreta como error de la aplicacon y envía al usuario a la vista de error. Excluir la cancelación de solicitudes de los errores críticos.
- [ ] Manejar los errores comunes en el contexto del manejador de errores.
