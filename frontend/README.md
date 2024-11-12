PROYECTO FINAL Y MEDICIÓN DEL APRENDIZAJE

DESCRIPCIÓN DE LA ACTIVIDAD.
Realizar el análisis, modelado y desarrollo de un sistema que simule un
Sistema de gestión hospitalaria.

INSTRUCCIONES.
Desarrollar el análisis, modelado UML y desarrollo para un sistema de gestión hospitalaria que
administre las citas médicas, el historial clínico de pacientes y genere reportes médicos. El
sistema debe manejar diferentes tipos de usuarios, donde cada uno tendrá funciones específicas.
Cuando un paciente llega al hospital puede ser para agendar una cita o para ser atendido por una
emergencia. A continuación se describen ambos casos:
 Agendar cita
En el caso de que el paciente desee agendar una cita, la recepcionista general le pedirá
sus datos (nombre, edad, teléfono, nombre del médico y fecha en la que desea la cita) y
si es necesario, podrá asignar el consultorio donde el paciente será atendido, una vez que
los datos estén completos, la cita quedará agendada. Un día antes de la fecha prevista
para la cita, la recepcionista se comunicará por teléfono con el paciente para confirmar su
asistencia. Si el paciente desea realizar un cambio de fecha u hora, la recepcionista podrá
ingresar al sistema y realizar los ajustes necesarios. Por otra parte, si el paciente no podrá
acudir a su cita, esta deberá cancelarse (eliminarse del sistema).
 Atención por emergencia
Cuando un paciente llega al hospital para ser atendido de emergencia, la recepcionista
general debe registrar el ingreso por emergencia en el sistema con los datos del paciente
(nombre, edad y razón de ingreso), si el estado del paciente no es crítico, se asignará un
consultorio , en caso contrario, el paciente es atendido directamente en la sala de
emergencias (no se asigna un consultorio).
Cuando un paciente llega a su cita médica (previamente agendada), pasa con la recepcionista
personal del médico. Ella se encarga de registrar al paciente con su nombre, edad, teléfono, razón
de visita y el sistema le asigna un número único de identificación. Este registro puede ser
modificado en cualquier momento. Cuando el paciente ingresa al consultorio y es la primera vez
que acude a una cita, el médico crea su expediente en el sistema, ingresa el número único de
identificación del paciente (creado al momento de su registro) y describe su historial clínico
(diagnósticos anteriores, padecimiento y tratamientos actuales, historia clínica familiar). De esta
manera, cada que el paciente regrese a una cita, el médico podrá consultar o actualizar su
historial. Al finalizar la cita, si el paciente necesita medicamento, el médico realiza la receta en el
sistema ingresando el número único de identificación del paciente, nombre de los medicamentos
y especificaciones.
En cualquier momento, el médico puede solicitar a su recepcionista personal un listado de todos
sus pacientes, mismo que la recepcionista puede generar desde el sistema.
De ser necesario, una recepcionista personal podrá realizar en el sistema las mismas funciones
que una recepcionista general.
El sistema debe ser fácil de usar y tener una interfaz amigable. Además, por manejar datos
confidenciales de los pacientes, cada usuario debe tener un nombre de usuario y contraseña
únicos que les permitirá realizar sus funciones en el sistema.
