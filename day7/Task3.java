public class Task3 {
    
    static Boolean checkOdd(int[] temp){
        for (int i : temp) {
            if (i%2==0) return false ;
        }
        return true;
    }
    
    public static void main(String[] args) {
        int[] a = {1,2,3,4,5};
        int[] b = {1,3,5,7,9};
        System.out.println("a is odd " + checkOdd(a));
        System.out.println("b is odd " + checkOdd(b));
        
    }


}
