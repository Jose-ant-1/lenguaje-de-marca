package prog.unidad04.practica406.libreria;

public class Motocicleta extends Vehiculo{

  private int cilindrada;
  private String matricula;
  
  public Motocicleta(String matricula, Fecha fechaMatriculacion, int cilindrada) {
    super(matricula, fechaMatriculacion);
    if (cilindrada >= 50) {
      this.cilindrada = cilindrada;
    } else {
      throw new IllegalArgumentException("Error al introducir la cilindrada");
    }
  }
  
  public int getCilindrada() {
    return cilindrada;
  }
  
  public String getDistintivo() {
    return matricula;
  }
  
  public String toString() {
    return "Matricula: " + matricula + ", Fecha Matriculacion: " + fechaMatriculacion + ", cilindrada: " + cilindrada;
  }
  
  
  
}
