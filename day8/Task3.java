package day8;
import java.util.*;;
public class Task3 {
    public static void main(String[] args) {
        Scanner sc  = new Scanner(System.in);
        int[] tmep = {98,32,72,94,75,73,92,36,28,34};
        Arrays.sort(tmep);
        System.out.println("Second biggest :  " + tmep[tmep.length-2]  );
    }
}
