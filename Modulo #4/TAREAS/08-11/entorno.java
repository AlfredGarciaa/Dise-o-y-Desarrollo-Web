// Resultados correctos, ejecutar con F5 o click derecho en el archivo en Run Code

//Imprime en consola o terminal la variable 'false' ya que sobreescribe a 'test'
public class entorno {
    public static void main(String[] args) {
        String miVariable3 = "test";
        miVariable3 = "false";
        System.out.println(miVariable3);
    }
}
