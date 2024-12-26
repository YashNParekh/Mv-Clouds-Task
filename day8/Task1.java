package day8;
import java.util.*;

public class Task1 {
    public static void main(String[] args) {
        Scanner  sc = new Scanner(System.in);
        String tmep = sc.nextLine();
        System.out.println(removeWhiteSpace(tmep));
    }

    static String removeWhiteSpace(String tmep){
        String newString = "";
        for (int i = 0; i < tmep.length(); i++) {
            if(tmep.charAt(i)==' '){
                if(newString.charAt(newString.length()-1)!=' ') newString += ' ';
            }
            else newString+=tmep.charAt(i);
        }
        return newString;
    }
    
}


