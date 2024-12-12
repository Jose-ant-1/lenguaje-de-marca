package prog.unidad04.practica406.libreria;

public class Vehiculo {

  protected String matricula;
  protected Fecha fechaMatriculacion;
  
  private static int vehiculosMatriculados;
  
  protected Vehiculo(String matricula, Fecha fechaMatriculacion) {
    this.matricula = matricula;
    this.fechaMatriculacion = fechaMatriculacion;
  }
  
  
  
  protected String getMatricula() {
    return matricula;
  }
  
  public Fecha getFechaMatriculacion() {
    return fechaMatriculacion;
  }
  
  public static int getVehiculosMatriculados() {
    return vehiculosMatriculados;
  }
  
  public String toString() {
    return "Matricula: " + matricula + ", Fecha Matriculacion: " + fechaMatriculacion;
  }
  
  
}
