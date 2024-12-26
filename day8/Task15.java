package day8;
import java.util.*;


public class Task15 {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        int temp = sc.nextInt();
        int len = ("" +temp).length();
        String[] temp1 = (""+temp).split("");
        int sum = 0;
        for (String c : temp1) {
            try {
                int tm = Integer.parseInt(c) ;                
                sum+= Math.pow(tm,len);
            } catch (Exception e) {
                System.out.println("error");
            }
        }
        System.out.println(sum);
        if(sum==temp) System.out.println( temp+" is a ArmStrong  number");
        else System.out.println( temp+" is not a ArmStrong  number");


        
        
    }
    
    
}
