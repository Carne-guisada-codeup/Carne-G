//public class SumOfTwoNumbers {
//    public static int sum(int a, int b) {
//        return a + b;
//    }
//}



//Valid zip code
//Zip codes consist of 5 consecutive digits. Given a string, write a function to determine whether the input is a valid zip code. A valid zip code is as follows:
//
//Must only contain numbers (no non-digits allowed).
//Must not contain any spaces.
//Must not be greater than 5 digits in length.
public class Challenge {
    public static boolean isValid(String zip) {
//        String zipNoSpaces = zip.trim();
//        boolean atleastOneAlpha = zip.matches(".*[a-zA-Z].*");
//        int zipLength = zip.length();
//        if(atleastOneAlpha){
//            return false;
//        } else if (zipLength != 5){
//            return false;
//        } else if(!zip.equals(zipNoSpaces)){
//            return false;
//        } else if(!zip.equals(zipNoSpaces) && zipLength != 5){
//            return false;
//        } else {
//            return true;
//        }

//        //solution 1
//        return zip.matches("[0-9]{5}");

//        //solution 2
//        return Pattern.matches("[0-9][0-9][0-9][0-9][0-9]", zip);
//        //solution 3
//        String regex = "\\d{5}";
//        if(zip.matches(regex)){
//            return true;
//        }
//        return false;
//        }
    }
}