package day8;
import java.util.*;


public class Task12 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String temp = sc.nextLine().replace("  "," ");
        String temp1 = "";
        for (String string : temp.split(" ")) {
            temp1 = string+ " "+ temp1;
        }
        System.out.println(temp1);
        
    }
}
