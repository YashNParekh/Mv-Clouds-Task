package day8;
import java.util.*;

public class Task11 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int temp = sc.nextInt();
        for (int i = 0; i <temp; i++) {
            if(i==0 ) {System.out.println(" ".repeat(temp-i+1) +"* ".repeat(i+1));}
            else {System.out.println(" ".repeat(temp-i+1) +("*"+i).repeat(i)+"*");}
        }
        for (int i = temp-2; i >=0; i--) {
            if(i==0 ) {System.out.println(" ".repeat(temp-i+1) +"* ".repeat(i+1));}
            else {System.out.println(" ".repeat(temp-i+1) +("*"+i).repeat(i)+"*");}
        }
    }
}
