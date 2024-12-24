public class Task7 {
    public static void main(String[] args) {

        StringBuffer temp = new StringBuffer();

        //  replace 
        temp.append("hello there, how are you");
        temp.replace(0, temp.length(), "");

        //delete 
        temp.append("hello there, how are you");
        temp.delete(0, temp.length());

        // setLength
        temp.append("hello there, how are you");
        temp.setLength(0);

        // removeChar
        temp.append("hello there, how are you");
        while (temp.length()!=0) {
            temp.deleteCharAt(0);
        }
        
        System.out.println(temp);
        


    }
}
