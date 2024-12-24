import java.util.*;;

public class Task8 {

    static String encrypt(String data){
        String newData ="";
        for (char char1 : data.toCharArray()) {
            int temp = char1;
            char temp1 =  (char) (temp+7);
            newData +=  temp1;
        }
        return newData;
    }
    static String decrypt(String data){
        String newData ="";
        for (char char1 : data.toCharArray()) {
            int temp = char1;
            char temp1 =  (char) (temp-7);
            newData +=  temp1;
        }
        return newData;
    }
    
    
    
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        String data = sc.nextLine();
        String enc = encrypt(data);

        System.out.println("data : "+data);
        System.out.println( "encrypted data : " + enc);
        System.out.println("decrypted data : " + decrypt(enc));
        

    }
}
