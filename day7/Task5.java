import java.util.*;

public class Task5 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String temp1 = "" +sc.nextDouble();
        int index =temp1.indexOf(".");
        temp1 = temp1.replace(".", "");
        String temp2 = "";
        for(int i= temp1.length()-1;i>=0;i--,index--){
            if (index==0){
                temp2 +="."+ temp1.charAt(i);
            }
            else temp2 +=temp1.charAt(i);
        }
        System.out.println(temp2);

    }
}
