package prog.unidad04.practica406.libreria;

public class Automovil extends Vehiculo{
  
  private static final String COLOR_AZUL = "azul";
  private static final String COLOR_BLANCO = "blanco";
  private static final String COLOR_NEGRO = "negro";

  private String color;
  private int plazas;
  
  public Automovil(String matricula, Fecha fechaMatriculacion, String color, int plazas) {
    super(matricula, fechaMatriculacion);
    if (color == COLOR_AZUL || color == COLOR_BLANCO || color == COLOR_NEGRO) {
      this.color = color;
    } else {
      throw new IllegalArgumentException("Error al introducir el color");
    }
    if (plazas >= 1) {
      this.plazas = plazas;
    } else {
      throw new IllegalArgumentException("Error al introducir las plazas");
    }
  }
  
  public String getColor() {
    return color;
  }
  
  public String getDistintivo() {
    
  }
  
  public int getPlazas() {
    return plazas;
  }
  
  public String toString() {
    return "Matricula: " + matricula + ", Fecha Matriculacion: " + fechaMatriculacion + ", color: " + color + ", Num. Plazas: " + plazas;
  }
  
  
}
