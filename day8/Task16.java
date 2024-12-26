package day8;

import java.util.*;

public class Task16 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int first = sc.nextInt();
        if (first > 6 || first < 1) {
            System.out.println("enter input's are not valid ");
        } else {
            int second = sc.nextInt();
            if (second < first || first * 6 < second) {
                System.out.println("enter input's are not valid ");
            } else {
                int count = 0;
                for (int i = 1; i <= 6; i++) {
                    if (first > 1) {
                        for (int j = 1; j <=6; j++) {
                            if (first > 2) {
                                for (int j2 = 1; j2 <=6; j2++) {
                                    if (first > 3) {
                                        for (int k = 1; k <=6; k++) {
                                            if (first > 4) {
                                                for (int k2 = 1; k2 <=6; k2++) {
                                                    if(first>5){
                                                    for (int l = 1; l <=6; l++) {
                                                        if (i + j + j2 +k+k2+l == second) {
                                                            count++;
                                                        }
                                                    }
                                                }else{
                                                    if (i + j + j2 +k +k2 == second) {
                                                        count++;
                                                    }
                                                }
                                                }
                                            } else {
                                                if (i + j + j2 + k == second) {
                                                    count++;
                                                }
                                            }
                                        }
                                    } else {
                                        if (i + j + j2 == second) {
                                            count++;
                                        }
                                    }
                                }
                            } else {
                                if (i + j == second) {
                                    count++;
                                }
                            }
                        }
                    } else {
                        if (i == second) {
                            count++;
                        }
                    }
                }

                System.out.println(count);
            }

        }

        sc.close();

    }

}
