<?php
$serverName = "localhost\\SQLEXPRESS";
$connectionOptions = array(
    "Database" => "Contactos",
    "Uid" => "HP\SQLEXPRESS",
    "PWD" => "Ligadequito"
);

// Conectar a SQL Server
$conn = sqlsrv_connect($serverName, $connectionOptions);

if ($conn === false) {
    die(print_r(sqlsrv_errors(), true));
}

// Obtener datos del formulario
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

// Insertar en la base de datos
$sql = "INSERT INTO Contactos (Nombre, Email, Mensaje) VALUES (?, ?, ?)";
$params = array($nombre, $email, $mensaje);
$stmt = sqlsrv_query($conn, $sql, $params);

if ($stmt) {
    echo "Mensaje enviado correctamente.";
} else {
    echo "Error al enviar mensaje.";
}

// Cerrar conexión
sqlsrv_close($conn);
?>
