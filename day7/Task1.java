class A {
    String name ;
    A(String name){
        this.name = name;
    }

    void printA(){
        System.out.println("A" );
    }
}

class B extends A {
    int age ;
    B(String name , int age){
        super(name);
        this.age =age;
    }
    void printB(){
        System.out.println("B " );
    }
}


class C extends B{
    C(String name, int age ){
        super(name,age);
    }
    void printC(){
        System.out.println("C " );
    }
}


public class Task1 {
    public static void main(String[] args) {
    
    C temp = new C("yash",19);
    System.out.println(temp.age);
    System.out.println(temp.name);
    temp.printA();
    temp.printB();
    temp.printC();
    }
    
}
