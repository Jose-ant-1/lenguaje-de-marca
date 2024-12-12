package prog.unidad04.practica406.principal;

import prog.unidad04.practica406.libreria.Vehiculo;
import prog.unidad04.practica406.libreria.Automovil;
import prog.unidad04.practica406.libreria.Motocicleta;

public class VehiculosApp {

  public static void main(String[] args) {
    System.out.println("PRÁCTICA DE JOSÉ ANTONIO GONZALEZ SOLANO. GESTIÓN DE VEHÍCULOS");
    
    //System.out.printf("Introduce la matrículoa del automóvil (4 númeors, 0 o más espacios y tres letras mayúsculas): ");
    
   // System.out.printf("Introduce el día de la fecha de matriculación del automóvil: ");
    
   // System.out.printf("Introduce el mes de la fecha de matriculación del automóvil: ");
    
   // System.out.printf("Introduce el año de la fecha de matriculación del automóvil: ");

   // System.out.printf("Introduce el color del automóvil (blanco, negro o azul): ");
    
  //  System.out.printf("Introduce el número de plazas del vehículo (1 o mas): ");
  
   // System.out.printf("Introduce la matrícula de la motocicleta (4 números, 0 o mas espacios y tres letras mayúsculas): ");
  
  //  System.out.printf("Introduzca el día de la fecha de matriculación de la motocicleta: ");
  
   // System.out.printf("Introduzca el mes de la fecha de matriculación de la motocicleta: ");

   // System.out.printf("Introduzca el año de la fecha de matriculación de la motocicleta: ");

    Vehiculo moto = new Motocicleta("1234ABC", null, 40);
    System.out.println(moto);
  }

}
