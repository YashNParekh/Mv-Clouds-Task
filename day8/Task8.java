package day8;
import java.util.*;

public class Task8 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int temp = sc.nextInt();
        for (int i = 1; i <=temp; i++) {
            if(i==1 || i==temp) {System.out.println(" ".repeat(temp-i) +"* ".repeat(i));}
            else {System.out.println(" ".repeat(temp-i)+"*"+" ".repeat((i*2)-3)+"*");}
            
        }

    }
}
