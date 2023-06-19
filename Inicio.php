<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio</title>
</head>
<body>
    <h1>Datos Opetenidos</h1>
    <table border="1">
            <tr>
                <th>Usuario</th>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Email</th>
            </tr>
            <?php
                $USER = $_GET['username'];
                $NOMBRE = $_GET['nombre'];
                $APELLIDO = $_GET['Apellido'];
                $Emai = $_GET['email'];

             $concat = '';
             echo  '<tr>';
             echo'<td>' .$USER.'</td>';
             echo'<td>' .$NOMBRE.'</td>';
             echo '<td>' .$APELLIDO.'</td>';
             echo '<td>' .$Emai.'</td>';
             echo '</tr>';
            ?>
        </table>
</body>
</html>
