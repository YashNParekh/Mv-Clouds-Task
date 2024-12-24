import java.util.*;
public class Task4 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.println("Enter a String : ");
        String[] inp = sc.nextLine().split(" ");
        System.out.println("Enter a Number : ");
        int temp = sc.nextInt() -1;
        
        if(temp<inp.length && temp>0) System.out.println("output : " + inp[temp] );
        else System.out.println("index is not matched");
        
        }
}
