

/* Implement an algorithm to determine if a string has all unique characters. 
What if you cannot use additional data structures? */

public class UniqueChar {
    
    // always added for testing the solution
    public static void main (String[] args) {
        
        System.out.println("I am unique :" + isUniqueChars("I am unique")); / // two u's - false
        System.out.println("I am uniqe :" + isUniqueChars("I am uniqe")); // counts spaces - false
        System.out.println("uniqe :" + isUniqueChars("uniqe")); // true
    }
    
    
    /* The time complexity for this code is 0(n), where n is the length of the string. 
    The space complexity is 0(1).*/ 
    
    public static boolean isUniqueChars(String str) {
        
        if (str.length() > 256) return false; 
        
        boolean[] char_set = new boolean[256];
        for (int i = 0; i < str.length(); i++) {
            int val = str.charAt(i);
            if (char_set[val]) {
                return false;
            }
            
            char_set[val] = true;
        }
      return true;
        
    }

}