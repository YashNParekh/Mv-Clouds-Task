package day8;
import java.util.*;

public class Task7 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int temp = sc.nextInt();
        for (int i = 0; i <temp*temp; i++) {
            if(i%(temp+1)==0) {System.out.println(" ".repeat(temp)+"*".repeat(temp) );}
            else {System.out.println(" ".repeat(temp-1)+"*" +" ".repeat(temp)+"*");}
        }

    }
}
