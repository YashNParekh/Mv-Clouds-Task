public class test {

    public static void main(String[] args) {

        int n = 4;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print((i * (i - 1)) / 2 + j + " ");
            }
            System.out.println();
        }

    }
}