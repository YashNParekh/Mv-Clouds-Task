package day8;

import java.util.*;

public class Task13 {

    static int fac(int n) {
        if (n < 0)
            return 0;
        if (n == 1)
            return 1;
        return n * fac(n - 1);
    }

    static int permutation(int n, int r) {
        try {
            return fac(n) / fac(n - r);
        } catch (Exception e) {
            System.out.println("error ");
        }
        return 0;
    }

    static int combination(int n, int r) {
        try {
            return fac(n) / (fac(r) * fac(n - r));
        } catch (Exception e) {
            System.out.println("error ");
        }
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("enter first number ");
        int r = sc.nextInt();

        System.out.println("enter second number ");
        int n = sc.nextInt();
        
        System.out.println("permutation of " + n + "P" + r + " : " + permutation(n, r));
        System.out.println("combination of " + n + "C" + r + " : " + combination(n, r));

    }

}
