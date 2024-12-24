interface Test1 {

    // int a ; //info: this give error
    int temp = 10; // info: this convert into public static final int

    double A(); // info: public abstract double
}

interface Test2 {

    // int a ; //info: this give error
    int temp = 10; // info: this convert into public static final int

    double B(); // info: public abstract double
}

class Temp3 {
    String name;

    Temp3(String name) {
        this.name = name;
    }

}



class Temp4 extends Temp3 implements Test1, Test2 {

    Temp4(String name) {
        super(name);
    }

    public double A() {
        return 1.1;
    }

    public double B() {
        return 0.111;
    }

}

public class Task6 {
    public static void main(String[] args) {
        Temp4 temp = new Temp4("yash");
        System.out.println(temp.A());
        System.out.println(temp.B());
    }
}
