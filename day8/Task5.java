package day8;

import java.util.*;


public class Task5 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("enter number  odd Number and > 5 : ");
        int temp  = sc.nextInt();

        if (temp%2==0 || temp<5){ System.out.println("number is not odd or not >5 ");}
        // repeat() i use this witch is included in Java 11
        else {
        for (int i = 0; i < temp-1; i++) {
            if (i==0) { System.out.println("* " +"  ".repeat(temp-2)+"* ".repeat(temp));}
            else {System.out.println("* "+"  ".repeat(temp-2)+"* " );}
        }
        System.out.println("* ".repeat((temp*2)-1));
        for (int i = 0; i < temp-1; i++) {
            if (i!=temp-2) { System.out.println("  ".repeat(temp-1)+"* " +"  ".repeat(temp-2) +"* ");}
            else {System.out.println("* ".repeat(temp)+"  ".repeat(temp-2) +"* " );}
            }
        }
    }    
}
