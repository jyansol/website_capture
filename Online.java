// public class Online{

  // public static void main(String[] args){
  //   //이름,점수를 배열
  //   String[] names = {"Elena", "John", "Kate"};
  //   int[] score = {82, 90, 88};
  //
  //   for (int i = 0; i < names.length; i++)
  //     System.out.printf()
  // }

/*구구단*/
// public class Online{
//   public static void main(String[] args) {
//       for(int i=1; i<=9; i++){
//         System.out.println();
//         System.out.println(i + "단");
//         for(int j=1; j<=9; j++){
//           System.out.println(i + " * " + j + " = " + i * j);
//         }
//       }
//   }
// }



public class Online {
    public static void main(String[] args) {
      /*삼각형 별찍기*/
      // for (int i = 0; i < 5; i++) {
      //   System.out.printf();
      //     for (int j = 0; j < i + 1; j++) {
      //         System.out.printf("*");
      //     }
      // }

      /*삼각형 별 거꾸로 찍기*/
      for (int i = 1; i < 6; i++) {
        //왜 안됨
        //System.out.printf();
        System.out.println();
          for(int j = 1; j < 6; j++){
            if(i<j){
              System.out.printf();
            }else{
              System.out.printf("*");
            }
          }
      }
    }
}
