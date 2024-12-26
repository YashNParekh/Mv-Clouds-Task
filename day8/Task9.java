package day8;

import java.util.*;

public class Task9 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int temp = sc.nextInt();
        System.out.println();
        System.out.println();

        
        for (int i = 1; i <= temp; i++) {
            if (i == temp) {
                System.out.println(
                        "*" + "  ".repeat((temp * 2) - temp - 1) + "*" + "  ".repeat((temp * 2) - temp-1 ) + "*");
            } else if (i == 1) {
                System.out.println("*" + "  ".repeat(temp * 2 - 2)+" " + "*");
            } else {
                System.out.println("*" + "  ".repeat(i - 1) + "* " + "  ".repeat((temp * 2) - (i * 2)-1) + "*"
                        + "  ".repeat(i - 1) + "*");
            }
        } 
        for (int i = temp-1; i > 0; i--) {
            if (i == temp) {
                System.out.println(
                        "*" + "  ".repeat((temp * 2) - temp - 1) + "*" + "  ".repeat((temp * 2) - temp-1 ) + "*");
            } else if (i == 1) {
                System.out.println("*" + "  ".repeat(temp * 2 - 2)+" " + "*");
            } else {
                System.out.println("*" + "  ".repeat(i - 1) + "* " + "  ".repeat((temp * 2) - (i * 2)-1) + "*"
                        + "  ".repeat(i - 1) + "*");
            }
        }

    }
}
