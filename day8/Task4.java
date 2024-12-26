package day8;

import java.util.*;


public class Task4 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("enter number : ");
        int temp  = sc.nextInt();

        // repeat() i use this witch is included in Java 11
        for (int i = 0; i < temp; i++) {
            if(i==0) {System.out.println("*");}
            else if (i==temp-1) {System.out.println("*".repeat(temp+1));}
            else {System.out.println("*" +" ".repeat(i) + "*" );}
        }


    }    
}
